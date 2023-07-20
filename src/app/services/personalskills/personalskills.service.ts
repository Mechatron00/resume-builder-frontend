import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personalskills } from 'src/app/resume-builder/model/personalskills';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalskillsService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;

    addPersonalSkill(id:string,personalskill:personalskills)
    {
      return this.http.post<personalskills>(`${this.URL}/personalskills/${id}`,personalskill);
    }
    updatePersonalskills(id:any, personalskill:personalskills)
    {
      return this.http.put<personalskills>(`${this.URL}/personalskills/${id}`,personalskill);
    }
    deletePersonalskills(id:string,resumeid:string)
    {
      const params = {resumeid:resumeid}
      return this.http.delete(`${this.URL}/personalskills/${id}`,{params:params});
    }
}
