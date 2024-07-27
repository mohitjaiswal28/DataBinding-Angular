import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  title = 'Data Binding in Angular';

  redirectOneWay() {
    window.location.href = '/home/oneway';
  }

  redirectTwoWay() {
    window.location.href = '/home/twoway';
  }
}
