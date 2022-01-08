import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  createdSuccessful?: boolean;
  nameEmpty: boolean = false;
  emailEmpty: boolean = false;
  passEmpty: boolean = false;

  constructor( 
    private authenticationService: AuthenticationService,
    private router: Router 
  ) { }

  formCreate =  new FormGroup({
    name: new FormControl('', [Validators.minLength(3) ,Validators.maxLength(16)]),
    email: new FormControl('', [Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
  });

  ngOnInit(): void {
    //this.createUser();
  }
  
  async createUser () {
    console.log(this.formCreate.value);
    const petitionRes = await this.authenticationService.createUser(this.formCreate.value);
    this.createdSuccessful = petitionRes.data.userCreateUser.ok;
    setTimeout(() => {
      if (petitionRes.data.userCreateUser.ok) {
        this.router.navigateByUrl('/login');
      }
    },2000)
  }

  eventInput (term: string) {
    if (term === 'name') {
      if (this.formCreate.controls[term].value.length <= 0) {
        this.nameEmpty = true;
      } else {
        this.nameEmpty = false;
      }
    } else if (term === 'email') {
      if (this.formCreate.controls[term].value.length <= 0) {
        this.emailEmpty = true;
      } else {
        this.emailEmpty = false;
      }
    } else if (term === 'pass') {
      if (this.formCreate.controls[term].value.length <= 0 && this.formCreate.controls[term].value.length <= 16) {
        this.passEmpty = true;
      } else {
        this.passEmpty = false;
      }
    }

  }


}
