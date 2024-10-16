import { Project } from "@/types";
import styles from "./projectDisplay.module.css";
import React from "react";
import Image from "next/image";

const getDriveThumbnailUrl = (drivelink: string): string => {
  const regex = /\/file\/d\/(.*?)\/view\?/;
  const driveId = drivelink.match(regex);

  if (!driveId) return "";

  const link = `https://drive.google.com/thumbnail?id=${driveId[1]}&sz=w1000`;
  return link;
};

const ProjectDisplay = ({ project }: { project: Project }) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.textSection}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>

      {project.images[0] && (
        <Image
          className={styles.image}
          width={100}
          height={100}
          src={getDriveThumbnailUrl(project.images[0].link)}
          alt="Project picture"
        />
      )}
    </div>
  );
};

export default ProjectDisplay;
