import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data/menu';
import { MenuItem, Language } from '../types';
import { Flame, X, Info, Sparkles, Trophy, Shuffle, ChevronRight, HelpCircle } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { getLocalizedItem } from '../data/menuTranslations';

interface MenuSectionProps {
  language: Language;
}

export default function MenuSection({ language }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'whisky' | 'cocktail' | 'mocktail'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  
  // Interactive drink finder game state
  const [quizStep, setQuizStep] = useState<number>(0); // 0 = not started, 1, 2, 3 = questions, 4 = showing recommendation
  const [userAnswers, setUserAnswers] = useState<{
    flavor: string;
    style: string;
    region: string;
  }>({
    flavor: '',
    style: '',
    region: ''
  });
  const [matchedDrink, setMatchedDrink] = useState<MenuItem | null>(null);

  const t = TRANSLATIONS[language];

  // Localize menu items
  const localizedItems = MENU_ITEMS.map((item) => getLocalizedItem(item, language));

  // Filter items
  const filteredItems = activeCategory === 'all' 
    ? localizedItems 
    : localizedItems.filter(item => item.category === activeCategory);

  // Match logic for the "Find Your Drink" wizard
  const handleMatchCalculation = (flavor: string, style: string, region: string) => {
    // Attempt to match from actual localized state
    let match = localizedItems[0]; // fallback
    
    if (flavor === 'smoky') {
      // Lagavulin or Smoky Old fashioned
      match = localizedItems.find(i => i.id === 'w-4' || i.id === 'c-2') || localizedItems[3];
    } else if (style === 'cocktail') {
      // c-1, c-2, c-3
       match = localizedItems.find(i => i.category === 'cocktail') || localizedItems[6];
    } else if (flavor === 'sweet') {
      // Glenfiddich or Macallan or Hibiki
      if (region === 'japan') {
        match = localizedItems.find(i => i.id === 'w-3') || localizedItems[2];
      } else {
        match = localizedItems.find(i => i.id === 'w-1' || i.id === 'w-2') || localizedItems[1];
      }
    } else if (flavor === 'fruity') {
      if (region === 'scotland') {
        match = localizedItems.find(i => i.id === 'w-1') || localizedItems[0];
      } else if (region === 'japan') {
        match = localizedItems.find(i => i.id === 'w-3') || localizedItems[2];
      } else {
        match = localizedItems.find(i => i.id === 'w-6') || localizedItems[5];
      }
    } else if (flavor === 'spicy') {
      match = localizedItems.find(i => i.id === 'w-5' || i.id === 'c-3' || i.id === 'w-6') || localizedItems[4];
    }
    
    setMatchedDrink(match);
    setQuizStep(4);
  };

  const handleRestartQuiz = () => {
    setUserAnswers({ flavor: '', style: '', region: '' });
    setMatchedDrink(null);
    setQuizStep(1);
  };

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title area & description */}
        <div className="text-center flex flex-col items-center gap-4 mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{t.cellarPreTitle}</span>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
            {t.cellarTitle}
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-lg leading-relaxed text-center">
            {t.cellarDesc}
          </p>
        </div>

        {/* -------------------- INTERACTIVE WHISKY FINDER ROW (Speakeasy style) -------------------- */}
        <div className="mb-20 bg-neutral-950 border border-neutral-900/80 p-6 md:p-10 relative overflow-hidden">
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(194,159,104,0.1),transparent_70%)] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Game introduction texts */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-[9px] font-mono text-gold tracking-widest uppercase flex items-center gap-1.5 label-icon">
                <Shuffle size={12} className="text-gold" /> {t.matchPre}
              </span>
              <h2 className="text-2xl font-serif text-cream leading-tight">
                {t.matchTitle}
              </h2>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {t.matchDesc}
              </p>
              
              {quizStep === 0 && (
                <button
                  id="start_quiz_btn"
                  onClick={() => setQuizStep(1)}
                  className="mt-2 px-6 py-3.5 bg-neutral-900 border border-neutral-800 hover:border-gold hover:text-gold text-[11px] font-mono uppercase tracking-[0.2em] font-bold self-start cursor-pointer transition-colors"
                >
                  {language === 'pl' ? 'Wymieszaj Trunki' : 'Find Best Pour'}
                </button>
              )}
            </div>

            {/* Game steps interactive engine */}
            <div className="lg:col-span-8 border-l lg:border-neutral-900/80 pt-6 lg:pt-0 lg:pl-10">
              
              {quizStep === 0 && (
                <div className="h-full flex flex-col justify-center items-center py-8 text-center border border-dashed border-neutral-900 bg-neutral-950/40 p-6">
                  <HelpCircle size={24} className="text-neutral-700 mb-2" />
                  <p className="text-xs font-serif text-neutral-500 italic">
                    {language === 'pl' 
                      ? 'Naciśnij przycisk, aby rozpocząć poszukiwania idealnego bukietu smakowego.' 
                      : 'Press start to unlock a personalized pour matched to your exact sensory preferences.'}
                  </p>
                </div>
              )}

              {/* STEP 1: Flavor profile selection */}
              {quizStep === 1 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono text-gold uppercase tracking-wider">{t.stepPrefix} 1 of 3</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">{t.q1Title}</span>
                  </div>
                  <h4 className="text-sm font-serif text-cream">{t.q1Sub}</h4>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { key: 'smoky', label: language === 'pl' ? 'Dymny / Torfowy' : 'Smoky', desc: language === 'pl' ? 'Torf, dąb, jod' : 'Peat, oak, iodine' },
                      { key: 'sweet', label: language === 'pl' ? 'Słodki' : 'Sweet', desc: language === 'pl' ? 'Wanilia, karmel, miód' : 'Vanilla, caramel, honey' },
                      { key: 'fruity', label: language === 'pl' ? 'Owocowy' : 'Fruity', desc: language === 'pl' ? 'Cytrusy, suszone owoce' : 'Citrus, dried fruits' },
                      { key: 'spicy', label: language === 'pl' ? 'Pikantny / Korzenny' : 'Spicy', desc: language === 'pl' ? 'Pieprz, imbir, przyprawy' : 'Pepper, ginger, spice' }
                    ].map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setUserAnswers(prev => ({ ...prev, flavor: opt.key }));
                          setQuizStep(2);
                        }}
                        className="p-4 bg-neutral-900 border border-neutral-800 hover:border-gold hover:bg-[#0d0d0d] text-left cursor-pointer transition-colors"
                      >
                        <p className="text-xs font-serif font-bold text-cream block">{opt.label}</p>
                        <p className="text-[9px] text-[#8C8476] font-mono uppercase mt-1 leading-none">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Style of serve */}
              {quizStep === 2 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono text-gold uppercase tracking-wider">{t.stepPrefix} 2 of 3</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">{t.q2Title}</span>
                  </div>
                  <h4 className="text-sm font-serif text-cream">{t.q2Sub}</h4>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { key: 'neat', label: language === 'pl' ? 'Czysty' : 'Neat', desc: language === 'pl' ? 'Pokoje, bez lodu' : 'Pure pour' },
                      { key: 'rocks', label: language === 'pl' ? 'Z lodem' : 'On Rocks', desc: language === 'pl' ? 'Duża kostka lodu' : 'Over carved ice' },
                      { key: 'cocktail', label: language === 'pl' ? 'Koktajl' : 'Cocktail', desc: language === 'pl' ? 'Mistrzowski miks' : 'Crafted mix' }
                    ].map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setUserAnswers(prev => ({ ...prev, style: opt.key }));
                          setQuizStep(3);
                        }}
                        className="p-4 bg-neutral-900 border border-neutral-800 hover:border-gold hover:bg-[#0d0d0d] text-left cursor-pointer transition-colors"
                      >
                        <p className="text-xs font-serif font-bold text-cream block">{opt.label}</p>
                        <p className="text-[9px] text-[#8C8476] font-mono mt-1 uppercase leading-none">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setQuizStep(1)}
                    className="text-[9.5px] font-mono text-[#8C8476] uppercase hover:text-cream cursor-pointer pt-2 block"
                  >
                    {t.btnPrev}
                  </button>
                </div>
              )}

              {/* STEP 3: Origin region */}
              {quizStep === 3 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono text-gold uppercase tracking-wider">{t.stepPrefix} 3 of 3</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">{t.q3Title}</span>
                  </div>
                  <h4 className="text-sm font-serif text-cream">{t.q3Sub}</h4>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { key: 'scotland', label: language === 'pl' ? 'Szkocja' : 'Scotland', desc: language === 'pl' ? 'Klasyczne single malty' : 'Homeland' },
                      { key: 'japan', label: language === 'pl' ? 'Japonia' : 'Japan', desc: language === 'pl' ? 'Nieskazitelny balans' : 'Immaculate' },
                      { key: 'other', label: language === 'pl' ? 'Globalnie' : 'World', desc: language === 'pl' ? 'Irlandia & Indie' : 'Irish & Indian' }
                    ].map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          const updatedRegion = opt.key;
                          setUserAnswers(prev => ({ ...prev, region: updatedRegion }));
                          handleMatchCalculation(userAnswers.flavor, userAnswers.style, updatedRegion);
                        }}
                        className="p-4 bg-neutral-900 border border-neutral-800 hover:border-gold hover:bg-[#0d0d0d] text-left cursor-pointer transition-colors"
                      >
                        <p className="text-xs font-serif font-bold text-cream block">{opt.label}</p>
                        <p className="text-[9px] text-[#8C8476] font-mono mt-1 uppercase leading-none">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setQuizStep(2)}
                    className="text-[9.5px] font-mono text-[#8C8476] uppercase hover:text-cream cursor-pointer pt-2 block"
                  >
                    {t.btnPrev}
                  </button>
                </div>
              )}

              {/* RECOMMENDATION RESULTS SCREEN */}
              {quizStep === 4 && matchedDrink && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-900">
                    <span className="text-[9px] font-mono text-gold uppercase tracking-wider flex items-center gap-1">
                      <Trophy size={10} className="fill-gold" /> {t.matchResultTitle}
                    </span>
                    <button
                      onClick={handleRestartQuiz}
                      className="text-[9px] font-mono text-neutral-500 uppercase hover:text-gold cursor-pointer"
                    >
                      {t.btnRestart}
                    </button>
                  </div>
                  
                  <div 
                    onClick={() => setSelectedItem(matchedDrink)}
                    className="p-5 bg-[#0e0e0e] border border-gold hover:border-cream cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                  >
                    <div>
                      <span className="text-[8px] font-mono uppercase text-[#8C8476] tracking-widest">{matchedDrink.category}</span>
                      <h4 className="text-lg font-serif text-cream group-hover:text-gold transition-colors block mt-0.5">{matchedDrink.name}</h4>
                      <p className="text-xs text-neutral-400 mt-2 max-w-md italic font-sans leading-relaxed">
                        "{matchedDrink.description}"
                      </p>
                    </div>
                    
                    <div className="flex flex-row md:flex-col justify-between items-center md:items-end gap-2 border-t md:border-t-0 md:border-l border-neutral-800 pt-3 md:pt-0 md:pl-6 shrink-0 font-mono text-xs">
                      <span className="text gold font-bold text-sm md:text-base text-gold">{matchedDrink.price} ZŁ</span>
                      <span className="text-[9px] text-neutral-500 uppercase tracking-widest flex items-center gap-1 select-none">
                        <Info size={10} /> {language === 'pl' ? 'SZCZEGÓŁY' : 'VIEW DETAIL'}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-neutral-500 font-sans leading-relaxed">
                    {t.matchResultEnjoy}
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* -------------------- MAIN CELLAR DRILLDOWN (Menu Categories) -------------------- */}
        
        {/* Filter categories bar */}
        <div className="flex justify-center border-b border-neutral-900 pb-px mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {([
              { key: 'all', label: language === 'pl' ? 'Wszystko' : 'All' },
              { key: 'whisky', label: t.catWhisky },
              { key: 'cocktail', label: t.catCocktails },
              { key: 'mocktail', label: t.catMocktails }
            ] as const).map((catObj) => (
              <button
                id={`cat_btn_${catObj.key}`}
                key={catObj.key}
                onClick={() => {
                  setActiveCategory(catObj.key);
                  setSelectedItem(null); // Clear selected if active switches
                }}
                className={`px-5 py-3.5 text-xs tracking-[0.25em] font-mono uppercase transition-all duration-300 relative border-b-2 rounded-none cursor-pointer ${
                  activeCategory === catObj.key
                    ? 'border-gold text-gold font-semibold'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                {catObj.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                id={`menu_card_${item.id}`}
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                onClick={() => setSelectedItem(item)}
                className={`p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer group select-none relative ${
                  selectedItem?.id === item.id
                    ? 'bg-[#12100d] border border-gold ring-1 ring-gold/30 scale-[1.03] -translate-y-1 shadow-2xl shadow-[#C29F68]/20'
                    : 'bg-[#090909] border border-neutral-900 hover:border-gold/40 hover:scale-[1.025] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C29F68]/10 hover:bg-[#0c0c0c]'
                }`}
              >
                {/* Popularity/Bestseller badge */}
                {item.isPopular && (
                  <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest uppercase text-gold bg-black/85 px-2.5 py-1 border border-[#cbbba0]/20 flex items-center gap-1">
                    <Flame size={10} className="fill-gold text-gold animate-pulse" /> Popular
                  </span>
                )}

                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8C8476]">
                    {item.category === 'whisky' ? (language === 'pl' ? 'Starzona Whisky' : 'Single Malt Scotch') : item.category === 'cocktail' ? (language === 'pl' ? 'Butikowy Koktajl' : 'Artisan Cocktail') : (language === 'pl' ? 'Bezalkoholowy Tonik' : 'Zero-proof')}
                  </span>
                  
                  <div className="flex justify-between items-baseline gap-4 mt-3">
                    <h3 className={`text-lg md:text-xl font-serif tracking-tight leading-tight uppercase font-medium transition-colors ${
                      selectedItem?.id === item.id ? 'text-gold' : 'text-cream group-hover:text-gold'
                    }`}>
                      {item.name}
                    </h3>
                    <div className="flex-grow border-b border-dotted border-neutral-800 mx-2"></div>
                    <span className="text-gold font-mono font-medium text-sm md:text-base shrink-0">{item.price} ZŁ</span>
                  </div>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-3">
                     {item.description}
                  </p>
                </div>

                {/* Click action indicator */}
                <div className={`pt-4 mt-6 border-t border-neutral-900 flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider transition-colors ${
                  selectedItem?.id === item.id ? 'text-gold' : 'text-[#8C8476] group-hover:text-gold'
                }`}>
                  <Info size={11} className={selectedItem?.id === item.id ? 'text-gold' : 'text-neutral-500 group-hover:text-gold'} /> {language === 'pl' ? 'Sensoryczne szczegóły' : 'Palate Profile'}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* -------------------- FLOATING OVERLAY DRAWER WITH SENSORY PROFILE -------------------- */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/85 backdrop-blur-xs">
              
              {/* Dismiss handle backdrop click */}
              <div 
                id="modal_backdrop_dismiss"
                className="absolute inset-0 cursor-pointer" 
                onClick={() => setSelectedItem(null)} 
              />
              
              {/* Right sliding panel */}
              <motion.div
                id="menu_item_drawer"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-lg h-full bg-[#0a0a0a] border-l border-neutral-850 p-8 flex flex-col justify-between overflow-y-auto z-10 text-[#F4F0EA]"
              >
                <div>
                  {/* Underlay detail corner brackets */}
                  <div className="absolute top-2 right-2 text-neutral-850/60 font-serif font-extrabold text-9xl select-none pointer-events-none tracking-tighter">
                    37
                  </div>

                  <div className="flex items-center justify-between border-b border-neutral-900 pb-5 mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono tracking-widest text-gold uppercase">
                        {selectedItem.category} {language === 'pl' ? 'Koncepcja i Profil' : 'Recipe details'}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif text-cream tracking-tight font-medium uppercase">
                        {selectedItem.name}
                      </h2>
                    </div>
                    <button
                      id="drawer_dismiss_btn"
                      onClick={() => setSelectedItem(null)}
                      className="p-2 border border-neutral-800 rounded-none text-neutral-400 hover:text-white cursor-pointer transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Pricing block */}
                  <div className="flex justify-between items-center py-4 px-5 bg-neutral-950 border border-neutral-900 mb-8 rounded-none">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#8C8476]">{t.tastingPrice}</span>
                    <span className="text-gold font-mono text-xl font-semibold">{selectedItem.price}.00 ZŁ</span>
                  </div>

                  {/* Poetic outline */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">The Narrative</h4>
                    <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Sensory notes */}
                  {selectedItem.sensoryNotes && (
                    <div className="mb-8 bg-neutral-950/80 border-l-2 border-gold p-4 italic font-serif text-[#C29F68] text-xs leading-relaxed">
                      <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-neutral-500 not-italic block mb-1">
                        {t.sensoryProfile}
                      </span>
                      "{selectedItem.sensoryNotes}"
                    </div>
                  )}

                  {/* Ingredients */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-3">
                      {language === 'pl' ? 'Elementy Trunku' : 'Distilled Components'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.ingredients.map((ing) => (
                        <span 
                          key={ing}
                          className="px-3 py-1.5 bg-neutral-900 border border-neutral-850 text-[11px] text-neutral-300 font-sans uppercase tracking-wider"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-6 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  {selectedItem.calories && (
                    <span>~{selectedItem.calories} KCAL</span>
                  )}
                  <span className="uppercase text-gold tracking-widest">KRAKÓW KAZIMIERZ</span>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
