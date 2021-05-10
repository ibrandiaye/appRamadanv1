import { Component, OnInit,PipeTransform  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import {
  NetworkService,
  ConnectionStatus,
} from "../../service/network.service";


@Component({
  selector: 'app-nafila',
  templateUrl: './nafila.page.html',
  styleUrls: ['./nafila.page.scss'],
})
export class NafilaPage implements OnInit {

  showRecommendation:boolean = false;
  text : string;
  showButton : string = "true";
  myDate : string;
  nafila : any = {rakkas:[],jour:"",commentaires:"",nbrakka:""};
  datenow: string;

  constructor(private route : Router,private socialSharing : SocialSharing,private screenshot : Screenshot , private networkService:NetworkService,
             private loading : LoadingController,private apiservice : ApiService,private activatedRoute :ActivatedRoute,private alert : AlertController) {
   
   }

  ngOnInit() {
  }
  
  
  async loadNafila(){
          
         
          
          if(this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline){
             this.presentAlert("Pobléme d'Internet !","Verifier votre connexion svp!")
          }else{
            const loading = await this.loading.create({
              message : "Patienter un instant",
              spinner : "crescent",
              duration : 20000,
            });
            loading.present();
         
          this.apiservice.getNafilaData().then(rs=>{
            let recup : any = JSON.parse(rs.data);
            
            
            recup = recup[0];
            console.log(recup);
            
            if(recup)
            {
              this.nafila = recup;
              loading.dismiss();
            }
          });
        }
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
  ionViewDidEnter() {
    this.activatedRoute.queryParams.subscribe((params) => {
         this.datenow = JSON.parse(params.datenow);
    });
    this.loadNafila();
  }


  voir(){
  
    if(this.showRecommendation == true){
      this.showRecommendation = false;
    }else{
      this.showRecommendation = true;
        }

    }


    shareWhatsapp(){
     
      this.screenshot.URI(100).then(res=>{
        this.showButton = 'false';
        if(this.showButton == 'false'){
          let img = res.URI;
          this.socialSharing.shareViaWhatsApp("Himma >>>> Nafila du jour ",img,null);
        } 
       
      });
    }
    sharfacebook()
    {
      this.screenshot.URI(100).then(res=>{
        this.showButton = 'false';
        if(this.showButton == 'false'){
          let img = res.URI;
          this.socialSharing.shareViaFacebook("Nafila du jour ",img,"");
        } 
       
      });
    }

    sharInstagram(){
      this.screenshot.URI(100).then(res=>{
        this.showButton = 'false';
        if(this.showButton == 'false'){
          let img = res.URI;
          this.socialSharing.shareViaInstagram("Nafila du jour ",img);
        } 
       
      });
    }
    

    retour(){
        console.log("here");
        
        this.route.navigateByUrl("home2");

    }
}
