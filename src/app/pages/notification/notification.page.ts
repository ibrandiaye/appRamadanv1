import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  configuration : any = [];
  constructor(private route : Router,private storage : Storage) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
     //this.storage.remove('notification');
    this.storage.get('notification').then(rs=>{
         if(rs)
         {
           this.configuration = rs;
         }else{
           this.configuration = [
            {
                logo : "../../../assets/img/fajr1.png",
                numero : 1,
               
                cap : [
                       {
                          icon : "Adhan_icon.png",
                          icon2 : "Adhan_icon_off.png",
                          active : "green",
                          idt: 1,
                          nom: "Adhân",
                       },
                       {
                        icon : "Bip_icon.png",
                        icon2 : "Bip_icon_off.png",
                        active : "white",
                        idt: 2,
                        nom: "Bip",
                       },
                       {
                        icon : "Vibreur_icon.png",
                        icon2 : "Vibreur_icon_off.png",
                        active : "white",
                        idt:3,
                        nom: "Vibreur",
                       },
                       {
                        icon : "Silencieux_icon.png",
                        icon2 : "Silencieux_icon_off.png",
                        active : "white",
                        idt:4,
                        nom: "Silencieux",
                       },
                       
                      ]
            },
            {
              logo : "../../../assets/img/chorouq1.png",
              numero : 2,
             
              cap : [
                     {
                        icon : "Adhan_icon.png",
                        icon2 : "Adhan_icon_off.png",
                        active : "green",
                        idt: 1,
                        nom: "Adhân",
                     },
                     {
                      icon : "Bip_icon.png",
                      icon2 : "Bip_icon_off.png",
                      active : "white",
                      idt: 2,
                      nom: "Bip",
                     },
                     {
                      icon : "Vibreur_icon.png",
                      icon2 : "Vibreur_icon_off.png",
                      active : "white",
                      idt:3,
                      nom: "Vibreur",
                     },
                     {
                      icon : "Silencieux_icon.png",
                      icon2 : "Silencieux_icon_off.png",
                      active : "white",
                      idt:4,
                      nom: "Silencieux",
                     },
                     
                    ]
          },
            {
              logo : "../../../assets/img/dohr1.png",
              numero : 3,
              cap : [
                      {
                          icon : "Adhan_icon.png",
                          icon2 : "Adhan_icon_off.png",
                          active : "white",
                          idt: 1,
                          nom: "Adhân",
                      },
                      {
                        icon : "Bip_icon.png",
                        icon2 : "Bip_icon_off.png",
                        active : "green",
                        idt: 2,
                        nom: "Bip",
                      },
                      {
                        icon : "Vibreur_icon.png",
                         icon2 : "Vibreur_icon_off.png",
                        active : "white",
                        idt: 3,
                        nom: "Vibreur",
                      },
                      {
                        icon : "Silencieux_icon.png",
                        icon2 : "Silencieux_icon_off.png",
                        active : "white",
                        idt: 4,
                        nom: "Silencieux",
                      },
                    ]
          },
          {
            logo : "../../../assets/img/asr1.png",
            numero : 4,
            cap : [
                    {
                        icon : "Adhan_icon.png",
                        icon2 : "Adhan_icon_off.png",
                        active : "green",
                        idt: 1,
                        nom: "Adhân",
                    },
                    {
                      icon : "Bip_icon.png",
                       icon2 : "Bip_icon_off.png",
                      active : "white",
                      idt: 2,
                      nom: "Bip",
                    },
                    {
                      icon : "Vibreur_icon.png",
                       icon2 : "Vibreur_icon_off.png",
                      active : "white",
                      idt: 3,
                      nom: "Vibreur",
                    },
                    {
                      icon : "Silencieux_icon.png",
                      icon2 : "Silencieux_icon_off.png",
                      active : "white",
                      idt: 4,
                      nom: "Silencieux",
                    },
                  ]
        },
        {
          logo : "../../../assets/img/maghreb1.png",
          numero : 5,
          cap : [
                  {
                      icon : "Adhan_icon.png",
                      icon2 : "Adhan_icon_off.png",
                      active : "green",
                      idt : 1,
                      nom: "Adhân",
                  },
                  {
                    icon : "Bip_icon.png",
                     icon2 : "Bip_icon_off.png",
                    active : "white",
                    idt: 2,
                    nom: "Bip",
                  },
                  {
                    icon : "Vibreur_icon.png",
                     icon2 : "Vibreur_icon_off.png",
                    active : "white",
                    idt: 3,
                    nom: "Vibreur",
                  },
                  {
                    icon : "Silencieux_icon.png",
                     icon2 : "Silencieux_icon_off.png",
                    active : "white",
                    idt: 4,
                    nom: "Silencieux",
                  },
                ]
      },
      {
        logo : "../../../assets/img/icha1.png",
        numero:6,
        cap : [
                {
                    icon : "Adhan_icon.png",
                    icon2 : "Adhan_icon_off.png",
                    active : "white",
                    idt: 1,
                    nom: "Adhân",
                },
                {
                  icon : "Bip_icon.png",
                   icon2 : "Bip_icon_off.png",
                  active : "green",
                  idt: 2,
                  nom: "Bip",
                },
                {
                  icon : "Vibreur_icon.png",
                   icon2 : "Vibreur_icon_off.png",
                  active : "white",
                  idt: 3,
                  nom: "Vibreur",
                },
                {
                  icon : "Silencieux_icon.png",
                   icon2 : "Silencieux_icon_off.png",
                  active : "white",
                  idt: 4,
                  nom: "Silencieux",
                },
              ]
             },
    
           ];

           this.storage.set('notification',this.configuration);
         }
    });

  }


  confNotification(item1,item2){
         
          let recup = this.configuration.find(x=>x.numero == item1);
           recup.cap.forEach(el => {
               if(el.idt == item2 )
               {
                 el.active = "green";
               
               }
               else{
                el.active = "white";
               }
           });

       this.storage.set('notification',this.configuration);
  }


  retour(){
     this.route.navigateByUrl('home2');
  }

}
