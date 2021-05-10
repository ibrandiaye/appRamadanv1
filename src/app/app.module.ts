import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Facebook } from '@ionic-native/facebook/ngx';
import {Network} from '@ionic-native/network/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx'
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from  '@ionic/storage';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { HttpClientModule } from  '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { RemovehtmltagsPipe } from './removehtmltags.pipe';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DeviceOrientation } from '@ionic-native/device-orientation/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
@NgModule({
  declarations: [AppComponent, RemovehtmltagsPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), HttpClientModule,AppRoutingModule],
  schemas:[],
  providers: [SplashScreen, StatusBar,Facebook,Network,Dialogs,HTTP,LocalNotifications,NativeAudio,DeviceOrientation,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SocialSharing,Screenshot,Geolocation,NativeGeocoder],
  bootstrap: [AppComponent],
})
export class AppModule {}
