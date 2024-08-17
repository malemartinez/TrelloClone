import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestStatus } from '@models/requestStatus.model';

import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent implements OnInit {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: RequestStatus = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      this.authService.recovery(email)
      .subscribe({
        next: (rta)=>{
          this.status = 'success';
          this.emailSent = true;
          // if(rta.recoveryToken){
          //   const token = rta.recoveryToken
          //   this.router.navigate(['/recovery'], {
          //     queryParams: { token }
          //   })
          // }else{
          //   this.router.navigate(['/login'])
          // }
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
