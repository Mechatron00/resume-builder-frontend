import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { projects } from 'src/app/resume-builder/model/projects';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;

    addProject(id:string,project:projects)
    {
      return this.http.post<projects>(`${this.URL}/project/${id}`,project);
    }
    updateProject(id:any, project:projects)
    {
      return this.http.put<projects>(`${this.URL}/project/${id}`,project);
    }
    deleteProject(id:string,resumeid:string)
    {
      const params={resumeid:resumeid}
      return this.http.delete(`${this.URL}/project/${id}`,{params:params});
    }
}
