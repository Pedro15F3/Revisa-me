import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitacaoVeiculoPageRoutingModule } from './solicitacao-veiculo-routing.module';

import { SolicitacaoVeiculoPage } from './solicitacao-veiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitacaoVeiculoPageRoutingModule
  ],
  declarations: [SolicitacaoVeiculoPage]
})
export class SolicitacaoVeiculoPageModule {}
