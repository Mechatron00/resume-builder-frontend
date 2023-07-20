import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { personaldetails } from 'src/app/resume-builder/model/personaldetails';
import { personalskills } from 'src/app/resume-builder/model/personalskills';
import { PersonalskillsService } from 'src/app/services/personalskills/personalskills.service';
import { AddPersonalskillsService } from './add-personalskills.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-personalskills',
  templateUrl: './add-personalskills.component.html',
  styleUrls: ['./add-personalskills.component.css']
})
export class AddPersonalskillsComponent implements OnInit {
  addPersonalSkillForm!:FormGroup;
  constructor(private personalSkillServices:PersonalskillsService,
    private router:Router,
    private addPersonalskillService:AddPersonalskillsService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.addPersonalSkillForm = new FormGroup(
      {
        description:new FormControl({value:'', disabled:false})
      }
    )
  }

  addPersonalSkill()
  {
   
    
     const id = this.addPersonalskillService.resumeid;
      const personalSkill:personalskills = this.addPersonalSkillForm.getRawValue() as personalskills;
      this.personalSkillServices.addPersonalSkill(id,personalSkill).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Personal skill added successfully", "OK");
      }
    )
  
  }
  count=0;
  getCount()
  {
    const description:string[] =this.addPersonalSkillForm.get('description')?.value as Array<string>
    this.count = description.length;
  
  }
}
