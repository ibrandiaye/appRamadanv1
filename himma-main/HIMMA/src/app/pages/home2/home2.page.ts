import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ApiService } from 'src/app/services/api.service';
 import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { MenuController } from '@ionic/angular';
declare var H;
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  recupPosition : any ;
  position : string;
  time : any;
  time1 : any;
  dateData : any = {gregorian:"",hijri:""};
  prieree : any = {asr: "",fajr:"",dohr : "",chorouq:"",maghreb:"",icha:""};
  date : string = "";
  audio : any;
  nafilaSon  : any = "nafila1.m4a";
  notifications :  any = [];
 
  constructor(private route : Router,private storage : Storage,
              private nativeGeocoder: NativeGeocoder,
              private api : ApiService,private plt: Platform ,private alertCtr :AlertController ,private notification : LocalNotifications,
              private loading : LoadingController,private menuCtr : MenuController,private nativeAudio: NativeAudio
             
              ) {
               
                this.plt.ready().then(()=>{
                this.showDate();
                  
                // this.recurringNotification(3,{id:6,jour:2,nbrakka:4});
                  this.notification2();
                  this.notification.on('click').subscribe(rs=>{
                       //console.log(rs.id);
                       
                          this.nativeAudio.stop(rs.id).then(rs=>{
                            this.nativeAudio.unload(rs.id);
                          })
                            .catch(error=>{
                            this.nativeAudio.stop(rs.text);
                            this.nativeAudio.unload(rs.text);
                          });
                          
                          

                      
                  });
            
                });
               
                
   
   }
 

  ngOnInit() {
  }
  open(){
    console.log("rrrrr");
    
    this.menuCtr.open();
  }


  notification2(){
        this.storage.get('nafila').then(res=>{
          if(res){
              this.api.getNafilaData().then(rs=>{
                let recup : any = JSON.parse(rs.data);
                recup = recup[0];
                if(res != recup.id){
                
                    this.recurringNotification(1,recup);
                    
                
                }
               
                this.refresh2();
              });
          }
      });
  }
