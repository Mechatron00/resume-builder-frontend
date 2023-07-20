import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExtracurricularService } from 'src/app/services/extracurricular/extracurricular.service';
import { extracurricular } from '../model/extracurricular';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-extracurricular',
  templateUrl: './extracurricular.component.html',
  styleUrls: ['./extracurricular.component.css']
})
export class ExtracurricularComponent implements OnInit
{
  @Input() resumeid!:string;
  extracurricularForm!:FormGroup;
  constructor(private extracurricularService: ExtracurricularService,
    private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.extracurricularForm = new FormGroup(
      {
        description: new FormControl({value:'', disabled:false})
      }
    )
  }

  addExtracurricular()
  {
    const id= this.extracurricularService.resumeid;
    const extracurricular:extracurricular = this.extracurricularForm.getRawValue() as extracurricular;
    this.extracurricularService.addExtracurricular(id,extracurricular).subscribe
    (
      (data)=> {this.snackbarService.openSnackBar("Extracurricular activity added successfully", "OK");}
    )
    this.extracurricularForm.reset(
      {
        description:extracurricular.description,
      }
    )
  }
  addAnother()
  {
    this.extracurricularForm.reset(
      {
        description:'',
      }
    )
  }

}
