import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    {
      return this.usuariosSvr.validarToken()
        .pipe(
          tap(
            authOk => {
              if(!authOk){
                this.router.navigateByUrl('/login');
              }
            }
          )
        );
    }
};
