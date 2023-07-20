import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { experience } from 'src/app/resume-builder/model/experience';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;

    addExperience(id:string,experience:experience)
    {
      return this.http.post<experience>(`${this.URL}/experience/${id}`,experience);
    }
    updateExperience(id:any, experience:experience)
    {
      return this.http.put<experience>(`${this.URL}/experience/${id}`,experience);
    }
    deleteExperience(id:string,resumeid:string)
    {
      const params={resumeid:resumeid}
      return this.http.delete(`${this.URL}/experience/${id}`,{params:params})
    }
}
