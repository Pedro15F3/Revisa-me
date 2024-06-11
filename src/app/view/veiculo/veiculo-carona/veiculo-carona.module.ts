import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeiculoCaronaPageRoutingModule } from './veiculo-carona-routing.module';

import { VeiculoCaronaPage } from './veiculo-carona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeiculoCaronaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VeiculoCaronaPage]
})
export class VeiculoCaronaPageModule {}
