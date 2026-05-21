import { motion } from 'framer-motion';
import { Shield, Star, Heart, Users, Brain, Smile, MessageCircle } from 'lucide-react';

const pillars = [
  { icon: Shield, label: 'Confiança & Autodefesa', desc: 'Seu filho aprende a se proteger com responsabilidade e segurança.' },
  { icon: Brain, label: 'Foco & Disciplina', desc: 'Melhora o desempenho escolar e a concentração no dia a dia.' },
  { icon: Star, label: 'Anti-Bullying', desc: 'Crianças confiantes são menos alvo e sabem como reagir com maturidade.' },
  { icon: Heart, label: 'Autoestima', desc: 'Cada conquista no tatame reflete diretamente na autoconfiança.' },
  { icon: Users, label: 'Socialização', desc: 'Amizades saudáveis dentro de um ambiente supervisionado e seguro.' },
  { icon: Smile, label: 'Respeito & Valores', desc: 'O Jiu-Jitsu ensina respeito ao professor, aos colegas e a si mesmo.' },
];

export default function KidsSection() {
  return (
    <section id="kids" className="py-24 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#d4af37]" />
              <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em]">Para Pais & Responsáveis</span>
            </div>

            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-6">
              SEU FILHO
              <br />
              APRENDENDO
              <br />
              <span className="text-[#d4af37]">MUITO MAIS</span>
              <br />
              DO QUE LUTAR.
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-4">
              O Jiu-Jitsu infantil da KOA vai além das técnicas de luta. Desenvolvemos crianças mais confiantes, disciplinadas e respeitosas, com valores que elas levarão para a vida toda.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Nossos professores são especializados no desenvolvimento infantil e criam um ambiente seguro, divertido e motivador. Aqui, seu filho não é apenas um aluno — é parte da família KOA.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-[#111] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm text-gray-300">
                📅 6 a 17 anos
              </div>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm text-gray-300">
                👨‍🏫 Professores certificados
              </div>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm text-gray-300">
                🛡️ Ambiente 100% seguro
              </div>
            </div>

            <a
              href="https://wa.me/13056140983"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#f0d060] text-black font-bold text-sm px-8 py-4 rounded-full transition-all hover:scale-105 uppercase tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Aula Experimental para Meu Filho
            </a>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-video"
            >
              <img
                src="https://images.unsplash.com/photo-1546519638701-8e74c0825e5a?w=900&q=80"
                alt="Kids BJJ Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#d4af37] text-black font-bold text-sm px-4 py-2 rounded-full inline-block uppercase tracking-wide">
                  Turmas Kids & Juvenil Disponíveis
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {pillars.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-[#111] border border-[#1e1e1e] rounded-xl p-4 hover:border-[#d4af37]/30 transition-colors group"
                >
                  <div className="mb-2 inline-flex p-2 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div className="font-semibold text-white text-sm mb-1">{label}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
