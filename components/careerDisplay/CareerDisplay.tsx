import { ExperienceEvent } from "@/types";
import styles from "./CareerDisplay.module.css";

const CareerDisplay = ({ experience }: { experience: ExperienceEvent }) => {
  return (
    <div className={styles.experienceContainer}>
      <h3 className={styles.date}>{experience.startYear}</h3>
      <p className={styles.experience}>{experience.experience}</p>
    </div>
  );
};

export default CareerDisplay;
