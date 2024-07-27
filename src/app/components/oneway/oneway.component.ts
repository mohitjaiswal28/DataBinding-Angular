import { Component } from '@angular/core';
import { OnewayInterpolationComponent } from './oneway.interpolation/oneway.interpolation.component';
import { OnewayPropertyComponent } from './oneway.property/oneway.property.component';
import { OnewayEventComponent } from './oneway.event/oneway.event.component';

@Component({
  selector: 'app-oneway',
  standalone: true,
  imports: [OnewayInterpolationComponent, OnewayPropertyComponent, OnewayEventComponent],
  templateUrl: './oneway.component.html',
  styleUrl: './oneway.component.css'
})

export class OnewayComponent {

  redirectHome() {
    window.location.href = '/';
  }
}
