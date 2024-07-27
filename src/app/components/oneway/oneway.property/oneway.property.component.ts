import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oneway-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oneway.property.component.html',
  styleUrl: './oneway.property.component.css'
})

export class OnewayPropertyComponent {
  isDisabled: boolean = true;
}
