import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AblutionsPage } from './ablutions.page';

const routes: Routes = [
  {
    path: '',
    component: AblutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AblutionsPageRoutingModule {}
