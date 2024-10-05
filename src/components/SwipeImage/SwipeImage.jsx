import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import s from "./SwipeImage.module.scss";

export const SwipeImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, images.length - 1)
      ),

    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} key={currentIndex} className={s.swiperContainer}>
      <img
        src={images && images[currentIndex]}
        alt={`image ${currentIndex}`}
        className={s.image}
      />
    </div>
  );
};
