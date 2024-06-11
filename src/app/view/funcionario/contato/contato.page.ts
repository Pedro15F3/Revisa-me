import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage {

  constructor() { }

  sendEmail() {
    window.location.href = 'mailto:example@example.com';
  }

  makeCall() {
    window.location.href = 'tel:+1234567890';
  }

  openWhatsApp() {
    const whatsappNumber = '+1234567890'; // Número de telefone do WhatsApp com o código do país
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_system');
  }

}

