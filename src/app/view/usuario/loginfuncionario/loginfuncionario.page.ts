import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/commom/alert';
import { AuthService } from 'src/app/model/services/auth.service';

@Component({
  selector: 'app-loginfuncionario',
  templateUrl: './loginfuncionario.page.html',
  styleUrls: ['./loginfuncionario.page.scss'],
})
export class LoginfuncionarioPage implements OnInit {

  logar: FormGroup;

  constructor(
    private router: Router,
    private alert: Alert,
    private auth: AuthService,
    private builder: FormBuilder
  ) {
    this.logar = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }

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
    } else {
      // Verificar se o email e a senha correspondem aos valores específicos
      const email = this.logar.value['email'];
      const senha = this.logar.value['senha'];
  
      // Validar o login específico
      if (email === 'admin@admin.com' && senha === 'admin123') {
        // Login válido para funcionário
        this.login();
      } else {
        // Credenciais inválidas
        this.alert.presentAlert('Erro', 'Credenciais inválidas! Verifique seu email e senha.');
      }
    }
  }
  

  private login() {
    this.auth.logar(this.logar.value['email'], this.logar.value['senha'])
    .then((res) => {
      this.alert.presentAlert("OK", "Seja bem Vindo!");
      this.router.navigate(['homefuncionario']);
    })
    .catch((error) => {
      this.alert.presentAlert("OK", "Erro ao Logar! Tente Novamente");
      console.log(error);
    });
}
}