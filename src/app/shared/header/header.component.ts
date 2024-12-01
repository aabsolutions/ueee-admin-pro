import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // public usuario: string;

  // constructor( private usuarioService: UsuarioService,
  //              private router: Router ) {
  //   this.usuario = usuarioService.usuario;
  // }

  logout() {
    // this.usuarioService.logout();
  }

  buscar( termino: string ){
    // this.router.navigateByUrl(`/dashboard/buscar/${termino}`);
  }


}
