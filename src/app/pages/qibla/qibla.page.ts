import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceOrientation ,DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';
import { Platform } from '@ionic/angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-qibla',
  templateUrl: './qibla.page.html',
  styleUrls: ['./qibla.page.scss'],
})
export class QiblaPage implements OnInit {
   public data: DeviceOrientationCompassHeading = null;
   public currentLocation: any = null;
   private kaabaLocation: {lat:number,lng:number} = {lat: 21.42276, lng: 39.8256687};
   public qiblaLocation = 0;
   public showimage : number = 1;
  constructor(private deviceOrientation: DeviceOrientation,private route : Router ,private plt : Platform,private geolocation: Geolocation) {
    this.plt.ready().then(res=>{
      this.showimage = 1;
      this.deviceOrientation.watchHeading().subscribe((res: DeviceOrientationCompassHeading) => {
        this.data = res;
        if (!!this.currentLocation) {
          const currentQibla = res.magneticHeading-this.getQiblaPosition();
          this.qiblaLocation = currentQibla > 360 ? currentQibla%360 : currentQibla;
        }
        
        });
        this.geolocation.watchPosition().subscribe((rs) => {
          this.currentLocation = rs;
        });
       
    });

   }

   ionViewDidEnter() {
  
   }

  ngOnInit() {
  }
  retour(){
    this.route.navigateByUrl('home2');
  }

  changeCouleur(e){
      

     if(e == 1){
       this.showimage = 1;
     }
    
     if(e == 2){
      this.showimage = 2;
    }
    if(e == 3){
      this.showimage = 3;
    }
    if(e == 4){
      this.showimage = 4;
    }
    if(e == 5){
      this.showimage = 5;
    }
  }

  getQiblaPosition() {
    // Convert all geopoint degree to radian before jump to furmula
    const currentLocationLat = this.degreeToRadian(this.currentLocation.coords.latitude);
    const currentLocationLng = this.degreeToRadian(this.currentLocation.coords.longitude);
    const kaabaLocationLat = this.degreeToRadian(this.kaabaLocation.lat);
    const kaabaLocationLng = this.degreeToRadian(this.kaabaLocation.lng);

    // Use Basic Spherical Trigonometric Formula
    return this.radianToDegree(
      Math.atan2(
        Math.sin(kaabaLocationLng-currentLocationLng),
        (Math.cos(currentLocationLat) * Math.tan(kaabaLocationLat) - Math.sin(currentLocationLat) * Math.cos(kaabaLocationLng - currentLocationLng))
      )
    );
  }

  /**
   * Convert from Radian to Degree
   * @param radian 
   */
  radianToDegree(radian: number) {
    return radian * 180 / Math.PI;
  }

  /**
   * Convert from Degree to Radian
   * @param degree 
   */
  degreeToRadian(degree: number) {
    return degree * Math.PI / 180;
  }
}
