import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/services/auth.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(private router : Router,private auth : AuthService) { }

  ngOnInit() {
  }

  contato(){
    this.router.navigate(["/contato"]);
  }
  deslogar() {
    this.auth.deslogar()
      .then(() => {
        this.router.navigate(['/funcio-usuario']); 
      })
      .catch(error => {
        console.log('Erro ao fazer logout:', error);
      });
  }

}
