import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var Calendar : any;
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {
   showimage : number = 1;
  constructor(private route : Router) {
     //this.calendrier();
   }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.calendrier();
  }

  calendrier() {
      const cal1 = new Calendar(false, 1, false, true);
      const  cal2 = new Calendar(true, 0, false, true);
      let cal1Mode = cal1.isHijriMode();
      let cal2Mode = cal2.isHijriMode();
      document.getElementById('calendar-converter1').innerHTML = "";
      document.getElementById('calendar-converter2').innerHTML = "";
      document.getElementById('calendar-converter1').appendChild(cal1.getElement());
      document.getElementById('calendar-converter2').appendChild(cal2.getElement());
      cal1.setDisplayStyle('inline-block');
      cal2.setDisplayStyle('inline-block');
      cal1.show();
      cal2.show();
      cal1.callback = function() {
        if (cal1Mode !== cal1.isHijriMode()) {
            cal2.disableCallback(true);
            cal2.changeDateMode();
            cal2.disableCallback(false);
            cal1Mode = cal1.isHijriMode();
            cal2Mode = cal2.isHijriMode();
        }else{
           cal2.setTime(cal1.getTime());
        }
        
          //  cal2.setTime(cal1.getTime());
          };

          cal2.callback = function() {
            if (cal2Mode !== cal2.isHijriMode()) {
                cal1.disableCallback(true);
                cal1.changeDateMode();
                cal1.disableCallback(false);
                cal1Mode = cal1.isHijriMode();
                cal2Mode = cal2.isHijriMode();
            }
            else
                cal1.setTime(cal2.getTime());
        };

        cal1.onHide = function() {
            cal1.show();
        };

        cal2.onHide = function() {
            cal2.show();
        };
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
  
  }


}
