import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
   count = 0 ;
label: any;

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  reset(){
    this.count=0;
  }

}
