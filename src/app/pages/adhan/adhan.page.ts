import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Storage } from '@ionic/storage';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-adhan',
  templateUrl: './adhan.page.html',
  styleUrls: ['./adhan.page.scss'],
})
export class AdhanPage implements OnInit {
  configuration : any = [];
  mute = false;
  buffer:any = [];
  pause: string;
  show:string ;
  cpt : number =  1;
  constructor(private route : Router,private nativeaudio: NativeAudio,private storage:Storage,private naitiveaudio : NativeAudio) {

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.nativeaudio.preloadSimple('touba', 'assets/sounds/adhantouba.mp4');
    this.nativeaudio.preloadSimple('mecque', 'assets/sounds/adhantouba.mp4');
    this.nativeaudio.preloadSimple('medina_baye', 'assets/sounds/medina.mp3');
    this.nativeaudio.preloadSimple('tivaoune', 'assets/sounds/tivaoune.mp3');
    this.nativeaudio.preloadSimple('massalick', 'assets/sounds/massalik.mp3');
   this.storage.remove('adhan');


    this.storage.get('adhan').then(rs=>{
      if(rs)
      {
        this.configuration = rs;
      }else{
        this.configuration = [
          {
            id :'mecque',
            name :'Mecque',
            active : false,
            img : '../../../assets/img/adhan/Mecque_adhan.png',
            // url : 'assets/sounds/massalik.mp3'
          },
          {
            id :'touba',
            name :'Grande Mosquée de Touba',
            active : true,
            img : '../../../assets/img/adhan/Touba_adhan.png',
            // url : 'assets/sounds/adhantouba.mp4'
          },
          {
           id :'medina_baye',
           name :'Médina Baye',
           active : false,
           img : '../../../assets/img/adhan/Medina_adhan.png',
          //  url : 'assets/sounds/medina.mp3'
         },
         {
           id :'tivaoune',
           name :'Grande Mosquée de Tivaoune',
           active : false,
           img : '../../../assets/img/adhan/Tivaouane_adhan.png',
        //    url : 'assets/sounds/tivaoune.mp3'
         },
         {
           id :'massalick',
           name :'Grande Mosquée de  Massalick',
           active : false,
           img : '../../../assets/img/adhan/Massalik.png',
          //  url : 'assets/sounds/massalik.mp3'
         },

      ];
      this.buffer = this.configuration;
      this.storage.set('adhan',this.configuration);
      }
    })
  }

  retour(){
      this.route.navigateByUrl('home2');
  }

  adhan(item){
      this.configuration.forEach(el => {
           if(item.id === el.id)
           {
             el.active = true;
           }else{
             el.active = false;
           }
      });
      this.buffer = this.configuration;
      this.storage.set('adhan',this.configuration);
  }

   stopAudio(item) {
     this.cpt = 2;
     if(this.pause === item)
     {
      this.nativeaudio.stop('touba');
      this.nativeaudio.stop('mecque');
      this.nativeaudio.stop('medina_baye');
      this.nativeaudio.stop('tivaoune');
      this.nativeaudio.stop('massalick');
      this.pause = "";
      this.show = item+"play";
     }else{
      this.nativeaudio.stop('touba');
      this.nativeaudio.stop('mecque');
      this.nativeaudio.stop('medina_baye');
      this.nativeaudio.stop('tivaoune');
      this.nativeaudio.stop('massalick');
        this.naitiveaudio.play(item);
        this.pause = item;
        this.show = item;
     }


  }

}


