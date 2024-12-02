import { Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

export const PAGES_ROUTES: Routes = [
    {
      path:'',
      component: PagesComponent,
      loadChildren: () => import('./child.routes').then(m => m.CHILD_ROUTES)
    }
]
