import styles from "./bentoGrid.module.css";
import { ListOfAppPhotos } from "@/types";
import Image from "next/image";
import React from "react";

const ImgBentoGrid = ({ images }: { images: ListOfAppPhotos }) => {
  return (
    <div className={styles.bentoGrid}>
      {images.map((image, index) => (
        <div key={image.id} className={styles.bentoGridItem}>
          <Image
            key={image.id}
            // className={styles.bentoGridImage}
            width={100}
            height={100}
            src={image.link}
            alt="Project picture"
            onLoadingComplete={({ naturalWidth, naturalHeight }) => " "}
          />
        </div>
      ))}
    </div>
  );
};

// const ImgBentoGrid = () => {
//   return (
//     <div>ImgBentoGrid</div>
//   )
// }

export default ImgBentoGrid;
