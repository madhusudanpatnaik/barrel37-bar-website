import { motion } from 'motion/react';
import { Award, Star, Compass, MapPin, Beer, GlassWater, Trophy } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export default function AboutSection({ language }: AboutSectionProps) {
  const t = TRANSLATIONS[language];
  
  // Custom Unsplash interior images representing deep warm bar aesthetics
  const AMBIENCE_SHELF = "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80";

  const pillars = [
    {
      icon: <Compass size={18} className="text-gold" />,
      title: language === 'pl' ? 'Selekcja Piwnicy' : 'Cellar Curation',
      description: language === 'pl' 
        ? 'Sprowadzamy rzadkości z całego świata. Nasza półka to żywe archiwum zawierające limitowane edycje ze Szkocji, Japonii czy Indii.'
        : 'Our bottles are not decorations. Every vintage is selected on its own merits, spanning from single cask Islay malts to rare grains.'
    },
    {
      icon: <GlassWater size={18} className="text-gold" />,
      title: language === 'pl' ? 'Precyzja Podania' : 'Perfect Serve',
      description: language === 'pl'
        ? 'Temperatura szkła, precyzja cięcia lodu, idealna woda uwalniająca aromaty — każdy mililitr szanuje zamysł destylatora.'
        : 'Temperature-balanced water, customized Glencairn glassware, and slow-melting hand-carved ice. We treat whisky as active art.'
    },
    {
      icon: <Trophy size={18} className="text-gold" />,
      title: language === 'pl' ? 'Głęboka Dyskrecja' : 'Deep Discretion',
      description: language === 'pl'
        ? 'Spokój ponad zgiełk. Zapewniamy kameralną oazę wolną od aparatów fotograficznych i głośnego tłumu.'
        : 'An environment where you can listen to the liquid speak. No flash photography, no commercial noise, purely fine taste.'
    }
  ];

  return (
    <div className="bg-black text-[#F4F0EA]">
      
      {/* 1. TOP ABOUT INTRO */}
      <section className="py-16 md:py-24 border-b border-[#181818]/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center flex flex-col items-center gap-4 mb-16 md:mb-20">
            <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{t.aboutPre}</span>
            <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
              {t.aboutTitle} <span className="italic font-light text-gold">{t.aboutTitleItalic}</span>
            </h1>
            <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Split Left Paragraphs */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-widest text-[#8C8476] uppercase">KRAKÓW KAZIMIERZ</span>
              <h2 className="text-2xl md:text-4xl font-serif text-cream leading-tight tracking-tight">
                {language === 'pl' 
                  ? 'Ukryty za niepozornymi drzwiami, stworzony z obsesji odkrywania.' 
                  : 'Hidden behind an unassuming door, designed to feel like a discovery.'}
              </h2>
              <div className="h-[1px] bg-neutral-900 my-1"></div>
              <div className="space-y-4 text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
                <p>
                  {language === 'pl'
                    ? 'Barrel 37 powstało z prostej myśli — przekonania, że szlachetny alkohol to doświadczenie, a nie transakcja handlowa. Położony w sercu krakowskiego Kazimierza, nasz lokal oferuje ciepłe światło pochodni odbijające się od ceglanych ścian, zapach dębu w powietrzu oraz zdobiące mury portrety zwierząt w eleganckich strojach z minionej epoki.'
                    : 'Barrel 37 was born from a single obsession — the belief that a good drink is an experience, not a transaction. Hidden inside Kraków’s historic Kazimierz district, our bar was built to feel like an escape: warm light reflecting off rustic brick walls, oil portraits of animals in elegant attire, and the gentle scent of aged oak in the air.'}
                </p>
                <p>
                  {language === 'pl'
                    ? 'Nasza kolekcja obejmuje ponad 200 butelek ze Szkocji, Japonii, Indii oraz Irlandii. Każda pozycja na karcie została wybrana na drodze rygorystycznych testów sensorycznych naszych sommelierów, aby zapewnić niezapomniane chwile kontemplacji.'
                    : 'Our collection covers over 200 single malts, blends, and craft whiskies from legendary and micro distilleries across Scotland, Japan, India and Ireland. Every cocktail on the menu is built on the same guiding philosophy: respecting history, but leaving a customized thumbprint.'}
                </p>
              </div>
            </div>

            {/* Split Right Image Frame */}
            <div className="lg:col-span-6">
              <div className="border border-white/5 p-2 md:p-3 bg-[#0d0d0d] relative overflow-visible">
                {/* Gold corner elements */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold z-20"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold z-20"></div>
                
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={AMBIENCE_SHELF}
                    alt="Barrel 37 bar glowing glassware"
                    className="w-full h-full object-cover opacity-80 scale-100 hover:scale-105 transition-transform duration-[2000ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. CHOSEN VALUES & PHILOSOPHY */}
      <section className="py-20 md:py-32 bg-[#020202] border-b border-[#181818]/85">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col gap-3 mb-16 max-w-lg">
            <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{language === 'pl' ? 'FILOZOFIA DZIAŁANIA' : 'Operational Code'}</span>
            <h2 className="text-3xl md:text-4xl font-serif text-cream tracking-tight leading-tight">
              {language === 'pl' ? 'Nasze Trzy' : 'Our Three'} <span className="italic font-light text-gold">{language === 'pl' ? 'Podstawowe Filary' : 'Core Pillars'}</span>
            </h2>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-1">
              {language === 'pl'
                ? 'Jak definiujemy gościnność w Barrel 37? Odchodzimy od pretensjonalności na rzecz szczerego, głębokiego szacunku dla gościa i trunku.'
                : 'How do we define speakeasy hospitality? Stripping away the pretension to focus purely on the raw connection between grain, oak, and guest.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#1c1c1c]">
            {pillars.map((v, idx) => (
              <div key={v.title} className={`flex flex-col gap-4 ${idx > 0 ? 'pt-8 md:pt-0 md:pl-8' : ''}`}>
                <div className="w-10 h-10 rounded-none bg-neutral-950 border border-neutral-900 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-xl font-serif text-cream uppercase tracking-wide">{v.title}</h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. MEET THE FOUNDERS & SOMMELIERS */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center flex flex-col items-center gap-3 mb-16 md:mb-24">
            <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{language === 'pl' ? 'KURATORZY SMAKU' : 'THE CUSTODIANS'}</span>
            <h2 className="text-3xl md:text-5xl font-serif text-cream tracking-tight font-medium">
              {language === 'pl' ? 'Nasi' : 'Meet Our'} <span className="italic font-light text-gold">{language === 'pl' ? 'Eksperci i Założyciele' : 'Curators & Alchemists'}</span>
            </h2>
            <div className="h-[1px] bg-neutral-900 w-16 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Curator 1 */}
            <div className="flex flex-col gap-6 md:p-8 border border-neutral-900 bg-neutral-950/20 p-6">
              <span className="text-[10px] font-mono tracking-widest text-[#8C8476] uppercase">
                {language === 'pl' ? 'ARCHIWISTA WHISKY' : 'HEAD OF WHISKY COOP'}
              </span>
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif text-cream">Janusz Kowalski</h3>
                <span className="text-xs text-gold font-sans italic mt-1">
                  {language === 'pl' ? 'Główny Archiwista Cask Selection' : 'Head Whisky Curator & Cask Archivist'}
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {language === 'pl'
                  ? 'Spędził kilkanaście lat podróżując i spisując niezależne edycje butelkowe z małych destylarni w Szkocji, Japonii oraz Indiach. Odpowiada za bezpośrednie negocjacje prywatnych partii beczek, z których przelewamy trunki rzadko spotykane w Europie Środkowej.'
                  : 'Having spent over 15 years traveling the Scottish Highlands, Speyside, and Japan, Janusz tracks down forgotten warehouse casks. He maintains our network of independent bottlers, ensuring our selection holds spirits that cannot be found elsewhere.'}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase mt-2">
                <MapPin size={11} className="text-gold" /> {language === 'pl' ? 'KRAKÓW COOP' : 'CRACOW & DUFFTOWN'}
              </div>
            </div>

            {/* Curator 2 */}
            <div className="flex flex-col gap-6 md:p-8 border border-neutral-900 bg-neutral-950/20 p-6">
              <span className="text-[10px] font-mono tracking-widest text-[#8C8476] uppercase">
                {language === 'pl' ? 'SPECJALISTA RECEPTUR' : 'LIQUID ALCHEMIST'}
              </span>
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif text-cream">Paulina Wiśniewska</h3>
                <span className="text-xs text-gold font-sans italic mt-1">
                  {language === 'pl' ? 'Główny Miksolog i Kreator Aromatów' : 'Lead Mixologist & Bitters Artisan'}
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {language === 'pl'
                  ? 'Chemik z zamiłowania, mistrz rzemiosła z powołania. Paulina patrzy na drinki jak na wielowarstwowe kompozycje zapachowe. Tworzy własne, domowe maceraty, olejki cytrusowe i bittersy wiśniowe, które są sercem cocktaili w Barrel 37.'
                  : 'A chemist by training and an alchemist by trade, Paulina styles our beverage program. She specializes in hand-extracted botanicals, house-fermented cherry bitters, and calculating the exact impact of cedar wood smoke on peated single malts.'}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase mt-2">
                <MapPin size={11} className="text-gold" /> {language === 'pl' ? 'LABORATORIUM KRAKÓW' : 'BAR LABS'}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
