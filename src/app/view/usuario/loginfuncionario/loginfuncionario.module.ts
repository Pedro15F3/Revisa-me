import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginfuncionarioPageRoutingModule } from './loginfuncionario-routing.module';

import { LoginfuncionarioPage } from './loginfuncionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginfuncionarioPageRoutingModule
  ],
  declarations: [LoginfuncionarioPage]
})
export class LoginfuncionarioPageModule {}
