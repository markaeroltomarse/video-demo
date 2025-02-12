import React from 'react';
import { Play } from 'lucide-react';
import { Video } from '../types';

interface VideoGridProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoSelect }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`relative group cursor-pointer rounded-lg overflow-hidden ${
            index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
          }`}
          onClick={() => onVideoSelect(video)}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold">{video.title}</h3>
            <p className="text-gray-200 text-sm">{video.views.toLocaleString()} views</p>
          </div>
        </div>
      ))}
    </div>
  );
};