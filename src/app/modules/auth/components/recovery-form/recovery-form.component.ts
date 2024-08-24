import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';

import { CustomValidators } from '@utils/validators';


@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent{

  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  token:string = '';

  constructor(
    private formBuilder: FormBuilder ,
    private authService : AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe(param => {
      const token = param.get('token')
      if(token){
        this.token=token;
      }else{
        this.router.navigate(['/login'])
      }
    })
  }

  recovery() {
    if (this.form.valid) {
      const {newPassword} = this.form.getRawValue();
      this.status = 'loading'
      this.authService.changePassword(newPassword , this.token)
      .subscribe({
        next: ()=>{
          this.status = 'success'
          //Aqui pondría otra pantalla o un modal donde me diga que fué exitodo el cambio de contraseña
          this.router.navigate(['/login'])
        },
        error: (error)=>{
          this.status = 'failed';
          console.log(error)
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

}
