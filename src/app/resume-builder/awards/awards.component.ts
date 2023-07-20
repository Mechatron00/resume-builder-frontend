import { Component, Input, OnInit } from '@angular/core';
import { awards } from '../model/awards';
import { AwardsService } from 'src/app/services/awards/awards.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit
{
  @Input() resumeid!:string;
  award!:awards;
  awardsForm!:FormGroup;
  constructor(
    private awardsService:AwardsService,
    private snackbarService:SnackbarService
    
    ){}
  ngOnInit(): void 
  {


    this.awardsForm = new FormGroup(
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
    const id= this.awardsService.resumeid;
    const award = this.awardsForm.getRawValue() as awards;
    this.awardsService.addAward(id,award).subscribe(
      (data)=>{
        this.snackbarService.openSnackBar("Award added successfully", "OK");
      }
    );
    
    
    this.awardsForm.reset(
      {
        title:award.title,
    issuer:award.issuer,
    issuedDate:award.issuedDate,
    description:award.description,
      }
    )
     
    
  }
  addAnother()
  {
    this.awardsForm.reset(
      {
        title:'',
    issuer:'',
    issuedDate:new Date(),
    description:'',
      }
    )
  }

}
