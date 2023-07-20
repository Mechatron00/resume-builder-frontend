import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { awards } from 'src/app/resume-builder/model/awards'; 
import { AppConfigService } from 'src/appconfig.service';

@Injectable({
  providedIn: 'root',
})
export class AwardsService {
  resumeid!:any;
  constructor(private http: HttpClient,private appconfig:AppConfigService) {}
  private URL=this.appconfig.API_URL;

  getAward(id: string) {
    return this.http.get<awards>(`${this.URL}/awards/${id}`);
  }

  addAward(id:string, award: awards) {
    return this.http.post<awards>(`${this.URL}/awards/${id}`, award);
  }
  updateAward(id: any, award: awards) {
    return this.http.put<awards>(`${this.URL}/awards/${id}`, award);
  }
  deleteAward(id: string,resumeid:string) 
  {
    const params ={resumeid:resumeid}
    return this.http.delete(`${this.URL}/awards/${id}`,{params:params});
  }
}
