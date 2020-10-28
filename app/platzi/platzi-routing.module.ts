import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatziPage } from './platzi.page';

const routes: Routes = [
  {
    path: '',
    component: PlatziPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatziPageRoutingModule {}
