import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DouaPageRoutingModule } from './doua-routing.module';

import { DouaPage } from './doua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DouaPageRoutingModule
  ],
  declarations: [DouaPage]
})
export class DouaPageModule {}
