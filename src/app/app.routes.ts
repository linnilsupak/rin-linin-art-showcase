import { Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'playground'
    },
    {
        path: 'playground',
        title: 'Playground',
        component: PlaygroundComponent
    }
];
