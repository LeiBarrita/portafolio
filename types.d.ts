export interface Info {
  name: string;
  lastName: string;
  aboutMe: string;
}

export interface Skill {
  id: int;
  name: string;
  icon: string;
  skillTypeId: int;
}

export type ListOfSkills = Skill[];

export interface skillType {
  id: int;
  type: string;
}

export type ListOfSkillTypes = SkillTypes[];

export interface CareerEvent {
  id: int;
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
  experience: string;
}

export type ListOfCareerEvents = CareerEvent[];

export interface ContactInfo {
  id: int;
  tag: string;
  rawLink: string;
  htmlLink: string;
  icon: string;
}

export type ListOfContactInfo = ContactInfo[];

export interface AppPhoto {
  id: int;
  link: string;
}

export type ListOfAppPhotos = AppPhoto[];

export interface Project {
  id: int;
  name: string;
  company: string;
  companyLogo: string;
  technologies: string;
  paragraphs: string[];
  images: ListOfAppPhotos;
}

export type ListOfProjects = Project[];

export interface Attribution {
  id: int;
  title: string;
  description: string;
  link: string;
  icon: string;
}

export type ListOfAttributions = Attribution[];
