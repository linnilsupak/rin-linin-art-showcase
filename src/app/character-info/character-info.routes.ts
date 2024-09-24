import { Routes } from '@angular/router';
import { CharacterInfoComponent } from './character-info.component';
import { LininInfoComponent } from './linin-info/linin-info.component';

export const characterInfoRoutes: Routes = [
  {
    path: '',
    component: CharacterInfoComponent,
    children: [
      {
        path: 'linin',
        title: 'Linin: Character info',
        component: LininInfoComponent
      }
    ]
  }
]
