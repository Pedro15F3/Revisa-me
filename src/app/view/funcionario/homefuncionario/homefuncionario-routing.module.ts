import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomefuncionarioPage } from './homefuncionario.page';

const routes: Routes = [
  {
    path: '',
    component: HomefuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomefuncionarioPageRoutingModule {}
