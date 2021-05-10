import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cj',
  templateUrl: './cj.page.html',
  styleUrls: ['./cj.page.scss'],
})
export class CjPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  retour(){
    this.router.navigateByUrl('home2');
  }
}
