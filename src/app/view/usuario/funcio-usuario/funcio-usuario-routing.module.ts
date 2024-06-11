import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncioUsuarioPage } from './funcio-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: FuncioUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncioUsuarioPageRoutingModule {}
