import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ResumeBuilderComponent } from "./resume-builder/resume-builder.component";
import { AwardsComponent } from "./resume-builder/awards/awards.component";
import { CertificationComponent } from "./resume-builder/certification/certification.component";
import { EducationComponent } from "./resume-builder/education/education.component";
import { ExtracurricularComponent } from "./resume-builder/extracurricular/extracurricular.component";
import { HobbiesComponent } from "./resume-builder/hobbies/hobbies.component";
import { ExperienceComponent } from "./resume-builder/experience/experience.component";
import { ObjectivesComponent } from "./resume-builder/objectives/objectives.component";
import { PersonalskillsComponent } from "./resume-builder/personalskills/personalskills.component";
import { ProjectsComponent } from "./resume-builder/projects/projects.component";
import { SkillsComponent } from "./resume-builder/skills/skills.component";
import { LanguagesComponent } from "./resume-builder/languages/languages.component";
import { PersonaldetailsComponent } from "./resume-builder/personaldetails/personaldetails.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { CreateResumeComponent } from "./resume-builder/create-resume/create-resume.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatChipsModule } from "@angular/material/chips";
import { MatTabsModule } from "@angular/material/tabs";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { EditPersonalDetailsComponent } from "./edit/edit-personal-details/edit-personal-details.component";
import { EditObjectivesComponent } from "./edit/edit-objectives/edit-objectives.component";
import { EditAwardsComponent } from "./edit/edit-awards/edit-awards.component";
import { EditCertificationComponent } from "./edit/edit-certification/edit-certification.component";
import { EditEducationComponent } from "./edit/edit-education/edit-education.component";
import { EditExperienceComponent } from "./edit/edit-experience/edit-experience.component";
import { EditProjectComponent } from "./edit/edit-project/edit-project.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {MatDialogModule} from '@angular/material/dialog';
import { AddObjectivesComponent } from './add-resume-data/add-objectives/add-objectives.component';
import { AddEducationComponent } from './add-resume-data/add-education/add-education.component';
import { AddExperienceComponent } from './add-resume-data/add-experience/add-experience.component';
import { AddProjectsComponent } from './add-resume-data/add-projects/add-projects.component';
import { AddCertificationComponent } from './add-resume-data/add-certification/add-certification.component';
import { AddAwardsComponent } from './add-resume-data/add-awards/add-awards.component';
import { AddSkillsComponent } from './add-resume-data/add-skills/add-skills.component';
import { AddPersonalskillsComponent } from './add-resume-data/add-personalskills/add-personalskills.component';
import { AddExtracurricularComponent } from './add-resume-data/add-extracurricular/add-extracurricular.component';
import { AddLanguageComponent } from './add-resume-data/add-language/add-language.component';
import { AddHobbiesComponent } from './add-resume-data/add-hobbies/add-hobbies.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { WelcomepageComponent } from './login/welcomepage/welcomepage.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Template1Component } from './resume-template/template1/template1.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    ResumeBuilderComponent,
    AwardsComponent,
    CertificationComponent,
    EducationComponent,
    ExtracurricularComponent,
    HobbiesComponent,
    ExperienceComponent,
    LanguagesComponent,
    ObjectivesComponent,
    PersonalskillsComponent,
    ProjectsComponent,
    SkillsComponent,
    PersonaldetailsComponent,
    CreateResumeComponent,
    NavBarComponent,
    EditPersonalDetailsComponent,
    EditObjectivesComponent,
    EditAwardsComponent,
    EditCertificationComponent,
    EditEducationComponent,
    EditExperienceComponent,
    EditProjectComponent,
    AddObjectivesComponent,
    AddEducationComponent,
    AddExperienceComponent,
    AddProjectsComponent,
    AddCertificationComponent,
    AddAwardsComponent,
    AddSkillsComponent,
    AddPersonalskillsComponent,
    AddExtracurricularComponent,
    AddLanguageComponent,
    AddHobbiesComponent,
    LoginComponent,
    SignupComponent,
    WelcomepageComponent,
    PageNotFoundComponent,
    NavigationComponent,
    Template1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatMenuModule,
    MatChipsModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    RouterModule,
    FontAwesomeModule,
    MatDialogModule,
    MatSnackBarModule,
    PdfViewerModule,
    MatTooltipModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
