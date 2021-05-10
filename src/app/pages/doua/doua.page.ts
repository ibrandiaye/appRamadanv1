import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-doua',
  templateUrl: './doua.page.html',
  styleUrls: ['./doua.page.scss'],
})

export class DouaPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  information: any = [];
  automaticClose = false;
  
  constructor(private route : Router,private api : ApiService ,private loading : LoadingController) { 
      this.loaddata();
  }

  ngOnInit() {
  }
    

   

   async loaddata() {
   const loading = await this.loading.create({
     message: "Chargement en cours ..",
     duration:20000,
     spinner:"lines"
   });
   loading.present();
    this.api.getDouaData().then(rs=>{
         this.information  = JSON.parse(rs.data);
        
         this.information[0].open = true;
         
         if(this.information){
           loading.dismiss();
         }
         console.log(this.information);
         
     });
   }
    fermer(){
      this.automaticClose = !this.automaticClose;
      this.information[0].open = true;
         this.information.forEach(el => {
                el.open = false;
         });
    }

   toggleSection(index){
    this.information[index].open = !this.information[index].open;
     if(this.automaticClose &&  this.information[0].open){
       this.information
       .filter((item,itemIndex)=>itemIndex !=index )
       .map(item => item.open = false);
     }
   }

   toggleIem(index,childIndex){
      this.information[index].douhas[childIndex].open =    !this.information[index].douhas[childIndex].open; 
   }

  retour(){
    this.route.navigateByUrl('home2');
  }

  loadData(event) {
    setTimeout(() => {
      
      event.target.complete();

      if (this.information.length == 4) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
