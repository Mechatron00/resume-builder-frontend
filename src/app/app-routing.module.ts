import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectivesComponent } from './resume-builder/objectives/objectives.component';
import { PersonaldetailsComponent } from './resume-builder/personaldetails/personaldetails.component';
import { EducationComponent } from './resume-builder/education/education.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { CreateResumeComponent } from './resume-builder/create-resume/create-resume.component';
import { EditPersonalDetailsComponent } from './edit/edit-personal-details/edit-personal-details.component';
import { EditObjectivesComponent } from './edit/edit-objectives/edit-objectives.component';
import { EditAwardService } from './edit/edit-awards/edit-award.service';
import { EditAwardsComponent } from './edit/edit-awards/edit-awards.component';
import { EditCertificationComponent } from './edit/edit-certification/edit-certification.component';
import { EditEducationComponent } from './edit/edit-education/edit-education.component';
import { EditExperienceComponent } from './edit/edit-experience/edit-experience.component';
import { EditProjectComponent } from './edit/edit-project/edit-project.component';
import { AddAwardsComponent } from './add-resume-data/add-awards/add-awards.component';
import { AddCertificationComponent } from './add-resume-data/add-certification/add-certification.component';
import { AddEducationComponent } from './add-resume-data/add-education/add-education.component';
import { AddExperienceComponent } from './add-resume-data/add-experience/add-experience.component';
import { AddExtracurricularComponent } from './add-resume-data/add-extracurricular/add-extracurricular.component';
import { AddHobbiesComponent } from './add-resume-data/add-hobbies/add-hobbies.component';
import { AddLanguageComponent } from './add-resume-data/add-language/add-language.component';
import { AddObjectivesComponent } from './add-resume-data/add-objectives/add-objectives.component';
import { AddPersonalskillsComponent } from './add-resume-data/add-personalskills/add-personalskills.component';
import { AddSkillsComponent } from './add-resume-data/add-skills/add-skills.component';
import { AddProjectsComponent } from './add-resume-data/add-projects/add-projects.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { WelcomepageComponent } from './login/welcomepage/welcomepage.component';
import { loginGuard } from './route-guards/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { signupGuard } from './route-guards/signup.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { Template1Component } from './resume-template/template1/template1.component';

const routes: Routes = [
  {path:'dashboard',component:ResumeBuilderComponent,canActivate:[loginGuard],
  canLoad:[loginGuard],},
  {path:'resumeapp',component:NavigationComponent,canActivate:[loginGuard],
  canLoad:[loginGuard],},
  {path:'template1',component:Template1Component},
  {path:'welcome',component:WelcomepageComponent},
  {path:'',redirectTo:'welcome', pathMatch:'full'},
  {path:'createresume',component:CreateResumeComponent,canActivate:[signupGuard],
  canLoad:[signupGuard]},
  {path:'personaldetails', component:PersonaldetailsComponent},
  {path:'objectives', component:ObjectivesComponent},
  {path:'education',component:EducationComponent},


  {path:'editpersonaldetails', component:EditPersonalDetailsComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'editobjective',component:EditObjectivesComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'editaward',component:EditAwardsComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'editcertificate',component:EditCertificationComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'editeducation',component:EditEducationComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'editexperience',component:EditExperienceComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'editproject',component:EditProjectComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},


  {path:'addAward',component:AddAwardsComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addcertificate',component:AddCertificationComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addeducation',component:AddEducationComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addexperience',component:AddExperienceComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addextracurricular',component:AddExtracurricularComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addhobby',component:AddHobbiesComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addlanguage',component:AddLanguageComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addobjective',component:AddObjectivesComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addpersonalskill',component:AddPersonalskillsComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addskill',component:AddSkillsComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},
  {path:'addproject',component:AddProjectsComponent,canActivate:[loginGuard],
  canLoad:[loginGuard]},


  {path:'signup',component:SignupComponent},
  
  {path:'login',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
