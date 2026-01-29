import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'Awal Kenal',
    icon: Heart,
    content:
      'Semua berawal dari hal yang sebenarnya sepele. Bb tiba-tiba nanya ke aku, "Kenapa nama Facebook kamu Ryzen susu gede?" Aku jawab seadanya, sambil bercanda. Dari situ malah jadi ketawa, nyambung, dan obrolan yang awalnya cuma iseng berubah jadi sering dan nyaman. Walaupun sempat banyak ragu dan ujian, aku dan bb tetap lanjut, pelan-pelan tapi serius.',
    gradient: 'from-[#D4AF37]/20 to-[#C0C0C0]/20',
  },
  {
    id: 2,
    title: 'Tanggal Jadian',
    date: '22 Desember 2024',
    icon: Calendar,
    content:
      'Hari itu aku sama bb resmi jadian. Bukan karena momen besar atau hal berlebihan, tapi karena sama-sama ngerasa kalau perasaan ini layak diperjuangkan. Tanggal itu jadi awal aku dan bb belajar saling ngerti, saling jaga, dan saling sabar.',
    gradient: 'from-[#C0C0C0]/20 to-[#D4AF37]/20',
  },
  {
    id: 3,
    title: 'Pertama Kali Meet',
    date: '6 Juni 2025',
    location: 'Cianjur',
    icon: MapPin,
    content:
      'Hari pertama aku ketemu bb secara langsung. Aku berangkat ke Cianjur dengan perasaan campur aduk: senang, grogi, dan kepikiran terus sepanjang jalan. Deg-degan banget, apalagi karena harus ketemu orang tua bb. Di kepalaku cuma ada satu pertanyaan, "Mereka bakal nerima aku nggak ya?" Tapi hari itu ngajarin aku satu hal: rasa takut, grogi, dan capek di jalan semuanya sepadan demi bisa ketemu bb.',
    gradient: 'from-[#D4AF37]/20 to-[#C0C0C0]/20',
  },
];

const Page5Story = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#000000] py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      data-testid="story-page"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto pb-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kenangan Kita
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#C0C0C0] to-[#D4AF37] hidden sm:block" />

          {/* Story cards */}
          <div className="space-y-12">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className="relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                data-testid={`story-${story.id}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] border-4 border-[#0f0f1a] hidden sm:block" />

                {/* Card */}
                <motion.div
                  className={`sm:ml-20 bg-gradient-to-br ${story.gradient} backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/60 transition-all`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C0C0C0] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#D4AF37]/30">
                      <story.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {story.title}
                      </h3>
                      {story.date && (
                        <p className="text-[#C0C0C0] text-sm">
                          {story.date}
                          {story.location && ` • ${story.location}`}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-[#C0C0C0] leading-relaxed text-sm sm:text-base">
                    {story.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continue button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={() => navigate('/closing')}
            className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] rounded-full text-black font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
            data-testid="to-closing-button"
          >
            Tutup Cerita
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page5Story;
