import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.page.html',
  styleUrls: ['./vetement.page.scss'],
})
export class VetementPage implements OnInit {
  constructor(private route : Router) { }
  ngOnInit() {
  }


  retour(){
    this.route.navigateByUrl('guid');
}
}
