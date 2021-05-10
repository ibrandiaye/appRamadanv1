import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrierePageRoutingModule } from './priere-routing.module';

import { PrierePage } from './priere.page';
import { LazyLoadImageModule ,LAZYLOAD_IMAGE_HOOKS, ScrollHooks} from 'ng-lazyload-image';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrierePageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [PrierePage]
})
export class PrierePageModule {}
