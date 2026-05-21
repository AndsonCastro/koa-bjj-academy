import { motion } from 'framer-motion';
import InstagramIcon from './InstagramIcon';
import SectionTitle from './SectionTitle';

const instructors = [
  {
    name: 'Prof. Marcus Andrade',
    belt: 'Faixa Preta · 2º Grau',
    role: 'Head Coach & Fundador',
    bio: 'Com mais de 15 anos de experiência no tatame, Marcus fundou a KOA Academy com a missão de transformar vidas através do Jiu-Jitsu. Campeão estadual e nacional, ele traz uma abordagem técnica e humana que define a identidade da equipe.',
    specialty: 'Guarda, Submissions & Competição',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    instagram: 'https://www.instagram.com/koajiujitsuacademy/',
  },
  {
    name: 'Prof. Carlos Mendes',
    belt: 'Faixa Preta · 1º Grau',
    role: 'Professor Kids & Juvenil',
    bio: 'Carlos é especializado no desenvolvimento infantil através das artes marciais. Com formação em educação física e pedagogia, ele criou uma metodologia única que combina técnica, diversão e desenvolvimento de caráter para crianças e adolescentes.',
    specialty: 'Pedagogia Esportiva & Kids BJJ',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    instagram: 'https://www.instagram.com/koajiujitsuacademy/',
  },
  {
    name: 'Prof. Ana Souza',
    belt: 'Faixa Marrom',
    role: 'Professora Feminino & Adulto',
    bio: 'Ana é uma das líderes do programa feminino da KOA. Atleta de alto nível e referência no Jiu-Jitsu feminino, ela criou um ambiente acolhedor e empoderador onde mulheres de todas as idades encontram confiança, força e pertencimento.',
    specialty: 'Jiu-Jitsu Feminino & Self-Defense',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    instagram: 'https://www.instagram.com/koajiujitsuacademy/',
  },
];

const beltColors = {
  'Faixa Preta': 'bg-gray-900 text-gray-200 border-gray-700',
  'Faixa Marrom': 'bg-amber-950 text-amber-300 border-amber-800/60',
  'Faixa Roxa': 'bg-purple-950 text-purple-300 border-purple-800/60',
};

function getBeltColor(belt) {
  for (const [key, val] of Object.entries(beltColors)) {
    if (belt.startsWith(key)) return val;
  }
  return 'bg-[#111] text-gray-300 border-[#2a2a2a]';
}

export default function Instructors() {
  return (
    <section id="professores" className="py-24 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Nossa Equipe"
          title="CONHEÇA OS PROFESSORES"
          subtitle="Profissionais dedicados, experientes e apaixonados pela arte de ensinar e transformar vidas."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-[#0a0a0a] border border-[#1e1e1e] rounded-2xl overflow-hidden hover:border-[#d4af37]/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={inst.photo}
                  alt={inst.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                <a
                  href={inst.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-white hover:text-[#d4af37] hover:bg-black/80 transition-colors backdrop-blur-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${getBeltColor(inst.belt)}`}>
                  {inst.belt}
                </div>
                <h3 className="font-heading text-2xl text-white mb-1 group-hover:text-[#d4af37] transition-colors">{inst.name}</h3>
                <div className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">{inst.role}</div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{inst.bio}</p>
                <div className="border-t border-[#1e1e1e] pt-4">
                  <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Especialidade</div>
                  <div className="text-gray-300 text-sm">{inst.specialty}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
