import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { education } from 'src/app/resume-builder/model/education';
import { EditEducationService } from './edit-education.service';
import { EducationService } from 'src/app/services/education/education.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit
 {
  education!:education;
  editEducationForm!:FormGroup;

  constructor(
    private editEducationService:EditEducationService,
    private educationService:EducationService,
    private router:Router,
    private snackbarService:SnackbarService
  ){}
  ngOnInit(): void 
  {
    this.education = this.editEducationService.education;

    if(this.education)
    {
      this.editEducationForm = new FormGroup({
        institute_name: new FormControl({ value:this.education.institute_name, disabled: false }),
        degree: new FormControl({ value:this.education.degree, disabled: false }),
        branch: new FormControl({ value:this.education.branch, disabled: false }),
        startDate: new FormControl({ value:this.education.startDate, disabled: false }),
        endDate: new FormControl({ value:this.education.endDate, disabled: false }),
        score: new FormControl({ value:this.education.score, disabled: false }),
      });
    }
    else
    {
      this.editEducationForm = new FormGroup({
        institute_name: new FormControl({ value: "", disabled: false }),
        degree: new FormControl({ value: "", disabled: false }),
        branch: new FormControl({ value: "", disabled: false }),
        startDate: new FormControl({ value:new Date(), disabled: false }),
        endDate: new FormControl({ value:new Date(), disabled: false }),
        score: new FormControl({ value: "", disabled: false }),
      });
    }
  }

  editEducation()
  {
    const id = this.education.id;
    const education = this.editEducationForm.getRawValue() as education;

    this.educationService.updateEduaction(id,education).subscribe(
      data => {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Edited successfully", "OK");
      }
    )
  }
  
}
