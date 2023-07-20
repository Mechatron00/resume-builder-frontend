import { Injectable } from '@angular/core';
import { projects } from 'src/app/resume-builder/model/projects';

@Injectable({
  providedIn: 'root'
})
export class EditProjectService {
 project!:projects;
  constructor() { }
}
