import { useState } from 'react';
import { Menu, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  currentTime: string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ activePage, setActivePage, currentTime, language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navLinks: { label: string; value: ActivePage }[] = [
    { label: t.home, value: 'home' },
    { label: t.menu, value: 'menu' },
    { label: t.ambience, value: 'ambience' },
    { label: t.about, value: 'about' },
    { label: t.events, value: 'events' },
    { label: t.findUs, value: 'find-us' },
    { label: t.bookTable, value: 'reservation' },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#181818] bg-black/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:grid md:grid-cols-12 gap-4">
          
          {/* Time & Location Indicators (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-4 items-center gap-6 text-xs text-neutral-400 font-mono tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
              KRAKÓW, DIETLA 37
            </span>
            <span className="flex items-center gap-1.5 text-neutral-500 font-normal">
              <Clock size={13} className="text-gold" />
              {currentTime}
            </span>
          </div>

          {/* Logo Brand Brand */}
          <div className="flex lg:col-span-3 items-center">
            <button 
              id="header_logo_btn"
              onClick={() => handleNavClick('home')}
              className="group flex flex-col items-start transition-all cursor-pointer text-left"
            >
              <span className="text-lg md:text-xl font-serif tracking-[0.2em] font-bold text-cream group-hover:text-gold transition-colors leading-none">
                BARREL 37
              </span>
              <div className="flex items-center gap-1.5 mt-1 font-mono text-[7px] tracking-widest text-[#8C8476]">
                <span>— BAR —</span>
                <div className="flex gap-0.5 text-gold text-[8px] leading-none">
                  <span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:col-span-5 items-center justify-end gap-5">
            {navLinks.map((link) => (
              <button
                id={`navbar_lnk_${link.value}`}
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`relative pb-1.5 text-[10px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 cursor-pointer group ${
                  activePage === link.value
                    ? 'text-gold font-semibold'
                    : 'text-[#D0C9BC] hover:text-white'
                }`}
              >
                {link.value === 'reservation' ? link.label.split(' ')[0] : link.label}
                <span 
                  className={`absolute bottom-px left-1/2 -translate-x-1/2 h-[1.5px] bg-gold transition-all duration-300 ease-out ${
                    activePage === link.value ? 'w-full opacity-70' : 'w-0 group-hover:w-full opacity-100'
                  }`} 
                />
              </button>
            ))}

            <div className="w-px h-3 bg-neutral-800"></div>

            {/* Language Selection Buttons */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest">
              <button
                id="header_lang_en"
                onClick={() => setLanguage('en')}
                className={`transition-colors cursor-pointer px-1 py-0.5 ${
                  language === 'en' ? 'text-gold font-semibold' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                EN
              </button>
              <span className="text-neutral-800">/</span>
              <button
                id="header_lang_pl"
                onClick={() => setLanguage('pl')}
                className={`transition-colors cursor-pointer px-1 py-0.5 ${
                  language === 'pl' ? 'text-gold font-semibold' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                PL
              </button>
            </div>
          </nav>
 
          {/* Mobile Menu Trigger & Book Table Shortcut */}
          <div className="flex lg:hidden items-center gap-4 ml-auto">
            {/* Elegant language toggle for mobile */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono pr-2 border-r border-neutral-800">
              <button
                id="mobile_lang_en"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 ${language === 'en' ? 'text-gold font-bold' : 'text-neutral-500'}`}
              >
                EN
              </button>
              <button
                id="mobile_lang_pl"
                onClick={() => setLanguage('pl')}
                className={`px-1.5 py-0.5 ${language === 'pl' ? 'text-gold font-bold' : 'text-neutral-500'}`}
              >
                PL
              </button>
            </div>
            
            <button
              id="mobile_book_shortcut"
              onClick={() => handleNavClick('reservation')}
              className="px-3 py-1 border border-[#cbbba0]/30 rounded-none text-[10px] uppercase tracking-wider text-gold font-medium bg-black"
            >
              {language === 'pl' ? 'Stolik' : 'Book'}
            </button>
            <button
              id="mobile_menu_trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} className="text-gold" /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile_nav_overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-[#080808] border-b border-[#222] z-40 shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col gap-4 py-8 px-6 font-sans">
              <div className="flex flex-col gap-3 items-center">
                {navLinks.map((link) => (
                  <button
                    id={`mobile_lnk_${link.value}`}
                    key={link.value}
                    onClick={() => handleNavClick(link.value)}
                    className={`text-xs uppercase tracking-[0.2em] font-medium py-3 w-full text-center hover:bg-[#111] transition-all rounded ${
                      activePage === link.value ? 'text-gold font-bold bg-[#0d0d0d] border-l border-gold' : 'text-neutral-300'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="h-[1px] bg-neutral-800 my-2"></div>
              <div className="flex flex-col gap-1 items-center text-center text-[10px] text-neutral-500 font-mono">
                <span>KRAKÓW · ul. DIETLA 37</span>
                <span className="flex items-center gap-1.5 justify-center mt-1">
                  <Clock size={11} className="text-gold animate-pulse" />
                  {currentTime}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

