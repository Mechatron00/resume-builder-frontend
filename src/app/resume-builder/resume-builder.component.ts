import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume/resume.service'; 
import { resume } from './model/resume';
import { personaldetails } from './model/personaldetails';
import { objectives } from './model/objectives';
import { education } from './model/education';
import { experience } from './model/experience';
import { projects } from './model/projects';
import { certification } from './model/certification';
import { awards } from './model/awards';
import { skills } from './model/skills';
import { personalskills } from './model/personalskills';
import { extracurricular } from './model/extracurricular';
import { languages } from './model/language';
import { hobbies } from './model/hobbies';
import { ObjectivesService } from '../services/objectives/objectives.service';
import { AwardsService } from '../services/awards/awards.service';
import { EducationService } from '../services/education/education.service';
import { ExperienceService } from '../services/experience/experience.service';
import { ProjectsService } from '../services/projects/projects.service';
import { CertificationService } from '../services/certification/certification.service';
import { SkillsService } from '../services/skills/skills.service';
import { PersonalskillsService } from '../services/personalskills/personalskills.service';
import { ExtracurricularService } from '../services/extracurricular/extracurricular.service';
import { LanguagesService } from '../services/languages/languages.service';
import { HobbiesService } from '../services/hobbies/hobbies.service';
import {  Router } from '@angular/router';
import { EditPersonalDetailsService } from '../edit/edit-personal-details/edit-personal-details.service';
import { EditObjectivesService } from '../edit/edit-objectives/edit-objectives.service';
import { EditAwardService } from '../edit/edit-awards/edit-award.service';
import { EditCertificationService } from '../edit/edit-certification/edit-certification.service';
import { EditEducationService } from '../edit/edit-education/edit-education.service';
import { EditExperienceService } from '../edit/edit-experience/edit-experience.service';
import { EditProjectService } from '../edit/edit-project/edit-project.service';
import { faGithub, faGithubAlt, faGithubSquare, faLinkedin, faLinkedinIn, faSquareGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { AddObjectivesService } from '../add-resume-data/add-objectives/add-objectives.service';
import { AddAwardsService } from '../add-resume-data/add-awards/add-awards.service';
import { AddCertificationService } from '../add-resume-data/add-certification/add-certification.service';
import { AddEducationService } from '../add-resume-data/add-education/add-education.service';
import { AddExperienceService } from '../add-resume-data/add-experience/add-experience.service';
import { AddExtracurricularService } from '../add-resume-data/add-extracurricular/add-extracurricular.service';
import { AddhobbiesService } from '../add-resume-data/add-hobbies/addhobbies.service';
import { AddLanguageService } from '../add-resume-data/add-language/add-language.service';
import { AddPersonalskillsService } from '../add-resume-data/add-personalskills/add-personalskills.service';
import { AddProjectsService } from '../add-resume-data/add-projects/add-projects.service';
import { AddSkillsService } from '../add-resume-data/add-skills/add-skills.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { AuthServiceService } from '../login/login/auth-service.service';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit,OnDestroy
{

  resume!:resume;
  resumeId!:string;
 
  personalDetails:personaldetails={
    fname:'',
    lname:'',
    email:'',
    gender:'',
    contact:'',
    city:'',
    state:'',
    dob:new Date,
    linkedin_link:'',
    githublink:'',
    website:'',
  }

  objectives:objectives[]=[];
  educations:education[]=[];
  experiences:experience[]=[];
  projects:projects[]=[];
  certificates:certification[]=[];
  awards:awards[]=[];
  skills:skills[]=[];
  peronalSkills:personalskills[]=[];
  extracurriculars:extracurricular[]=[];
  languages:languages[]=[];
  hobbies:hobbies[]=[];

  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faWebsite = faExternalLink;
  constructor(
    private router:Router,
    private resumeService:ResumeService,
    private objectiveService:ObjectivesService,
    private educationService:EducationService,
    private experienceService:ExperienceService,
    private projectService:ProjectsService,
    private certificationService:CertificationService,
    private awardService:AwardsService,
    private skillService:SkillsService,
    private pskillService:PersonalskillsService,
    private extraCurricularService:ExtracurricularService,
    private languageService:LanguagesService,
    private hobbiesService:HobbiesService,
    private editPersonalDetailsService:EditPersonalDetailsService,
    private editObjectivesService:EditObjectivesService,
    private editAwardService:EditAwardService,
    private editCertificateService:EditCertificationService,
    private editEducationService:EditEducationService,
    private editExperienceService:EditExperienceService,
    private editProjectService:EditProjectService,
    private addObjectiveService:AddObjectivesService,
    private addAwardsService:AddAwardsService,
    private addCertificationService:AddCertificationService,
    private addEducationService:AddEducationService,
    private addExperienceService:AddExperienceService,
    private addExtracurricularService:AddExtracurricularService,
    private addHobbiesService:AddhobbiesService,
    private addLanguageService:AddLanguageService,
    private addPersonalskillService:AddPersonalskillsService,
    private addProjectsService:AddProjectsService,
    private addSkillService:AddSkillsService,
    private snackbarService:SnackbarService,
    private authService: AuthServiceService,
    )
    {}
  ngOnInit(): void 
  {
    
    const id=this.resumeService.resumeid
    const savedData:string= sessionStorage.getItem('resumeID') as string;
    if(this.resumeService.resumeid)
    {
      this.resumeId = this.resumeService.resumeid;
    }
    else{
      this.resumeId = JSON.parse(savedData);
    }
    

    if (id) 
    {
     this.getData(id);
    } 
    else if (this.resumeId) {
      const id  = this.resumeId;
      this.getData(id);
    }

  }


  getData(id:string)
  {
    this.resumeService.getResume(id).subscribe(
      (data)=>{
        this.resume = data;
        this.personalDetails = this.resume.personalDetails;
        this.objectives = this.resume.objectiveList;
        this.educations = this.resume.educationList;
        this.experiences = this.resume.experienceList;
        this.projects = this.resume.projectsList;
        this.certificates = this.resume.certificationList;
        this.awards = this.resume.awardsList;
        this.skills = this.resume.skillsList;
        this.peronalSkills = this.resume.personalSkillsList;
        this.extracurriculars = this.resume.extraCurricularList;
        this.languages = this.resume.languageList;
        this.hobbies = this.resume.hobbiesList;
      }
    )
  }

  deleteObjective(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      if(this.resumeId)
     { 
      this.objectiveService.deleteObjective(id,this.resumeId).subscribe(
        (data)=>{
            
            this.getData(this.resumeId);
            this.snackbarService.openSnackBar("Objective deleted successfully","OK");
            
        }
      );
    }
   
    }
  }
  deleteEducation(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      
      if(this.resumeId)
     { 
      this.educationService.deleteEducation(id,this.resumeId).subscribe(
        (data)=>{
          this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Education deleted successfully","OK");
        }
      );
    }
    
    }
  }
  deleteExperience(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.experienceService.deleteExperience(id,this.resumeId).subscribe(
        data=> {this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Experience deleted successfully","OK");
        }

      )
    }
   
  }
  deleteProject(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.projectService.deleteProject(id,this.resumeId).subscribe(
        data=> {this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Project deleted successfully","OK");
        
        }
      )
    }
   
  }
  deleteCertification(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.certificationService.deleteCertification(id,this.resumeId).subscribe(
        data=>{this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Certification deleted successfully","OK");
        }
      )
    }
   
  }
  deleteAward(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.awardService.deleteAward(id,this.resumeId).subscribe(
        data=> {this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Award deleted successfully","OK");
        }
      )
    }
    
  }
  deleteSkill(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.skillService.deleteSkill(id,this.resumeId).subscribe(
        data=>{this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Skill deleted successfully","OK");
        }
      )
    }
   
  }
  deletePersonalSkill(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.pskillService.deletePersonalskills(id,this.resumeId).subscribe(
        data=> {this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Personal Skill deleted successfully","OK");
        }
      );
    }
   
  }
  deleteExtracurricular(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.extraCurricularService.deleteExtracurricular(id,this.resumeId).subscribe(
        data=> {this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Extracurricular activity deleted successfully","OK");
        }
      );
    }
    
  }
  deleteLanguage(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.languageService.deleteLanguage(id, this.resumeId).subscribe(
        data=> {this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Language deleted successfully","OK");
        }
      );
    }
   
  }
  deleteHobby(id:any)
  {
    if(confirm("Do you really want to delete?") === true)
    {
      this.hobbiesService.deleteHobbies(id, this.resumeId).subscribe(
        data=>{this.getData(this.resumeId);
          this.snackbarService.openSnackBar("Hobby deleted successfully","OK");
        }
      );
    }
    
  }
  editPersonalDetails(details:personaldetails)
  {
    this.editPersonalDetailsService.personalDetails = details;
    this.router.navigate(['editpersonaldetails']);

  }
  editObjectives(objective:objectives)
  {
    this.editObjectivesService.objective = objective;
    this.router.navigate(['editobjective']);

  }
  editAwards(award:awards)
  {
    this.editAwardService.award = award;
    this.router.navigate(['editaward']);

  }
  editCertification(certificate:certification)
  {
    this.editCertificateService.certification = certificate;
    this.router.navigate(['editcertificate']);

  }
  editEducation(education:education)
  {
    this.editEducationService.education = education;

    this.router.navigate(['editeducation']);
  }
  editExperience(experience:experience)
  {
    this.editExperienceService.experience = experience;
    this.router.navigate(['editexperience']);
  }
  editProject(project:projects)
  {
    this.editProjectService.project = project;
    this.router.navigate(['editproject']);
  }

  addAwards()
  {
      this.addAwardsService.resumeid = this.resumeId;
      this.router.navigate(['addAward']);
  }
  addCertificate()
  {
    if(this.resumeId)
    {
      this.addCertificationService.resumeid = this.resumeId;
      
    }
    this.router.navigate(['addcertificate']);
  }
  addEducation()
  {
    
      this.addEducationService.resumeid = this.resumeId;
       this.router.navigate(['addeducation']);
  }
  addExperience()
  {

      this.addExperienceService.resumeid = this.resumeId;
      this.router.navigate(['addexperience']);
  }
  addExtracurricular()
  {

      this.addExtracurricularService.resumeid = this.resumeId;   
      this.router.navigate(['addextracurricular']);
  }
  addHobbies()
  {
      this.addHobbiesService.resumeid = this.resumeId;
      this.router.navigate(['addhobby']);
  }
  addLanguage()
  {
      this.addLanguageService.resumeid = this.resumeId;
      this.router.navigate(['addlanguage']);
  }
  addObjective()
  {
    if(this.resumeId)
    {
      this.addObjectiveService.resumeid = this.resumeId;
      
    }
    this.router.navigate(['addobjective']);
  }
  addPersonalskill()
  {
      this.addPersonalskillService.resumeid = this.resumeId;
      this.router.navigate(['addpersonalskill'])
  }
  addSkill()
  {
    
      this.addSkillService.resumeid = this.resumeId;
      this.router.navigate(['addskill'])
  }
  addProject()
  {
   
      this.addProjectsService.resumeid =this.resumeId;
      this.router.navigate(['addproject'])
  }

  logout()
  {
    
    this.authService.logout();
    this.snackbarService.openMessageBar("Logged out successfully");
    this.router.navigate(['welcome']);
  }
  toTemplate1()
  {
    this.router.navigate(['template1']);
  }
  removeKeyword()
  {

  }
  ngOnDestroy(): void 
  {
   
  }
}
