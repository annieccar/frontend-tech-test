import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { CiVolumeHigh } from 'react-icons/ci';
import { GoScreenFull } from 'react-icons/go';
import { IoPlaySkipForwardOutline } from 'react-icons/io5';
import { IoPlaySkipBackOutline } from 'react-icons/io5';

function VideoPlayer({ video }) {
  console.log(video);

  const duration = video.duration.split(':');
  duration.shift();

  return (
    <div className="w-full flex flex-col items-center mt-2">
      <div className="w-[250px] h-[150px]  md:h-[350px] md:w-[600px] relative overflow-hidden">
        <img className="z=0" src={video.poster} />
        <div className="bg-gradient-to-b z-10 inset-0 absolute"></div>
        <div className="absolute text-lightGray  flex w-full bottom-2 justify-center z-20 flex-col items-center">
          <div className=" flex justify-center items-center w-5/6">
            <div className="translate-y-[5px] text-2xs mr-1">00:00</div>
            <div className="border-b-[1px] border-[rgb(215,214,214,1)] border-solid h-[20px] w-1/2 mb-2"></div>
            <div className="border-b-[1px] border-[rgb(215,214,214,0.5)] border-solid h-[20px] w-1/2 mb-2"></div>
            <div className="translate-y-[5px] text-2xs ml-1"> {duration.join(':')} </div>
          </div>

          <div className="w-3/4 flex justify-between">
            <CiVolumeHigh size={10} />
            <IoPlaySkipBackOutline size={10} />
            <CiPlay1 size={10} />
            <IoPlaySkipForwardOutline size={10} />
            <GoScreenFull size={10} />
          </div>
        </div>
      </div>
      <div className="flex-col w-[250px] md:w-[600px]">
        <div className="font-title font-bold "> {video.name} </div>
        <div className="text-2xs font-semibold"> {video.description} </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
