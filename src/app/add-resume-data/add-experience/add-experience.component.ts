import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { experience } from 'src/app/resume-builder/model/experience';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { AddExperienceService } from './add-experience.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent 
{
  addExperienceForm!: FormGroup;
  constructor(private experienceService:ExperienceService,
    private router:Router,
    private addExperienceService:AddExperienceService,
    private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.addExperienceForm = new FormGroup(
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


addExperience()
{
    
   
     const id = this.addExperienceService.resumeid;
      const experience:experience = this.addExperienceForm.getRawValue() as experience;
      this.experienceService.addExperience(id,experience).subscribe(
      data=> {
      this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Experience added successfully", "OK");
      }
    )
  
}
count=0;
getCount()
{
  const description:string[] =this.addExperienceForm.get('description')?.value as Array<string>
  this.count = description.length;

}

}