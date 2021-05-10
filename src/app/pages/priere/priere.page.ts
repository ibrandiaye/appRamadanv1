import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';
import {
  NetworkService,
  ConnectionStatus,
} from "../../service/network.service";

@Component({
  selector: 'app-priere',
  templateUrl: './priere.page.html',
  styleUrls: ['./priere.page.scss'],
})
export class PrierePage implements OnInit {
  city :string;
  position : any ;
  priere : any = {asr: "",fajr:"",dohr : "",chorouq:"",maghreb:"",icha:""};
  showSun : number = 0;
  time : number ;
  defaultImage = '../../../assets/img/maghreb.png';
  imge = '../../../assets/img/fajr.png';
  constructor(private storage : Storage,private api : ApiService,private route : Router,private loading : LoadingController,private alert : AlertController, private networkService:NetworkService) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    if(this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline){
      this.presentAlert("Pobléme d'Internet !","Verifier votre connexion svp!")
    }else{
        const loading  = await this.loading.create({
          message : "Patienter un instant !",
          spinner : 'circles'
        });

         loading.present();
       this.storage.get('city').then(res=>{
             this.city = res;
       });

       this.storage.get('position').then(res=>{
       
                 this.api.getPriereData(res).then(rs=>{

                  let alldata = JSON.parse(rs.data);
                 
                  alldata = alldata.results.datetime[0].times;
                  if(alldata)
                  {
                    this.priere.asr = alldata.Asr;
                    this.priere.fajr = alldata.Fajr;
                    this.priere.dohr = alldata.Dhuhr;
                    this.priere.chorouq = alldata.Sunrise;
                    this.priere.maghreb = alldata.Maghrib;
                    this.priere.icha = alldata.Isha;
                    loading.dismiss();
                  }
                 
                 });



       });
      
       this.showDate();
      }
 
  }

  refresh(){
    
    setTimeout(()=>{
         this.showDate();
    },1000)
}

async presentAlert(header,message){
  const alert = this.alert.create({
    header : header,
    message : message,
    backdropDismiss : false,
    buttons : [
         {
            text:"Fermer",
            role: "cancel",
            handler:()=>{
              this.route.navigateByUrl('home2');
            }
         }
    ]

  });
  (await alert).present();
}

async showDate() {
  
    let date = new Date()
    let h : any = date.getHours();
    let m : any  = date.getMinutes();
    let s : any  = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    let time = h +":"+m ;
    this.time = parseInt(time.toString().replace(':',''));
     this.showSun = 1;
    if(this.priere.fajr != "")
    {
     console.log(parseInt(this.priere.fajr.toString().replace(':','')) , time);
     
    
     
     
    if(this.time < parseInt(this.priere.fajr.toString().replace(':',''))  || this.time <= parseInt(this.priere.chorouq.toString().replace(':','')) )
    {
       this.showSun = 1 ;
    }

    if(this.time > parseInt(this.priere.chorouq.toString().replace(':',''))   &&  this.time < parseInt(this.priere.asr.toString().replace(':','')) )
    {
       this.showSun = 2 ;
    }

    if(this.time > parseInt(this.priere.asr.toString().replace(':',''))   &&  this.time < parseInt(this.priere.maghreb.toString().replace(':','')) )
    {
       this.showSun = 3 ;
    }

    if(this.time > parseInt(this.priere.maghreb.toString().replace(':',''))   &&  this.time < parseInt(this.priere.icha.toString().replace(':','')) )
    {
       this.showSun = 4 ;
    }

    if(this.time > parseInt(this.priere.icha.toString().replace(':','')))
    {
       this.showSun = 5 ;
    }
  }

    
    
    this.refresh();
}

  retour(){
    this.route.navigateByUrl('home2');
  }

}
