import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Балтика 9',
      subject: '100 рублей',
      date: '',
      id: 0,
      read: false
    },
    {
      fromName: 'Охота крепкая',
      subject: '90 рублей',
      date: '',
      id: 1,
      read: false
    },
    {
      fromName: 'Боярин',
      subject: '80 рублей',
      date: '',
      id: 2,
      read: false
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
