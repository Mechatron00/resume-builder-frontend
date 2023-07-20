import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { objectives } from 'src/app/resume-builder/model/objectives';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {

  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;


    addObjectives(id:any,objective:objectives)
    {
    //  const params={resumeid:resumeid}
      return this.http.post<objectives>(`${this.URL}/objective/${id}`,objective);
    }
    updateObjective(id:any, objective:objectives)
    {
      return this.http.put<objectives>(`${this.URL}/objective/${id}`,objective);
    }
    deleteObjective(id:string,resumeid:any)
    {
      const params={resumeid:resumeid}
      return this.http.delete(`${this.URL}/objective/${id}`,{params:params});
    }
}
