import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cake, Sparkles } from 'lucide-react';

const Page4Birthday = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Happy Birthday, Lixie!';
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#000000] flex items-center justify-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      data-testid="birthday-page"
    >
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl w-full text-center px-4">
        {/* Cake icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <motion.div
            className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50"
            animate={{
              boxShadow: [
                '0 0 20px rgba(212, 175, 55, 0.3)',
                '0 0 40px rgba(212, 175, 55, 0.6)',
                '0 0 20px rgba(212, 175, 55, 0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Cake className="w-14 h-14 text-black" />
          </motion.div>
        </motion.div>

        {/* Typewriter text */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#C0C0C0] to-[#D4AF37] bg-clip-text text-transparent min-h-[72px] sm:min-h-[80px] lg:min-h-[96px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-[#D4AF37] ml-2 align-middle"
          />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-[#C0C0C0] mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          data-testid="birthday-subtext"
        >
          Semoga hari ini seindah senyummu, bb.
        </motion.p>

        {/* Decorative quote */}
        <motion.div
          className="mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p
            className="text-[#C0C0C0]/80 italic text-sm sm:text-base"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Setiap hari bersamamu adalah hadiah yang tak ternilai"
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Continue button */}
        <motion.button
          onClick={() => navigate('/story')}
          className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] rounded-full text-black font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          data-testid="open-memories-button"
        >
          Buka Kenangan Kita
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page4Birthday;
