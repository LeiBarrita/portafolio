import { ExperienceEvent } from "@/types";
import styles from "./experienceDisplay.module.css";

const ExperienceDisplay = ({ experience }: { experience: ExperienceEvent }) => {
  return (
    <div className={styles.experienceContainer}>
      <h3 className={styles.date}>{experience.startYear}</h3>
      <p className={styles.experience}>{experience.experience}</p>
    </div>
  );
};

export default ExperienceDisplay;
