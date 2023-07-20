// private int id;
//     private String title;
//     private String weblink;
//     private Date issuedDate;
//     private String description;

export interface certification{
    id?:string,
    title:string,
    weblink:string,
    issuedBy:string,
    issuedDate:Date,
    description:string,
    //add issued by field on both front end and backend
}