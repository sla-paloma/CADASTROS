import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterFormComponent {
  emailInput: string = '';
  mensagemErro: string = '';
  mensagemSucesso: string = '';
  
  emailsList: string[] = [];

  constructor(private newsletterService: NewsletterService) {
    this.atualizarLista();
  }

  cadastrarEmail() {
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    const dominioEsperado = 'aluno.sed.gov.sc.br';
    const email = this.emailInput.trim();

    const indiceDominio = email.indexOf(dominioEsperado);
    const terminaComDominio = email.endsWith(dominioEsperado);

    if (email === '') {
      this.mensagemErro = 'Por favor, digite um e-mail.';
      return;
    }

    if (indiceDominio === -1 || !terminaComDominio) {
      this.mensagemErro = `E-mail inválido! O domínio deve ser obrigatoriamente @${dominioEsperado}.`;
      return;
    }

    this.newsletterService.addEmail(email);
    this.mensagemSucesso = 'E-mail cadastrado com sucesso!';
    this.emailInput = '';
    this.atualizarLista();
  }

  atualizarLista() {
    this.emailsList = this.newsletterService.getEmails();
  }
}