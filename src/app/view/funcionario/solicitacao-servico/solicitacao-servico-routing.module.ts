import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitacaoServicoPage } from './solicitacao-servico.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitacaoServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitacaoServicoPageRoutingModule {}
