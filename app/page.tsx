"use client";

import Image from "next/image";
import styles from "./page.module.css";
import profileImg from "../public/profile.png";
import {
  Info,
  ListOfContactInfo,
  ListOfCareerEvents,
  ListOfSkills,
  ListOfSkillTypes,
} from "@/types";
import experiencesJson from "../data/careerPath.json";
import skillTypesJson from "../data/skillsCatalog.json";
import skillsJson from "../data/skills.json";
import infoJson from "../data/info.json";
import contactJson from "../data/contact.json";
import Tag from "@/components/tag/Tag";
import TechIcon from "@/components/techIcon/TechIcon";
import { useState } from "react";
import CareerDisplay from "@/components/careerDisplay/CareerDisplay";
import ContactIcon from "@/components/contactIcon/ContactIcon";

export default function Home() {
  const experiences = experiencesJson as ListOfCareerEvents;
  const skillTypes = skillTypesJson as ListOfSkillTypes;
  const contactInfo = contactJson as ListOfContactInfo;
  const skills = skillsJson as ListOfSkills;
  const info = infoJson as Info;
  const [showSkills, setShowSkills] = useState<ListOfSkills>(skills);

  const handleSkillsFilter = (skillTypeId: number) => {
    if (skillTypeId === 0) setShowSkills(skills);
    else
      setShowSkills(
        skills.filter((skill) => skill.skillTypeId === skillTypeId)
      );
  };

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
            <h1>{info.name}</h1>
            <h1>{info.lastName}</h1>
          </div>
          <h3>SOFTWARE ENGINEER</h3>
        </div>
      </div>

      <div className={`secondary-section section`}>
        <h2>ABOUT ME</h2>
        <p className={styles.text}>{info.aboutMe}</p>
      </div>

      <div className="section">
        <h1>SKILLS</h1>
        <div className={styles.tags}>
          <Tag type="All" onClick={() => handleSkillsFilter(0)} />
          {skillTypes.map((tag) => (
            <Tag
              key={tag.id}
              type={tag.type}
              onClick={() => handleSkillsFilter(tag.id)}
            />
          ))}
        </div>
        <div className={styles.skills}>
          {showSkills.map((skill) => (
            <TechIcon key={skill.id} tech={skill} />
          ))}
        </div>
      </div>

      <div className="secondary-section full-section">
        <h2>RESUME</h2>
        <p className={styles.timelineTag}>Timeline</p>
        <div className={styles.timeline}>
          {experiences.toReversed().map((experience, index) => (
            <div
              key={experience.id}
              className={index % 2 === 0 ? "self-right" : "self-left"}
            >
              <CareerDisplay experience={experience} />
            </div>
          ))}
        </div>
      </div>

      <div className="section" id="home-contact">
        <h1>CONTACT</h1>
        <div className={styles.contact}>
          {contactInfo.map((contact) => (
            <ContactIcon key={contact.id} contactInfo={contact} />
          ))}
        </div>
      </div>
    </main>
  );
}
