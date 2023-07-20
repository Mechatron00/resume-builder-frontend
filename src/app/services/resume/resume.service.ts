import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resume } from 'src/app/resume-builder/model/resume';  
import { AppConfigService } from 'src/appconfig.service';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  resume:any='';
  resumeid!:string;

  constructor(private http:HttpClient,
    private appConfig:AppConfigService) { }

  
   private URL=this.appConfig.API_URL;
  getResume(id:string)
  {
    return this.http.get<resume>(`${this.URL}/resume/getresume/${id}`)
  }
  createResume()
  {
    return this.http.post<resume>(`${this.URL}/resume/`,undefined)
  }
}
