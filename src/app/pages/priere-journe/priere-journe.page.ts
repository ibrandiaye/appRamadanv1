import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-priere-journe',
  templateUrl: './priere-journe.page.html',
  styleUrls: ['./priere-journe.page.scss'],
})
export class PriereJournePage implements OnInit {

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
