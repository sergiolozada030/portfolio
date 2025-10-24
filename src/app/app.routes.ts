import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('@features/about').then((m) => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('@features/services').then((m) => m.ServicesComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('@features/portfolio').then((m) => m.PortfolioComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('@features/contact').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
