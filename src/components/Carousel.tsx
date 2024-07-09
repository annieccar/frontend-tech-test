import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Carousel = ({ carouselData }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carousselLength, setCarousselLength] = useState(null);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setCarousselLength(2);
    } else {
      setCarousselLength(5);
    }
  };

  return <div>Carousel</div>;
};

export default Carousel;
