import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guid',
  templateUrl: './guid.page.html',
  styleUrls: ['./guid.page.scss'],
})
export class GuidPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }


  retour(){
      this.route.navigateByUrl('home2');
  }





  ablutions(){
    this.route.navigateByUrl('ablutions');
  }

  guideMusulman(){
    this.route.navigateByUrl('etapepriere');
  }

  priereJournee(){
    
    this.route.navigateByUrl('priere-journe');
  }
  vetement(){
    this.route.navigateByUrl('vetement');
  }
}
