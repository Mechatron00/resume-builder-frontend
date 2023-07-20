import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { education } from 'src/app/resume-builder/model/education';
import { EducationService } from 'src/app/services/education/education.service';
import { AddEducationService } from './add-education.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit
 {
  constructor(private educationService: EducationService,
    private router:Router,
    private addEducationService:AddEducationService,
    private snackbarService:SnackbarService
    ) {}

  addEeducationForm!: FormGroup;

  ngOnInit(): void {
    this.addEeducationForm = new FormGroup({
      institute_name: new FormControl({ value: "", disabled: false }),
      degree: new FormControl({ value: "", disabled: false }),
      branch: new FormControl({ value: "", disabled: false }),
      startDate: new FormControl({ value:new Date(), disabled: false }),
      endDate: new FormControl({ value:new Date(), disabled: false }),
      score: new FormControl({ value: "", disabled: false }),
    });
  }

  addEducation() 
  {
  
   
    const id = this.addEducationService.resumeid;
     const education:education = this.addEeducationForm.getRawValue() as education;
     this.educationService.addEducation(id,education).subscribe(
     data=> {this.router.navigate(['dashboard']);
     this.snackbarService.openSnackBar("Education added successfully!", "OK");
    }
   );
   
  }
  
  
 

  addAnother() {
    this.addEeducationForm.reset({
      institute_name: "",
      degree: "",
      branch: "",
      startDate: new Date(),
      endDate: new Date(),
      score:'',
    });
  }
}
