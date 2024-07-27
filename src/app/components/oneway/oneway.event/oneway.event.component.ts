import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway-event',
  standalone: true,
  imports: [],
  templateUrl: './oneway.event.component.html',
  styleUrl: './oneway.event.component.css'
})

export class OnewayEventComponent {

  clicked() {
    alert('You clicked me!');
  }
}
