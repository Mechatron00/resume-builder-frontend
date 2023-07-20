import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { education } from 'src/app/resume-builder/model/education';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService 
{
  
  resumeid!:any;
  constructor(private http:HttpClient, private appconfig:AppConfigService) { }
  private URL=this.appconfig.API_URL;

  addEducation(id:string,education:education)
  {
    return this.http.post<education>(`${this.URL}/education/${id}`,education);
  }
  updateEduaction(id:any, education:education)
  {
    return this.http.put<education>(`${this.URL}/education/${id}`,education);
  }
  deleteEducation(id:string,resumeid:string)
  {
    const params={resumeid:resumeid}
    return this.http.delete(`${this.URL}/education/${id}`,{params:params});
  }
}
