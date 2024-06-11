import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/model/services/firebase.service';
import { Agendamento } from '../../veiculo/teste/teste.page';

@Component({
  selector: 'app-solicitacao-servico',
  templateUrl: './solicitacao-servico.page.html',
  styleUrls: ['./solicitacao-servico.page.scss'],
})
export class SolicitacaoServicoPage implements OnInit {

  agendamentos: Agendamento[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.carregarAgendamentos();
  }

  carregarAgendamentos() {
    this.firebaseService.buscarAgendamentos().subscribe(res => {
      this.agendamentos = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as any
        } as Agendamento;
      });
    });
  }

  alterarStatus(agendamentoId: string, novoStatus: string) {
  this.firebaseService.alterarStatusAgendamento(agendamentoId, novoStatus)
    .then(() => {
      console.log('Status do agendamento alterado com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao alterar o status do agendamento:', error);
    });
}


}
