import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { NewsletterFormComponent } from './components/newsletter-form/newsletter.component';

    @Component({
      selector: 'app-root',
      standalone: true,
      imports: [CommonModule, NewsletterFormComponent],
      template: `
        <app-newsletter-form></app-newsletter-form>
      `,
      styleUrl: './app.css'
    })
    export class AppComponent {
      title = 'newsletter-app';
    }