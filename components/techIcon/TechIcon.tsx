import { Skill } from "@/types";
import styles from "./techIcon.module.css";
import Image from "next/image";
import { useState } from "react";

const TechIcon = ({ tech }: { tech: Skill }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={`${styles.iconContainer} ${"skeleton"}`}
      data-before-content={tech.name}
    >
      <Image
        className={styles.icon}
        src={tech.icon}
        alt={`${tech.name} icon`}
        width={64}
        height={64}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default TechIcon;
