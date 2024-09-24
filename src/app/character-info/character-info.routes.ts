import { Routes } from '@angular/router';
import { CharacterInfoComponent } from './character-info.component';
import { LininInfoComponent } from './linin-info/linin-info.component';
import { CollectorInfoComponent } from './collector-info/collector-info.component';
import { WitchInfoComponent } from './witch-info/witch-info.component';
import { FrancoisInfoComponent } from './francois-info/francois-info.component';
import { ElysiaInfoComponent } from './elysia-info/elysia-info.component';
import { MimiInfoComponent } from './mimi-info/mimi-info.component';

export const characterInfoRoutes: Routes = [
  {
    path: '',
    component: CharacterInfoComponent,
    children: [
      {
        path: 'linin',
        title: 'Linin: Character info',
        component: LininInfoComponent
      },
      {
        path: 'collector',
        title: 'The collector: Character info',
        component: CollectorInfoComponent
      },
      {
        path: 'witch',
        title: 'The witch: Character info',
        component: WitchInfoComponent
      },
      {
        path: 'francois',
        title: 'Francois: Character info',
        component: FrancoisInfoComponent
      },
      {
        path: 'elysia',
        title: 'Elysia: Character info',
        component: ElysiaInfoComponent
      },
      {
        path: 'mimi',
        title: 'Mimi: Character info',
        component: MimiInfoComponent
      }
    ]
  }
]
