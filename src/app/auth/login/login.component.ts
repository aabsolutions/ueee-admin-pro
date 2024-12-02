import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import Swal from 'sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, FormsModule, CommonModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public formSumitted = false;

  public loginForm: FormGroup = this.fb.group({
    email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });

  constructor( private router: Router,
               private fb: FormBuilder,
               private ngZone: NgZone,
               private authSvr: AuthService
               ){
  }


  loginUsuario(){

    this.authSvr.login( this.loginForm.value )
      .subscribe( resp => {

        console.log(resp);

        if ( this.loginForm.get('remember')?.value ){ 
          localStorage.setItem('email', this.loginForm.get('email')?.value );
        } else {
          localStorage.removeItem('email');
        }

        // Navegar al Dashboard
         this.ngZone.run(() => {
        this.router.navigateByUrl('/dashboard');
      })
      }, (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error' );
      });
  }

}
