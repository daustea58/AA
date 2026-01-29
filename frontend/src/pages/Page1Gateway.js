import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const Page1Gateway = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '01022003') {
      setIsUnlocking(true);
      setTimeout(() => {
        navigate('/music');
      }, 1000);
    } else {
      setError('Password salah, coba lagi!');
      setPassword('');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#000000] flex items-center justify-center p-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isUnlocking ? 0 : 1 }}
      transition={{ duration: 1 }}
      data-testid="gateway-page"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-md w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Lock icon */}
        <motion.div
          className="flex justify-center mb-8"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
            <Lock className="w-10 h-10 text-black" data-testid="lock-icon" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Gateway
        </motion.h1>

        <motion.p
          className="text-[#C0C0C0] text-center mb-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Tanggal lahir bb (DDMMYYYY)
        </motion.p>

        {/* Password form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-6 py-4 bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] placeholder-[#C0C0C0]/50 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-center text-lg tracking-widest"
              autoFocus
              data-testid="password-input"
            />
            {error && (
              <motion.p
                className="text-red-400 text-sm text-center mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="error-message"
              >
                {error}
              </motion.p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] rounded-xl text-black font-semibold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            data-testid="unlock-button"
          >
            Unlock
          </motion.button>
        </form>

        {/* Decorative text */}
        <motion.p
          className="text-[#C0C0C0]/30 text-center mt-8 text-xs italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          "Every love story has a beginning..."
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Page1Gateway;
