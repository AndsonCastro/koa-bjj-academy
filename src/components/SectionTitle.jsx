import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <div className="h-px w-8 bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</span>
          <div className="h-px w-8 bg-[#d4af37]" />
        </div>
      )}
      <h2 className={`font-heading text-5xl md:text-6xl lg:text-7xl leading-none mb-5 ${light ? 'text-[#0a0a0a]' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-600' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
