import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './model/services/auth-guard.guard';




const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/veiculo/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    redirectTo: 'funcio-usuario',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./view/veiculo/cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'editar',
    loadChildren: () => import('./view/veiculo/editar/editar.module').then( m => m.EditarPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'logar',
    loadChildren: () => import('./view/usuario/logar/logar.module').then( m => m.LogarPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./view/usuario/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./view/veiculo/teste/teste.module').then( m => m.TestePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'veiculoscadastrados',
    loadChildren: () => import('./view/veiculo/veiculoscadastrados/veiculoscadastrados.module').then( m => m.VeiculoscadastradosPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'funcio-usuario',
    loadChildren: () => import('./view/usuario/funcio-usuario/funcio-usuario.module').then( m => m.FuncioUsuarioPageModule)
  },
  {
    path: 'loginfuncionario',
    loadChildren: () => import('./view/usuario/loginfuncionario/loginfuncionario.module').then( m => m.LoginfuncionarioPageModule)
  },
  {
    path: 'homefuncionario',
    loadChildren: () => import('./view/funcionario/homefuncionario/homefuncionario.module').then( m => m.HomefuncionarioPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./view/funcionario/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'veiculo-carona',
    loadChildren: () => import('./view/veiculo/veiculo-carona/veiculo-carona.module').then( m => m.VeiculoCaronaPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'realizados',
    loadChildren: () => import('./view/veiculo/realizados/realizados.module').then( m => m.RealizadosPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'consultar-cliente',
    loadChildren: () => import('./view/funcionario/consultar-cliente/consultar-cliente.module').then( m => m.ConsultarClientePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'solicitacao-veiculo',
    loadChildren: () => import('./view/funcionario/solicitacao-veiculo/solicitacao-veiculo.module').then( m => m.SolicitacaoVeiculoPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'solicitacao-servico',
    loadChildren: () => import('./view/funcionario/solicitacao-servico/solicitacao-servico.module').then( m => m.SolicitacaoServicoPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'editar-servico',
    loadChildren: () => import('./view/funcionario/editar-servico/editar-servico.module').then( m => m.EditarServicoPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'contato',
    loadChildren: () => import('./view/funcionario/contato/contato.module').then( m => m.ContatoPageModule),
    canActivate: [AuthGuardGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
