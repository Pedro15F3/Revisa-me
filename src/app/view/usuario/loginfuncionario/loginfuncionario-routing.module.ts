import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginfuncionarioPage } from './loginfuncionario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginfuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginfuncionarioPageRoutingModule {}
