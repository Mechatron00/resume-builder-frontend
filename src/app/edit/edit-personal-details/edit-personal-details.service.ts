import { Injectable } from '@angular/core';
import { personaldetails } from 'src/app/resume-builder/model/personaldetails';

@Injectable({
  providedIn: 'root'
})
export class EditPersonalDetailsService {

  personalDetails!:personaldetails;
  constructor() { }
}
