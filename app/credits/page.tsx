import styles from "./credits.module.css";
import creditsJson from "../../data/credits.json";
import { ListOfAttributions } from "@/types";

export default function Credits() {
  const attribitions = creditsJson as ListOfAttributions;

  return (
    <main className={styles.credits}>
      {attribitions.map((attribition) => (
        <a
          key={attribition.id}
          href={attribition.link}
          title={attribition.title}
        >
          {attribition.description}
        </a>
      ))}
    </main>
  );
}
