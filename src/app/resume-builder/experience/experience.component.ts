import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { experience } from '../model/experience';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit
{
  experienceForm!: FormGroup;
  @Input() resumeid!:string;
  constructor(private experienceService:ExperienceService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.experienceForm = new FormGroup(
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
    const id= this.experienceService.resumeid;
    const experience:experience = this.experienceForm.getRawValue() as experience;
    

    this.experienceService.addExperience(id,experience).subscribe(
      (data)=>
      {
        
        this.snackbarService.openSnackBar("Experience added successfully", "OK");
      }
    );
    this.experienceForm.reset(
      {
        company:experience.company,
        location:experience.location,
        position:experience.position,
        startDate:experience.startDate,
        endDate:experience.endDate,
        description:experience.description,
      }
    )
    
  }

  addAnother()
  {
    this.experienceForm.reset(
      {
        company:'',
        location:'',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      }
    )
  }
}
