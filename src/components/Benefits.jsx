import { motion } from 'framer-motion';
import {
  Shield, Brain, Heart, Zap, Smile, Scale,
  Users, Target, Dumbbell, Flame, Star, Lock
} from 'lucide-react';
import SectionTitle from './SectionTitle';

const benefits = [
  { icon: Shield, title: 'Defesa Pessoal', desc: 'Aprenda a se proteger e proteger sua família em qualquer situação com técnicas eficazes e comprovadas.' },
  { icon: Brain, title: 'Foco & Disciplina', desc: 'O Jiu-Jitsu treina a mente tanto quanto o corpo. Melhore sua concentração e autodisciplina.' },
  { icon: Dumbbell, title: 'Condicionamento Físico', desc: 'Queime calorias, ganhe músculo e melhore sua resistência cardiovascular de forma divertida.' },
  { icon: Heart, title: 'Saúde Mental', desc: 'Reduza o estresse, combata a ansiedade e melhore seu bem-estar emocional com cada treino.' },
  { icon: Smile, title: 'Autoestima', desc: 'Conforme você evolui no tatame, sua confiança cresce em todas as áreas da vida.' },
  { icon: Scale, title: 'Emagrecimento', desc: 'Uma aula de Jiu-Jitsu pode queimar de 600 a 1000 calorias. Transforme seu corpo enquanto aprende.' },
  { icon: Users, title: 'Amizades Verdadeiras', desc: 'A academia é um lugar único onde se formam amizades para a vida toda dentro de uma comunidade unida.' },
  { icon: Zap, title: 'Agilidade & Flexibilidade', desc: 'Melhore sua coordenação motora, reflexos e flexibilidade com movimentos técnicos e precisos.' },
  { icon: Target, title: 'Resolução de Problemas', desc: 'Cada round é um xadrez em tempo real que aguça seu raciocínio lógico e estratégico.' },
  { icon: Flame, title: 'Superação Pessoal', desc: 'Aprenda a encarar desafios com resiliência. No Jiu-Jitsu, cada dia você supera um limite.' },
  { icon: Star, title: 'Competição', desc: 'Represente a KOA em competições locais e nacionais, desenvolvendo garra e caráter esportivo.' },
  { icon: Lock, title: 'Anti-Bullying', desc: 'Crianças que praticam Jiu-Jitsu desenvolvem confiança e maturidade para lidar com o bullying.' },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Por que escolher o Jiu-Jitsu"
          title="TRANSFORME SUA VIDA"
          subtitle="O Jiu-Jitsu vai muito além de uma arte marcial. É um estilo de vida que transforma corpo, mente e espírito."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {benefits.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="group bg-[#0a0a0a] border border-[#1e1e1e] rounded-2xl p-6 hover:border-[#d4af37]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 bg-[#d4af37]/10 rounded-xl group-hover:bg-[#d4af37]/20 transition-colors">
                <Icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="font-heading text-xl text-white mb-2 group-hover:text-[#d4af37] transition-colors">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
