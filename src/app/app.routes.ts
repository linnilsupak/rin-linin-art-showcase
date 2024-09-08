import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'playground',
    title: 'Playground: Rin Linin',
    loadComponent: () => import('./playground/playground.component').then(c => c.PlaygroundComponent)
  },
  {
    path: 'original',
    title: 'Original: Rin Linin',
    loadComponent: () => import('./original/original.component').then(c => c.OriginalComponent)
  },
  {
    path: 'home',
    title: 'Home: Rin Linin',
    component: HomeComponent
  }
];
