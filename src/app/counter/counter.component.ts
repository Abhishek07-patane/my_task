import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = 0;
  label: any;

  constructor(private messageService: MessageService) { }

  increment() {
    this.count++;
    this.messageService.log('Increment button clicked');
  }

  decrement() {
    this.count--;
    this.messageService.log('Decrement button clicked');
  }

  reset() {
    this.count = 0;
    this.messageService.log('Reset button clicked');
  }

}
