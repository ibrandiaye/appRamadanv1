import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-don',
  templateUrl: './don.page.html',
  styleUrls: ['./don.page.scss'],
})
export class DonPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
   

  retour(){
    this.route.navigateByUrl('home2');
  }
}
