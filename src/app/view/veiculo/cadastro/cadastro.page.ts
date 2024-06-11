import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { error } from 'console';
import { Alert } from 'src/app/commom/alert';
import { Itens } from 'src/app/model/entities/Itens';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastrar: FormGroup;
  user:any;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private auth: AuthService,
    private firebase: FirebaseService,
    private builder: FormBuilder,
    private alert:Alert,

  ) {
    this.user = this.auth.getUsuarioLogado();
    this.cadastrar = new FormGroup({
      modelo: new FormControl(''),
      chassi: new FormControl(''),
      placa: new FormControl(''),
      ano: new FormControl(''),
      fabrica: new FormControl(''),
      gasolina: new FormControl(''),
    });

  }

  ngOnInit() {
    this.cadastrar = this.builder.group({
      modelo: ['', [Validators.required, Validators.minLength(3)]],
      chassi: ['', [Validators.required, Validators.minLength(8)]],
      fabrica: ['', [Validators.required, Validators.min(1951), Validators.max(2024)]],
      ano: ['', [Validators.required, Validators.min(1951), Validators.max(2024)]],
      gasolina: ['', [Validators.required]],
      placa: ['', [Validators.required]],
    })
  }

  

  cadastro() {
    console.log(this.cadastrar.value)
    if(this.cadastrar.valid){
      const {modelo,chassi,placa,fabrica,ano,gasolina} = this.cadastrar.value;
      const create: Itens = new  Itens ( modelo,chassi,placa,fabrica,ano,gasolina);
      create.uid = this.user.uid,
      this.firebase.cadastrar(create).then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(error);
        this.presentAlert('erro','erro');
      })
      
  
    }else{
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

