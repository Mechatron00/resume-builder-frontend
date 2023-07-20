import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { CreateresumeService } from 'src/app/resume-builder/create-resume/createresume.service';
import { User } from 'src/app/resume-builder/model/User';
import { faGithub, faGithubAlt, faGithubSquare, faLinkedin, faLinkedinIn, faSquareGithub,  } from '@fortawesome/free-brands-svg-icons';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
  user!:User;
  id!:string;
  signupForm!:FormGroup;
  hide = true;
  see=true;
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  Alert = {
      type: 'warning',
      message: 'Email alredy used.Please use another email.Or login to your account',
    }

    ispresent:boolean=false;
  constructor(private signupService:SignupService,
    private router:Router,
    private createResumeService:CreateresumeService,
    
    ){}
  ngOnInit(): void 
  {
    this.signupForm = new FormGroup(
      {
       
        userEmail:new FormControl({value:'',disabled:false},{validators:[Validators.pattern( '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$')]}),
        password:new FormControl({value:'',disabled:false},{validators:[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')]}),
        confirmPassword:new FormControl({value:'',disabled:false},{validators:[Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')]}),
    
      }
    )
    
  }
  signup()
  {
    const user:User = this.signupForm.getRawValue() as User;
    this.signupService.signup(user).subscribe(
      (data)=>{
         this.user= data;
        this.createResumeService.id = this.user.id;
        
        this.router.navigate(['createresume'])
      },
      (error)=>
      {
        this.ispresent = true;
        // alert("Email alredy used ")
      }
    )
  }

  confirmPassword():boolean
  {
    const user:User = this.signupForm.getRawValue() as User;
    const password:string = user.password;
    const confirmPassword:string = user.confirmPassword;

    if(password != confirmPassword)
    {
      return true;
    }
    else return false;

  }
}
