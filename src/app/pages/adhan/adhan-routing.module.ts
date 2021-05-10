import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdhanPage } from './adhan.page';

const routes: Routes = [
  {
    path: '',
    component: AdhanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhanPageRoutingModule {}
