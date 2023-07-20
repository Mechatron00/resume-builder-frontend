import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { languages } from 'src/app/resume-builder/model/language';
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  resumeid!:any;
  constructor(private http:HttpClient,
    private appconfig:AppConfigService) { }
    private URL=this.appconfig.API_URL;

    addLanguage(id:string,language:languages)
    {
      return this.http.post<languages>(`${this.URL}/language/${id}`,language);
    }
    updateLanguage(id:any, language:languages)
    {
      return this.http.put<languages>(`${this.URL}/language/${id}`,language);
    }
    deleteLanguage(id:string, resumeid:string)
    {
      const params={resumeid:resumeid}
      return this.http.delete(`${this.URL}/language/${id}`, {params:params});
    }
}
