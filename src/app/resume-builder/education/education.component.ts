import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { EducationService } from "src/app/services/education/education.service";
import { education } from "../model/education";
import { SnackbarService } from "src/app/snackbar/snackbar.service";




@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
  @Input() resumeid!:string;
  constructor(private educationService: EducationService,
    private snackbarService:SnackbarService
    ) {}

  educationForm!: FormGroup;

  ngOnInit(): void {
    this.educationForm = new FormGroup({
      institute_name: new FormControl({ value: "", disabled: false }),
      degree: new FormControl({ value: "", disabled: false }),
      branch: new FormControl({ value: "", disabled: false }),
      startDate: new FormControl({ value:new Date(), disabled: false }),
      endDate: new FormControl({ value:new Date(), disabled: false }),
      score: new FormControl({ value: "", disabled: false }),
    });
  }

  addEducation() {
    const id= this.educationService.resumeid;
    const education: education = this.educationForm.getRawValue() as education;
        this.educationService.addEducation(id,education).subscribe(
          (data)=>{
            this.snackbarService.openSnackBar("Education added successfully", "OK");
          }
        )
    this.educationForm.reset({
      institute_name: education.institute_name,
      degree: education.degree,
      branch: education.branch,
      startDate: education.startDate,
      endDate: education.endDate,
      score:education.score,
    });
  }

  addAnother() {
    this.educationForm.reset({
      institute_name: "",
      degree: "",
      branch: "",
      startDate: new Date(),
      endDate: new Date(),
      score:'',
    });
  }
}
