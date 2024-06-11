import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/commom/alert';
import { AuthService } from 'src/app/model/services/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.page.html',
  styleUrls: ['./logar.page.scss'],
})
export class LogarPage implements OnInit {
  logar!: FormGroup;

  constructor(
    private router: Router,
    private alert: Alert,
    private auth: AuthService,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.logar = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl() {
    return this.logar.controls;
  }

  submitForm() {
    if (!this.logar.valid) {
      this.alert.presentAlert('Erro', 'Erro ao Logar!');
      console.log('Formulário inválido:', this.logar.value);
    } else {
      this.login();
    }
  }

  private login() {
    const email = this.logar.value['email'];
    const senha = this.logar.value['senha'];
    console.log('Tentando logar com:', email, senha); // Log de depuração
    this.auth.logar(email, senha)
      .then((res) => {
        console.log('Login bem-sucedido:', res); // Log de depuração
        this.alert.presentAlert("OK", "Seja bem Vindo!");
        this.router.navigate(['home']);
      })
      .catch((error) => {
        console.error('Erro ao logar:', error); // Log de depuração
        this.alert.presentAlert("Erro", "Erro ao Logar! Tente Novamente");
      });
  }

  logarComGmail() {
    console.log('Tentando logar com Google'); // Log de depuração
    this.auth.logarComGoogle()
      .then((res) => {
        console.log('Login com Google bem-sucedido:', res); // Log de depuração
        this.alert.presentAlert("OK", "Seja bem Vindo!");
        this.router.navigate(['home']);
      })
      .catch((error) => {
        console.error('Erro ao logar com Google:', error); // Log de depuração
        this.alert.presentAlert("Erro", "Erro ao Logar! Tente Novamente");
      });
  }

  irParaRegistrar() {
    this.router.navigate(['/registrar']);
  }
}
