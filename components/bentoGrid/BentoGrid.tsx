import styles from "./bentoGrid.module.css";
import { ListOfAppPhotos } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImgBentoGrid = ({ images }: { images: ListOfAppPhotos }) => {
  const [noCols, setNoCols] = useState(3);

  const splitImageArray = (
    baseArray: ListOfAppPhotos,
    noCols: number
  ): ListOfAppPhotos[] => {
    const imageArrays: ListOfAppPhotos[] = Array.from(
      { length: noCols },
      () => []
    );

    baseArray.forEach((item, index) => {
      const currentCol = index % noCols;
      imageArrays[currentCol].push(item);
    });

    return imageArrays;
  };

  useEffect(() => {
    const updateNoCols = () => {
      if (window.innerWidth <= 640) setNoCols(1);
      else if (window.innerWidth <= 1024) setNoCols(2);
      else setNoCols(3);
    };

    updateNoCols();
    window.addEventListener("resize", updateNoCols);

    return () => window.removeEventListener("resize", updateNoCols);
  }, []);

  return (
    <div className={styles.bentoGrid}>
      {splitImageArray(images, noCols).map((imageArray, index) => (
        <div key={index} className={styles.bentoGridColumn}>
          {imageArray.map((image) => (
            <Image
              key={image.id}
              className={styles.bentoGridImage}
              width={100}
              height={100}
              src={image.link}
              alt="Project picture"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImgBentoGrid;
