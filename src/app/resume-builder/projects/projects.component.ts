import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { projects } from '../model/projects';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit
{
  @Input() resumeid!:string;
  projectsForm!:FormGroup;
  constructor(private projectsService:ProjectsService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.projectsForm = new FormGroup(
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
    const id= this.projectsService.resumeid;
    const project:projects = this.projectsForm.getRawValue() as projects;
    
    this.projectsService.addProject(id,project).subscribe(
      (data)=>
      {
        
        this.snackbarService.openSnackBar("Project  added successfully", "OK");
      }
    );
    this.projectsForm.reset(
      {
        title:project.title,
    startDate:project.startDate,
    endDate:project.endDate,
    weblink:project.weblink,
    description:project.description,
      }
    )
    
  }
  addAnother()
  {
    this.projectsForm.reset(
      {
        title:'',
    startDate:'',
    endDate:'',
    weblink:'',
    description:'',
      }
    )
  }

}
