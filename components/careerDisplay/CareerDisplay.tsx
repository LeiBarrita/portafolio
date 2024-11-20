import { CareerEvent } from "@/types";
import styles from "./careerDisplay.module.css";

const CareerDisplay = ({ experience }: { experience: CareerEvent }) => {
  return (
    <div className={styles.experienceContainer}>
      <h3 className={styles.date}>
        {experience.startMonth} {experience.startYear}
      </h3>
      <p className={styles.experience}>{experience.experience}</p>
    </div>
  );
};

export default CareerDisplay;
