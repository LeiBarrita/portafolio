import { Project } from "@/types";
import styles from "./projectDisplay.module.css";
import React, { useState } from "react";
import ImgMasoryGrid from "../masoryGrid/MasoryGrid";
import Image from "next/image";
import Skeleton from "../skeleton/Skeleton";

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
        <ExpandedCard project={project} toggleExpanded={toggleExpanded} />
      ) : (
        <DisplayCard project={project} toggleExpanded={toggleExpanded} />
      )}
    </div>
  );
};

const DisplayCard = ({
  project,
  toggleExpanded,
}: {
  project: Project;
  toggleExpanded: () => void;
}) => {
  const [sideLoading, setSideLoading] = useState(true);
  const [bodyLoading, setBodyLoading] = useState(true);

  return (
    <div className={`${styles.projectCard} scroll-slide-left`}>
      <Skeleton
        loading={sideLoading}
        className={`${styles.sideLogo} appear-slide-left`}
      >
        <Image
          width={100}
          height={100}
          src={project.companyLogo}
          alt="Company logo"
          onLoadingComplete={() => setSideLoading(false)}
        />
      </Skeleton>
      <div className={styles.cardText}>
        <h2
          className={`${styles.hoverCardTitle} appear-slide-right`}
          onClick={toggleExpanded}
        >
          {project.name}
        </h2>
        <div className={styles.cardBody}>
          <Skeleton
            loading={bodyLoading}
            className={`${styles.bodyLogo} appear-slide-left`}
          >
            <div>
              <Image
                width={200}
                height={200}
                src={project.companyLogo}
                alt="Company logo"
                onLoadingComplete={() => setBodyLoading(false)}
              />
            </div>
          </Skeleton>
          <p className="appear-slide-right">
            {project.paragraphs && trimText(project.paragraphs[0], 300)}
          </p>
        </div>
      </div>
    </div>
  );
};

const ExpandedCard = ({
  project,
  toggleExpanded,
}: {
  project: Project;
  toggleExpanded: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${styles.expandedCard} appear-slide-left`}>
      <h2 className={`${styles.hoverExpandedCard}`} onClick={toggleExpanded}>
        {project.name}
      </h2>
      {project.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {project.images.length > 0 && <ImgMasoryGrid images={project.images} />}
      <Skeleton loading={isLoading}>
        <Image
          className={styles.expandedLogo}
          width={100}
          height={100}
          src={project.companyLogo}
          alt="Company logo"
          onClick={toggleExpanded}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </Skeleton>
    </div>
  );
};

export default ProjectDisplay;
