import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { awards } from "src/app/resume-builder/model/awards";
import { certification } from "src/app/resume-builder/model/certification";
import { education } from "src/app/resume-builder/model/education";
import { experience } from "src/app/resume-builder/model/experience";
import { extracurricular } from "src/app/resume-builder/model/extracurricular";
import { hobbies } from "src/app/resume-builder/model/hobbies";
import { languages } from "src/app/resume-builder/model/language";
import { objectives } from "src/app/resume-builder/model/objectives";
import { personaldetails } from "src/app/resume-builder/model/personaldetails";
import { personalskills } from "src/app/resume-builder/model/personalskills";
import { projects } from "src/app/resume-builder/model/projects";
import { resume } from "src/app/resume-builder/model/resume";
import { skills } from "src/app/resume-builder/model/skills";
import { ResumeService } from "src/app/services/resume/resume.service";

import {faGithub,faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import {faExternalLink,faPhone,faEnvelope, faGlobe,} from "@fortawesome/free-solid-svg-icons";
import jsPDF from 'jspdf';
import  domtoimage from 'dom-to-image';
import html2canvas from "html2canvas";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


// (pdfMake as any).createPdf().getFontDefinition();

@Component({
  selector: "app-template1",
  templateUrl: "./template1.component.html",
  styleUrls: ["./template1.component.css"],
})
export class Template1Component implements OnInit {
  @ViewChild("page", { static: false }) page!: ElementRef;

  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faWebsite = faExternalLink;
  faPhone = faPhone;
  faEmail = faEnvelope;
  faGlobe = faGlobe;

  toggleEdit=false;
  resume!: resume;
  personalDetails: personaldetails = {
    fname: "",
    lname: "",
    email: "",
    gender: "",
    contact: "",
    city: "",
    state: "",
    dob: new Date(),
    linkedin_link: "",
    githublink: "",
    website: "",
  };

  objectives: objectives[] = [];
  educations: education[] = [];
  experiences: experience[] = [];
  projects: projects[] = [];
  certificates: certification[] = [];
  awards: awards[] = [];
  skills: skills[] = [];
  peronalSkills: personalskills[] = [];
  extracurriculars: extracurricular[] = [];
  languages: languages[] = [];
  hobbies: hobbies[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    const savedData: string | null = sessionStorage.getItem("resumeID");
    if (savedData) {
      const resumeID: string = JSON.parse(savedData);

      this.resumeService.getResume(resumeID).subscribe((data) => {
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
      });
    }
  }
  downloadAsPdf() 
  {
    // const node = this.page.nativeElement;

    // let img;
    // let filename;
    // let newImage:any;


    // domtoimage.toPng(node, { quality: 100 })

    //   .then(function (dataUrl:any) {

    //     img = new Image();
    //     img.src = dataUrl;
    //     newImage = img.src;

    //     img.onload = function () {
    //       let doc;
    //       doc = new jsPDF('p', 'pt', 'a4');
    //       const width = 595;
    //       const height = 842 ;

  

    //       doc.addImage(newImage, 'PNG', 0, 0, width, height);
    //       filename = 'resume.pdf';
    //       doc.save(filename);

    //     };
    //   })
    //   .catch(function (error:any) {
    //     console.log(error);
    //   });
///////////////////////////////////////////////////////////////
const node = this.page.nativeElement;
const data = document.getElementById('page')
const dataHeight =data?.offsetHeight || 842 ;

html2canvas(node,{scale:2}).then((canvas) => {
  const pdf = new jsPDF('p', 'pt', 'a4');
  const imgData = canvas.toDataURL('image/png');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
 
  // const pageHeight =842
  // console.log(dataHeight);
  if(dataHeight > pdfHeight)
  {
    console.log(dataHeight);
    
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.addPage()
    pdf.save('resume.pdf');
  }
  else
  {
    console.log(dataHeight);
    pdf.addPage
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
    pdf.save('resume.pdf');
  }
});

 ////////////////////////////////////////////////////

  }


    
    
  

  

  toggle()
  {
    if(this.toggleEdit)
    {
      this.toggleEdit = false;
    }
    else this.toggleEdit = true;
  }

  print()
  {
    window.print();
  }

}
