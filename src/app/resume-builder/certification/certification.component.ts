import { Component, Input, OnInit } from '@angular/core';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { certification } from '../model/certification';
import { FormControl, FormGroup } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit
{
  @Input() resumeid!:string;
  certificationForm!:FormGroup;
  constructor(private certificationService:CertificationService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.certificationForm = new FormGroup(
      {
        title:new FormControl({value:'', disabled:false}),
        weblink:new FormControl({value:'', disabled:false}),
        issuedBy:new FormControl({value:'', disabled:false}),
        issuedDate:new FormControl({value:new Date(), disabled:false}),
        description:new FormControl({value:'', disabled:false}),
      }
    )
    
  }
  addCertification()
  {
    const id= this.certificationService.resumeid;
   const certificate:certification= this.certificationForm.getRawValue() as certification;
   
    this.certificationService.addCertification(id,certificate).subscribe(
      (data)=>{
        this.snackbarService.openSnackBar("Certification added successfully", "OK")
      }
    )
    this.certificationForm.reset(
      {
        title:certificate.title,
        weblink:certificate.weblink,
        issuedBy:certificate.issuedBy,
        issuedDate:certificate.issuedDate,
        description:certificate.description,
      }
    )
  }
  addAnother()
  {
    this.certificationForm.reset(
      {
        title:'',
        weblink:'',
        issuedBy:'',
        issuedDate:new Date(),
        description:'',
      }
    )
  }
}
