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

export interface ExperienceEvent {
  id: int;
  startYear: int;
  startMonth: int;
  endYear: int;
  endMonth: int;
  experience: string;
}

export type ListOfExperienceEvents = ExperienceEvent[];

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
  technologies: string;
  description: string;
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
