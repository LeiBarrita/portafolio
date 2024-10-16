"use client";

import "./styles.css";
import styles from "./portafolio.module.css";
import { useEffect } from "react";
import projectsJson from "../../data/projects.json";
import { ListOfProjects } from "@/types";
import ProjectDisplay from "@/components/projectDisplay/ProjectDisplay";

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
          <ProjectDisplay project={project} />
          <div className={`${styles.primarySection}`} />
        </div>
      ))}
    </main>
  );
}
