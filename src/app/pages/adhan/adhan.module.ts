import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdhanPageRoutingModule } from './adhan-routing.module';

import { AdhanPage } from './adhan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdhanPageRoutingModule
  ],
  declarations: [AdhanPage]
})
export class AdhanPageModule {}
