import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

   log(message: string) {
    console.log('MessageService:', message);
}
}