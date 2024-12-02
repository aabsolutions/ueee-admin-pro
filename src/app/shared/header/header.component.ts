import { Component } from '@angular/core';
import { Usuario } from '../../core/models/usuario.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public usuario: Usuario;

  constructor( private authService: AuthService,
               private router: Router ) {

    this.usuario = authService.usuario;
  }

  logout() {
    this.authService.logout();
  }

  buscar( termino: string ){
    this.router.navigateByUrl(`/dashboard/buscar/${termino}`);
  }



}
