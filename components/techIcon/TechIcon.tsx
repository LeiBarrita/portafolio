import { Skill } from "@/types";
import styles from "./techIcon.module.css";
import Image from "next/image";
import { useState } from "react";
import Skeleton from "../skeleton/Skeleton";

const TechIcon = ({ tech }: { tech: Skill }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Skeleton loading={isLoading} className="appear-slide-right">
      <div
        className={`${styles.iconContainer} scroll-slide-left`}
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
    </Skeleton>
  );
};

export default TechIcon;
