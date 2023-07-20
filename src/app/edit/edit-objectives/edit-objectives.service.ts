import { Injectable } from '@angular/core';
import { objectives } from 'src/app/resume-builder/model/objectives';

@Injectable({
  providedIn: 'root'
})
export class EditObjectivesService {
  objective!:objectives;
  constructor() { }
}
