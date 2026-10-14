import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private emails: string[] = [];

  constructor() { }

  getEmails(): string[] {
    return this.emails;
  }

  addEmail(email: string): void {
    this.emails.push(email);
  }
}