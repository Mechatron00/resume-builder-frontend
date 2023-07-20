import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HobbiesService } from 'src/app/services/hobbies/hobbies.service';
import { hobbies } from '../model/hobbies';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit
{
  @Input() resumeid!:string;
  hobbiesForm!:FormGroup;
  constructor(private hobbiesService:HobbiesService,
    private snackbarService:SnackbarService){}
  ngOnInit(): void 
  {
    this.hobbiesForm = new FormGroup(
      {
        hobby:new FormControl({value:'', disabled:false})
      }
    )
    
  }

  addHobby()
  {
    const id= this.hobbiesService.resumeid;
    const hobby: hobbies = this.hobbiesForm.getRawValue() as hobbies;
    
    
    this.hobbiesService.addHobbies(id,hobby).subscribe(
      (data)=>{
        
        this.snackbarService.openSnackBar("Hobby added successfully", "OK");
      }
    );
    this.hobbiesForm.reset(
      {
        hobby:hobby.hobby
      }
    )
  }
  addAnother()
  {
    this.hobbiesForm.reset(
      {
        hobby:''
      }
    )
  }

}
