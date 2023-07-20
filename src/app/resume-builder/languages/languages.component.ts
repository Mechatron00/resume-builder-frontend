import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LanguagesService } from 'src/app/services/languages/languages.service';
import { languages } from '../model/language';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit
{
  @Input() resumeid!:string;
  languageForm!:FormGroup;
  constructor(private languageService:LanguagesService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.languageForm = new FormGroup(
      {
        language:new FormControl({value:'', disabled:false}),
        profiency:new FormControl({value:'', disabled:false})
      }
    )
  }

  addLanguage()
  {
    const id= this.languageService.resumeid;
    const language:languages = this.languageForm.getRawValue() as languages;
   

    this.languageService.addLanguage(id,language).subscribe(
      (data)=>{
        this.snackbarService.openSnackBar("Language added successfully", "OK");
        
      }
    );
    this.languageForm.reset(
      {
        language:language.language,
        profiency:language.profiency,
      }
    )
    
  }
  addAnother()
  {
    this.languageForm.reset(
      {
        language:'',
        profiency:'',
      }
    )
    
  }

}
