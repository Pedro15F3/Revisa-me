import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Itens } from 'src/app/model/entities/Itens';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public revisa_me : Itens[] = [];
  constructor(private alertController:AlertController,private router : Router,private firebase : FirebaseService, private auth : AuthService) {

    this.firebase.buscarTodos()
    .subscribe(res => {
      this.revisa_me = res.map(itens =>{
        return{
        id: itens.payload.doc.id,
        ...itens.payload.doc.data() as any
        }as Itens
      })
    })
  }

  irParaCadastro(){
    this.router.navigate(["/teste"]);
  }
  
  irParaVeiculo(){
    this.router.navigate(["/veiculoscadastrados"]);
  }

  levaTraz(){
    this.router.navigate(["/veiculo-carona"]);
  }
  carona(){
    this.router.navigate(["/carona"]);
  }

  realizado(){
    this.router.navigate(["/realizados"]);
  }

  irParaConfiguracao(){
    this.router.navigate(["/configuracao"]);
  }
  

  editar(itens : Itens){
    this.router.navigateByUrl("/editar", {state : { itens : itens}});
  }
}
