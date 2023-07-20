import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { awards } from 'src/app/resume-builder/model/awards';
import { EditAwardService } from './edit-award.service';
import { AwardsService } from 'src/app/services/awards/awards.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-awards',
  templateUrl: './edit-awards.component.html',
  styleUrls: ['./edit-awards.component.css']
})
export class EditAwardsComponent implements OnInit
{
  award!:awards;
  editAwardsForm!:FormGroup;
  constructor(private editAwardService:EditAwardService,
    private awardService:AwardsService,
    private router:Router,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.award = this.editAwardService.award;
  if(this.award)
  {
    this.editAwardsForm = new FormGroup(
      {
        title: new FormControl({ value:this.award.title, disabled: false }),
        issuer:new FormControl({value:this.award.issuer, disabled: false}),
        issuedDate:new FormControl({value:this.award.issuedDate, disabled: false}),
        description:new FormControl({value:this.award.description, disabled: false}),
        
      }
    )
  }
  else{
    this.editAwardsForm = new FormGroup(
      {
        title: new FormControl({ value:'', disabled: false }),
        issuer:new FormControl({value:'', disabled: false}),
        issuedDate:new FormControl({value:'', disabled: false}),
        description:new FormControl({value:'', disabled: false}),
        
      }
    )
  }
    

  }
 
  editAward()
  {
    const id = this.editAwardService.award.id;
    const awards= this.editAwardsForm.getRawValue() as awards;
    this.awardService.updateAward(id, awards).subscribe(
      (data)=>
      {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar(" Edited successfully", "OK");
      }

    )
  }
}