import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="mt-[40px] lg-[200px] p-[20px]">
      <h3 className="mb-[33px] text-4xl md:text-5xl font-Ojuju font-[700] text-[#001219] dark:text-[#fff]">
        Videos for <span className="text-[#ffd60a]">{name}</span>
      </h3>

      <div className="flex justify-center flex-wrap items-center mt-14 gap-[20px]">
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="h-[331px] w-[330px] rounded-[20px] exercise-video "
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className="rounded-[20px] p-3" />
            <div className="p-3">
              <h4 className="font-Marker text-xl text-[#001219] dark:text-[#fff]">{item.video.title}</h4>
              <h4 className="font-Marker text-xl text-[#001219] dark:text-[#fff]">{item.video.channelName}</h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
