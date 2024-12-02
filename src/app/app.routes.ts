import { Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES_ROUTES),
      canActivate: [ authGuard]
    },
    {
      path: '',
      loadChildren: () => import('./auth/auth.routes').then(m=>m.AUTH_ROUTES)
    },
    {
      path: '**',
      component: NopagefoundComponent
    }
];
