import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from 'src/app/resume-builder/model/User';
import { ResumeService } from 'src/app/services/resume/resume.service';
import { Router } from '@angular/router';
import { faGithub, faGithubAlt, faGithubSquare, faLinkedin, faLinkedinIn, faSquareGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  user!:User;
  loginForm!:FormGroup;
  hide = true;
  resumeId!:string;

  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
 
  notPresent:boolean = false;
  Alert = {
    type: 'warning',
    message: 'Wrong email or password!',
  }

  constructor(private loginService:LoginService,
    private resumeService:ResumeService,
    private router:Router,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.loginForm = new FormGroup(
      {
        userEmail:new FormControl({value:'',disabled:false},{validators:[Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$')]}),
        password:new FormControl({value:'',disabled:false}),
      }
    )
    
  }


  login()
  {
    
    const userLogin = this.loginForm.getRawValue();
    
    const email= userLogin.userEmail;
    const password = userLogin.password;
    this.loginService.getByEmailAndPassword(email,password).subscribe(
      (data)=>
      {
          this.user = data
          const resumeid = this.user.resumeId;
          this.resumeId =resumeid;
          this.resumeService.resumeid = resumeid;
          this.snackbarService.openMessageBar("Welcome back!");
          this.router.navigate(['dashboard'])
      },
      (error)=>
      {
        this.notPresent = true;
      }

    )
  }
}
