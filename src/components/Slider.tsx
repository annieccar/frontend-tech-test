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
    <div className="w-[500px] h-[280px] m-auto">
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
        <button
          className="absolute left-2 inset-y-1/2 -translate-y-[50%] text-background text-2xl hover:scale-110"
          onClick={() => previousImage()}
        >
          <IoIosArrowDropleft />
        </button>
        <button
          className="absolute right-2 inset-y-1/2 -translate-y-[50%] text-background text-2xl z-10 hover:scale-110"
          onClick={() => nextImage()}
        >
          <IoIosArrowDropright />
        </button>
      </div>
    </div>
  );
}

export default Slider;
