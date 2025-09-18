import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Input() label: string = '';   
    @Output() onClick = new EventEmitter<void>();

  
  handleClick() {
    this.onClick.emit();
  }

}
