import { Component, Inject, InjectionToken } from '@angular/core';
import { Usuario } from '../../core/models/usuario.model';
import { SidebarService } from '../../core/services/sidebar.service';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Menu } from '../../core/interfaces/menu.interface';

@Component({
  selector: 'app-sidebar',
  imports: [ RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public menu: Menu[] = [];

  constructor( private authService: AuthService,
      public sidebarService: SidebarService ){

        this.sidebarService.cargarMenu();

        this.menu = this.sidebarService.menu;

        console.log(this.menu);
  }


}
