import { Component } from '@angular/core';
import { Login } from 'src/app/models/login';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validations/password-validator';
import { emailValidator } from 'src/app/validations/email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginEntry: Login | undefined = undefined;
  public loginForm = this.formBuilder.group(
    {
      email: ['', [Validators.required,emailValidator()]],
      password: ['',[Validators.required, passwordValidator()]],
      checkbox: false
    }
  )
  constructor(private formBuilder: FormBuilder) {}

  signin(){
    this.loginEntry = this.loginForm.value as Login;
    console.log(this.loginEntry)
  }

  isInvalid(controlName: string): boolean {
    let control = this.loginForm.get(controlName)!;

    if (!(control.invalid && (control.dirty || control.touched))) return false;

    if (control.errors?.['required']) return true;
    if (control.errors?.['minlength']) return true;
    if (control.errors?.['maxlength']) return true;
    if (control.errors?.['max']) return true;
    if (control.errors?.['min']) return true;
    if (control.errors?.['passwordFormat']) return true;
    if (control.errors?.['emailFormat']) return true;

    return false;
  }
  isValid(controlName: string) {
    let control = this.loginForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }
  getControl(controlName: string) {
    return this.loginForm.get(controlName)!;
  }
  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }

  
}
