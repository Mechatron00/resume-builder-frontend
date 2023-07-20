import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { skills } from 'src/app/resume-builder/model/skills';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;

    addSkill(id:string,skill:skills)
    {
      return this.http.post<skills>(`${this.URL}/skills/${id}`,skill);
    }
    updateSkill(id:any, skill:skills)
    {
      return this.http.put<skills>(`${this.URL}/skills/${id}`,skill);
    }
    deleteSkill(id:string, resumeid:string)
    {
      const params ={resumeid:resumeid}
      return this.http.delete(`${this.URL}/skills/${id}`,{params:params});
    }
}
