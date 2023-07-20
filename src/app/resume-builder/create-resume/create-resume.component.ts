import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume/resume.service';
import { CreateresumeService } from './createresume.service';
import { Router, RouterLink } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit
 {
  userid!:string;
  @Input() resumeid!:any;
  constructor(private resumeService:ResumeService,
    private createResumeService:CreateresumeService,
    private router:Router,
    private snackbarService:SnackbarService,
    ){}

  ngOnInit(): void 
  {
    this.resumeid = this.createResumeService.resumeid;
  }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  submitResume()
  {
    this.resumeService.resumeid = this.createResumeService.resumeid;
    this.snackbarService.openMessageBar("Now log in to your account,");
    this.router.navigate(['login'])
  }
}
