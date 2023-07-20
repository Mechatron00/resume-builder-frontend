import { Injectable } from '@angular/core';
import { certification } from 'src/app/resume-builder/model/certification';

@Injectable({
  providedIn: 'root'
})
export class EditCertificationService {

  certification!:certification;
  constructor() { }
}
