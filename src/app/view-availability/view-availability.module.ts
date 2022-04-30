import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAvailabilityPageRoutingModule } from './view-availability-routing.module';

import { ViewAvailabilityPage } from './view-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAvailabilityPageRoutingModule
  ],
  declarations: [ViewAvailabilityPage]
})
export class ViewAvailabilityPageModule {}
