import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PerfilComponent } from "./perfil/perfil.component";

export const CHILD_ROUTES: Routes = [
  { path:'', component: DashboardComponent, data: { principal: 'Personal', titulo: 'Dashboard' } },
  { path:'perfil', component: PerfilComponent, data: { principal: 'Personal', titulo: 'Perfil' } }
]
