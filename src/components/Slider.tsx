import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

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

  const nextImage = () => {
    currentImageIndex === images.length - 1
      ? setCurrentImageIndex(0)
      : setCurrentImageIndex(currentImageIndex + 1);
  };

  const previousImage = () => {
    currentImageIndex === 0
      ? setCurrentImageIndex(images.length - 1)
      : setCurrentImageIndex(currentImageIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentImageIndex === images.length - 1
        ? setCurrentImageIndex(0)
        : setCurrentImageIndex(currentImageIndex + 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images, currentImageIndex]);

  return (
    <div className="w-[80%] md:w-[60%] m-auto">
      <div className="overflow-hidden relative">
        <button
          className="absolute right-2 inset-y-1/2 text-background text-2xl z-10 hover:scale-110"
          onClick={() => nextImage()}
        >
          <IoIosArrowDropright />
        </button>
        <div className="overflow-hidden relative">
          <div
            className="flex transition ease-out duration-1000"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {images.map((image) => (
              <img
                key={image.id}
                src={image.poster || image.thumbnail}
                className="object-cover"
                alt={image.description}
              />
            ))}
          </div>
          <div className="absolute bottom-2 py-1 flex justify-center w-full">
            {images.map((image, index) => {
              return (
                <div
                  key={image.id}
                  className={`rounded-full w-2 h-2 m-0.5 lg:mx-1 lg:w-3 lg:h-3  ${
                    index !== currentImageIndex ? 'bg-slate-400 opacity-50' : 'bg-white'
                  }`}
                />
              );
            })}
          </div>
        </div>

        <button
          className="absolute left-2 inset-y-1/2 text-background text-2xl hover:scale-110"
          onClick={() => previousImage()}
        >
          <IoIosArrowDropleft />
        </button>
      </div>
    </div>
  );
}

export default Slider;
