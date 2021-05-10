import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QiblaPageRoutingModule } from './qibla-routing.module';

import { QiblaPage } from './qibla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QiblaPageRoutingModule
  ],
  declarations: [QiblaPage]
})
export class QiblaPageModule {}
