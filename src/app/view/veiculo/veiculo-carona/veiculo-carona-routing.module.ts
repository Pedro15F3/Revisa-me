import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculoCaronaPage } from './veiculo-carona.page';

const routes: Routes = [
  {
    path: '',
    component: VeiculoCaronaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeiculoCaronaPageRoutingModule {}
