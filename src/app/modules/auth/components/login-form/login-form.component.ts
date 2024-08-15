import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { RequestStatus } from '@models/requestStatus.model';
import { AuthService } from '@services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(8)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: RequestStatus = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService : AuthService
  ) {
    this.route.queryParamMap.subscribe(param => {
      const email = param.get('email')
      if(email){
        this.form.controls.email.setValue(email)
      }
    })
  }

  ngOnInit(): void {
  }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      this.authService.login(email,password)
      .subscribe({
        next: () =>{
          this.router.navigate(['/app'])
          this.status = 'success'
        },
        error: ()=>{
          this.status = 'failed'
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

}
