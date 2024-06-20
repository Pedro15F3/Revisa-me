import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/model/services/firebase.service';
import { QuerySnapshot, DocumentData } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Itens } from 'src/app/model/entities/Itens'; // Importe a interface Itens

export interface Agendamento {
  id: string;
  uid: string;
  vehicle: {
    placa: string;
    ano: number;
    modelo: string;
    uid: string;
  };
  date: string;
  time: string;
  service: string;
  observation: string;
  status: string;
}

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
  selectedVehicle: Itens | null = null;
  selectedDate: string | null = null;
  availableTimes: string[] = [];
  selectedTime: string | null = null;
  selectedService: string | null = null;
  observation: string = '';
  minDate: string;
  revisa_me: Itens[] = []; // Lista de veículos cadastrados
  agendamentos: Agendamento[] = [];

  allAvailableTimes: { [key: string]: string[] } = {
    'segunda-feira': ['09:00', '10:00', '11:00', '14:00', '15:00'],
    'terça-feira': ['09:00', '10:00', '11:00', '14:00', '15:00'],
    'quarta-feira': ['09:00', '10:00', '11:00', '14:00', '15:00'],
    'quinta-feira': ['09:00', '10:00', '11:00', '14:00', '15:00'],
    'sexta-feira': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
    'sábado': ['09:00', '10:00'],
    'domingo': [],
  };

  constructor(private firebaseService: FirebaseService, private router: Router) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit() {
    // Buscar todos os veículos cadastrados
    this.firebaseService.buscarTodos().subscribe(res => {
      this.revisa_me = res.map(itens => ({
        id: itens.payload.doc.id,
        ...itens.payload.doc.data() as any
      })).filter(item => item.ano); // Filtra os itens que possuem o campo "ano"
    });

    // Buscar os agendamentos do usuário atual
    this.firebaseService.agendamentoCliente().subscribe(res => {
      this.agendamentos = res.map(agendamento => ({
        ...agendamento.payload.doc.data() as Agendamento,
        id: agendamento.payload.doc.id
      }));
    });
  }

  async onDateChange(event: any) {
    const date = new Date(event.detail.value);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const day = new Intl.DateTimeFormat('pt-BR', options).format(date).toLowerCase();
    this.selectedDate = date.toISOString().split('T')[0];

    try {
      const agendamentosSnapshot: QuerySnapshot<DocumentData> = await this.firebaseService.getAgendamentosPorData(this.selectedDate);
      if (agendamentosSnapshot && !agendamentosSnapshot.empty) {
        const agendamentos = agendamentosSnapshot.docs.map(doc => doc.data()['time']);
        this.availableTimes = (this.allAvailableTimes[day] || []).filter(time => !agendamentos.includes(time));
      } else {
        this.availableTimes = this.allAvailableTimes[day] || [];
      }
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
      this.availableTimes = this.allAvailableTimes[day] || [];
    }
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  saveSelectedTime() {
    if (this.selectedVehicle && this.selectedDate && this.selectedTime && this.selectedService) {
      const formattedDate = this.formatDate(this.selectedDate);
      const data = {
        uid: this.selectedVehicle.uid,
        vehicle: {
          placa: this.selectedVehicle.placa,
          ano: this.selectedVehicle.ano,
          modelo: this.selectedVehicle.modelo,
          uid: this.selectedVehicle.uid,
        },
        date: formattedDate,
        time: this.selectedTime,
        service: this.selectedService,
        observation: this.observation,
        status: 'Agendado'
      };

      this.firebaseService.agendarHorario(data).then(() => {
        // Atualizar a lista revisa_me após o agendamento ser confirmado
        this.revisa_me = this.revisa_me.filter(item => item.placa !== this.selectedVehicle!.placa);

        this.router.navigate(['/home']);
        console.log('Horário agendado com sucesso!');
        this.selectedTime = null;
        this.selectedDate = null;
        this.selectedService = null;
        this.observation = '';
        this.availableTimes = [];
        this.selectedVehicle = null;
      }).catch(error => {
        console.error('Erro ao agendar o horário:', error);
      });
    } else {
      console.error('Veículo, data, horário ou tipo de serviço não selecionado');
    }
  }
}
