import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Heart } from 'lucide-react';

const Page3Game = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const navigate = useNavigate();

  const handleNoHover = () => {
    setAttempts((prev) => prev + 1);
    
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    
    setNoButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setShowConfetti(true);
    setTimeout(() => {
      navigate('/birthday');
    }, 3000);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#000000] flex items-center justify-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      data-testid="game-page"
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          >
            <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {!yesClicked ? (
          <>
            {/* Question */}
            <motion.div
              className="mb-16"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="inline-block mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50 mx-auto">
                  <Heart className="w-12 h-12 text-black fill-black" />
                </div>
              </motion.div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kamu sayang aku ga?
              </h1>
              {attempts > 0 && attempts <= 5 && (
                <motion.p
                  className="text-[#C0C0C0] text-sm mt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={attempts}
                >
                  {attempts === 1 && 'Yakin mau pilih "No"? 🥺'}
                  {attempts === 2 && 'Ayolah... pilih "Yes" dong 💕'}
                  {attempts === 3 && 'Kok tega banget sih... 😢'}
                  {attempts === 4 && 'Masa ga sayang? 😭'}
                  {attempts === 5 && 'Yasudah deh, tombol "No" nya hilang aja...'}
                </motion.p>
              )}
            </motion.div>

            {/* Buttons */}
            <div className="relative h-40">
              {/* Yes Button */}
              <motion.button
                onClick={handleYesClick}
                className="px-12 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] rounded-full text-black font-bold text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                data-testid="yes-button"
              >
                Yes ❤️
              </motion.button>

              {/* No Button - Moving */}
              {attempts <= 5 && (
                <motion.button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="absolute px-12 py-4 bg-gray-700 rounded-full text-gray-300 font-bold text-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: attempts > 5 ? 0 : 1,
                    x: noButtonPosition.x,
                    y: noButtonPosition.y,
                  }}
                  transition={{
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{
                    position: attempts > 0 ? 'fixed' : 'relative',
                    pointerEvents: attempts > 5 ? 'none' : 'auto',
                  }}
                  data-testid="no-button"
                >
                  No
                </motion.button>
              )}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <Heart className="w-32 h-32 text-[#D4AF37] fill-[#D4AF37] mx-auto mb-6" />
            <h2
              className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Aku juga sayang kamu! 💕
            </h2>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Page3Game;
