import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitacaoServicoPageRoutingModule } from './solicitacao-servico-routing.module';

import { SolicitacaoServicoPage } from './solicitacao-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitacaoServicoPageRoutingModule
  ],
  declarations: [SolicitacaoServicoPage]
})
export class SolicitacaoServicoPageModule {}
