import { MessageCircle, MapPin, Phone } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

const quickLinks = [
  { href: '#sobre', label: 'Sobre a KOA' },
  { href: '#horarios', label: 'Horários' },
  { href: '#planos', label: 'Planos' },
  { href: '#professores', label: 'Professores' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="KOA BJJ" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-heading text-2xl text-white tracking-wide">KOA BJJ Academy</div>
                <div className="text-[10px] text-[#d4af37] tracking-[0.2em] uppercase">Brazilian Jiu-Jitsu · Since 2022</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Mais que Jiu-Jitsu. Uma transformação para a vida. Disciplina, defesa pessoal, confiança e evolução dentro e fora do tatame.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/13056140983"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#d4af37]/10 hover:bg-[#d4af37] border border-[#d4af37]/30 rounded-xl text-[#d4af37] hover:text-black transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/koajiujitsuacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#d4af37]/10 hover:bg-[#d4af37] border border-[#d4af37]/30 rounded-xl text-[#d4af37] hover:text-black transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-5 tracking-wide">Menu Rápido</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]/30 group-hover:bg-[#d4af37] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-white mb-5 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">Miami, Florida — USA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/13056140983"
                  className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 (305) 614-0983
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/koajiujitsuacademy/"
                  className="text-gray-500 hover:text-[#d4af37] text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @koajiujitsuacademy
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://wa.me/13056140983"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#f0d060] text-black font-bold text-xs px-5 py-2.5 rounded-full transition-all hover:scale-105 uppercase tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                Aula Gratuita
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#111] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} KOA Brazilian Jiu-Jitsu Academy. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            <span className="text-[#d4af37]/50">OSS!</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
