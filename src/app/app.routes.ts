import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TarotsComponent } from './tarots/tarots.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommissionComponent } from './commission/commission.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { CommissionFormComponent } from './commission-form/commission-form.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home: Rin Linin',
    component: HomeComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'playground-room',
    data: {
        minimizeFlag: true
    },
    loadChildren: () => import('./playground-room/playground.routes').then(c => c.playgroundRoomRoutes)
  },
  {
    path: 'playground',
    data: {
        minimizeFlag: true
    },
    title: 'Playground menu: Rin Linin',
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
    path: 'tos',
    title: 'Term of service: Rin Linin',
    component: TermOfServiceComponent
  },
  {
    path: 'commission-form',
    title: 'Commission form: Rin Linin',
    component: CommissionFormComponent
  },
  {
    path: 'commission',
    title: 'Commission: Rin Linin',
    component: CommissionComponent
  },
  {
    path: 'term-of-service',
    data: {
      minimizeFlag: true
    },
    loadChildren: () => import('./term-of-service/term-of-service.component').then(c => c.TermOfServiceComponent)
  },
  {
    path: 'tarots',
    title: 'Tarots: Rin Linin',
    data: {
      showTarotSearch: true
    },
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
