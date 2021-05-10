import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidPageRoutingModule } from './guid-routing.module';

import { GuidPage } from './guid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidPageRoutingModule
  ],
  declarations: [GuidPage]
})
export class GuidPageModule {}
