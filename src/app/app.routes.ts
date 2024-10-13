import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TarotsComponent } from './tarots/tarots.component';
import { AboutMeComponent } from './about-me/about-me.component';

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
    path: 'character-info',
    data: {
      minimizeFlag: true
    },
    loadChildren: () => import('./character-info/character-info.routes').then(c => c.characterInfoRoutes)
  },
  {
    path: 'home',
    title: 'Home: Rin Linin',
    component: HomeComponent
  },
  {
    path: 'tarots',
    title: 'Tarots: Rin Linin',
    component: TarotsComponent
  },
  {
    path: 'about-me',
    title: 'About me: Rin Linin',
    component: AboutMeComponent
  },
  {
    path: 'contact-me',
    title: 'Contact me: Rin Linin',
    component: ContactUsComponent
  },
  {
    path: 'not-found',
    data: {
      minimizeFlag: true
    },
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];
