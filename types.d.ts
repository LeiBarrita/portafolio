export interface Skill {
  id: int;
  name: string;
  skillTypeId: int;
}

export type ListOfSkills = Skill[];

export interface skillType {
  id: int;
  type: string;
}

export type ListOfSkillTypes = SkillTypes[];
