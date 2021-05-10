import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetementPage } from './vetement.page';

const routes: Routes = [
  {
    path: '',
    component: VetementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetementPageRoutingModule {}
