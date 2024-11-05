import styles from "./masoryGrid.module.css";
import { ListOfAppPhotos } from "@/types";
import Image from "next/image";

const ImgBentoGrid = ({ images }: { images: ListOfAppPhotos }) => {
  return (
    <div className={styles.bentoGrid}>
      {images.map((image) => (
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
  );
};

export default ImgBentoGrid;
