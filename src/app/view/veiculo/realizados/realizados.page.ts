import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-realizados',
  templateUrl: './realizados.page.html',
  styleUrls: ['./realizados.page.scss'],
})
export class RealizadosPage implements OnInit {
  agendamentos: any[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.carregarAgendamentos();
    
  }

  carregarAgendamentos() {
    this.firebaseService.agendamentoCliente().subscribe((data: any[]) => {
      this.agendamentos = data.map((a: any) => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();
        return { id, ...data };
      });
    });
  }
}
