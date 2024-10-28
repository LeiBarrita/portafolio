import styles from "./bentoGrid.module.css";
import { ListOfAppPhotos } from "@/types";
import Image from "next/image";
import React from "react";

const ImgBentoGrid = ({ images }: { images: ListOfAppPhotos }) => {
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

  return (
    <div className={styles.bentoGrid}>
      {splitImageArray(images, 3).map((imageArray, index) => (
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
