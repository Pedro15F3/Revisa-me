import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Itens } from 'src/app/model/entities/Itens';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  modelo! : string;
  chassi! : string;
  placa! : string;
  ano! : number;
  fabrica! : number;
  gasolina! : number;
  itens! : Itens;
  edicao: boolean = true;
  user : any;

  constructor(private firebase : FirebaseService,
     private router : Router,
      private alertController: AlertController,
      private auth : AuthService) {
      this.user = this.auth.getUsuarioLogado();
  }

  ngOnInit() {
    this.itens = history.state.itens;
    this.modelo = this.itens.modelo;
    this.chassi = this.itens.chassi,
    this.placa = this.itens.placa;
    this.ano = this.itens.ano;
    this.fabrica = this.itens.fabrica;
    this.gasolina = this.itens.gasolina;


  }

  habilitar(){
    if (this.edicao){
      this.edicao = false;
    }else {
      this.edicao = true;
    }
  }
  

  editar() {
    if (this.modelo) {
      // Verifique se todos os campos obrigatórios estão presentes e atendem às condições adicionais
      if (this.ano !== undefined && this.gasolina !== undefined) {
        if (this.fabrica !== undefined && this.ano > 1500) {
          if (this.ano > 0) {
            const novo: Itens = new Itens(this.modelo,this.chassi,this.placa, this.ano, this.fabrica, this.gasolina);

            novo.id = this.itens.id;
            novo.uid = this.user.uid;
  
            // Realize a edição no Firebase
            this.firebase.editar(novo, this.itens.id)
              .then(() => {
                this.router.navigate(['/home']);
              })
              .catch((error) => {
                this.presentAlert('Erro', 'Erro ao editar: ' + error.message);
              });
          } else {
            this.presentAlert('Erro', 'Ano deve ser maior que 0.');
          }
        } else {
          this.presentAlert('Erro', 'Ano deve ser maior que 1500 e fábrica deve estar presente.');
        }
      } else {
        this.presentAlert('Erro', 'Ano e gasolina são campos obrigatórios!');
      }
    } else {
      this.presentAlert('Erro', 'O modelo é um campo obrigatório!');
    }
  }
  
  



  excluir(){
    this.presentConfirmAlert("ATENÇÃO", "Deseja realmente excluir o veiculo?")
  }

  excluiritens(){
    this.firebase.excluir(this.itens.id)
    .then(() => {this.router.navigate(["/home"]);})
    .catch((error) =>{
      console.log(error);
      this.presentAlert("Erro","Erro ao excluir veiculo!")
    })
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Revisa-me',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentConfirmAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Revisa-me',
      subHeader: subHeader,
      message: message,
      buttons: [
        {text: 'Cancelar', role: 'cancelar', handler: ()=>{console.log("cancelou")}},
        {text: 'Confirmar', role: 'confirmar', handler: (acao)=>{this.excluiritens()}},
      ],
    });
    await alert.present();
  }

}
