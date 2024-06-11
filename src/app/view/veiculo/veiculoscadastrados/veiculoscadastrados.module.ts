import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeiculoscadastradosPageRoutingModule } from './veiculoscadastrados-routing.module';

import { VeiculoscadastradosPage } from './veiculoscadastrados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeiculoscadastradosPageRoutingModule
  ],
  declarations: [VeiculoscadastradosPage]
})
export class VeiculoscadastradosPageModule {}
