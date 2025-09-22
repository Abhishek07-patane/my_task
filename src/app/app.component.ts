import { Component } from '@angular/core';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}

