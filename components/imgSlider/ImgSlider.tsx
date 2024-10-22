import { ListOfAppPhotos } from "@/types";
import styles from "./imgSlider.module.css";
import Image from "next/image";

const getDriveThumbnailUrl = (drivelink: string): string => {
  const regex = /\/file\/d\/(.*?)\/view\?/;
  const driveId = drivelink.match(regex);

  if (!driveId) return "";

  const link = `https://drive.google.com/thumbnail?id=${driveId[1]}&sz=w1000`;
  return link;
};

const ImgSlider = ({ images }: { images: ListOfAppPhotos }) => {
  return (
    <Image
      className={styles.image}
      width={100}
      height={100}
      src={getDriveThumbnailUrl(images[0].link)}
      alt="Project picture"
    />
  );
};

export default ImgSlider;
