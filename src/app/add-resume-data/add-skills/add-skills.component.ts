import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { skills } from 'src/app/resume-builder/model/skills';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { AddSkillsService } from './add-skills.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  addSkillsForm!:FormGroup;
  constructor(private skillsService:SkillsService,
    private router:Router,
    private addSkillsService:AddSkillsService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.addSkillsForm = new FormGroup(
      {
        skill:new FormControl({value:'', disabled:false}),
        competetence:new FormControl({value:'', disabled:false})
      }
    )
  }

  addSkill()
  {
    
     
   
     const id = this.addSkillsService.resumeid;
      const skill:skills = this.addSkillsForm.getRawValue() as skills;
      this.skillsService.addSkill(id,skill).subscribe(
              data=>{ 
                this.router.navigate(['dashboard']);
                this.snackbarService.openSnackBar("Skill added successfully", "OK");
              }
    )
  
  }


}
