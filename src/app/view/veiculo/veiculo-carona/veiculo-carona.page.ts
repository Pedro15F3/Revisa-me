import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Alert } from 'src/app/commom/alert';
import { Carona } from 'src/app/model/entities/Carona';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';



@Component({
  selector: 'app-veiculo-carona',
  templateUrl: './veiculo-carona.page.html',
  styleUrls: ['./veiculo-carona.page.scss'],
})
export class VeiculoCaronaPage implements OnInit {
  leva: FormGroup;
  user: any;
  solicitacaoConfirmada: boolean = false; // Adicionada propriedade

  constructor(
    private alertController: AlertController,
    private router: Router,
    private auth: AuthService,
    private firebase: FirebaseService,
    private builder: FormBuilder,
    private alert: Alert,
  ) {
    this.user = this.auth.getUsuarioLogado();
    this.leva = new FormGroup({
      endereco: new FormControl(''),
      nome: new FormControl(''),
      numero: new FormControl(''),
      data: new FormControl(''),
      ponto: new FormControl(''),
    });
  }

  ngOnInit() {
    this.leva = this.builder.group({
      endereco: ['', [Validators.required, Validators.minLength(3)]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required]],
      data: ['', [Validators.required, Validators.minLength(4)]],
      ponto: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  cadastro() {
    console.log(this.leva.value);
    if (this.leva.valid) {
      const { endereco, nome,numero, data, ponto } = this.leva.value;
      const create: Carona = new Carona(endereco, nome, numero, data, ponto);
      this.firebase.enviar(create).then(() => {
        this.solicitacaoConfirmada = true; // Atualiza estado de confirmação
        this.presentAlert('Sucesso', 'Solicitação confirmada com sucesso.');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
        this.solicitacaoConfirmada = false; // Atualiza estado de confirmação em caso de erro
        this.presentAlert('Erro', 'Erro ao enviar solicitação.');
      });
    } else {
      this.alert.presentAlert('Erro!', 'Todos os campos são obrigatórios!');
    }
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
}
