
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OfflineManagerService } from './service/offline-manager.service';
import { NetworkService, ConnectionStatus } from './service/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private offlineManager: OfflineManagerService,
    private route: Router,
    private networkService: NetworkService, ) {
                          this.initializeApp();
                   }
            initializeApp(){
              this.platform.ready().then(() => {
                this.statusBar.styleDefault();
                this.splashScreen.hide();
                    this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
                      if (status === ConnectionStatus.Online) {
                        this.offlineManager.checkForEvents().subscribe();
              
                      }
              
                  });

                  if(this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline){
                      // this.route.navigateByUrl('net-work-page');
                  }

                });
                 
                          
                this.platform.backButton.subscribeWithPriority(9999, () => {
                  document.addEventListener('backbutton', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                  }, false);
                });
            }
                
           
  
}
