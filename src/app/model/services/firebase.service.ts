import { Inject, Injectable, Injector } from '@angular/core';
import { AngularFirestore, QuerySnapshot, DocumentData } from '@angular/fire/compat/firestore';
import { Itens } from '../entities/Itens';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from './auth.service';
import { Carona } from '../entities/Carona';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH: string = "Revisa_me";
  user: any;

  constructor(
    private firestore: AngularFirestore,
    @Inject(Injector) private readonly injector: Injector,
    private storage: AngularFireStorage
  ) {}

  private injectAuthService() {
    return this.injector.get(AuthService);
  }

  buscarEndereco() {
    return this.firestore.collection(this.PATH, ref => ref.where('endereco', '!=', null)).snapshotChanges();
  }

  buscarTodos() {
    this.user = this.injectAuthService().getUsuarioLogado();
    return this.firestore.collection(this.PATH, ref => 
      ref.where('uid', '==', this.user.uid)
    ).snapshotChanges();
  }

  buscarVeiculo() {
    return this.firestore.collection(this.PATH, ref => ref.where('modelo', '!=', null)).snapshotChanges();
  }
  

  cadastrar(itens: Itens) {
    return this.firestore.collection(this.PATH).add({
      modelo: itens.modelo,
      chassi: itens.chassi,
      placa: itens.placa,
      fabrica: itens.fabrica,
      ano: itens.ano,
      gasolina: itens.gasolina,
      uid: itens.uid
    });
  }

  enviar(carona: Carona) {
    return this.firestore.collection(this.PATH).add({
      nome: carona.nome,
      numero: carona.numero,
      endereco: carona.endereco,
      data: carona.data,
      ponto: carona.ponto,

    });
  }

  editar(itens: Itens, id: string) {
    return this.firestore.collection(this.PATH).doc(id).update({
      modelo: itens.modelo,
      chassi: itens.chassi,
      placa: itens.placa,
      fabrica: itens.fabrica,
      ano: itens.ano,
      gasolina: itens.gasolina,
      uid: itens.uid
    });
  }

  excluir(id: string) {
    return this.firestore.collection(this.PATH).doc(id).delete();
  }

  agendarHorario(data: any) {
    console.log('Tentando agendar horário com os seguintes dados:', data);
    return this.firestore.collection(this.PATH).add(data).then(() => {
      console.log('Horário agendado com sucesso:', data);
    }).catch(error => {
      console.error('Erro ao agendar horário:', error);
      throw error;
    });
  }

  finalizarAgendamento(agendamentoId: string) {
    return this.firestore.collection(this.PATH).doc(agendamentoId).update({
      status: 'Finalizado'
    }).then(() => {
      console.log('Agendamento finalizado com sucesso!');
    }).catch(error => {
      console.error('Erro ao finalizar o agendamento:', error);
      throw error;
    });
  }

  getAgendamentosPorData(data: string): Promise<QuerySnapshot<DocumentData>> {
    return this.firestore.collection(this.PATH, ref => ref.where('date', '==', data)).get().toPromise() as Promise<QuerySnapshot<DocumentData>>;
  }

  buscarAgendamentos() {
    return this.firestore.collection(this.PATH, ref => ref.where('service', '!=', null)).snapshotChanges();
  }

  agendamentoCliente() {
    this.user = this.injectAuthService().getUsuarioLogado();
    return this.firestore.collection(this.PATH, ref => ref.where('service', '!=', null).where('vehicle.uid', '==', this.user.uid)).snapshotChanges();
  }  

  alterarStatusAgendamento(agendamentoId: string, novoStatus: string) {
    return this.firestore.collection(this.PATH).doc(agendamentoId).update({ status: novoStatus });
  }
  
}
