import { MapPin, Phone, Mail, Clock, HelpCircle } from 'lucide-react';
import { Language } from '../types';

interface FindUsSectionProps {
  language: Language;
}

export default function FindUsSection({ language }: FindUsSectionProps) {
  
  const schedules = [
    { day: language === 'pl' ? 'Poniedziałek' : 'Monday', hours: language === 'pl' ? 'Zamknięte (Odpoczynek)' : 'Closed (Rest Day)' },
    { day: language === 'pl' ? 'Wtorek - Czwartek' : 'Tuesday - Thursday', hours: '18:00 — 01:00' },
    { day: language === 'pl' ? 'Piątek - Sobota' : 'Friday - Saturday', hours: '18:00 — 03:00' },
    { day: language === 'pl' ? 'Niedziela' : 'Sunday', hours: '18:00 — 00:00' }
  ];

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title elements */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">
            {language === 'pl' ? 'LOKALIZACJA KRYPTY' : 'DIRECTIONS TO COOP'}
          </span>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
            {language === 'pl' ? 'Znajdź Nas' : 'Find Us'}
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-md leading-relaxed text-center">
            {language === 'pl'
              ? 'Ukryty w zabytkowych podziemiach krakowskiego Kazimierza. Podążaj za zapachem dębu.'
              : 'Located in the historic cellar of Krakow\'s Kazimierz, beneath the old stone structures.'}
          </p>
        </div>

        {/* Info Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column schedule & contact */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Hours card */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 md:p-8">
              <span className="text-[10px] font-mono text-gold tracking-widest uppercase flex items-center gap-1.5 label-icon">
                <Clock size={12} className="text-gold" /> {language === 'pl' ? 'GODZINY OTWARCIA' : 'OPEN HOURS'}
              </span>
              <div className="h-[1px] bg-neutral-900 w-16 my-4"></div>
              <div className="space-y-4">
                {schedules.map((sch) => (
                  <div key={sch.day} className="flex justify-between items-baseline gap-4 text-xs">
                    <span className="font-serif text-cream uppercase font-semibold">{sch.day}</span>
                    <div className="flex-grow border-b border-dotted border-neutral-850 mx-2"></div>
                    <span className="font-mono text-neutral-450 shrink-0">{sch.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakeasy Secret Entry Guide */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 md:p-8">
              <span className="text-[10px] font-mono text-gold tracking-widest uppercase flex items-center gap-1.5 label-icon">
                <HelpCircle size={12} className="text-gold" /> {language === 'pl' ? 'INSTRUKCJA WEJŚCIA' : 'SECRET ENTRY CODE'}
              </span>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-4">
                {language === 'pl'
                  ? 'Gdy dotrzesz na ulicę Józefa Dietla 37, szukaj nieozakowanego, grafitowego wejścia z małą mosiężną tabliczką "37". Należy nacisnąć dzwonek lub zapukać dwukrotnie. Barman otworzy drzwi tak szybko, jak sprzyjają temu warunki sali.'
                  : 'Upon arriving at ul. Józefa Dietla 37, locate the unmarked dark graphite door featuring a generic small brass plate numbered "37". Please knock twice or ring the button once. Our host will admit you promptly if room capacity permits.'}
              </p>
            </div>

            {/* Contact Specs */}
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs">
                <div className="w-8 h-8 rounded-none bg-neutral-950 border border-neutral-850 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">{language === 'pl' ? 'ADRES' : 'PHYSICAL ADDRESS'}</p>
                  <p className="font-sans text-cream font-medium mt-1">ul. Józefa Dietla 37, 31-062 Kraków</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="w-8 h-8 rounded-none bg-neutral-950 border border-neutral-850 flex items-center justify-center text-gold shrink-0">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">{language === 'pl' ? 'REZERWACJA / TELEFON' : 'RESERVATIONS PHONE'}</p>
                  <p className="font-sans text-cream font-medium mt-1">+48 22 555 01 28</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="w-8 h-8 rounded-none bg-neutral-950 border border-neutral-850 flex items-center justify-center text-gold shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-neutral-500 uppercase leading-none">{language === 'pl' ? 'EMAIL' : 'ELECTRONIC MAIL'}</p>
                  <p className="font-sans text-cream font-medium mt-1">contact@barrel37.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Polish speakeasy architectural stylized vector maps */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-900 p-2 bg-neutral-950 relative overflow-hidden group">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold z-10"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold z-10"></div>
              
              <div className="relative aspect-[16/12] bg-[#020202] flex flex-col items-center justify-center p-8 text-center border border-neutral-900 select-none">
                
                {/* Visual coordinate lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-gold/10"></div>
                <div className="absolute left-1/2 top-0 w-px h-full bg-gold/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gold/5 animate-pulse"></div>

                {/* Simulated luxury tactical map of Kazimierz */}
                <div className="relative z-10 flex flex-col items-center animate-fadeIn">
                  <div className="w-4 h-4 rounded-full bg-gold animate-ping absolute"></div>
                  <div className="w-4 h-4 rounded-full bg-gold border-2 border-black relative z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  </div>
                  
                  <span className="font-serif text-cream text-[13px] tracking-widest uppercase mt-4 block font-extrabold">BARREL 37 SPEAKEASY</span>
                  <span className="font-mono text-gold text-[9px] tracking-[0.2em] uppercase mt-1">lat. 50.0528° N, lon. 19.9443° E</span>
                  
                  <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 max-w-sm text-left border-t border-neutral-900 pt-6">
                    <div className="text-[10px] font-mono">
                      <p className="text-neutral-500 uppercase">District:</p>
                      <p className="text-cream mt-0.5">Kraków Kazimierz</p>
                    </div>
                    <div className="text-[10px] font-mono">
                      <p className="text-neutral-500 uppercase">Nearest Stop:</p>
                      <p className="text-cream mt-0.5">Starowiślna / Dietla</p>
                    </div>
                    <div className="text-[10px] font-mono col-span-2 text-center border-t border-neutral-900/60 pt-4">
                      <p className="text-neutral-500 uppercase">Access Status:</p>
                      <p className="text-gold mt-0.5 font-bold uppercase">{language === 'pl' ? 'PRYWATNY INGRESS OTWARTY' : 'PRIVATE INGRESS ACTIVE'}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
