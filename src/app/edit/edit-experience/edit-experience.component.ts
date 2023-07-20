import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/resume-builder/model/experience';
import { EditExperienceService } from './edit-experience.service';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit
{
  experience!:experience;
  editExperienceForm!:FormGroup;

  constructor(
    private editExperienceService:EditExperienceService,
    private experienceService:ExperienceService,
    private router:Router,
    private snackbarService:SnackbarService
  ){}
  ngOnInit(): void 
  {
   this.experience = this.editExperienceService.experience;

   if(this.experience)
   {
    this.editExperienceForm = new FormGroup(
      {
        company:new FormControl({value:this.experience.company, disabled:false}),
        location:new FormControl({value:this.experience.location, disabled:false}),
        position:new FormControl({value:this.experience.position, disabled:false}),
        startDate:new FormControl({value:this.experience.startDate, disabled:false}),
        endDate:new FormControl({value:this.experience.endDate, disabled:false}),
        description:new FormControl({value:this.experience.description, disabled:false}),
      }
    )
   }
   else
   {
    this.editExperienceForm = new FormGroup(
      {
        company:new FormControl({value:'', disabled:false}),
        location:new FormControl({value:'', disabled:false}),
        position:new FormControl({value:'', disabled:false}),
        startDate:new FormControl({value:new Date(), disabled:false}),
        endDate:new FormControl({value:new Date(), disabled:false}),
        description:new FormControl({value:'', disabled:false}),
      }
    )
   }

  }
  editExperience()
  {
    const id = this.experience.id;
    const experience = this.editExperienceForm.getRawValue() as experience;
    this.experienceService.updateExperience(id, experience).subscribe(
      data =>{
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Edited successfully", "OK");
      }
    )
  }


}
