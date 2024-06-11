import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homefuncionario',
  templateUrl: './homefuncionario.page.html',
  styleUrls: ['./homefuncionario.page.scss'],
})
export class HomefuncionarioPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  irParaConfiguracao(){
    this.router.navigate(["/configuracao"]);
  }
  consultarCliente(){
    this.router.navigate(["/consultar-cliente"]);
  }
  solicitacaoVeiculo(){
    this.router.navigate(["/solicitacao-veiculo"]);
  }
  solicitacaoServico(){
    this.router.navigate(["/solicitacao-servico"]);
  }
  irParaCadastro(){
    this.router.navigate(["/teste"]);
  }

}
