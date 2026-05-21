import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { wa } from '../utils/wa';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#horarios', label: 'Horários' },
  { href: '#planos', label: 'Planos' },
  { href: '#professores', label: 'Professores' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e] shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="KOA BJJ" className="h-11 w-11 object-contain rounded-full" />
          <div className="hidden sm:block leading-tight">
            <div className="font-heading text-xl text-white tracking-wide group-hover:text-[#d4af37] transition-colors">KOA BJJ</div>
            <div className="text-[9px] text-[#d4af37] tracking-[0.2em] uppercase">Academy · Since 2022</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-[#d4af37] text-xs font-medium uppercase tracking-widest transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={wa('Olá! Gostaria de agendar minha aula experimental gratuita na KOA BJJ Academy! 🥋')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#f0d060] text-black font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/20"
          >
            <MessageCircle className="w-4 h-4" />
            Aula Gratuita
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0d0d0d] border-t border-[#1e1e1e] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-[#d4af37] text-base font-medium uppercase tracking-widest py-3 border-b border-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={wa('Olá! Gostaria de agendar minha aula experimental gratuita na KOA BJJ Academy! 🥋')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#d4af37] text-black font-bold px-6 py-3.5 rounded-full uppercase tracking-wide"
              >
                <MessageCircle className="w-5 h-5" />
                Aula Experimental Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
