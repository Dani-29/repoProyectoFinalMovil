import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatziPageRoutingModule } from './platzi-routing.module';

import { PlatziPage } from './platzi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatziPageRoutingModule
  ],
  declarations: [PlatziPage]
})
export class PlatziPageModule {}
