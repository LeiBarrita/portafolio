"use client";

import "./styles.css";
import styles from "./portafolio.module.css";
import Image from "next/image";
import { useEffect } from "react";
import projectsJson from "../../data/projects.json";
import { ListOfProjects } from "@/types";

const getDriveThumbnailUrl = (drivelink: string): string => {
  const regex = /\/file\/d\/(.*?)\/view\?/;
  const driveId = drivelink.match(regex);

  if (!driveId) return "";

  const link = `https://drive.google.com/thumbnail?id=${driveId[1]}&sz=w1000`;
  return link;
};

export default function Portafolio() {
  const projects = projectsJson as ListOfProjects;

  useEffect(() => {
    document.body.classList.add("portafolio-body");

    return () => {
      document.body.classList.remove("portafolio-body");
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.primarySection}`}>
        <h1>Projects</h1>
      </div>

      {projects.map((project) => (
        <div key={project.id}>
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
                alt="Drive picture"
              />
            )}
          </div>

          <div className={`${styles.primarySection}`} />
        </div>
      ))}
    </main>
  );
}
