import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { skills } from '../model/skills';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit
{
  @Input() resumeid!:string;
  skillsForm!:FormGroup;
  constructor(private skillsService:SkillsService,
   private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.skillsForm = new FormGroup(
      {
        skill:new FormControl({value:'', disabled:false}),
        competetence:new FormControl({value:'', disabled:false})
      }
    )
  }

  addSkill()
  {
    const id= this.skillsService.resumeid;
   const skill:skills = this.skillsForm.getRawValue() as skills;
   

   this.skillsService.addSkill(id,skill).subscribe(
    (data)=>{
     
      this.snackbarService.openSnackBar("Skill  added successfully", "OK");
    }
   );

  this.skillsForm.reset(
    {
      skill:skill.skill,
      competetence:skill.competetence
    }
  )
   
  }
  addAnother()
  {
    this.skillsForm.reset(
      {
        skill:'',
        competetence:''
      }
    )
  }

}
