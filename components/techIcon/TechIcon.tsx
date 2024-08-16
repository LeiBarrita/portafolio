import { Skill } from "@/types";
import styles from "./techIcon.module.css";
import Image from "next/image";

const TechIcon = ({ tech }: { tech: Skill }) => {
  return (
    <div className={styles.iconContainer} data-before-content={tech.name}>
      <Image
        className={styles.icon}
        src={tech.icon}
        alt={`${tech.name} icon`}
        width={64}
        height={64}
      />
    </div>
  );
};

export default TechIcon;
