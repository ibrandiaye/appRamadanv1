import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation,GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-position',
  templateUrl: './position.page.html',
  styleUrls: ['./position.page.scss'],
})
export class PositionPage implements OnInit {

  constructor(private geolocation: Geolocation,private storage : Storage , private route : Router) {}

  ngOnInit() {
  }


  async getPosition(){
    let options : GeolocationOptions = {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 30000
    };
   // this.route.navigateByUrl('home2');
    await this.geolocation.getCurrentPosition(options).then((resp) => {
         console.log(resp);
         
         let objet = {lat : resp.coords.latitude , lng:resp.coords.longitude};
         this.storage.set("position",objet);
         if(objet){
         
          this.route.navigateByUrl('home2');
         }
        
  
    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }


  retour(){
    this.route.navigateByUrl('home2');
  }




}
