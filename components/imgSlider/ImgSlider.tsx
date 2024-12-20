import { ListOfAppPhotos } from "@/types";
import styles from "./imgSlider.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImgSlider = ({
  images,
  onClick,
}: {
  images: ListOfAppPhotos;
  onClick: () => void;
}) => {
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
      src={images[currentImg].link}
      alt="Project picture"
      onClick={onClick}
    />
  );
};

export default ImgSlider;
