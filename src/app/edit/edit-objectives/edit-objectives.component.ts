import { Component, OnInit } from '@angular/core';
import { EditObjectivesService } from './edit-objectives.service';
import { ObjectivesService } from 'src/app/services/objectives/objectives.service';
import { objectives } from 'src/app/resume-builder/model/objectives';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-objectives',
  templateUrl: './edit-objectives.component.html',
  styleUrls: ['./edit-objectives.component.css']
})
export class EditObjectivesComponent implements OnInit
{
  objective!:objectives;
  editObjectivesForm!:FormGroup;
  constructor(
    private editObjectiveService:EditObjectivesService,
    private objectiveService:ObjectivesService,
    private router:Router,
    private snackbarServices:SnackbarService,
    ){}
  ngOnInit(): void 
  {
    this.objective = this.editObjectiveService.objective;
    this.editObjectivesForm = new FormGroup(
      {
        objective:new FormControl({value:this.objective.objective,disabled:false}),
      }
    )
  }

  editObjective()
  {
    const id = this.objective.id;
    const objective = this.editObjectivesForm.getRawValue() as objectives;

    this.objectiveService.updateObjective(id,objective).subscribe(
      data=>{
        this.router.navigate(['dashboard']);
        this.snackbarServices.openSnackBar("Edited successfully", "OK");
      }
    )
  }
}
