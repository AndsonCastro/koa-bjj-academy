import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { wa } from '../utils/wa';

const schedule = [
  { day: 'Segunda', time: '07:00 – 08:00', name: 'Adulto Iniciante', type: 'gi', level: 'Iniciante', instructor: 'Prof. Marcus' },
  { day: 'Segunda', time: '18:00 – 19:00', name: 'Kids (6–12 anos)', type: 'kids', level: 'Todos', instructor: 'Prof. Carlos' },
  { day: 'Segunda', time: '19:00 – 20:30', name: 'Adulto Avançado', type: 'gi', level: 'Avançado', instructor: 'Prof. Marcus' },
  { day: 'Segunda', time: '20:30 – 21:30', name: 'Treino de Competição', type: 'comp', level: 'Avançado', instructor: 'Prof. Marcus' },

  { day: 'Terça', time: '07:00 – 08:00', name: 'No-Gi Geral', type: 'nogi', level: 'Todos', instructor: 'Prof. Marcus' },
  { day: 'Terça', time: '17:00 – 18:00', name: 'Juvenil (13–17 anos)', type: 'kids', level: 'Todos', instructor: 'Prof. Carlos' },
  { day: 'Terça', time: '19:00 – 20:30', name: 'Adulto Intermediário', type: 'gi', level: 'Intermediário', instructor: 'Prof. Marcus' },

  { day: 'Quarta', time: '07:00 – 08:00', name: 'Adulto Iniciante', type: 'gi', level: 'Iniciante', instructor: 'Prof. Marcus' },
  { day: 'Quarta', time: '18:00 – 19:00', name: 'Kids (6–12 anos)', type: 'kids', level: 'Todos', instructor: 'Prof. Carlos' },
  { day: 'Quarta', time: '19:00 – 20:30', name: 'Feminino', type: 'fem', level: 'Todos', instructor: 'Prof. Ana' },
  { day: 'Quarta', time: '20:30 – 21:30', name: 'Adulto Avançado', type: 'gi', level: 'Avançado', instructor: 'Prof. Marcus' },

  { day: 'Quinta', time: '07:00 – 08:00', name: 'No-Gi Geral', type: 'nogi', level: 'Todos', instructor: 'Prof. Marcus' },
  { day: 'Quinta', time: '17:00 – 18:00', name: 'Juvenil (13–17 anos)', type: 'kids', level: 'Todos', instructor: 'Prof. Carlos' },
  { day: 'Quinta', time: '19:00 – 20:30', name: 'Adulto Intermediário', type: 'gi', level: 'Intermediário', instructor: 'Prof. Marcus' },
  { day: 'Quinta', time: '20:30 – 21:30', name: 'Treino de Competição', type: 'comp', level: 'Avançado', instructor: 'Prof. Marcus' },

  { day: 'Sexta', time: '07:00 – 08:00', name: 'Adulto Iniciante', type: 'gi', level: 'Iniciante', instructor: 'Prof. Marcus' },
  { day: 'Sexta', time: '18:00 – 19:00', name: 'Kids (6–12 anos)', type: 'kids', level: 'Todos', instructor: 'Prof. Carlos' },
  { day: 'Sexta', time: '19:00 – 20:30', name: 'Adulto Geral', type: 'gi', level: 'Todos', instructor: 'Prof. Marcus' },

  { day: 'Sábado', time: '09:00 – 10:00', name: 'Kids (6–12 anos)', type: 'kids', level: 'Todos', instructor: 'Prof. Carlos' },
  { day: 'Sábado', time: '10:00 – 11:30', name: 'Open Mat', type: 'nogi', level: 'Todos', instructor: 'Prof. Marcus' },
  { day: 'Sábado', time: '11:30 – 12:30', name: 'Competição / Sparring', type: 'comp', level: 'Avançado', instructor: 'Prof. Marcus' },
];

const typeConfig = {
  gi: { label: 'Gi', color: 'bg-blue-950 text-blue-300 border-blue-800/60' },
  nogi: { label: 'No-Gi', color: 'bg-red-950 text-red-300 border-red-800/60' },
  kids: { label: 'Kids', color: 'bg-green-950 text-green-300 border-green-800/60' },
  comp: { label: 'Competição', color: 'bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/40' },
  fem: { label: 'Feminino', color: 'bg-purple-950 text-purple-300 border-purple-800/60' },
};

const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Todos');

  const filtered = activeDay === 'Todos' ? schedule : schedule.filter((i) => i.day === activeDay);

  return (
    <section id="horarios" className="py-24 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Grade de Treinos"
          title="HORÁRIOS & MODALIDADES"
          subtitle="Turmas para todas as idades e níveis. Encontre o horário ideal para você e sua família."
        />

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {['Todos', ...days].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                activeDay === day
                  ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20'
                  : 'bg-[#111] text-gray-400 hover:text-white border border-[#2a2a2a] hover:border-[#d4af37]/40'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.day}-${item.time}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group bg-[#111111] border border-[#1e1e1e] rounded-xl px-5 py-4 flex flex-wrap md:flex-nowrap items-center gap-4 hover:border-[#d4af37]/30 hover:bg-[#141414] transition-all duration-200"
            >
              <div className="min-w-[90px] text-[#d4af37] font-semibold text-sm">{item.day}</div>
              <div className="min-w-[140px] flex items-center gap-2 text-white font-heading text-lg">
                <Clock className="w-4 h-4 text-gray-600 flex-shrink-0" />
                {item.time}
              </div>
              <div className="flex-1 text-white font-semibold group-hover:text-[#d4af37] transition-colors">{item.name}</div>
              <div className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${typeConfig[item.type]?.color}`}>
                {typeConfig[item.type]?.label}
              </div>
              <div className="min-w-[90px] text-center">
                <span className="text-gray-500 text-xs bg-[#1a1a1a] px-2 py-1 rounded-md">{item.level}</span>
              </div>
              <div className="min-w-[120px] flex items-center gap-2 text-gray-500 text-sm">
                <User className="w-3.5 h-3.5" />
                {item.instructor}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm mb-5">* Horários podem sofrer alterações. Confirme pelo WhatsApp antes de comparecer.</p>
          <a
            href={wa('Olá! Gostaria de confirmar os horários de treino da KOA BJJ Academy. 🥋')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#f0d060] text-black font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:scale-105 uppercase tracking-wide"
          >
            Confirmar Horário pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
