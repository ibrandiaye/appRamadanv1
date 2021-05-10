import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtapeprierePage } from './etapepriere.page';

const routes: Routes = [
  {
    path: '',
    component: EtapeprierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtapeprierePageRoutingModule {}
