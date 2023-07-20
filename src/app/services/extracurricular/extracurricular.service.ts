import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { extracurricular } from 'src/app/resume-builder/model/extracurricular';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class ExtracurricularService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;

    addExtracurricular(id:string,extracurricular:extracurricular)
    {
     return this.http.post<extracurricular>(`${this.URL}/extracurricular/${id}`,extracurricular);
    }
    updateExtracurricular(id:any, extracurricular:extracurricular)
    {
      return this.http.put<extracurricular>(`${this.URL}/extracurricular/${id}`,extracurricular);
    }
    deleteExtracurricular(id:string, resumeid:string)
    {
      const params = {resumeid:resumeid}
      return this.http.delete(`${this.URL}/extracurricular/${id}`,{params:params});
    }
}

