import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAppointmentPageRoutingModule } from './update-appointment-routing.module';

import { UpdateAppointmentPage } from './update-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAppointmentPageRoutingModule
  ],
  declarations: [UpdateAppointmentPage]
})
export class UpdateAppointmentPageModule {}
