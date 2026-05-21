import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionTitle from './SectionTitle';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1542937307-a570f5351942?w=600&q=80',
    alt: 'Treino Jiu-Jitsu',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=600&q=80',
    alt: 'Sparring no Gi',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1634467472970-8be9b2d1499a?w=600&q=80',
    alt: 'Técnica no Tatame',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1646904362560-994ca9dfb0b4?w=600&q=80',
    alt: 'Kimono Azul',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1677170202299-d2edadfa76a1?w=600&q=80',
    alt: 'Treino com Gi',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1542937307-e90d0cc07237?w=600&q=80',
    alt: 'Brazilian Jiu-Jitsu',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1769095207072-0c84d9b7b9ee?w=600&q=80',
    alt: 'Kids no Tatame',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1747331796135-0e2354a712e4?w=600&q=80',
    alt: 'Competição BJJ',
    span: '',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="galeria" className="py-24 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Galeria"
          title="A KOA EM AÇÃO"
          subtitle="Momentos reais de treino, graduação, competição e crescimento. Esse é o espírito da KOA."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${photo.span}`}
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 bg-[#d4af37] rounded-full">
                  <ZoomIn className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/koajiujitsuacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:bg-[#d4af37]/10 uppercase tracking-wide"
          >
            Ver Mais no Instagram →
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src.replace('w=600', 'w=1200')} alt={selected.alt} className="w-full h-full object-contain" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-black/70 rounded-full text-white hover:text-[#d4af37] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
