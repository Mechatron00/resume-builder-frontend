import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { hobbies } from 'src/app/resume-builder/model/hobbies';
import { HobbiesService } from 'src/app/services/hobbies/hobbies.service';
import { AddhobbiesService } from './addhobbies.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-hobbies',
  templateUrl: './add-hobbies.component.html',
  styleUrls: ['./add-hobbies.component.css']
})
export class AddHobbiesComponent implements OnInit
{
  addHobbiesForm!:FormGroup;
  constructor(private hobbiesService:HobbiesService,
    private router:Router,
    private addHobbiesService:AddhobbiesService,
    private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.addHobbiesForm = new FormGroup(
      {
        hobby:new FormControl({value:'', disabled:false})
      }
    )
    
  }

  addHobby()
  {
    
   
     const id = this.addHobbiesService.resumeid;
      const hobby:hobbies = this.addHobbiesForm.getRawValue() as hobbies;
      this.hobbiesService.addHobbies(id,hobby).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("Hobby added successfully", "OK");
      }
    )
  
  }
}
