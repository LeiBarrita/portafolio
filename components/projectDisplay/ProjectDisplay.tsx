import { Project } from "@/types";
import styles from "./projectDisplay.module.css";
import React, { useState } from "react";
import ImgSlider from "../imgSlider/ImgSlider";
import ImgBentoGrid from "../bentoGrid/BentoGrid";

const trimText = (text: string, length: number): string => {
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
      {!isExpanded && (
        <>
          <div className={`${styles.textSection} ${styles.left}`}>
            <h2 onClick={toggleExpanded}>{project.name}</h2>
            <p>{trimText(project.description, 250)}</p>
          </div>
          {project.images.length > 0 && <ImgSlider images={project.images} />}
        </>
      )}

      {isExpanded && (
        <div className={`${styles.textSection} ${styles.middle}`}>
          <h2 onClick={toggleExpanded}>{project.name}</h2>
          <p>{project.description}</p>
          <ImgBentoGrid images={project.images} />
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
