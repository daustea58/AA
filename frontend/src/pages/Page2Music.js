import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../contexts/AudioContext';
import { Music, ChevronRight } from 'lucide-react';

const musicCategories = {
  Sedih: [
    { name: 'Menerima Luka', artist: 'Natasya Sabella', path: '/music/menerima-luka.mp3' },
    { name: 'Bersenja Gurau', artist: 'Raim Laode', path: '/music/bersenja-gurau.mp3' },
    { name: 'Dirimu Yang Dulu', artist: 'Anggis Devaki', path: '/music/dirimu-yang-dulu.mp3' },
  ],
  Mood: [
    { name: 'Mistletoe', artist: 'Justin Bieber', path: '/music/mistletoe.mp3' },
    { name: '18', artist: 'One Direction', path: '/music/18.mp3' },
    { name: 'Trouble', artist: 'Frank - ciaffa fedo DJ', path: '/music/trouble.mp3' },
  ],
  Semangat: [
    { name: 'Payphone', artist: 'Maroon 5', path: '/music/payphone.mp3' },
    { name: 'Perfect', artist: 'One Direction', path: '/music/perfect.mp3' },
    { name: 'Where we are', artist: 'One Direction', path: '/music/where-we-are.mp3' },
  ],
  Favorit: [
    { name: 'Kota ini tak sama tanpamu', artist: 'Nadhif Basalamah', path: '/music/kota-ini.mp3' },
    { name: 'Masa ini Nanti dan Masa Indah Lainnya', artist: 'Nuca', path: '/music/masa-ini-nanti.mp3' },
    { name: '8 Letters', artist: "Why Don't We", path: '/music/8-letters.mp3' },
  ],
};

const Page2Music = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { playSong } = useAudio();
  const navigate = useNavigate();

  const handleSongSelect = (song) => {
    playSong(song.path, `${song.name} - ${song.artist}`);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#000000] py-8 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      data-testid="music-page"
    >
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto pb-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
              <Music className="w-8 h-8 text-black" />
            </div>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pilih Lagu Untuk Menemani Cerita Kita
          </h1>
          <p className="text-[#C0C0C0] text-sm">Sentuh kategori dan pilih lagu favoritmu</p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-4 mb-8">
          {Object.keys(musicCategories).map((category, idx) => (
            <motion.div
              key={category}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <button
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className="w-full p-4 bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 rounded-xl hover:border-[#D4AF37] transition-all flex items-center justify-between group"
                data-testid={`category-${category.toLowerCase()}`}
              >
                <span className="text-[#D4AF37] font-semibold text-lg">{category}</span>
                <motion.div
                  animate={{ rotate: selectedCategory === category ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-[#C0C0C0] group-hover:text-[#D4AF37] transition-colors" />
                </motion.div>
              </button>

              {/* Songs list */}
              <AnimatePresence>
                {selectedCategory === category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 space-y-2 pl-4">
                      {musicCategories[category].map((song, songIdx) => (
                        <motion.button
                          key={songIdx}
                          onClick={() => handleSongSelect(song)}
                          className="w-full p-3 bg-black/30 border border-[#C0C0C0]/20 rounded-lg hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 transition-all text-left group"
                          whileHover={{ x: 5 }}
                          data-testid={`song-${song.name.toLowerCase().replace(/\s/g, '-')}`}
                        >
                          <p className="text-[#C0C0C0] group-hover:text-[#D4AF37] font-medium text-sm">
                            {song.name}
                          </p>
                          <p className="text-[#C0C0C0]/60 text-xs">{song.artist}</p>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Continue button */}
        <motion.button
          onClick={() => navigate('/game')}
          className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] rounded-xl text-black font-semibold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          data-testid="continue-button"
        >
          Lanjut Cerita
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page2Music;
