import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { wa } from '../utils/wa';

const faqs = [
  {
    q: 'Preciso estar em forma para começar?',
    a: 'Absolutamente não! O Jiu-Jitsu é para qualquer pessoa, em qualquer condição física. Nossos professores adaptam os treinos ao seu nível. Muitos dos nossos alunos começaram sem nenhuma atividade física prévia e hoje estão em excelente forma. O Jiu-Jitsu te deixa em forma — não o contrário.',
  },
  {
    q: 'Crianças podem treinar? A partir de qual idade?',
    a: 'Sim! Temos turmas especialmente desenvolvidas para crianças a partir dos 6 anos (Kids) e adolescentes de 13 a 17 anos (Juvenil). Nossas aulas infantis focam em desenvolvimento motor, disciplina, autoestima e valores, sempre de forma divertida e segura.',
  },
  {
    q: 'Posso fazer uma aula experimental gratuita?',
    a: 'Com certeza! Oferecemos a primeira aula totalmente gratuita para novos alunos. É a melhor forma de conhecer a academia, a metodologia de ensino e a energia da família KOA antes de qualquer compromisso. Entre em contato pelo WhatsApp para agendar.',
  },
  {
    q: 'Preciso ter kimono para começar?',
    a: 'Não é necessário ter kimono para a aula experimental. Para as primeiras aulas, roupa esportiva confortável é suficiente. Ao se matricular, orientamos sobre os melhores kimonos e onde adquiri-los. Também temos opções disponíveis na academia.',
  },
  {
    q: 'O Jiu-Jitsu é perigoso? Posso me machucar?',
    a: 'O Jiu-Jitsu é considerado uma das artes marciais mais seguras por ser técnico e controlado. Em nossas aulas, priorizamos a segurança acima de tudo. Iniciantes treinam em ritmo gradual e os professores supervisionam todos os exercícios. Lesões leves são raras quando se respeita o ritmo de aprendizado.',
  },
  {
    q: 'Existem treinos específicos para iniciantes?',
    a: 'Sim! Temos turmas dedicadas exclusivamente a iniciantes onde você aprende os fundamentos com calma e segurança, sem pressão. Você não será colocado para sparring antes de estar pronto. Nosso objetivo é que você se sinta confortável e confiante em cada etapa da sua jornada.',
  },
  {
    q: 'Vocês têm treino de No-Gi (sem kimono)?',
    a: 'Sim! Oferecemos treinos de No-Gi (sem kimono) às terças e quintas pela manhã, e aos sábados no Open Mat. O No-Gi é uma excelente adição ao treinamento com kimono e muito popular entre aqueles que também se interessam por MMA.',
  },
  {
    q: 'Como funcionam as graduações e faixas?',
    a: 'As graduações ocorrem de acordo com a evolução técnica, frequência e postura do aluno. Não há prazo fixo entre faixas — cada um avança no seu próprio ritmo. As cerimônias de graduação são momentos muito especiais e celebrados por toda a família KOA.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
        isOpen ? 'border-[#d4af37]/40 bg-[#0d0d0d]' : 'border-[#1e1e1e] bg-[#0a0a0a] hover:border-[#2a2a2a]'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
      >
        <span className={`font-semibold text-base transition-colors ${isOpen ? 'text-[#d4af37]' : 'text-white'}`}>
          {q}
        </span>
        <div className={`flex-shrink-0 p-1.5 rounded-full transition-colors ${isOpen ? 'bg-[#d4af37] text-black' : 'bg-[#1a1a1a] text-gray-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-[#1e1e1e] pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Dúvidas Frequentes"
          title="PERGUNTAS & RESPOSTAS"
          subtitle="Temos as respostas para as perguntas mais comuns de quem está pensando em começar."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-[#111] border border-[#2a2a2a] rounded-2xl p-8"
        >
          <p className="text-gray-400 mb-4">Ainda tem dúvidas? Fale diretamente com a gente!</p>
          <a
            href={wa('Olá! Tenho algumas dúvidas sobre a KOA BJJ Academy e gostaria de mais informações. 🥋')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#f0d060] text-black font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:scale-105 uppercase tracking-wide"
          >
            Tirar Dúvidas pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
