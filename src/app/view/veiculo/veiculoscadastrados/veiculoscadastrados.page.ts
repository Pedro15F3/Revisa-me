import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Itens } from 'src/app/model/entities/Itens';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-veiculoscadastrados',
  templateUrl: './veiculoscadastrados.page.html',
  styleUrls: ['./veiculoscadastrados.page.scss'],
})
export class VeiculoscadastradosPage implements OnInit {

  public revisa_me : Itens[] = [];

  constructor(private alertController:AlertController,private router : Router,private firebase : FirebaseService, private auth : AuthService  ) {
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

  ngOnInit() {
  }

  irParaCadastro(){
    this.router.navigate(["/cadastro"]);
  }

  editar(itens : Itens){
    this.router.navigateByUrl("/editar", {state : { itens : itens}});
  } 

}
