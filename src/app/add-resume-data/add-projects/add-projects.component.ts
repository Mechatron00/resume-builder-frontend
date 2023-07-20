import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { projects } from 'src/app/resume-builder/model/projects';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { AddProjectsService } from './add-projects.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent {
  addProjectsForm!:FormGroup;
  constructor(private projectsService:ProjectsService,
    private router:Router,
    private addProjectService:AddProjectsService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.addProjectsForm = new FormGroup(
      {
        title:new FormControl({value:'', disabled:false}),
    startDate:new FormControl({value:new Date(), disabled:false}),
    endDate:new FormControl({value:new Date(), disabled:false}),
    weblink:new FormControl({value:'', disabled:false}),
    description:new FormControl({value:'', disabled:false}),
      }
    )
  }
  addProject()
  {
   
  
     const id = this.addProjectService.resumeid;
      const project:projects = this.addProjectsForm.getRawValue() as projects;
      this.projectsService.addProject(id,project).subscribe(
              data=>{ 
                this.router.navigate(['dashboard']);
                this.snackbarService.openSnackBar("Project added successfully", "OK");
              }
    )
   
  }
  count=0;
  getCount()
  {
    const description:string[] =this.addProjectsForm.get('description')?.value as Array<string>
    this.count = description.length;
  
  }
}
