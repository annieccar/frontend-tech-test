import React, { useEffect, useState } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from 'react-icons/ri';

function Carousel({ carouselData }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselLength, setCarouselLength] = useState(0);

  const handleResize = () => {
    window.innerWidth <= 769 ? setCarouselLength(1) : setCarouselLength(3);
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener('resize', handleResize);

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

  return (
    <div className="flex flex-col items-center w-100 ">
      {carouselData.length > 0 && (
        <div className="flex relative">
          {currentImageIndex !== 0 ? (
            <button
              className="absolute top-1/2 left-1 z-10 text-background text-2xl hover:scale-110"
              type="button"
              onClick={previousImage}
            >
              <RiArrowLeftWideLine />
            </button>
          ) : null}

          <div className="flex w-[250px] h-44 md:h-40 md:w-[720px] lg:w-[960px] lg:h-44 overflow-x-hidden overflow-y-hidden relative">
            <div
              className="flex w-[250px] md:w-[240px] lg:w-[320px] transition ease-out duration-1000 "
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {carouselData.map((elem: any) => (
                <div
                  key={elem.id}
                  className="hover:scale-[115%] duration-300 ease-in-out 
"
                >
                  <img
                    key={elem.id}
                    src={elem.thumbnail || elem.poster}
                    alt={elem.description}
                    className="min-w-[250px] md:min-w-[240px] lg:min-w-[320px] h-44 md:h-40 lg:h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {currentImageIndex < carouselData.length - carouselLength ? (
            <button
              className="absolute top-1/2 right-1 z-10 text-background text-2xl hover:scale-110"
              type="button"
              onClick={() => nextImage()}
            >
              <RiArrowRightWideLine />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Carousel;
