import React, { useEffect, useState } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from 'react-icons/ri';

function Slider({ sliderData }: any): JSX.Element | null {
  const findItemsWithImages = (arr: any) => {
    const images: any[] = [];
    arr.map((elem: any) => {
      if (elem.poster || elem.thumbnail) {
        images.push(elem);
      }
    });
    return images;
  };

  const images = findItemsWithImages(sliderData);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      currentImageIndex === images.length - 1
        ? setCurrentImageIndex(0)
        : setCurrentImageIndex(currentImageIndex + 1);
      setFade(false);
    }, 1000);
  };

  const previousImage = () => {
    setFade(true);
    setTimeout(() => {
      currentImageIndex === 0
        ? setCurrentImageIndex(images.length - 1)
        : setCurrentImageIndex(currentImageIndex - 1);
      setFade(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="w-[250px] h-[150px]  md:w-[600px] md:h-[350px] lg:w-[900px] lg:h-[500px] m-auto">
      <div className="h-full relative">
        <div
          className={`w-full h-full bg-center bg-cover transition-opacity duration-1000 rounded-sm ease-in-out ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${
              images[currentImageIndex].poster || images[currentImageIndex].thumbnail
            })`,
          }}
        ></div>
        <div className="absolute bottom-2 py-1 flex justify-center w-full">
          {images.map((image, index) => {
            return (
              <div
                key={image.id}
                className={`rounded-full w-2 h-2 m-0.5 md:m-1  lg:w-3 lg:h-3  ${
                  index !== currentImageIndex ? 'bg-slate-400 opacity-50' : 'bg-white'
                }`}
              />
            );
          })}
        </div>
        <button
          className="absolute left-2 inset-y-1/2 -translate-y-[50%] text-background text-2xl lg:text-4xl hover:scale-110"
          onClick={() => previousImage()}
        >
          <RiArrowLeftWideLine />
        </button>
        <button
          className="absolute right-2 inset-y-1/2 -translate-y-[50%] text-background text-2xl lg:text-4xl z-10 hover:scale-110"
          onClick={() => nextImage()}
        >
          <RiArrowRightWideLine />
        </button>
      </div>
    </div>
  );
}

export default Slider;
