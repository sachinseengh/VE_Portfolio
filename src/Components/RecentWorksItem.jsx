import React, { useState, useEffect } from 'react';
import { Videos } from '../Constant';
import profile from "../assets/images/sujay.png";

const RecentWorksItem = () => {
  return (
    <div className="pt-20 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

const VideoItem = ({ video }) => {
  const [poster, setPoster] = useState('');

  useEffect(() => {
    const generateThumbnail = async () => {
      const videoElement = document.createElement('video');
      videoElement.src = video.src;
      videoElement.currentTime = 1; // Capture a frame at 1 second
      videoElement.muted = true;

      videoElement.addEventListener('loadeddata', () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;

        const context = canvas.getContext('2d');
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        const thumbnail = canvas.toDataURL('image/jpeg');
        setPoster(thumbnail); // Set the generated thumbnail
      });
    };

    generateThumbnail();
  }, [video.src]);

  return (
    <div className="w-full h-56 md:h-72 lg:h-80 rounded-lg border border-gray-300 overflow-hidden shadow-2xl shadow-gray-400">
      <video
        controls
        className="w-full h-full object-cover"
        poster={poster || {profile}} // Show dynamic or default thumbnail
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default RecentWorksItem;
