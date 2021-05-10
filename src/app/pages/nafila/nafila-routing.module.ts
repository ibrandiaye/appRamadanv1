import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NafilaPage } from './nafila.page';

const routes: Routes = [
  {
    path: '',
    component: NafilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NafilaPageRoutingModule {}
