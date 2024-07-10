import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

function Carousel({ carouselData }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselLength, setCarouselLength] = useState(0);

  const handleResize = () => {
    window.innerWidth <= 769 ? setCarouselLength(1) : setCarouselLength(3);
  };

  useEffect(() => {
    handleResize();
  }, []);

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
    <div className="flex flex-col items-center w-100 lg:w-1000px">
      {carouselData.length > 0 && (
        <div className="flex relative">
          {currentImageIndex !== 0 ? (
            <button
              className="absolute top-1/2 left-1 z-10 text-background hover:scale-110"
              type="button"
              onClick={previousImage}
            >
              <IoIosArrowDropleft />
            </button>
          ) : null}

          <div className="flex w-[250px] h-44 md:h-36 md:w-[720px] overflow-x-hidden overflow-y-hidden relative">
            <div
              className="flex w-[250px] md:w-[240px] transition ease-out duration-1000 "
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
                    className="min-w-[250px] md:min-w-[240px] h-44 md:h-36 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {currentImageIndex < carouselData.length - carouselLength ? (
            <button
              className="absolute top-1/2 right-1 z-10 text-background hover:scale-110"
              type="button"
              onClick={() => nextImage()}
            >
              <IoIosArrowDropright />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Carousel;