recurringNotification(seconds : number,object :any){

     
  this.notification.schedule({
    id : object.id,
    title : "Consulter votre nafila du jour",
    smallIcon: 'assets/img/icon.JPG',
    icon: "drawable-hdpi-icon.png",
    text: object.jour +"ème Nuit  / "+object.nbrakka +" Rakka",
    attachments: ['../../../assets/img/Logo.png'],
    vibrate: true,
    foreground : true,
    lockscreen : true,
    sound : 'file://resources/nafila.mp3',
    trigger:{
      in:seconds,
      unit:ELocalNotificationTriggerUnit.SECOND,
    }
  });
  this.nativeAudio.preloadSimple(object.id, "assets/sounds/"+this.nafilaSon);
  this.nativeAudio.play(object.id);
 

}
recurringNotification2(seconds : number,object :any){
 
  this.notification.schedule({
    id : 1,
    title : "Adhan",
    text: object.id,
    vibrate: true,
    foreground : true,
    lockscreen : true,
    trigger:{
      in:seconds,
      unit:ELocalNotificationTriggerUnit.SECOND,
    }
  });
  
  this.nativeAudio.play(object.id);
   

}
recurringNotification3(seconds : number){
 
  this.notification.schedule({
    id : 1,
    title : "Adhan",
    text: "Notification prière",
    vibrate: true,
    foreground : true,
    lockscreen : true,
    trigger:{
      in:seconds,
      unit:ELocalNotificationTriggerUnit.SECOND,
    }
  });
  

}
recurringNotification4(seconds : number){
 
  this.notification.schedule({
    id : 1,
    title : "Adhan",
    text: "Notification prière",
    vibrate: false,
    foreground : true,
    lockscreen : true,
    trigger:{
      in:seconds,
      unit:ELocalNotificationTriggerUnit.SECOND,
    }
  });
  

}
  
  refresh2(){
    setTimeout(()=>{
         this.notification2();
    },10000)
}

    refresh(){
        
        setTimeout(()=>{
             this.showDate();
        },1000)
    }

    showDate() {
        let date = new Date()
        let h : any = date.getHours();
        let m : any  = date.getMinutes();
        let s : any  = date.getSeconds();
        if( h < 10 ){ h = '0' + h; }
        if( m < 10 ){ m = '0' + m; }
        if( s < 10 ){ s = '0' + s; }
        this.time = h + ':' + m + ':' + s;

        this.time1 = h + ':' + m;
        this.time1 = parseInt(this.time1.toString().replace(':','')+"00");
        
        if(this.prieree.fajr != "")
        {
           // console.log(this.prieree);
            
         
            if(this.time1 == parseInt(this.prieree.fajr.toString().replace(':','')+"00") )
            {
              if(this.notifications[0][0].active == "green")
              {
                this.adhanNotification();
              }
              if(this.notifications[0][2].active == "green"){
                this.adhanNotification2();
              }
              if(this.notifications[0][3].active == "green"){
                this.adhanNotification3();
              }
            }

            if(this.time1 ==  parseInt(this.prieree.chorouq.toString().replace(':','')+"00")  )
            {
              if(this.notifications[1][0].active == "green")
              {
                this.adhanNotification();
              }
              if(this.notifications[1][2].active == "green"){
                this.adhanNotification2();
              }
              if(this.notifications[1][3].active == "green"){
                this.adhanNotification3();
              }
            }
            if(this.time1 ==  parseInt(this.prieree.dohr.toString().replace(':','')+"00")  )
            {
              if(this.notifications[2][0].active == "green")
              {
                this.adhanNotification();
              }
              if(this.notifications[2][2].active == "green"){
                this.adhanNotification2();
              }
              if(this.notifications[2][3].active == "green"){
                this.adhanNotification3();
              }
            }

            if(this.time1 == parseInt(this.prieree.asr.toString().replace(':','')+"00")   )
            {
              if(this.notifications[3][0].active == "green")
              {
                this.adhanNotification();
              }
              if(this.notifications[3][2].active == "green"){
                this.adhanNotification2();
              }
              if(this.notifications[3][3].active == "green"){
                this.adhanNotification3();
              }
            }

            if(this.time1 == parseInt(this.prieree.maghreb.toString().replace(':','')+"00") )
            {
              if(this.notifications[4][0].active == "green")
              {
                this.adhanNotification();
              }
              if(this.notifications[4][2].active == "green"){
                this.adhanNotification2();
              }
              if(this.notifications[4][3].active == "green"){
                this.adhanNotification3();
              }
            }

            if(this.time1 == parseInt(this.prieree.icha.toString().replace(':','')+"00"))
            {
              if(this.notifications[5][0].active == "green")
              {
                this.adhanNotification();
              }
              if(this.notifications[5][2].active == "green"){
                this.adhanNotification2();
              }
              if(this.notifications[5][3].active == "green"){
                this.adhanNotification3();
              }
            }
      }

      this.refresh();
       
    }

  adhanNotification(){
         this.storage.get('adhan').then(rs=>{
           if(rs){
                  rs.forEach(el => {
                       if(el.active == true){
                         this.recurringNotification2(1,el);
                       }
                  });
           }
         });
  }
  adhanNotification2(){
                    this.recurringNotification3(1);

}
adhanNotification3(){
  this.recurringNotification4(1);

}
  async ionViewDidEnter() {
    this.storage.get('notification').then((res)=>{
      this.notifications = res;
      console.log(res);
      
    }); 
     const loading = await this.loading.create({
            message :"Patienter un instant",
            duration : 2000,
            spinner:"dots"
     });
     loading.present();
    
    this.storage.get("position").then((res)=>{
             
              
              this.recupPosition = res;

                if(!this.recupPosition){  
                     this.route.navigateByUrl("position");
                }else{
                  let options: NativeGeocoderOptions = {
                    useLocale: true,
                    maxResults: 5
                };
                this.api.getPriereData(this.recupPosition).then(rs=>{
                   
                      
                  let alldata = JSON.parse(rs.data);
                  let alldata2 = alldata.results.datetime[0].times;
               //  console.log(alldata);
                  
                   if(alldata)
                   {
                    
                      this.dateData = alldata.results.datetime[0].date;
                      //console.log(this.alld);
                      this.dateData.gregorian = this.convDategrego(this.dateData.gregorian);
                      this.dateData.hijri = this.converDateHijri(this.dateData.gregorien,"");
                     
                      
                      this.prieree.asr = alldata2.Asr;
                      this.prieree.fajr = alldata2.Fajr;
                      this.prieree.dohr = alldata2.Dhuhr;
                      this.prieree.chorouq = alldata2.Sunrise;
                      this.prieree.maghreb = alldata2.Maghrib;
                      this.prieree.icha = alldata2.Isha;

                   }
                 

                   
                 });
                
                this.nativeGeocoder.reverseGeocode(this.recupPosition.lat,this.recupPosition.lng,options).then((res : NativeGeocoderResult[])=>{
                  console.log(res);
                  this.position = res[0].administrativeArea;
                  loading.dismiss();
                });
                
                }


    
       });
  }
    nafila(){
      const navigationExtras: NavigationExtras = {
        queryParams: {
          datenow: JSON.stringify(this.date)
        }
      };
      this.route.navigate(['/nafila'],navigationExtras);
  }

  priere(){
    this.storage.set('city',this.position);
    this.route.navigateByUrl('priere');

  }

  doua(){
  
    this.route.navigateByUrl('doua');

  }
  guideMusulman(){
    this.route.navigateByUrl('guid');
  }
  calendrier(){
    this.route.navigateByUrl('calendrier');
  }
  qibla(){
    this.route.navigateByUrl('qibla');
  }

  convDategrego(date){
    let monthName=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    let dayName= ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    
    let maDate = new Date(date);
    let jour = maDate.getDay(); //Jour
    let njour = maDate.getDate(); //Numéro du jour
    let mois = maDate.getMonth(); //Mois (commence à 0, donc +1)
    let annee = maDate.getFullYear(); //Année sur 2 chiffres ou getFullYear sur 4
    return dayName[jour]+' '+njour+' '+monthName[mois]+' '+annee ;
  }

  converDateHijri(date,adjust){
    let wdNames = ["Diiber", "Altiné", "Thalata", "Alarba", "Alkhamis", "AlJumuah", "Gawou"];
    let iMonthNames = ["Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir", "Jumadal Ula", "Jumadal Akhira",
                     "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja"];
    let iDate = this.kuwaiticalendar(date, adjust);
   
    
    let outputIslamicDate = wdNames[iDate[4]] + ", " + iDate[5] + " " +
                            iMonthNames[iDate[6]] + " " + iDate[7] ;
                     return outputIslamicDate;
  }

    gmod(n, m){
    return ((n % m) + m) % m;
  }
  kuwaiticalendar(date, adjust) {
    let today = date? new Date(+date) : new Date();
    if (adjust) {
      today.setDate(today.getDate()+adjust);
    }
  
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let m = month + 1;
    let y = year;
  
    if (m < 3) {
        y -= 1;
        m += 12;
    }
  
    let a = Math.floor(y / 100);
    let b = 2 - a + Math.floor(a / 4);
  
    if (y < 1583) b = 0;
    if (y == 1582) {
      if (m > 10)  b = -10;
      if (m == 10) {
        b = 0;
        if (day > 4) b = -10;
      }
    }
  
    let jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;
  
    b = 0;
    if(jd > 2299160){
      a = Math.floor((jd - 1867216.25) / 36524.25);
      b = 1+a-Math.floor(a / 4);
    }
  
    let bb = jd+b+1524;
    let cc = Math.floor((bb - 122.1) / 365.25);
    let dd = Math.floor(365.25 * cc);
    let ee = Math.floor((bb - dd) / 30.6001);
    day = (bb - dd) - Math.floor(30.6001 * ee);
    month = ee - 1;
  
    if (ee > 13) {
      cc += 1;
      month = ee - 13;
    }
    year = cc - 4716;
    let wd = this.gmod(jd + 1, 7) + 1;
  
    let iyear = 10631./30.;
    let epochastro = 1948084;
    let epochcivil = 1948085;
  
    let shift1 = 8.01 / 60.;
  
    let z = jd-epochastro;
    let cyc = Math.floor(z/10631.);
    z = z - 10631 * cyc;
    let j = Math.floor((z - shift1) / iyear);
    let iy = 30 * cyc + j;
    z = z - Math.floor(j * iyear + shift1);
    let im = Math.floor((z + 28.5001) / 29.5);
  
    if (im == 13) im = 12;
    let id = z-Math.floor(29.5001*im-29);
  
    return [
      day,       //calculated day (CE)
      month - 1, //calculated month (CE)
      year,      //calculated year (CE)
      jd - 1,    //julian day number
      wd - 1,    //weekday number
      id - 2,        //islamic date
      im - 1,    //islamic month
      iy         //islamic year
    ];
  }
  
}
