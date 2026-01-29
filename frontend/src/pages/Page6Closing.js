import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';

const loveQuotes = [
  {
    quote: "Cinta bukan tentang seberapa sering kita bertemu, tapi seberapa dalam kita saling peduli",
    author: "- Unknown"
  },
  {
    quote: "Dari obrolan iseng, tumbuh perasaan yang tulus. Dari jarak yang jauh, tumbuh rasa sayang yang dekat di hati",
    author: "- Ryzen"
  },
  {
    quote: "Setiap hari bersamamu adalah hadiah yang tak ternilai, setiap detik denganmu adalah kenangan yang tak terlupakan",
    author: "- Unknown"
  },
  {
    quote: "Jarak memang jauh, tapi hati kita selalu dekat. Waktu mungkin terbatas, tapi cinta kita tanpa batas",
    author: "- Ryzen"
  },
];

const Page6Closing = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#000000] py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      data-testid="closing-page"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto pb-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
              <Heart className="w-10 h-10 text-black fill-black" />
            </div>
          </motion.div>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Penutup
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        {/* Main message */}
        <motion.div
          className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C0C0C0]/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#C0C0C0] leading-relaxed text-base sm:text-lg text-center">
            Aku nggak tau cerita ini bakal sejauh apa, tapi aku tau satu hal: dari nama Facebook
            yang absurd, aku nemu seseorang yang berarti. Bb, terima kasih udah hadir, udah sabar,
            dan mau jalan bareng aku sampai sejauh ini 🤍
          </p>
        </motion.div>

        {/* Love Quotes */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kutipan Cinta
          </h2>
          <div className="space-y-6">
            {loveQuotes.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                data-testid={`quote-${index + 1}`}
              >
                <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-4 left-4" />
                <div className="pl-12">
                  <p
                    className="text-[#C0C0C0] leading-relaxed text-sm sm:text-base mb-3 italic"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    "{item.quote}"
                  </p>
                  <p className="text-[#D4AF37] text-xs sm:text-sm font-medium">
                    {item.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative quote */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p
            className="text-[#C0C0C0]/70 italic text-sm sm:text-base"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Dari username yang absurd, tumbuh cerita yang indah"
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Footer credit */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <p className="text-[#C0C0C0]/50 text-sm">Made with ❤️ by Ryzen</p>
        </motion.div>
      </div>

      {/* Floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'linear',
            }}
          >
            <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/20" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Page6Closing;
