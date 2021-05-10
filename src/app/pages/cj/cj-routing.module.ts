import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CjPage } from './cj.page';

const routes: Routes = [
  {
    path: '',
    component: CjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CjPageRoutingModule {}
