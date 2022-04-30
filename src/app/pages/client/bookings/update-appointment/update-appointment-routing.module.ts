import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAppointmentPage } from './update-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAppointmentPageRoutingModule {}
