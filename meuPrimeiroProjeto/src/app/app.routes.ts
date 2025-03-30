import { Routes } from '@angular/router';
import { canActivateGuard } from './guard/can-activate.guard';
import { canMatchGuard } from './guard/can-match.guard';
import { canDeactivateGuard } from './guard/can-deactivate.guard';


export const routes: Routes = [
    {
        path: '',
        title: 'Home App',
        loadComponent: () => import('./pages/home/home.component').then((p) => p.HomeComponent),
        canMatch: [canMatchGuard]
    },
    {
        path: 'sobre',
        title: 'About Us',
        loadComponent: () => import('./pages/sobre/sobre.component').then((p) => p.SobreComponent),
        canActivate: [canActivateGuard]
    },
    {
        path: 'servicos/:id',
        title: 'Page Services',
        loadComponent: () => import('./pages/servicos-prestados/servicos-prestados.component'),
        canDeactivate: [canDeactivateGuard]
    }
];
