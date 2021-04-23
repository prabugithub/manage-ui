import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isLoggedIn= false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  onSubmit() {
    console.log('login validation!');
    
    this.loginService.login(this.loginForm.get('userName').value, this.loginForm.get('password').value).subscribe((res)=> {
      console.log(res);
      this.isLoggedIn = true;
      this.router.navigateByUrl('user-dashboard')
      sessionStorage.setItem('token', JSON.stringify(res));
    });
   
  }

}
