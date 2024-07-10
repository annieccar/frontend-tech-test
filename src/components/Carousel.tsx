import React, { useEffect, useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Carousel = ({ carouselData }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselLength, setCarouselLength] = useState(0);

  const handleResize = () => {
    window.innerWidth <= 769 ? setCarouselLength(1) : setCarouselLength(3);
  };

  useEffect(() => {
    handleResize();
  }, []);

  console.log(currentImageIndex);

  const nextImage = () => {
    if (currentImageIndex === carouselData.length - carouselLength) {
      setCurrentImageIndex(carouselData.length - carouselLength);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const previousImage = () => {
    currentImageIndex === 0 ? setCurrentImageIndex(0) : setCurrentImageIndex(currentImageIndex - 1);
  };

  console.log(carouselData);

  return (
    <div className="flex flex-col items-center w-100 lg:w-1000px">
      {carouselData.length > 0 && (
        <div className="flex relative">
          {carouselData.length > carouselLength ? (
            <button
              className="absolute top-1/2 left-1 z-10 text-white hover:scale-110"
              type="button"
              onClick={previousImage}
            >
              <BsFillArrowLeftCircleFill />
            </button>
          ) : null}

          <div className="flex w-80 h-44 md:h-36 md:w-[720px] overflow-x-hidden overflow-y-hidden relative">
            <div
              className="flex w-80 md:w-[240px] transition ease-out duration-1000 "
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {carouselData.map((elem) => (
                <div
                  className="hover:scale-[115%] duration-300 ease-in-out 
"
                >
                  <img
                    src={elem.thumbnail || elem.poster}
                    alt={elem.description}
                    className="min-w-[320px] md:min-w-[240px] h-44 md:h-36 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {carouselData.length > carouselLength ? (
            <button
              className="absolute top-1/2 right-1 z-10 text-white hover:scale-110"
              type="button"
              onClick={() => nextImage()}
            >
              <BsFillArrowRightCircleFill />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Carousel;
