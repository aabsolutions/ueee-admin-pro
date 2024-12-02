import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}


  canActivate(): Observable<boolean> {
    return this.authService.validarToken()
    .pipe(
      tap(
        authOk => {
          if(!authOk){
            console.log(authOk);
            this.router.navigateByUrl('login');
          }
        }
      )
    );

  }
}
