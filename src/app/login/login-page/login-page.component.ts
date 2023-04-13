import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  formGroup!: FormGroup;
  isInvalidCredential:boolean =  false;
  errorMessage: String = '';
  submitted:boolean = false;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProcess(){
    this.isInvalidCredential = false;
    if(this.formGroup.valid){
      this.submitted=true;
      this.authService.login(this.formGroup.value).subscribe(result =>{
        this.submitted = false;
        if(result.is_success){
          this.router.navigate(['movies']);
          localStorage.setItem('token',result.data.token);
        }
        },error =>{
          this.errorMessage = "Invalid Login Credentials";
          this.isInvalidCredential = true;
          this.submitted = false;
        });
      }
      else{
        this.isInvalidCredential = true;
        this.errorMessage = "Fields are empty"
      }
    }
  }

