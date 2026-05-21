import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Flame, MoveRight, HelpCircle, Compass, ShieldCheck } from 'lucide-react';
import { ActivePage, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  language: Language;
}

export default function Hero({ setActivePage, language }: HeroProps) {
  const t = TRANSLATIONS[language];
  const [activeStep, setActiveStep] = useState<number>(0);

  // Unsplash images selected specifically for the high-end rustic speakeasy feel.
  const HEROBAR_IMAGE = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80";
  const STORYBAR_IMAGE = "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80";
  const INTERIORBAR_IMAGE = "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1200&q=80";

  // Journey steps data (multi-language supported)
  const journeySteps = [
    {
      id: '01',
      title: language === 'pl' ? 'Początek: Beczka Dębowa' : 'The Beginning: The Oak Barrel',
      tag: language === 'pl' ? 'Proces dojrzewania' : 'Maturity Process',
      text: language === 'pl' 
        ? 'Każda whisky w Barrel 37 rozpoczyna swoją podróż tutaj — wewnątrz wypalanej beczki z dębu amerykańskiego lub europejskiego. Przez lata płyn oddycha przez pory drewna, wyciągając taniny, nuty wanilii i karmelu.' 
        : 'Every whisky at Barrel 37 begins here — inside a charred American or European oak cask. For years, the spirit breathes through the wood, pulling out tannins, vanilla, and caramel while giving back something the diller never quite planned.',
      stats: [
        { val: '12–18', label: language === 'pl' ? 'Średni wiek (lata)' : 'Years avg. age' },
        { val: '200L', label: language === 'pl' ? 'Pojemność beczki' : 'Cask capacity' },
        { val: '3%', label: language === 'pl' ? 'Działka aniołów / rok' : 'Angel’s share / yr' }
      ]
    },
    {
      id: '02',
      title: language === 'pl' ? 'Selekcja: Butelka na Półce' : 'The Selection: The Bottle',
      tag: language === 'pl' ? 'Drobiazgowa edycja' : 'Strict Curation',
      text: language === 'pl'
        ? 'Nasz kurator testuje setki próbek rocznie. Tylko te pozycje, które niosą prawdziwą opowieść kulinarną, trafiają na naszą fizyczną półkę w salonie. Każda butelka przeżyła niezwykle surowy proces oceny.'
        : 'Our curator tastes hundreds of expressions each year. Only the ones that tell a story make it onto our shelf. When a bottle arrives at Barrel 37, it has already survived a very strict edit — nose, palate, finish, and the context of this room.',
      stats: [
        { val: '200+', label: language === 'pl' ? 'Butelek na półce' : 'Bottles on shelf' },
        { val: '40+', label: language === 'pl' ? 'Różnych destylarni' : 'Distilleries' },
        { val: '8', label: language === 'pl' ? 'Krajów pochodzenia' : 'Countries represented' }
      ]
    },
    {
      id: '03',
      title: language === 'pl' ? 'Moment: Twoje Szkło' : 'The Moment: Your Glass',
      tag: language === 'pl' ? 'Królewska porcja' : 'Flawless Pour',
      text: language === 'pl'
        ? 'Miejsce, w którym kończy się długa droga trunku, a zaczyna Twoje misterne doznanie smakowe. Kieliszek Glencairn lub niska szklanka z grubym dnem, czysta lub z jedną lodową kulą - barman dba o każdy detal podania.'
        : 'This is where the journey ends and yours begins. A Glencairn or a rocks glass, a single cube or neat — our bartenders will ask, because how you drink is as personal as what you drink. Everything that came before was just preparation.',
      stats: [
        { val: 'neat', label: language === 'pl' ? 'Rekomendowane podanie' : 'Recommended pour' },
        { val: '20–22°C', label: language === 'pl' ? 'Idealna temperatura' : 'Ideal temp' },
        { val: '2 cl', label: language === 'pl' ? 'Standardowa miara' : 'Standard pour' }
      ]
    }
  ];

  // Stagger wrapper definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="bg-black text-[#F4F0EA]">
      
      {/* 1. HERO HEADER AREA (SPLIT GRID WITH EXQUISITE DETAIL) */}
      <section className="relative border-b border-[#181818] overflow-hidden">
        {/* Subtle grid pattern backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-20 md:py-28 relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column Texts */}
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 justify-center">
              
              <motion.div variants={itemVariants} className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] text-[#8C8476] uppercase">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-ping"></span>
                {t.heroPreTitle}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <span className="text-[11px] font-mono tracking-[0.4em] text-gold uppercase block">{t.heroTitle1}</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight leading-[1.05] text-cream">
                  {t.heroTitle2} <br />
                  <span className="italic font-light text-gold text-3xl sm:text-4xl md:text-6xl pl-1 block sm:inline">{t.heroTitle3}</span>
                </h1>
              </motion.div>

              <motion.p variants={itemVariants} className="text-sm md:text-base text-neutral-400 font-sans max-w-xl leading-relaxed">
                {t.heroDesc}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
                <button
                  id="hero_btn_menu"
                  onClick={() => setActivePage('menu')}
                  className="px-8 py-4 bg-gold hover:bg-gold-dark text-black text-xs uppercase tracking-[0.2em] font-bold transition-all cursor-pointer rounded-none border border-gold hover:-translate-y-0.5 shadow-lg active:translate-y-0"
                >
                  {t.btnMenu}
                </button>
                <button
                  id="hero_btn_book"
                  onClick={() => setActivePage('reservation')}
                  className="px-8 py-4 bg-transparent hover:bg-white/5 text-xs text-cream uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer rounded-none border border-neutral-800 hover:border-gold/40"
                >
                  {t.btnBook}
                </button>
              </motion.div>

              {/* Decorative Scroll indicator */}
              <motion.div 
                variants={itemVariants}
                className="pt-6 hidden sm:flex items-center gap-4 text-neutral-500 font-mono text-[9px] uppercase tracking-[0.3em]"
              >
                <span>{t.scrollDown}</span>
                <div className="w-12 h-px bg-neutral-800 relative overflow-hidden">
                  <motion.div 
                    animate={{ x: [-48, 48] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute top-0 left-0 w-6 h-full bg-gold"
                  />
                </div>
              </motion.div>

            </div>

            {/* Right Picture framed beautifully */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              <div className="w-full max-w-md relative border border-white/5 p-2 bg-neutral-950 overflow-visible group">
                {/* Gold corner elements acting as sophisticated brackets */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold z-20"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold z-20"></div>
                
                <div className="w-full h-[320px] md:h-[450px] overflow-hidden relative">
                  <img
                    src={HEROBAR_IMAGE}
                    alt="Barrel 37 Ambient Whiskey Space"
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2000ms] object-center grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Absolute visual tags for high status impression */}
                  <div className="absolute bottom-6 left-6 right-6 font-mono text-[9px] tracking-[0.2em] text-gold uppercase bg-black/90 px-4 py-2 text-center border border-[#cbbba0]/20">
                    {language === 'pl' ? 'KAZIMIERZ, DIETLA 37' : 'KRYPTA KAZIMIERZ, CRACOW'}
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 2. DYNAMIC STATS PANEL */}
      <section className="border-b border-[#181818] bg-[#020202]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#181818]">
          
          <div className="py-10 md:py-14 pr-4 md:pr-8 flex items-start gap-4">
            <div className="w-10 h-10 border border-neutral-800 bg-neutral-950 flex items-center justify-center shrink-0">
              <Compass size={16} className="text-gold" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gold font-mono tracking-[0.25em] uppercase">{t.statSpiritsLbl}</span>
              <h3 className="text-2xl font-serif text-cream font-medium leading-none mt-1">{t.statSpiritsVal} Single Malts</h3>
              <p className="text-xs text-neutral-500 font-sans leading-relaxed mt-1">
                {language === 'pl' ? 'Szkocja, Japonia, Irlandia oraz unikalne indie.' : 'Sourced meticulously from Scotland, Japan, Ireland and exotic distilleries.'}
              </p>
            </div>
          </div>

          <div className="py-10 md:py-14 px-1 md:px-8 flex items-start gap-4">
            <div className="w-10 h-10 border border-neutral-800 bg-neutral-950 flex items-center justify-center shrink-0">
              <Sparkles size={16} className="text-gold" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gold font-mono tracking-[0.25em] uppercase">{t.statFoundedLbl}</span>
              <h3 className="text-2xl font-serif text-cream font-medium leading-none mt-1">Est. {t.statFoundedVal}</h3>
              <p className="text-xs text-neutral-500 font-sans leading-relaxed mt-1">
                {language === 'pl' ? 'Powstały z miłości do autentycznego rzemiosła.' : 'Forged behind a hidden black mahogany entrance on ul. Dietla.'}
              </p>
            </div>
          </div>

          <div className="py-10 md:py-14 pl-1 md:pl-8 flex items-start gap-4">
            <div className="w-10 h-10 border border-neutral-800 bg-neutral-950 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} className="text-gold" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gold font-mono tracking-[0.25em] uppercase">{t.statCocktailsLbl}</span>
              <h3 className="text-2xl font-serif text-cream font-medium leading-none mt-1">{t.statCocktailsVal} Recipies</h3>
              <p className="text-xs text-neutral-500 font-sans leading-relaxed mt-1">
                {language === 'pl' ? 'Precyzyjnie dobrane sygnatury w starym stylu.' : 'Crafted with the restraint, measure, and pride of a lost era.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. STORY SECTION */}
      <section className="py-20 md:py-32 border-b border-[#181818] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image Block */}
            <div className="lg:col-span-5 relative">
              <div className="border border-neutral-900 p-2 bg-[#090909]">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img
                    src={STORYBAR_IMAGE}
                    alt="Premium Whiskey Selection"
                    className="w-full h-full object-cover grayscale opacity-85 group-hover:scale-105 transition-all duration-[2000ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-center text-neutral-400 text-xs italic font-serif bg-black/50 p-3 backdrop-blur-xs">
                    "{language === 'pl' ? 'Whisky to nie tylko alkohol – to zamknięty w czasie krajobraz Szkocji.' : 'Whiskey is liquefied history, locked inside charred wood.'}"
                  </div>
                </div>
              </div>
            </div>

            {/* Texts block */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{t.storyPre}</span>
              <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-cream leading-tight">
                {t.storyTitle} <br />
                <span className="italic font-light text-gold">{t.storyTitleItalic}</span>
              </h2>
              <div className="h-[1px] bg-neutral-900 w-24 my-2"></div>
              
              <div className="space-y-4 text-xs md:text-sm text-neutral-400 font-sans leading-relaxed max-w-xl">
                <p>{t.storyDescP1}</p>
                <p>{t.storyDescP2}</p>
              </div>

              {/* Trigger */}
              <div className="pt-6">
                <button
                  id="hero_btn_learn_more"
                  onClick={() => setActivePage('about')}
                  className="flex items-center gap-3 text-xs uppercase tracking-widest text-cream hover:text-gold transition-colors font-mono cursor-pointer group"
                >
                  {language === 'pl' ? 'NASZA CAŁKOWITA FILOZOFIA' : 'OUR COMPLETE PHILOSOPHY'}
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-gold" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FROM OAK TO GLASS PATH */}
      <section className="py-20 md:py-32 border-b border-[#181818] bg-[#020202]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{t.journeyPre}</span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-cream">
                {t.journeyTitle} <span className="italic font-light text-gold">{t.journeyTitleItalic}</span>
              </h2>
            </div>
            
            {/* Steps toggle bar */}
            <div className="flex gap-2">
              {journeySteps.map((step, idx) => (
                <button
                  id={`journey_step_tab_${idx}`}
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`w-10 h-10 border font-mono text-xs cursor-pointer transition-colors flex items-center justify-center rounded-none ${
                    idx === activeStep 
                      ? 'border-gold bg-gold text-black font-bold' 
                      : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-cream'
                  }`}
                >
                  {step.id}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive slide output */}
          <div className="bg-neutral-950 border border-neutral-900 p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Text half */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <span className="text-[9px] font-mono tracking-widest text-gold uppercase bg-neutral-900 border border-neutral-800 px-3 py-1 self-start">
                    {journeySteps[activeStep].tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-cream uppercase tracking-wide">
                    {journeySteps[activeStep].title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
                    {journeySteps[activeStep].text}
                  </p>
                  
                  {/* Step Control Buttons on inner container */}
                  <div className="flex gap-4 pt-4 border-t border-neutral-900 mt-2">
                    <button
                      id="journey_btn_prev"
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      className="px-4 py-2 border border-neutral-800 hover:border-neutral-700 text-[10px] font-mono tracking-widest uppercase disabled:opacity-30 disabled:pointer-events-none text-neutral-400 cursor-pointer"
                    >
                      ← {language === 'pl' ? 'Wstecz' : 'Prev'}
                    </button>
                    <button
                      id="journey_btn_next"
                      disabled={activeStep === journeySteps.length - 1}
                      onClick={() => setActiveStep(prev => Math.min(journeySteps.length - 1, prev + 1))}
                      className="px-4 py-2 border border-gold/40 hover:border-gold text-[10px] font-mono tracking-widest uppercase disabled:opacity-30 disabled:pointer-events-none text-gold cursor-pointer"
                    >
                      {language === 'pl' ? 'Dalej' : 'Next'} →
                    </button>
                  </div>
                </div>

                {/* Vertical stat blocks */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-6 border-t lg:border-t-0 lg:border-l border-neutral-900 pt-6 lg:pt-0 lg:pl-8">
                  {journeySteps[activeStep].stats.map((st, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <span className="text-3xl font-serif text-gold font-light">{st.val}</span>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 leading-none">{st.label}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 5. IMMERSIVE OUTRO / BOOK NOW SECTION */}
      <section className="relative h-[480px] flex items-center justify-center border-b border-[#181818] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#060606]">
          <img
            src={INTERIORBAR_IMAGE}
            alt="Warm glowing Speakeasy Atmosphere"
            className="w-full h-full object-cover opacity-35 object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-6 md:gap-8">
          <span className="text-[9px] font-mono tracking-[0.45em] text-[#8C8476] uppercase">{language === 'pl' ? 'ZABEZPIECZ MIEJSCE' : 'SECURE SECRECY'}</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cream tracking-tight leading-tight">
            Ready for <span className="italic font-light text-gold pl-1">Barrel 37?</span>
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-md leading-relaxed">
            {language === 'pl' 
              ? 'Wspaniali rezerwiści zyskują dostęp bezpośredni. Spróbuj wolnych nakładów whisky lub poproś o prywatny seans z sommelierem.' 
              : 'Walk-ins welcome, reservations highly recommended on weekends to secure intimate booth seating near our mahogany counter.'}
          </p>
          <button
            id="outro_btn_book"
            onClick={() => setActivePage('reservation')}
            className="px-10 py-5 bg-gold hover:bg-gold-dark text-black text-xs uppercase tracking-[0.25em] font-bold transition-all cursor-pointer rounded-none hover:-translate-y-1"
          >
            {t.btnBook}
          </button>
        </div>
      </section>

    </div>
  );
}
