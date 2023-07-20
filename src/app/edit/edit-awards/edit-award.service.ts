import { Injectable } from '@angular/core';
import { awards } from 'src/app/resume-builder/model/awards';

@Injectable({
  providedIn: 'root'
})
export class EditAwardService 
{
  award!:awards;
  constructor() { }
}
