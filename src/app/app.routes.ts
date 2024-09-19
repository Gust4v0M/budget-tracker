import { Routes } from '@angular/router';
import { WealcomePageComponent } from './wealcome-page/wealcome-page.component';

export const routes: Routes = [
    {
        path:'', component: WealcomePageComponent
    },
    {
        path:'home', loadComponent:() =>import('./home/home.component').then( c => c.HomeComponent)
    }
];
