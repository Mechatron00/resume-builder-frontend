import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/app/resume-builder/model/User';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http:HttpClient,
    private config:AppConfigService) { }

    private URL = this.config.API_URL;

  getByEmailAndPassword(userEmail:any, password:any)
  {
    const params = { userEmail: userEmail, password: password };
    return this.http.get<User>(`${this.URL}/user`,{ params: params })
    .pipe(
      tap(response => {
        
        sessionStorage.setItem('token', response.id);
       
        sessionStorage.setItem('user', JSON.stringify(response.id));
        sessionStorage.setItem('resumeID', JSON.stringify(response.resumeId));
      })
      );
    
  }
}
