import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OnewayComponent } from './components/oneway/oneway.component';
import { TwowayComponent } from './components/twoway/twoway.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home/oneway', component: OnewayComponent },
    { path: 'home/twoway', component: TwowayComponent },
];
