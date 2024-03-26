import { useState } from "react";
import styles from "./ImageCarousel.module.scss";
import imageSvg from "../../assets/image.svg";

export type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMoveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleMoveRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <div className={styles.imageCarouselContainer}>
      <button
        className={`${currentIndex === 0 ? styles.disabledButton : styles.enabledButton}`}
        disabled={currentIndex === 0}
        onClick={handleMoveLeft}
      >
        {"<<"}
      </button>
      <div
        style={{
          backgroundImage: `url('${images[currentIndex] || imageSvg}')`,
        }}
        className={styles.imageFrame}
      ></div>
      <button
        className={`${currentIndex === images.length - 1 ? styles.disabledButton : styles.enabledButton}`}
        disabled={currentIndex === images.length - 1}
        onClick={handleMoveRight}
      >
        {">>"}
      </button>
    </div>
  );
};

export default ImageCarousel;
