import { Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { OriginalComponent } from './original/original.component';
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
    component: PlaygroundComponent
  },
  {
    path: 'original',
    title: 'Original: Rin Linin',
    component: OriginalComponent
  },
  {
    path: 'home',
    title: 'Home: Rin Linin',
    component: HomeComponent
  }
];
