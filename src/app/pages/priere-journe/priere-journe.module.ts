import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriereJournePageRoutingModule } from './priere-journe-routing.module';

import { PriereJournePage } from './priere-journe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriereJournePageRoutingModule
  ],
  declarations: [PriereJournePage]
})
export class PriereJournePageModule {}
