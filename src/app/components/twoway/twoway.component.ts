import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twoway.component.html',
  styleUrl: './twoway.component.css'
})

export class TwowayComponent {

  searchText: string = '';
  redirectHome() {
    window.location.href = '/';
  }
}
