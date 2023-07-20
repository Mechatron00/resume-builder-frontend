import { Injectable } from '@angular/core';
import { education } from 'src/app/resume-builder/model/education';

@Injectable({
  providedIn: 'root'
})
export class EditEducationService {
  education!:education;
  constructor() { }
}
