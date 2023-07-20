import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { languages } from 'src/app/resume-builder/model/language';
import { LanguagesService } from 'src/app/services/languages/languages.service';
import { AddLanguageService } from './add-language.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent 
{
  addLanguageForm!:FormGroup;
  constructor(private languageService:LanguagesService,
    private router:Router,
    private addLanguageService:AddLanguageService,
    private snackbarService:SnackbarService
    ){}
  ngOnInit(): void 
  {
    this.addLanguageForm = new FormGroup(
      {
        language:new FormControl({value:'', disabled:false}),
        profiency:new FormControl({value:'', disabled:false})
      }
    )
  }

  addLanguage()
  {
 
     const id = this.addLanguageService.resumeid;
      const language:languages = this.addLanguageForm.getRawValue() as languages;
      this.languageService.addLanguage(id,language).subscribe(
      data=> {
        this.router.navigate(['dashboard']);
        this.snackbarService.openSnackBar("LAnguage added successfully", "OK")
      }
    )
  
    


      }
}
