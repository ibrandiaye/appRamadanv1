import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.page.html',
  styleUrls: ['./pc.page.scss'],
})
export class PcPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }


  retour(){
    this.router.navigateByUrl('home2');
  }
}
