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
