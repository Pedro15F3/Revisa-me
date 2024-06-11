import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Itens } from 'src/app/model/entities/Itens';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-funcio-usuario',
  templateUrl: './funcio-usuario.page.html',
  styleUrls: ['./funcio-usuario.page.scss'],
})
export class FuncioUsuarioPage implements OnInit {

  constructor(private alertController:AlertController,private router : Router,private firebase : FirebaseService, private auth : AuthService) { }

  ngOnInit() {
  }

  loginFuncionario(){
    this.router.navigate(["/loginfuncionario"]);
  }
  loginUsuario(){
    this.router.navigate(["/logar"]);
  }

}
