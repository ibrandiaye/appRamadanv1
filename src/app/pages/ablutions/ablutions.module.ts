import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AblutionsPageRoutingModule } from './ablutions-routing.module';

import { AblutionsPage } from './ablutions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AblutionsPageRoutingModule
  ],
  declarations: [AblutionsPage]
})
export class AblutionsPageModule {}
