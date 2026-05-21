import { Sparkles, Calendar, Clock, MapPin, DollarSign, Users } from 'lucide-react';
import { Language } from '../types';

interface EventsSectionProps {
  language: Language;
  setActivePage: (page: string) => void;
}

export default function EventsSection({ language, setActivePage }: EventsSectionProps) {
  
  const originalEvents = [
    {
      id: 'e-1',
      title: language === 'pl' ? 'Wędzone Wyżyny: Masterclass Torfowy' : 'Smoky Highlands: Peat Masterclass',
      subtitle: language === 'pl' ? 'Degustacja dymnych potęg' : 'Deep smoky profile focus',
      description: language === 'pl'
        ? 'Przewodnik sensoryczny po najbardziej dymnych i torfowych destylarniach Szkocji (m.in. Islay). Degustacja obejmuje pięć wyselekcjonowanych roczników, w tym unikalny 18-letni malt.'
        : 'A sensory voyage into Scotland’s heavily peated and smoky coastal distilleries. Taste five legendary drams including rare independent bottlings, complete with tasting maps.',
      schedule: language === 'pl' ? 'Każdy Czwartek, 20:00' : 'Every Thursday, 8:00 PM',
      duration: '2 Hours',
      price: '250',
      seats: 'Max 12 seats',
      seatsPl: 'Max 12 osób'
    },
    {
      id: 'e-2',
      title: language === 'pl' ? 'Podróż Słońca: Japońska Harmonia' : 'Rising Sun: Japanese Harmony',
      subtitle: language === 'pl' ? 'Balans i subtelny minimalizm' : 'Refinement & precision',
      description: language === 'pl'
        ? 'Drobiazgowa analizą destylatów z Kraju Kwitnącej Wiśni (Yamazaki, Hakushu, Hibiki). Poznaj historię rzemieślników, którzy zrekonstruowali szkocką tradycję, nadając jej perfekcyjną czystość.'
        : 'An intimate tasting of Japan’s most sought-after distilleries (Yamazaki, Hakushu, Hibiki). Experience the immaculate floral and silken profiles that have taken the whisky world by storm.',
      schedule: language === 'pl' ? 'Pierwszy Wtorek Miesiąca, 19:30' : 'First Tuesday of Month, 7:30 PM',
      duration: '2.5 Hours',
      price: '380',
      seats: 'Max 8 seats',
      seatsPl: 'Max 8 osób'
    },
    {
      id: 'e-3',
      title: language === 'pl' ? 'Miksologia Ery Prohibicji' : 'Prohibition Mixology Masterclass',
      subtitle: language === 'pl' ? 'Alchemia za barem' : 'The chemistry of the cocktail',
      description: language === 'pl'
        ? 'Zostań alchemikiem na jeden wieczór. Dowiedz się, jak komponować autorskie bittersy wiśniowe, jak poprawnie napowietrzać białko jaja w Prohibition Sour i jak wędzić whisky przy stoliku.'
        : 'Step behind our restored counter. Learn the exact science of building slow bitters, how to emulsify egg white correctly, and the art of tableside smoking using natural cedar blocks.',
      schedule: language === 'pl' ? 'Każda Środa, 18:30' : 'Every Wednesday, 6:30 PM',
      duration: '2 Hours',
      price: '190',
      seats: 'Max 10 seats',
      seatsPl: 'Max 10 osób'
    }
  ];

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title elements */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">
            {language === 'pl' ? 'EDUKACJA I DEGUSTACJE' : 'PRIVATE EXPERIENCE'}
          </span>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
            {language === 'pl' ? 'Seanse i Wydarzenia' : 'Masterclasses'}
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-md leading-relaxed text-center">
            {language === 'pl'
              ? 'Kameralne, kamienne seanse z sommelierami. Odkryj sekrety zamknięte w dębowych klepkach.'
              : 'Immersive spirit journeys guided by our alchemists. Limited seating to maintain pristine sensory parameters.'}
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {originalEvents.map((evt) => (
            <div 
              id={`event_card_${evt.id}`}
              key={evt.id} 
              className="bg-[#090909] border border-neutral-900 p-8 flex flex-col justify-between hover:border-gold/45 transition-colors duration-300 relative group"
            >
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#8C8476] uppercase block mb-1">
                  {evt.subtitle}
                </span>
                <h3 className="text-lg md:text-xl font-serif text-cream uppercase group-hover:text-gold transition-colors leading-tight font-bold mt-2">
                  {evt.title}
                </h3>
                <div className="h-px bg-neutral-900 w-16 my-4"></div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {evt.description}
                </p>

                {/* Event requirements specifics */}
                <div className="space-y-3 pt-6 mt-6 border-t border-neutral-900 font-mono text-[10px] text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-gold" />
                    <span>{evt.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-gold" />
                    <span>{evt.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={12} className="text-gold" />
                    <span>{language === 'pl' ? evt.seatsPl : evt.seats}</span>
                  </div>
                </div>
              </div>

              {/* Price block & button */}
              <div className="pt-8 mt-8 border-t border-neutral-900 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase leading-none">{language === 'pl' ? 'KOSZT UCZESTNICTWA' : 'SEAT TICKET'}</span>
                  <span className="text-gold font-mono text-base font-bold mt-1">{evt.price} ZŁ</span>
                </div>
                
                <button
                  id={`event_book_btn_${evt.id}`}
                  onClick={() => {
                    // Navigate to booking page and set a default note
                    setActivePage('reservation');
                  }}
                  className="px-4 py-2.5 bg-neutral-950 border border-neutral-800 hover:border-gold hover:text-gold transition-colors font-mono text-[9px] uppercase tracking-widest cursor-pointer"
                >
                  {language === 'pl' ? 'ZAREZERWUJ MIEJSCE' : 'RESERVE TICKET'}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
