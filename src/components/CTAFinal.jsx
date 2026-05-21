import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { wa } from '../utils/wa';

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="relative py-32 px-4 md:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1682545888368-587f56efd06e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black/80 to-[#0a0a0a]" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <img src="/logo.png" alt="KOA BJJ" className="w-24 h-24 object-contain rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.25em]">Comece sua jornada</span>
          <div className="h-px w-12 bg-[#d4af37]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-heading text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-6"
        >
          O primeiro passo
          <br />
          da transformação
          <br />
          <span className="text-[#d4af37]">começa hoje.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-gray-300 text-xl mb-4 leading-relaxed"
        >
          Venha fazer parte da família KOA.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-gray-500 mb-12 text-base"
        >
          Sua primeira aula é sempre <span className="text-[#d4af37] font-semibold">gratuita</span>. Sem compromisso, sem pressão.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={wa('Olá! Quero dar o primeiro passo e fazer parte da família KOA BJJ Academy! 🥋')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#d4af37] hover:bg-[#f0d060] text-black font-bold text-base px-10 py-5 rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/30 uppercase tracking-wide"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/koajiujitsuacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-white/20 hover:border-[#d4af37]/60 text-white hover:text-[#d4af37] font-bold text-base px-10 py-5 rounded-full transition-all hover:scale-105 uppercase tracking-wide backdrop-blur-sm"
          >
            <InstagramIcon className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { label: 'Localização', value: 'Fortaleza - CE, Brasil', href: 'https://www.google.com/maps/search/?api=1&query=Av.+Bernardo+Manuel,+12600,+Prefeito+José+Walter,+Fortaleza,+CE,+60810-670' },
            { label: 'WhatsApp', value: '+1 (305) 614-0983', href: wa('Olá! Quero dar o primeiro passo e fazer parte da família KOA BJJ Academy! 🥋') },
            { label: 'Instagram', value: '@koajiujitsuacademy', href: 'https://www.instagram.com/koajiujitsuacademy/' },
          ].map(({ label, value, href }) => (
            <div key={label}>
              <div className="text-gray-600 text-xs uppercase tracking-widest mb-1">{label}</div>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:text-[#d4af37] transition-colors">{value}</a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
