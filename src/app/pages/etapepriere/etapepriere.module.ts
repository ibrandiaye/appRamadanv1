import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtapeprierePageRoutingModule } from './etapepriere-routing.module';

import { EtapeprierePage } from './etapepriere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtapeprierePageRoutingModule
  ],
  declarations: [EtapeprierePage]
})
export class EtapeprierePageModule {}
