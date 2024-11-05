"use client";

import styles from "./credits.module.css";
import creditsJson from "../../data/credits.json";
import { Attribution, ListOfAttributions } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Credits() {
  const attributions = creditsJson as ListOfAttributions;
  const [selectedAttribution, setSelectedAttribution] =
    useState<Attribution | null>(null);

  const handleSelection = (selection: Attribution) => {
    setSelectedAttribution(selection);
  };

  return (
    <main className={styles.container}>
      <h1>Credits</h1>
      <a
        key={selectedAttribution?.id}
        href={selectedAttribution?.link}
        target="_blank"
        title={selectedAttribution?.link}
        className={styles.creditItem}
      >
        <h3>{selectedAttribution?.description}</h3>
      </a>
      <div className={styles.credits}>
        {attributions.map((attribution) => (
          <Image
            key={attribution.id}
            className={styles.icon}
            src={attribution.icon}
            alt={attribution.title}
            width={64}
            height={64}
            onClick={() => handleSelection(attribution)}
          />
        ))}
      </div>
    </main>
  );
}
