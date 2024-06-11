import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncioUsuarioPageRoutingModule } from './funcio-usuario-routing.module';

import { FuncioUsuarioPage } from './funcio-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncioUsuarioPageRoutingModule
  ],
  declarations: [FuncioUsuarioPage]
})
export class FuncioUsuarioPageModule {}
