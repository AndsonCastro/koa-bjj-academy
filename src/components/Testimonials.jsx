import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';

const testimonials = [
  {
    name: 'Rafael Oliveira',
    role: 'Aluno há 2 anos · Faixa Azul',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    rating: 5,
    text: 'Entrei na KOA sem nunca ter treinado nada na vida. Em dois anos, perdi 18 kg, ganhei uma confiança que jamais tive e fiz amigos que vão ser para sempre. O Prof. Marcus tem uma paciência e uma dedicação únicas. A KOA mudou minha vida.',
    highlight: 'Perdi 18 kg e ganhei confiança para a vida.',
  },
  {
    name: 'Fernanda Costa',
    role: 'Aluna há 1 ano · Faixa Branca',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
    rating: 5,
    text: 'Como mulher, sempre tive medo de entrar numa academia de luta. Na KOA encontrei um ambiente completamente acolhedor. A Prof. Ana é incrível e o programa feminino é transformador. Hoje me sinto mais segura, mais forte e muito mais feliz.',
    highlight: 'Ambiente acolhedor e transformador para mulheres.',
  },
  {
    name: 'Paulo Mendes',
    role: 'Pai de aluno · Lucas, 9 anos',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
    text: 'Meu filho Lucas era muito tímido e sofria com bullying na escola. Após 6 meses na KOA, ele se tornou outra criança: confiante, respeitoso, com novos amigos. Os professores são fantásticos com as crianças. Recomendo de olhos fechados!',
    highlight: 'Meu filho deixou o bullying para trás e ganhou confiança.',
  },
  {
    name: 'Diego Santos',
    role: 'Atleta · Faixa Roxa',
    photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&q=80',
    rating: 5,
    text: 'Vim de outra academia e a diferença de nível técnico é enorme. O treino de competição na KOA é sério, estruturado e eficiente. Já representei a equipe em 4 campeonatos e subo ao pódio em todos. Aqui me tornei o atleta que sempre quis ser.',
    highlight: 'Nível técnico excepcional. Pódio em todos os campeonatos.',
  },
  {
    name: 'Juliana Pereira',
    role: 'Aluna há 8 meses · Faixa Branca',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&q=80',
    rating: 5,
    text: 'Comecei o Jiu-Jitsu para emagrecer e controlar a ansiedade. O que não esperava era me apaixonar completamente pela arte. Hoje não me imagino sem o treino. Minha saúde mental melhorou radicalmente e perdi 12 kg. Gratidão eterna à família KOA.',
    highlight: 'Ansiedade controlada e 12 kg a menos.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="py-24 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Depoimentos"
          title="HISTÓRIAS REAIS DE TRANSFORMAÇÃO"
          subtitle="Cada aluno tem uma história única. Essas são algumas das transformações que nos fazem acordar motivados todo dia."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-6 right-8 text-[#d4af37]/10">
              <Quote className="w-24 h-24" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>

                <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-xl px-5 py-3 mb-8 inline-block">
                  <p className="text-[#d4af37] font-semibold text-sm italic">"{t.highlight}"</p>
                </div>

                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]/40"
                  />
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2 bg-[#d4af37]' : 'w-2 h-2 bg-[#2a2a2a] hover:bg-[#444]'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-3 bg-[#111] border border-[#2a2a2a] hover:border-[#d4af37]/40 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 bg-[#d4af37] hover:bg-[#f0d060] rounded-full text-black transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
