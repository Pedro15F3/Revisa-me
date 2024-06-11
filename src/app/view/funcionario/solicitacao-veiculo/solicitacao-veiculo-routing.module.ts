import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitacaoVeiculoPage } from './solicitacao-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitacaoVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitacaoVeiculoPageRoutingModule {}
