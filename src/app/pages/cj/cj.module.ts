import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CjPageRoutingModule } from './cj-routing.module';

import { CjPage } from './cj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CjPageRoutingModule
  ],
  declarations: [CjPage]
})
export class CjPageModule {}
