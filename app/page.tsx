import Image from "next/image";
import styles from "./page.module.css";
import profileImg from "../public/profile.png";

export default function Home() {
  return (
    <main>
      <div className={styles.profileContainer}>
        <Image
          className={styles.image}
          objectFit="cover"
          src={profileImg}
          alt="My picture"
        />
        <div className={styles.infoContainer}>
          <div>
            <h1>PEDRO UZIEL</h1>
            <h1>BARRITA LICEA</h1>
          </div>
          <h3>SOFTWARE ENGINEER</h3>
        </div>
      </div>

      <div className={`secondary-section ${styles.section}`}>
        <h2>ABOUT ME</h2>
        <p className={styles.text}>
          Graduated in computer systems with 5 years of programming experience
          and 3 focused on software and web development. I’m a really curious
          person, and I love to learn about everything. I´m always searching for
          a challenge and exploring new technologies
        </p>
      </div>

      <div>
        <h1>SKILLS</h1>
        <div>
          <h4>All</h4>
          <h4>Frontend</h4>
          <h4>Backend</h4>
          <h4>Database</h4>
          <h4>Deployment</h4>
        </div>
        <div>
          <p>cubitos</p>
          <p>cubitos</p>
          <p>cubitos</p>
        </div>
      </div>

      <div>
        <h1>EXPERIENCE</h1>
        <div>
          <p>Timeline</p>
        </div>
      </div>
    </main>
  );
}
