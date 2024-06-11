import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculoscadastradosPage } from './veiculoscadastrados.page';

const routes: Routes = [
  {
    path: '',
    component: VeiculoscadastradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeiculoscadastradosPageRoutingModule {}
