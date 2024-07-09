import React, { useEffect, useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

const Slider = ({ sliderData }: any): JSX.Element | null => {
  interface images {
    desktop: string;
    mobile: string;
  }

  const fillImagesArray = (arr: any) => {
    let images: images[] = [];
    arr.map((elem: any) => {
      if (elem.poster || elem.thumbnail) {
        images.push({
          desktop: elem.poster || elem.thumbnail,
          mobile: elem.posterPortrait || elem.portraitThumbnail,
        });
      }
    });
    return images;
  };

  const images = fillImagesArray(sliderData);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    currentImageIndex === images.length - 1
      ? setCurrentImageIndex(0)
      : setCurrentImageIndex(currentImageIndex + 1);
  };

  const previousImage = () => {
    console.log('hello');
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
    <div className="w-[60%] m-auto">
      <div className="overflow-hidden relative">
        <button
          className="absolute right-2 inset-y-1/2 text-white text-2xl z-10"
          onClick={() => nextImage()}
        >
          <IoIosArrowDropright />
        </button>
        <div
          className="flex transition ease-out duration-1000"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image) => (
            <img src={image.desktop} className="object-cover" />
          ))}
        </div>
        <button
          className="absolute left-2 inset-y-1/2 text-white text-2xl"
          onClick={() => previousImage()}
        >
          <IoIosArrowDropleft />
        </button>
      </div>
    </div>
  );
};

export default Slider;
