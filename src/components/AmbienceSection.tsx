import { motion } from 'motion/react';
import { Sparkles, Key, Compass, Moon } from 'lucide-react';
import { Language } from '../types';

interface AmbienceSectionProps {
  language: Language;
}

export default function AmbienceSection({ language }: AmbienceSectionProps) {
  const images = {
    booths: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    counter: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80",
    vault: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80"
  };

  const sections = [
    {
      id: '01',
      title: language === 'pl' ? 'Loże Dębowe' : 'The Oak Booths',
      subtitle: language === 'pl' ? 'Intymność i szept' : 'Secrecy in Shadow',
      description: language === 'pl'
        ? 'Głębokie loże obite ciemną, naturalną skórą, oddzielone ciężkimi kotarami. Miejsce stworzone do długich nocnych rozmów przy świetle lamp olejnych.'
        : 'Sunk deep into the shadows, our high-backed leather booths are partitioned with sound-dampening velvet. Lit purely by oil lamps and low-emittance warm filaments.',
      img: images.booths
    },
    {
      id: '02',
      title: language === 'pl' ? 'Mahoń Główny' : 'The Mahogany Counter',
      subtitle: language === 'pl' ? 'Serce alchemii' : 'The Alchemist\'s Frontier',
      description: language === 'pl'
        ? 'Długi kontuar z litego mahoniu, za którym nasi barmani dymią szklanki dębem cedrowym i komponują autorskie bittersy na Twoich oczach.'
        : 'A massive hand-restored mahogany counter where our mixologists work. Here, you get a front-row seat to hand-carved ice sphere sculpting and tableside cedar wood custom smoking.',
      img: images.counter
    },
    {
      id: '03',
      title: language === 'pl' ? 'Półka Kolekcjonerska' : 'The Rare Vault Cab',
      subtitle: language === 'pl' ? 'Skarby starzone czasem' : 'Aged in Silence',
      description: language === 'pl'
        ? 'Rzadkie, jedno-beczkowe edycje, historyczne destylaty i butelki z zapomnianych szkockich wytwórni, odblokowywane na wyjątkowe życzenie.'
        : 'Our brass-framed liquor library. It encloses extremely rare single cask whiskeys and ancient whiskies bottled decades ago, requiring a custom key and an open-minded palate.',
      img: images.vault
    }
  ];

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title elements */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">
            {language === 'pl' ? 'KRAJOBRAZ SPEAKEASY' : 'AN INTENTIONAL RETREAT'}
          </span>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
            {language === 'pl' ? 'Nasze Wnętrze' : 'The Ambience'}
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-md leading-relaxed text-center">
            {language === 'pl'
              ? 'W każdym rogu Barrel 37 znajdziesz rzemiosło, intymne oświetlenie i historię wypaloną w drewnie.'
              : 'Warm torch light, rustic brick walls, and custom room notes of aged cedar wood. Explore the rooms of our Kazimierz crypt.'}
          </p>
        </div>

        {/* Areas Listings display */}
        <div className="space-y-24">
          {sections.map((sec, idx) => (
            <div 
              key={sec.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Picture Frame */}
              <div className={`col-span-1 lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="border border-neutral-900 p-2 bg-neutral-950 relative overflow-visible group">
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold z-10"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold z-10"></div>
                  
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={sec.img} 
                      alt={sec.title} 
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1500ms] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Text half */}
              <div className="col-span-1 lg:col-span-6 flex flex-col gap-4">
                <span className="text-3xl font-serif text-neutral-800 leading-none">{sec.id}</span>
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase mt-1">{sec.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-serif text-cream uppercase tracking-wide">
                  {sec.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
                  {sec.description}
                </p>
                <div className="flex items-center gap-2 text-[9px] font-mono text-[#8C8476] uppercase tracking-wider mt-2 select-none">
                  <Moon size={11} className="text-gold" /> {language === 'pl' ? 'PRYWATNA REZERWACJA MOŻLIWA' : 'BOOKABLE ZONE'}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
