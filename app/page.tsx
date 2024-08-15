import Image from "next/image";
import styles from "./page.module.css";
import profileImg from "../public/profile.png";
import { ListOfSkills, ListOfSkillTypes } from "@/types";
import skillTypesJson from "../data/skillsCatalog.json";
import skillsJson from "../data/skills.json";
import Tag from "@/components/tag/Tag";

export default function Home() {
  const skillTypes = skillTypesJson as ListOfSkillTypes;
  const skills = skillsJson as ListOfSkills;

  return (
    <main>
      <div className={styles.profileContainer}>
        <Image
          className={styles.image}
          objectFit="cover"
          src={profileImg}
          alt="My picture"
        />
        <div className={styles.infoContainer}>
          <div>
            <h1>PEDRO UZIEL</h1>
            <h1>BARRITA LICEA</h1>
          </div>
          <h3>SOFTWARE ENGINEER</h3>
        </div>
      </div>

      <div className={`secondary-section ${styles.section}`}>
        <h2>ABOUT ME</h2>
        <p className={styles.text}>
          Graduated in computer systems with 5 years of programming experience
          and 3 focused on software and web development. I’m a really curious
          person, and I love to learn about everything. I´m always searching for
          a challenge and exploring new technologies
        </p>
      </div>

      <div className={styles.section}>
        <h1>SKILLS</h1>
        <div className={styles.tags}>
          <Tag type="All" />
          {skillTypes.map((tag) => (
            <Tag key={tag.id} type={tag.type} />
          ))}
        </div>
        <div>
          {skills.map((skill) => (
            <p key={skill.id}>{skill.name}</p>
          ))}
        </div>
      </div>

      <div className={`secondary-section ${styles.section}`}>
        <h2>EXPERIENCE</h2>
        <div>
          <p>Timeline</p>
        </div>
      </div>
    </main>
  );
}
