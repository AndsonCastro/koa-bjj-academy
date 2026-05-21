import { motion } from 'framer-motion';
import { Shield, Heart, Trophy, Users, Eye, Target } from 'lucide-react';

const values = [
  { icon: Shield, label: 'Disciplina', desc: 'O autocontrole é a base de tudo que ensinamos.' },
  { icon: Heart, label: 'Família', desc: 'Cada aluno é parte da nossa família KOA.' },
  { icon: Trophy, label: 'Excelência', desc: 'Buscamos sempre o melhor dentro e fora do tatame.' },
  { icon: Users, label: 'Comunidade', desc: 'Um ambiente acolhedor para todas as idades.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1634467472970-8be9b2d1499a?w=800&q=80"
                alt="KOA BJJ Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-2/3 h-2/3 border border-[#d4af37]/20 rounded-2xl -z-10" />
            <div className="absolute top-6 left-6 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-xl px-5 py-3">
              <div className="font-heading text-[#d4af37] text-3xl">Since</div>
              <div className="font-heading text-white text-4xl leading-none">2022</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em]">Nossa História</span>
            </div>

            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-6">
              MAIS QUE UMA
              <br />
              ACADEMIA.
              <br />
              <span className="text-[#d4af37]">UMA FAMÍLIA.</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              A KOA Brazilian Jiu-Jitsu Academy nasceu de uma paixão profunda pela arte suave e da crença de que o Jiu-Jitsu tem o poder de transformar vidas. Fundada em 2022, nossa academia foi construída sobre os pilares da disciplina, do respeito mútuo e da busca pela excelência.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Aqui, não importa se você é iniciante ou competidor — cada aluno recebe atenção personalizada, um ambiente seguro e o suporte de uma comunidade que genuinamente se importa com a sua evolução. Do tatame à vida, o que ensinamos vai muito além das técnicas.
            </p>

            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-4 bg-[#111111] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#d4af37]/30 transition-colors group">
                <div className="mt-0.5 p-2 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">
                  <Target className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <div className="font-heading text-[#d4af37] text-lg mb-0.5">MISSÃO</div>
                  <p className="text-gray-400 text-sm leading-relaxed">Transformar vidas através do Jiu-Jitsu, desenvolvendo atletas e cidadãos mais confiantes, resilientes e completos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#111111] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#d4af37]/30 transition-colors group">
                <div className="mt-0.5 p-2 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">
                  <Eye className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <div className="font-heading text-[#d4af37] text-lg mb-0.5">VISÃO</div>
                  <p className="text-gray-400 text-sm leading-relaxed">Ser reconhecida como a academia de referência em excelência técnica e impacto positivo na comunidade.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 bg-[#d4af37]/10 rounded-lg flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{label}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
