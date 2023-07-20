import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { projects } from 'src/app/resume-builder/model/projects';
import { EditProjectService } from './edit-project.service';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit
{
  project!:projects;
  editProjectForm!:FormGroup;
  constructor(
    private editProjectService:EditProjectService,
    private projectService:ProjectsService,
    private router:Router,
    private snackbarService:SnackbarService
  ){}
  ngOnInit(): void 
  {
    this.project = this.editProjectService.project;

    if(this.project)
    {
      this.editProjectForm = new FormGroup(
        {
          title:new FormControl({value: this.project.title, disabled:false}),
      startDate:new FormControl({value: this.project.startDate, disabled:false}),
      endDate:new FormControl({value: this.project.endDate, disabled:false}),
      weblink:new FormControl({value: this.project.weblink, disabled:false}),
      description:new FormControl({value: this.project.description, disabled:false}),
        }
      )
    }
    else
    {
      this.editProjectForm = new FormGroup(
        {
          title:new FormControl({value:'', disabled:false}),
      startDate:new FormControl({value:new Date(), disabled:false}),
      endDate:new FormControl({value:new Date(), disabled:false}),
      weblink:new FormControl({value:'', disabled:false}),
      description:new FormControl({value:'', disabled:false}),
        }
      )
    }
  }

  editProject()
  {
    const id = this.project.id;
    const project = this.editProjectForm.getRawValue() as projects;
    this.projectService.updateProject(id,project).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Edited successfully", "OK");
      }
    )

  }

}
