import { Project } from "@/types";
import styles from "./projectDisplay.module.css";
import React from "react";
import ImgSlider from "../imgSlider/ImgSlider";

const ProjectDisplay = ({ project }: { project: Project }) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.textSection}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>

      {project.images.length > 0 && <ImgSlider images={project.images} />}
    </div>
  );
};

export default ProjectDisplay;
