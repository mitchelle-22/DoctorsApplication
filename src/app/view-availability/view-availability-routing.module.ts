import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAvailabilityPage } from './view-availability.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAvailabilityPageRoutingModule {}
