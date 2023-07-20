import { Injectable } from '@angular/core';
import { experience } from 'src/app/resume-builder/model/experience';

@Injectable({
  providedIn: 'root'
})
export class EditExperienceService {

  experience!:experience;
  constructor() { }
}
