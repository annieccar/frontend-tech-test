import React from 'react';
import { BiFullscreen } from 'react-icons/bi';
import { FaPlay, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Cms from 'src/services/Cms';

interface Video {
  currentFanViews: number;
  description: string;
  duration: string;
  fullDescription: string;
  hasBeenViewed: boolean;
  isNew: boolean;
  itemId: string;
  itemType: string;
  marker: number;
  name: string;
  poster: string;
  posterPortrait: null;
  ratio: string;
  technicalDescription: null;
  urlSlug: null;
  views: number;
}

function VideoPlayer({ video }: { video: Video }) {
  // const fetchVideos = async () => await Cms.getVideos({ limit = 50 });
  // const { data } = useQuery('videos', fetchVideos);

  // console.log(data);

  const duration = video.duration.split(':');
  duration.shift();

  return (
    <div className="w-full flex flex-col items-center mt-2">
      <div className="w-[250px] h-[150px]  md:h-[350px] md:w-[600px] lg:w-[900px] lg:h-[500px] relative overflow-hidden rounded-sm">
        <img className="z=0" src={video.poster} alt={video.name} />
        <div className="bg-gradient-to-b z-10 inset-0 absolute"></div>
        <div className="absolute text-lightGray  flex w-full bottom-2 justify-center z-20 flex-col items-center">
          <div className=" flex justify-center items-center w-5/6">
            <div className="translate-y-[5px] text-xs lg:text-lg mr-1">00:00</div>
            <div className="border-b-[2px] lg:border-b-[4px] border-facebook border-solid h-[20px] w-1/2 mb-2"></div>
            <div className="w-2 h-2 border-2 lg:w-4 lg:h-4 lg:border-4 border-facebook bg-white rounded-full translate-y-[5px]"></div>
            <div className="border-b-[2px] lg:border-b-[4px] border-[rgb(215,214,214,0.5)] border-solid h-[20px] w-1/2 mb-2"></div>
            <div className="translate-y-[5px] text-xs lg:text-lg ml-1"> {duration.join(':')} </div>
          </div>

          <div className="w-3/4 flex justify-between mt-1 lg:mt-4">
            <FaVolumeUp className="text-md  hover:cursor-pointer" />
            <FaStepBackward className="text-md  hover:cursor-pointer" />
            <FaPlay className="text-md  hover:cursor-pointer" />
            <FaStepForward className="text-md  hover:cursor-pointer" />
            <BiFullscreen className="text-md  hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex-col w-[250px] md:w-[600px] lg:w-[900px] text-white mt-2 mb-2">
        <div className="font-title font-bold text-xl lg:text-2xl"> {video.name.toUpperCase()} </div>
        <div className="text-xs lg:text-xl font-semibold text-lightGray"> {video.description} </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
