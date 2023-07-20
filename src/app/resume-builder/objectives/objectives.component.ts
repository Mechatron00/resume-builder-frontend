import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ObjectivesService } from 'src/app/services/objectives/objectives.service';
import { objectives } from '../model/objectives';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.css']
})
export class ObjectivesComponent implements OnInit
{
  objectivesForm!:FormGroup;
  @Input() resumeid!:string;
  constructor(private objectiveService:ObjectivesService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.resumeid = this.objectiveService.resumeid;
    this.objectivesForm = new FormGroup(
      {
        objective:new FormControl({value:'',disabled:false}),
      }
    )
  }

  addObjective()
  {
    const objective:objectives = this.objectivesForm.getRawValue() as objectives;
    

    // const resumeid:string = sessionStorage.getItem('resumeid') as string;
    //  console.log("resume id from objective component",resumeid);


     const id= this.objectiveService.resumeid;

    this.objectiveService.addObjectives(id,objective).subscribe(
      (data)=>
      {
        
        this.snackbarService.openSnackBar("Objective added successfully", "OK");
      },
      

    )
    this.objectivesForm.reset(
      {
        objective:objective.objective,
      }
    )
    
  }

  addAnother()
  {
    this.objectivesForm.reset(
      {
        objective:'',
      }
    )
  }

}
