import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user-credentials',
  templateUrl: './create-user-credentials.component.html',
  styleUrls: ['./create-user-credentials.component.css']
})
export class CreateUserCredentialsComponent implements OnInit {
  userCredentialForm = this.fb.group({
    accessRights: [''],
    username: [''],
    password: ['']
  });
  constructor(private fb: FormBuilder) { 
    //this.userCredentialForm = 
  }

  ngOnInit() {
  }
  createUser(){
    
  }
}
