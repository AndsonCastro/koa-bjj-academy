import { motion } from 'framer-motion';
import { Check, MessageCircle, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const plans = [
  {
    id: 'kids',
    name: 'Kids',
    tag: null,
    description: 'Para crianças e adolescentes de 6 a 17 anos.',
    features: [
      'Turmas Kids (6–12 anos)',
      'Turmas Juvenil (13–17 anos)',
      'Professores especializados',
      'Ambiente seguro e supervisionado',
      'Desenvolvimento de caráter',
      'Uniformes e kimono incluso*',
    ],
  },
  {
    id: 'adulto',
    name: 'Adulto',
    tag: 'Mais Popular',
    description: 'Para adultos de todos os níveis, do iniciante ao avançado.',
    features: [
      'Treinos Gi e No-Gi',
      'Turmas por nível (Iniciante / Avançado)',
      'Open Mat aos sábados',
      'Avaliações e graduações periódicas',
      'Acesso ao programa de competição',
      'Comunidade ativa e acolhedora',
    ],
    highlight: true,
  },
  {
    id: 'familia',
    name: 'Família',
    tag: null,
    description: 'Treine junto com quem você ama. Plano especial para famílias.',
    features: [
      'Até 4 membros da família',
      'Desconto exclusivo por membro',
      'Acesso a todas as turmas',
      'Kids + Adultos cobertos',
      'Evento familiar mensal',
      'Prioridade em eventos especiais',
    ],
  },
  {
    id: 'competicao',
    name: 'Competição',
    tag: 'Elite',
    description: 'Para atletas que querem levar o Jiu-Jitsu a outro nível.',
    features: [
      'Treinamento específico de competição',
      'Sparring intensivo diário',
      'Análise de desempenho em vídeo',
      'Apoio a inscrições em campeonatos',
      'Nutrição esportiva básica',
      'Suporte de equipe em competições',
    ],
  },
];

export default function Plans() {
  return (
    <section id="planos" className="py-24 px-4 md:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Planos & Mensalidades"
          title="ESCOLHA SEU PLANO"
          subtitle="Investimento no seu futuro. Consulte nossos valores pelo WhatsApp e encontre o plano ideal para você."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? 'bg-[#d4af37] border-[#d4af37] shadow-2xl shadow-[#d4af37]/20'
                  : 'bg-[#0a0a0a] border-[#2a2a2a] hover:border-[#d4af37]/40'
              }`}
            >
              {plan.tag && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                  plan.highlight ? 'bg-black text-[#d4af37]' : 'bg-[#d4af37] text-black'
                }`}>
                  <Star className="w-3 h-3" />
                  {plan.tag}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-heading text-4xl mb-2 ${plan.highlight ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-black/70' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className={`text-center rounded-xl py-4 mb-6 border ${
                plan.highlight
                  ? 'bg-black/10 border-black/20'
                  : 'bg-[#111] border-[#2a2a2a]'
              }`}>
                <div className={`font-heading text-2xl ${plan.highlight ? 'text-black' : 'text-[#d4af37]'}`}>
                  Consulte Valores
                </div>
                <div className={`text-xs mt-1 ${plan.highlight ? 'text-black/60' : 'text-gray-600'}`}>
                  Entre em contato para saber mais
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex-shrink-0 rounded-full p-0.5 ${plan.highlight ? 'text-black' : 'text-[#d4af37]'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className={`text-sm leading-relaxed ${plan.highlight ? 'text-black/80' : 'text-gray-400'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/13056140983"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-full uppercase tracking-wide transition-all hover:scale-105 ${
                  plan.highlight
                    ? 'bg-black text-[#d4af37] hover:bg-[#111]'
                    : 'bg-[#d4af37] text-black hover:bg-[#f0d060]'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Quero este Plano
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          * Consultar condições. Primeira aula sempre gratuita para novos alunos.
        </p>
      </div>
    </section>
  );
}
