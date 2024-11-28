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
import ContactDisplay from "@/components/contactDisplay/ContactDisplay";

export default function Home() {
  const experiences = experiencesJson as ListOfCareerEvents;
  const skillTypes = skillTypesJson as ListOfSkillTypes;
  const contactInfo = contactJson as ListOfContactInfo;
  const skills = skillsJson as ListOfSkills;
  const info = infoJson as Info;
  const [showSkills, setShowSkills] = useState<ListOfSkills>(skills);
  const [showTimeline, setShowTimeline] = useState(false);

  const handleSkillsFilter = (skillTypeId: number) => {
    setShowSkills([]);
    setTimeout(() => {
      if (skillTypeId === 0) setShowSkills(skills);
      else
        setShowSkills(
          skills.filter((skill) => skill.skillTypeId === skillTypeId)
        );
    }, 100);
  };

  const toggleTimeline = () => {
    setShowTimeline(!showTimeline);
  };

  return (
    <main>
      <div className={styles.profileContainer}>
        <Image
          className={`${styles.image} appear-slide-left`}
          objectFit="cover"
          src={profileImg}
          alt="My picture"
        />
        <div className={`${styles.infoContainer} appear-slide-right`}>
          <div>
            <h1>{info.name}</h1>
            <h1>{info.lastName}</h1>
          </div>
          <h3>SOFTWARE ENGINEER</h3>
        </div>
      </div>

      <div className={`secondary-section section appear-slide-right`}>
        <h2>ABOUT ME</h2>
        <p className={`${styles.text} scroll-slide-left`}>{info.aboutMe}</p>
      </div>

      <div className="section appear-slide-right">
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

      <div className="secondary-section full-section appear-slide-right">
        <h2 onClick={toggleTimeline}>RESUME</h2>
        <p
          className={`${styles.timelineTag} hover-grow hover-shine`}
          onClick={toggleTimeline}
        >
          Timeline
        </p>
        {showTimeline ? (
          <>
            <div className={styles.timeline}>
              {experiences.toReversed().map((experience, index) => (
                <div
                  key={experience.id}
                  className={
                    index % 2 === 0
                      ? "self-right scroll-slide-right"
                      : "self-left scroll-slide-left"
                  }
                >
                  <CareerDisplay experience={experience} />
                </div>
              ))}
            </div>
            <h2
              className="scroll-slide-right hover-grow hover-shine"
              onClick={toggleTimeline}
            >
              ▽
            </h2>
          </>
        ) : (
          <h2
            className="scroll-slide-left hover-grow hover-shine"
            onClick={toggleTimeline}
          >
            △
          </h2>
        )}
      </div>

      <div className="w-100 section appear-slide-right" id="home-contact">
        <h1>CONTACT</h1>
        <ContactDisplay contactList={contactInfo} />
      </div>
    </main>
  );
}
