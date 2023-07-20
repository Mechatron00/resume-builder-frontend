import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {

  images:string[]=[
     
    "../../../assets/back3.png",

     '../../../assets/back1.png',
     '../../../assets/dash-1.png',
     "../../../assets/back4.jpg",
     "../../../assets/back5.png"

  ]
  description:string[]=[
     
    'Welcome to the Resume-Builder Application.',
    'Create your resume easily.',
    'With your dashboard manage your data.',
    'Resume at one click.',
    'Template as you want.',
    

 ]
 colors:string[]=
 [
  'black',
  'white',
 ]
constructor(private router:Router){}
  signup()
  {
    this.router.navigate(['signup'])
  }
  login ()
  {
    this.router.navigate(['login'])
  }
}
