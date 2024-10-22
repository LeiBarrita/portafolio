import { ListOfAppPhotos } from "@/types";
import styles from "./imgSlider.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const getDriveThumbnailUrl = (drivelink: string): string => {
  const regex = /\/file\/d\/(.*?)\/view\?/;
  const driveId = drivelink.match(regex);

  if (!driveId) return "";

  const link = `https://drive.google.com/thumbnail?id=${driveId[1]}&sz=w1000`;
  return link;
};

const ImgSlider = ({ images }: { images: ListOfAppPhotos }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImg((prevImg) =>
        prevImg === images.length - 1 ? 0 : prevImg + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Image
      className={styles.image}
      width={100}
      height={100}
      src={getDriveThumbnailUrl(images[currentImg].link)}
      alt="Project picture"
    />
  );
};

export default ImgSlider;
