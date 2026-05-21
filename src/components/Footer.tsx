import { ActivePage, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  language: Language;
}

export default function Footer({ setActivePage, language }: FooterProps) {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-black border-t border-[#181818] text-[#F4F0EA]">
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Brand */}
        <div className="flex flex-col gap-4">
          <button
            id="footer_logo_btn"
            onClick={() => setActivePage('home')}
            className="flex flex-col items-start cursor-pointer group text-left self-start"
          >
            <span className="text-xl font-serif tracking-[0.2em] font-bold text-cream group-hover:text-gold transition-colors">
              BARREL 37
            </span>
            <div className="flex items-center gap-1.5 mt-1 font-mono text-[7px] tracking-widest text-[#8C8476]">
              <span>— BAR —</span>
              <span className="text-gold text-[8px]">★★★</span>
            </div>
          </button>
          
          <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-2 max-w-sm">
            {language === 'pl' 
              ? 'Niezwykłe archiwum starzonych edycji single malt, autorskie bittersy i kameralny, dębowy klimat w sercu krakowskiego Kazimierza.'
              : 'Hand-curated single malt archives, craft house bitterns, and warm speakeasy candlelit ambience in Krakow Kazimierz.'}
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-col gap-4 col-span-1">
          <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] font-mono">Navigation</span>
          <div className="grid grid-cols-2 gap-2.5 items-start">
            <button
              id="footer_lnk_home"
              onClick={() => setActivePage('home')}
              className="text-xs text-[#D0C9BC] hover:text-gold transition-colors font-sans cursor-pointer uppercase tracking-wider text-left"
            >
              {t.home}
            </button>
            <button
              id="footer_lnk_menu"
              onClick={() => setActivePage('menu')}
              className="text-xs text-[#D0C9BC] hover:text-gold transition-colors font-sans cursor-pointer uppercase tracking-wider text-left"
            >
              {t.menu}
            </button>
            <button
              id="footer_lnk_ambience"
              onClick={() => setActivePage('ambience')}
              className="text-xs text-[#D0C9BC] hover:text-gold transition-colors font-sans cursor-pointer uppercase tracking-wider text-left"
            >
              {t.ambience}
            </button>
            <button
              id="footer_lnk_about"
              onClick={() => setActivePage('about')}
              className="text-xs text-[#D0C9BC] hover:text-gold transition-colors font-sans cursor-pointer uppercase tracking-wider text-left"
            >
              {t.about}
            </button>
            <button
              id="footer_lnk_events"
              onClick={() => setActivePage('events')}
              className="text-xs text-[#D0C9BC] hover:text-gold transition-colors font-sans cursor-pointer uppercase tracking-wider text-left"
            >
              {t.events}
            </button>
            <button
              id="footer_lnk_findUs"
              onClick={() => setActivePage('find-us')}
              className="text-xs text-[#D0C9BC] hover:text-gold transition-colors font-sans cursor-pointer uppercase tracking-wider text-left"
            >
              {t.findUs}
            </button>
            <button
              id="footer_lnk_reservation"
              onClick={() => setActivePage('reservation')}
              className="text-xs text-[#D0C9BC] hover:text-gold transition-colors font-sans cursor-pointer uppercase tracking-wider text-col col-span-2 text-left"
            >
              {t.bookTable}
            </button>
          </div>
        </div>

        {/* Location Contact */}
        <div className="flex flex-col gap-4 col-span-1">
          <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] font-mono">{t.location}</span>
          <div className="text-xs text-neutral-300 font-sans leading-relaxed space-y-4">
            <div>
              <p className="font-semibold text-gold text-[10px] uppercase font-mono tracking-wider">Kazimierz Crypt</p>
              <p>ul. Józefa Dietla 37, Kraków,<br />31-062, Poland</p>
              <p className="text-[11px] text-neutral-500 font-mono mt-1">+48 22 555 01 28</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-4 col-span-1">
          <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] font-mono">{t.openingHours}</span>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            {language === 'pl' ? 'Wtorek — Niedziela' : 'Tuesday — Sunday'}<br />
            18:00 — 01:00 / 03:00 (Weekend)
          </p>
          <div className="pt-2 border-t border-[#181818] mt-2 text-[10px] text-neutral-500">
            <span className="block">{language === 'pl' ? 'Poniedziałek — Zamknięte' : 'Monday — Closed (Rest)'}</span>
          </div>
        </div>

      </div>

      {/* Footer bar */}
      <div className="border-t border-[#121212] bg-[#030303] py-8 text-neutral-500 text-[10px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-sans tracking-widest text-[#857E73]">
          <div>
            <span>© 2026 BARREL 37 BAR. {language === 'pl' ? 'WSZELKIE PRAWA ZASTRZEŻONE.' : 'ALL RIGHTS RESERVED.'}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gold uppercase text-[9px] tracking-widest">KRAKOW Kazimierz Speakeasy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
