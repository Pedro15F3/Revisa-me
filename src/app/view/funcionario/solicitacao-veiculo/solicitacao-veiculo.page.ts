import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carona } from 'src/app/model/entities/Carona';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-solicitacao-veiculo',
  templateUrl: './solicitacao-veiculo.page.html',
  styleUrls: ['./solicitacao-veiculo.page.scss'],
})
export class SolicitacaoVeiculoPage implements OnInit {
  public revisa_me : Carona[] = [];

  constructor(private alertController:AlertController,private router : Router,private firebase : FirebaseService, private auth : AuthService  ) {
    this.firebase.buscarEndereco()
    .subscribe(res => {
      this.revisa_me = res.map(carona =>{
        return{
        id: carona.payload.doc.id,
        ...carona.payload.doc.data() as any
        }as Carona
      })
    })
    
   }
  ngOnInit() {
  }

}
