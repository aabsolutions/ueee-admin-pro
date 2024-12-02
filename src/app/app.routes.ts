import { Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES_ROUTES)
    },
    {
      path: '**',
      component: NopagefoundComponent
    }
];
