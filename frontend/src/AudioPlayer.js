import React from 'react';
import { useAudio } from '../contexts/AudioContext';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';

const AudioPlayer = () => {
  const { currentSong, isPlaying, togglePlayPause, volume, setVolume } = useAudio();

  if (!currentSong) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-[#D4AF37]/20 p-4 z-50"
      data-testid="audio-player"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center hover:scale-110 transition-transform"
            data-testid="play-pause-button"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-black" />
            ) : (
              <Play className="w-5 h-5 text-black ml-0.5" />
            )}
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-[#D4AF37] font-medium text-sm truncate" data-testid="current-song-name">
              {currentSong}
            </p>
            <p className="text-[#C0C0C0] text-xs">Now Playing</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {volume === 0 ? (
            <VolumeX className="w-4 h-4 text-[#C0C0C0]" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#C0C0C0]" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-[#D4AF37]"
            data-testid="volume-slider"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
