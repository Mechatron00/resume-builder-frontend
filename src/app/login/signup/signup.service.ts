import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/resume-builder/model/User';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isSignup:boolean=false;
  constructor(private http:HttpClient,
    private config:AppConfigService) { }
    private URL = this.config.API_URL;

    signup(user:User)
    {
      this.isSignup=true;
      return this.http.post<User>(`${this.URL}/user`,user);
    }

    setResumeId( id:string, resumeId:string)
    {

      return this.http.put<User>(`${this.URL}/user/${id}`,resumeId);
    }

   
}
