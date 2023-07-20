import { Component, OnInit } from '@angular/core';
import { personaldetails } from 'src/app/resume-builder/model/personaldetails';
import { EditPersonalDetailsService } from './edit-personal-details.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaldetailsService } from 'src/app/services/personaldetails/personaldetails.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-personal-details',
  templateUrl: './edit-personal-details.component.html',
  styleUrls: ['./edit-personal-details.component.css']
})
export class EditPersonalDetailsComponent implements OnInit
{
  personalDetails!:personaldetails;
  editDetailsForm!:FormGroup;
  options:string[]=['Male','Female']
  constructor(
    private router:Router,
    private editDetails:EditPersonalDetailsService,
    private personalDetailsService:PersonaldetailsService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.personalDetails = this.editDetails.personalDetails;
 if(this.personalDetails)
 {
  this.editDetailsForm = new FormGroup(
    {
      fname: new FormControl({ value:this.personalDetails.fname, disabled: false }),
      lname: new FormControl({ value:this.personalDetails.lname, disabled: false }),
      email: new FormControl({ value:this.personalDetails.email, disabled: false }),
      gender: new FormControl({ value:this.personalDetails.gender, disabled: false }),
      contact: new FormControl({ value:this.personalDetails.contact, disabled: false }),
      city:new FormControl({value:this.personalDetails.city, disabled:false}),
      state: new FormControl({ value:this.personalDetails.state, disabled: false }),
      dob: new FormControl({ value:this.personalDetails.dob, disabled: false }),
      linkedin_link: new FormControl({ value:this.personalDetails.linkedin_link, disabled: false }),
      githublink: new FormControl({ value:this.personalDetails.githublink, disabled: false }),
      website: new FormControl({ value:this.personalDetails.website, disabled: false }), 
    }
  )
 }
 else
 {
   this.initializeForm();
 } 
    
  }

  initializeForm()
  {
    this.editDetailsForm = new FormGroup(
      {
        fname: new FormControl({ value:'', disabled: false }),
        lname: new FormControl({ value:'', disabled: false }),
        email: new FormControl({ value:'', disabled: false }),
        gender: new FormControl({ value:'', disabled: false }),
        contact: new FormControl({ value:'', disabled: false }),
        city:new FormControl({value:'', disabled:false}),
        state: new FormControl({ value:'', disabled: false }),
        dob: new FormControl({ value:'',  disabled:false }),
        linkedin_link: new FormControl({value: '', disabled: false }),
        githublink: new FormControl({ value:'', disabled: false }),
        website: new FormControl({ value:'', disabled: false }), 
      }
    )
  }

  editPersonalDetails()
  {
    const id= this.editDetails.personalDetails.id;
    const details = this.editDetailsForm.getRawValue() as personaldetails;
    this.personalDetailsService.updatePersonalDetails(id,details).subscribe(
     data=> {
      this.router.navigate(['dashboard']);
      this.snackbarService.openSnackBar("Edited successfully", "OK");
    }
    )

  }
}
