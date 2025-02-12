import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { VideoGrid } from './components/VideoGrid';
import { VideoPlayer } from './components/VideoPlayer';
import { StatsScreen } from './components/StatsScreen';
import { videos, viewerData, geoData } from './data';
import { Video } from './types';

type Screen = 'login' | 'main' | 'player' | 'stats';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleLogin = () => {
    setCurrentScreen('main');
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setCurrentScreen('player');
  };

  const handleCloseVideo = () => {
    setCurrentScreen('main');
    setSelectedVideo(null);
  };

  const handleShowStats = () => {
    setCurrentScreen('stats');
  };

  const handleCloseStats = () => {
    setCurrentScreen('player');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      
      {currentScreen === 'main' && (
        <VideoGrid videos={videos} onVideoSelect={handleVideoSelect} />
      )}
      
      {currentScreen === 'player' && selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={handleCloseVideo}
          onShowStats={handleShowStats}
        />
      )}
      
      {currentScreen === 'stats' && selectedVideo && (
        <StatsScreen
          video={selectedVideo}
          viewerData={viewerData}
          geoData={geoData}
          onClose={handleCloseStats}
        />
      )}
    </div>
  );
}

export default App;