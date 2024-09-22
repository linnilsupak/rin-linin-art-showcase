import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    path: 'character-info/:characterName',
    title: 'Character info',
    loadComponent: () => import('./character-info/character-info.component').then(c => c.CharacterInfoComponent)
  },
  {
    path: 'home',
    title: 'Home: Rin Linin',
    component: HomeComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];
