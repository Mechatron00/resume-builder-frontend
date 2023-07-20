import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaldetails } from 'src/app/resume-builder/model/personaldetails'; 
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root',
})
export class PersonaldetailsService {
  resumeId:any='';
  constructor(private http: HttpClient,
    private appconfig:AppConfigService) {}
    private URL=this.appconfig.API_URL;

  addPersonalDetails(id:any,personalDetails: personaldetails) {
    
    return this.http.post<personaldetails>(
      `${this.URL}/personaldetails/${id}`,
      personalDetails
    );
  }
  updatePersonalDetails(id: any, personalDetails: personaldetails) {
    return this.http.put<personaldetails>(
      `${this.URL}/personaldetails/${id}`,
      personalDetails
    );
  }
  
}
