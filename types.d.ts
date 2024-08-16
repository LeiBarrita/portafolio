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
