// private int id;

import { awards } from "./awards"
import { certification } from "./certification"
import { education } from "./education"
import { experience } from "./experience"
import { extracurricular } from "./extracurricular"
import { hobbies } from "./hobbies"
import { languages } from "./language"
import { objectives } from "./objectives"
import { personaldetails } from "./personaldetails"
import { personalskills } from "./personalskills"
import { projects } from "./projects"
import { skills } from "./skills"

//     private String fname;
//     private String lname;
//     private String email;
//     private String gender;
//     private String contact;
//     private String city;
//     private String state;
//     private Date dob;
//     private String linkedin_link;
//     private String githublink;
//     private String website;

export interface resume{
    id?:string,
    personalDetails:personaldetails,
    //lists
    objectiveList:objectives[],
    educationList:education[],
    experienceList:experience[],
    projectsList:projects[],
    awardsList:awards[],
    certificationList:certification[],
    skillsList:skills[],
    personalSkillsList:personalskills[],
    extraCurricularList:extracurricular[],
    languageList:languages[],
    hobbiesList:hobbies[],
}
