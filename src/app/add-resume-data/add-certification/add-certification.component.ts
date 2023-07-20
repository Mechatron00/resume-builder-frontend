import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { certification } from 'src/app/resume-builder/model/certification';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { AddCertificationService } from './add-certification.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit{
  addCertificationForm!:FormGroup;
  constructor(private certificationService:CertificationService,
    private addCertificateService:AddCertificationService,
    private router:Router,
    private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.addCertificationForm = new FormGroup(
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
    
   
     const id = this.addCertificateService.resumeid;
      const certificate:certification = this.addCertificationForm.getRawValue() as certification;
      this.certificationService.addCertification(id,certificate).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Certification added successfully", "OK");
      }
    )
   
  }
  addAnother()
  {
    this.addCertificationForm.reset(
      {
        title:'',
        weblink:'',
        issuedBy:'',
        issuedDate:new Date(),
        description:'',
      }
    )
  }
  count=0;
  getCount()
  {
    const description:string[] =this.addCertificationForm.get('description')?.value as Array<string>
    this.count = description.length;
 
  }
}
