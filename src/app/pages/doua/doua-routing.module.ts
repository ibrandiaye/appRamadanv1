import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DouaPage } from './doua.page';

const routes: Routes = [
  {
    path: '',
    component: DouaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DouaPageRoutingModule {}
