// import { Injectable } from '@angular/core';
// import {Network} from '@ionic-native/network/ngx';
// import {Dialogs} from '@ionic-native/dialogs/ngx';
// import { LoadingController } from '@ionic/angular';
// import { Router } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class NetworkService {

//    nework : any;
//   constructor(private network : Network,private dialog : Dialogs,private loading :  LoadingController,private route: Router) { 


//   }


//   checkDisconect(){
//     this.network.onDisconnect().subscribe(()=>{
//       this.nework = this.network;
//     })
//   }

//  checkConnect(){
//     this.network.onConnect().subscribe(()=>{
//       this.nework = this.network;
//     });
    
//   }


//  async checkInternet(){
//   const loading =  await this.loading.create({
//     message : "Check conncetion ...",
//     spinner: "circles",
//     backdropDismiss: true,
//     duration:2000


//   });
//    this.checkConnect();
//    this.checkDisconect();
//     loading.present();
//     console.log(this.nework);
//     if(this.nework === undefined){
//         this.route.navigateByUrl('net-work-page');
//     }else{
//       this.route.navigateByUrl('home');
//     }
//     loading.dismiss;
    

//   }
// }

import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';

export enum ConnectionStatus {
  Offline,
  Online
}

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);

  constructor(private network: Network, private toastController: ToastController, private plt: Platform) {
    this.plt.ready().then(() => {
      this.initializeNetworkEvents();
      const status = this.network.type !== null ? ConnectionStatus.Online : ConnectionStatus.Offline;
      this.status.next(status);


    });
  }
  /**
   * Fonction permettant de verifier si on est connecté ou pas
   */
  public initializeNetworkEvents() {

    this.network.onDisconnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Online) {
        console.log('on est en mode offline');
        
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });

    this.network.onConnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Offline) {
        console.log('on est en mode online');
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }
  /**
   * Fonction permettant de mettre a jour le status
   * Si on est deconnecté et qu'il se connecte, il affiche connecté 
   * @param status 
   */
  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);

    const connection = status == ConnectionStatus.Offline ? 'déconnecté' : 'connecté';
    const toast = this.toastController.create({
      message: `vous êtes maintenant ${connection}`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(toast => toast.present());
  }
  /**
   * Cheikh dit pas de commentaires
   */
  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }
  /**
   * Retourne le status actuel de la connections 
   */
  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }
}

