import { Component } from '@angular/core';
import { Usuario } from '../../core/models/usuario.model';
import { SidebarService } from '../../core/services/sidebar.service';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [ RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public usuario: Usuario;
  public menu;

  constructor( public sidebarSrv: SidebarService,
               private authService: AuthService){

    this.usuario = authService.usuario;
    this.menu = this.sidebarSrv.cargarMenu();
  }


}
