import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { certification } from 'src/app/resume-builder/model/certification';
import { EditCertificationService } from './edit-certification.service';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.css']
})
export class EditCertificationComponent  implements OnInit
{
  certification!:certification;
  editCerificationForm!:FormGroup;
  constructor(
    private editCertificateService:EditCertificationService,
    private certificationService:CertificationService,
    private router:Router,
    private snackbarService:SnackbarService
  ){}
  ngOnInit(): void 
  {
    this.certification = this.editCertificateService.certification;
    if(this.certification)
    {
      this.editCerificationForm = new FormGroup(
        {
          title:new FormControl({value:this.certification.title, disabled:false}),
          weblink:new FormControl({value:this.certification.weblink, disabled:false}),
          issuedBy:new FormControl({value:this.certification.issuedBy, disabled:false}),
          issuedDate:new FormControl({value:this.certification.issuedDate, disabled:false}),
          description:new FormControl({value:this.certification.description, disabled:false}),
        }
      )
    }
    else{
      this.editCerificationForm = new FormGroup(
        {
          title:new FormControl({value:'', disabled:false}),
          weblink:new FormControl({value:'', disabled:false}),
          issuedBy:new FormControl({value:'', disabled:false}),
          issuedDate:new FormControl({value:new Date(), disabled:false}),
          description:new FormControl({value:'', disabled:false}),
        }
      )
    }
  }

  editCertification()
  {
    const id = this.certification.id;
    const certificate = this.editCerificationForm.getRawValue() as certification;
    this.certificationService.updateCertification(id,certificate).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Edited successfully", "OK");
    }
    );
  }
}
