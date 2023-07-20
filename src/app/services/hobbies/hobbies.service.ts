import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hobbies } from 'src/app/resume-builder/model/hobbies';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;

    addHobbies(id:string,hobby:hobbies)
    {
      return this.http.post<hobbies>(`${this.URL}/hobbies/${id}`,hobby);
    }
    updateHobbies(id:any,hobby:hobbies)
    {
      return this.http.put<hobbies>(`${this.URL}/hobbies/${id}`,hobby);
    }
    deleteHobbies(id:string, resumeid:string)
    {
      const params ={resumeid:resumeid}
      return this.http.delete(`${this.URL}/hobbies/${id}`,{params:params});
    }
}
