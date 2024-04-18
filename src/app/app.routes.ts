import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'app', 
        loadComponent: () => import('./layout/page-layout/page-layout.component'),
        children: [
         { path: 'balance', loadComponent: () => import('./pages/balance/balance.component')}
        ] 
    },
    { 
        path: '', 
        redirectTo: 'app', 
        pathMatch: 'full' 
    }
];
