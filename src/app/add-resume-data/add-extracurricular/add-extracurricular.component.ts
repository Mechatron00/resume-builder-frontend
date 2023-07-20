import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { extracurricular } from 'src/app/resume-builder/model/extracurricular';
import { ExtracurricularService } from 'src/app/services/extracurricular/extracurricular.service';
import { AddExtracurricularService } from './add-extracurricular.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-extracurricular',
  templateUrl: './add-extracurricular.component.html',
  styleUrls: ['./add-extracurricular.component.css']
})
export class AddExtracurricularComponent implements OnInit
{
  addExtracurricularForm!:FormGroup;
  constructor(private extracurricularService: ExtracurricularService,
    private router:Router,
    private addExtracurricularService:AddExtracurricularService,
    private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.addExtracurricularForm = new FormGroup(
      {
        description: new FormControl({value:'', disabled:false})
      }
    )
  }

  addExtracurricular()
  {

    const id = this.addExtracurricularService.resumeid;
     const extracurricular:extracurricular = this.addExtracurricularForm.getRawValue() as extracurricular;
     this.extracurricularService.addExtracurricular(id,extracurricular).subscribe(
     data=> {
      this.router.navigate(['dashboard']);
      this.snackbarService.openSnackBar("Extracurricular activity added successfully", "OK");
    }
   )
  
  }

  count=0;
  getCount()
  {
    const description:string[] =this.addExtracurricularForm.get('description')?.value as Array<string>
    this.count = description.length;
 
  }
}
