import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomefuncionarioPageRoutingModule } from './homefuncionario-routing.module';

import { HomefuncionarioPage } from './homefuncionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomefuncionarioPageRoutingModule
  ],
  declarations: [HomefuncionarioPage]
})
export class HomefuncionarioPageModule {}
