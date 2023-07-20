import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { certification } from 'src/app/resume-builder/model/certification'; 
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }

    private URL = this.appconfig.API_URL;
  addCertification(id:string,certificate:certification)
  {
    return this.http.post<certification>(`${this.URL}/certification/${id}`,certificate);
  }
  updateCertification(id:any,certificate:certification)
  {
    return this.http.put<certification>(`${this.URL}/certification/${id}`,certificate)
  }
  deleteCertification(id:string,resumeid:string)
  {
    const params={resumeid:resumeid}
    return this.http.delete(`${this.URL}/certification/${id}`,{params:params})
  }
}
