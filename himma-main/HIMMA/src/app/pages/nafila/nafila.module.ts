import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NafilaPageRoutingModule } from './nafila-routing.module';

import { NafilaPage } from './nafila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NafilaPageRoutingModule
  ],
  declarations: [NafilaPage]
})
export class NafilaPageModule {}
