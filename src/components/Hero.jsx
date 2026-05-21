import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle, CalendarDays, Shield, Users, Star, Trophy } from 'lucide-react';
import { wa } from '../utils/wa';

const stats = [
  { value: '200+', label: 'Alunos Ativos' },
  { value: '3', label: 'Anos de Excelência' },
  { value: '20+', label: 'Competições' },
  { value: '100%', label: 'Compromisso' },
];

const badges = [
  { icon: Shield, label: 'Defesa Pessoal' },
  { icon: Users, label: 'Ambiente Familiar' },
  { icon: Star, label: 'Kids & Adultos' },
  { icon: Trophy, label: 'Competição' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.25em]">
            KOA Brazilian Jiu-Jitsu Academy · Since 2022
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-heading text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] leading-none text-white mb-6"
          >
            Mais que{' '}
            <span className="text-[#d4af37]">Jiu-Jitsu.</span>
            <br />
            Uma transformação
            <br />
            <span className="text-gray-300">para a vida.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Disciplina, defesa pessoal, confiança e evolução dentro e fora do tatame.
            Bem-vindo à família KOA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href={wa('Olá! Gostaria de agendar uma aula experimental gratuita na KOA BJJ Academy! 🥋')}
              className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#f0d060] text-black font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/30 uppercase tracking-wide"
            >
              <CalendarDays className="w-5 h-5" />
              Agende uma Aula Experimental
            </a>
            <a
              href={wa('Olá! Vim pelo site da KOA BJJ Academy e gostaria de mais informações. 🥋')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white/30 hover:border-[#d4af37] text-white hover:text-[#d4af37] font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 backdrop-blur-sm uppercase tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <Icon className="w-4 h-4 text-[#d4af37]" />
                <span className="text-white/80 text-xs font-medium uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#2a2a2a] bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-[#d4af37]/40 transition-colors duration-300"
            >
              <div className="font-heading text-5xl text-[#d4af37] mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
