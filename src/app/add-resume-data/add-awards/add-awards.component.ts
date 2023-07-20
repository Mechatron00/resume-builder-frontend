import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { awards } from 'src/app/resume-builder/model/awards';
import { AwardsService } from 'src/app/services/awards/awards.service';
import { AddAwardsService } from './add-awards.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css']
})
export class AddAwardsComponent  implements OnInit
{
  
  addAwardsForm!:FormGroup;
  constructor(private awardService:AwardsService
    ,private router:Router,
    private addAwardsService:AddAwardsService,
    private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.addAwardsForm = new FormGroup(
      {
        title: new FormControl({ value:'', disabled: false }),
        issuer:new FormControl({value:'', disabled: false}),
        issuedDate:new FormControl({value:new Date(), disabled: false}),
        description:new FormControl({value:'', disabled: false}),
        
      }
    )
  }

  addAward()
  {
    
    const  id = this.addAwardsService.resumeid;
    const award:awards =this.addAwardsForm.getRawValue() as awards;
    this.awardService.addAward(id,award).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Award added successfully", "OK");
    }
    );
    

  }
  addAnother()
  {
    this.addAwardsForm.reset(
      {
        title:'',
    issuer:'',
    issuedDate:new Date(),
    description:'',
      }
    )
  }

  count=0;
  getCount()
  {
    const description:string[] =this.addAwardsForm.get('description')?.value as Array<string>
    this.count = description.length;
 
  }
}
