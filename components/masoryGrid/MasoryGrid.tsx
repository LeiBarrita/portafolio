import styles from "./masoryGrid.module.css";
import { AppPhoto, ListOfAppPhotos } from "@/types";
import Image from "next/image";
import Skeleton from "../skeleton/Skeleton";
import { useState } from "react";

const ImgBentoGrid = ({ images }: { images: ListOfAppPhotos }) => {
  return (
    <div className={styles.bentoGrid}>
      {images.map((image) => (
        <BentoImage key={image.id} image={image} />
      ))}
    </div>
  );
};

const BentoImage = ({ image }: { image: AppPhoto }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Skeleton loading={isLoading} className={styles.bentoGridSkeleton}>
      <Image
        className={styles.bentoGridImage}
        width={100}
        height={100}
        src={image.link}
        alt="Project picture"
        // onLoadingComplete={() => setIsLoading(false)}
      />
    </Skeleton>
  );
};

export default ImgBentoGrid;
