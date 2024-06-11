import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Itens } from 'src/app/model/entities/Itens';
import { AuthService } from 'src/app/model/services/auth.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.page.html',
  styleUrls: ['./consultar-cliente.page.scss'],
})
export class ConsultarClientePage implements OnInit {
  public veiculos: Itens[] = [];
  public veiculosFiltrados: Itens[] = [];

  constructor(
    private alertController: AlertController,
    private router: Router,
    private firebase: FirebaseService,
    private auth: AuthService
  ) {
    this.firebase.buscarVeiculo().subscribe(res => {
      this.veiculos = res.map(itens => {
        return {
          id: itens.payload.doc.id,
          ...itens.payload.doc.data() as any
        } as Itens;
      });
      this.veiculosFiltrados = this.veiculos; // Inicialmente, os veículos filtrados são os mesmos que os veículos não filtrados
    });
  }

  ngOnInit() {}

  buscarVeiculo(event: any) {
    const placa = (event.detail.value || '').toString();
    if (placa.trim() === '') {
      this.veiculosFiltrados = this.veiculos;
    } else {
      this.veiculosFiltrados = this.veiculos.filter(veiculo =>
        veiculo.placa.toLowerCase().includes(placa.toLowerCase())
      );
    }
  }
  
}

