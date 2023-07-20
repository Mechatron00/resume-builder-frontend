import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { objectives } from 'src/app/resume-builder/model/objectives';
import { ObjectivesService } from 'src/app/services/objectives/objectives.service';
import { AddObjectivesService } from './add-objectives.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-objectives',
  templateUrl: './add-objectives.component.html',
  styleUrls: ['./add-objectives.component.css']
})
export class AddObjectivesComponent {
  addObjectivesForm!:FormGroup;
  constructor(private objectiveService:ObjectivesService,
    private addObjectiveService:AddObjectivesService,
    private router:Router,
    private snackbarService:SnackbarService,
    ){}
  ngOnInit(): void 
  {
    this.addObjectivesForm = new FormGroup(
      {
        objective:new FormControl({value:'',disabled:false}),
      }
    )
  }

  addObjective()
  {
   
  
     const id = this.addObjectiveService.resumeid;
    console.log("id:",id);
    const objective:objectives=this.addObjectivesForm.getRawValue() as objectives;
    this.objectiveService.addObjectives(id,objective).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Objective added successfully","OK");
      }
    )
  
  }
  count=0;
getCount()
{
  const description:string[] =this.addObjectivesForm.get('objective')?.value as Array<string>
  this.count = description.length;

}

}
