import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonalskillsService } from 'src/app/services/personalskills/personalskills.service';
import { personalskills } from '../model/personalskills';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-personalskills',
  templateUrl: './personalskills.component.html',
  styleUrls: ['./personalskills.component.css']
})
export class PersonalskillsComponent implements OnInit
{
  @Input() resumeid!:string;
  personalSkillForm!:FormGroup;
  constructor(private personalSkillServices:PersonalskillsService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.personalSkillForm = new FormGroup(
      {
        description:new FormControl({value:'', disabled:false})
      }
    )
  }

  addPersonalSkill()
  {
    const id= this.personalSkillServices.resumeid;
    const personalSkill:personalskills = this.personalSkillForm.getRawValue() as personalskills;
    

    this.personalSkillServices.addPersonalSkill(id,personalSkill).subscribe(
      (data)=>
      {
        this.snackbarService.openSnackBar("Personal skill added successfully", "OK");
        
      }
    );
    this.personalSkillForm.reset(
      {
        description:personalSkill.description
      }
    )
    
  }
  addAnother()
  {
    this.personalSkillForm.reset(
      {
        description:''
      }
    )
  }
}
