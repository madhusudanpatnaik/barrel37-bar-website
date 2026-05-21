import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage, Language } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ReservationSection from './components/ReservationSection';
import AmbienceSection from './components/AmbienceSection';
import EventsSection from './components/EventsSection';
import FindUsSection from './components/FindUsSection';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [currentTime, setCurrentTime] = useState<string>('18:00:00');
  const [language, setLanguage] = useState<Language>('en');

  // Multi-page scrolls reset
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activePage]);

  // Kraków Kazimierz timezone ticking clock (Europe/Warsaw)
  useEffect(() => {
    const updateTime = () => {
      try {
        const targetTimeZone = 'Europe/Warsaw';
        const formattedTime = new Date().toLocaleTimeString('en-US', {
          timeZone: targetTimeZone,
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        setCurrentTime(formattedTime);
      } catch (e) {
        // Fallback offset calculations (Kraków is UTC+1 / UTC+2 DST in Europe)
        const d = new Date();
        const hour = (d.getUTCHours() + 2) % 24;
        const mins = d.getUTCMinutes().toString().padStart(2, '0');
        const secs = d.getUTCSeconds().toString().padStart(2, '0');
        setCurrentTime(`${hour.toString().padStart(2, '0')}:${mins}:${secs}`);
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black min-h-screen text-[#F4F0EA] flex flex-col font-sans select-none selection:bg-[#cbbba0] selection:text-black antialiased relative">
      
      {/* Decorative vertical outer grid lines for speakeasy Gola wireframe design */}
      <div className="absolute inset-y-0 left-4 md:left-8 w-px bg-neutral-950 pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-4 md:right-8 w-px bg-neutral-950 pointer-events-none z-10"></div>

      {/* Main Header Overlay */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        currentTime={currentTime} 
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Layout Area of Pages */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {activePage === 'home' && (
              <Hero 
                setActivePage={setActivePage} 
                language={language}
              />
            )}
            {activePage === 'menu' && (
              <MenuSection 
                language={language}
              />
            )}
            {activePage === 'ambience' && (
              <AmbienceSection 
                language={language}
              />
            )}
            {activePage === 'about' && (
              <AboutSection 
                language={language}
              />
            )}
            {activePage === 'events' && (
              <EventsSection 
                language={language}
                setActivePage={setActivePage}
              />
            )}
            {activePage === 'find-us' && (
              <FindUsSection 
                language={language}
              />
            )}
            {activePage === 'reservation' && (
              <ReservationSection 
                language={language}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer 
        setActivePage={setActivePage} 
        language={language}
      />

    </div>
  );
}
