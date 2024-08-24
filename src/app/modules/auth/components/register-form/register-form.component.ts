import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';

import { CustomValidators } from '@utils/validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent{

  formValidate = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  })

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });
  status: string = 'init';
  statusValidated: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showRegister = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, name, password } = this.form.getRawValue();
      this.authService.registerAndLogin(email,name,password)
      .subscribe({
        next: ()=>{
          this.status = 'success';
          this.router.navigate(['/app'])
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

  available(){
    if (this.formValidate.valid) {
      this.status = 'loading';
      const { email } = this.formValidate.getRawValue();
      this.authService.isAvailable(email)
      .subscribe({
        next: (rta)=>{
          this.statusValidated = 'success';
          if(rta.isAvailable){
            this.showRegister= true;
            this.form.controls.email.setValue(email)
          }else{
            this.router.navigate(['/login'], {
              queryParams: {email}
            })

          }
        },
        error: (error)=>{
          this.statusValidated = 'failed';
          console.log(error)
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

}
