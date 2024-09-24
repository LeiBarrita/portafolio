"use client";

import "./styles.css";
import styles from "./portafolio.module.css";
import Image from "next/image";
import { useEffect } from "react";
import profileImg from "../../public/ponymaps.png";

export default function Portafolio() {
  useEffect(() => {
    document.body.classList.add("portafolio-body");

    return () => {
      document.body.classList.remove("portafolio-body");
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.primarySection}`}>
        <h1>Portafolio</h1>
      </div>

      <div className={styles.appContainer}>
        <div className={styles.textSection}>
          <h2>Ponymaps</h2>
          <p>
            Lorem ipsum lorem a multi-account system on AWS for a landing zone.
            Created and documented multiple Lambdas and alarms in CloudWatch to
            monitor the deployments of multiple projects Implemented
            automatiozations for a DevOps environment
          </p>
        </div>

        <Image className={styles.image} src={profileImg} alt="My picture" />
      </div>

      <div className={`${styles.primarySection}`} />
    </main>
  );
}
