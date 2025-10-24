import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/simple-home.component').then((m) => m.SimpleHomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/simple-about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/simple-services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./features/portfolio/simple-portfolio.component').then((m) => m.PortfolioComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/simple-contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
