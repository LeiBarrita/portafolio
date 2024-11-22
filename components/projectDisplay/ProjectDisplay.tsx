import { Project } from "@/types";
import styles from "./projectDisplay.module.css";
import React, { useState } from "react";
import ImgMasoryGrid from "../masoryGrid/MasoryGrid";
import Image from "next/image";

const trimText = (text: string, length: number): string => {
  if (!text) return "";
  if (text.length <= length) return text;

  const trimedText = text.substring(0, length);
  const lastIndex = trimedText.lastIndexOf(" ");
  const newText = trimedText.substring(0, lastIndex);
  return newText + "...";
};

const ProjectDisplay = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.appContainer}>
      {isExpanded ? (
        <div className={`${styles.expandedCard} appear-slide-left`}>
          <h2
            className={`${styles.hoverExpandedCard}`}
            onClick={toggleExpanded}
          >
            {project.name}
          </h2>
          {project.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {project.images.length > 0 && (
            <ImgMasoryGrid images={project.images} />
          )}
          <Image
            className={styles.expandedLogo}
            width={100}
            height={100}
            src={project.companyLogo}
            alt="Company logo"
            onClick={toggleExpanded}
          />
        </div>
      ) : (
        <div className={styles.projectCard}>
          <Image
            className={`${styles.sideLogo} appear-slide-left`}
            width={100}
            height={100}
            src={project.companyLogo}
            alt="Company logo"
          />
          <div className={styles.cardText}>
            <h2
              className={`${styles.hoverCardTitle} appear-slide-right`}
              onClick={toggleExpanded}
            >
              {project.name}
            </h2>
            <div className={styles.cardBody}>
              <Image
                className={`${styles.bodyLogo} appear-slide-left`}
                width={100}
                height={100}
                src={project.companyLogo}
                alt="Company logo"
              />
              <p className="appear-slide-right">
                {project.paragraphs && trimText(project.paragraphs[0], 300)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
