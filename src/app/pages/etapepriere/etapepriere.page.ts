import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-etapepriere',
  templateUrl: './etapepriere.page.html',
  styleUrls: ['./etapepriere.page.scss'],
})
export class EtapeprierePage implements OnInit {

  @ViewChild("slides", { static: false }) slide: IonSlides;
  constructor(private route : Router) { }
  hideNext = true;
  hidePev = false;
  ngOnInit() {
  }

   ionViewDidEnter() {
    this.slide.lockSwipes(true);
   }

  retour(){
       this.route.navigateByUrl('guid');
  }

  next() {
    this.slide.lockSwipes(false);
    this.slide.slideNext();
    this.slide.lockSwipes(true);
    this.hideNext = true;
    this.hidePev = true;
    this.slide.isEnd().then(rs=>{
        if(rs === true) {
        this.hideNext = false;
        //this.hidePev = true;
        }
    });
  }


  prev(){
    this.slide.lockSwipes(false);
    this.slide.slidePrev();
    this.slide.lockSwipes(true);
    this.hideNext = true;
    this.hidePev = true;
    this.slide.isBeginning().then(rs=>{
      if(rs === true){
       // this.hideNext = true;
        this.hidePev = false;
      }
    });
  }
}
