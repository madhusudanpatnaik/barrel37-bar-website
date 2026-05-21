import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage, Language, MenuItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ReservationSection from './components/ReservationSection';
import AmbienceSection from './components/AmbienceSection';
import EventsSection from './components/EventsSection';
import FindUsSection from './components/FindUsSection';
import AdminPanel from './components/AdminPanel';
import { MENU_ITEMS } from './data/menu';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [currentTime, setCurrentTime] = useState<string>('18:00:00');
  const [language, setLanguage] = useState<Language>('en');

  // Menu items state with localStorage backup
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('barrel37_menu_items');
    if (saved) {
      try {
        setMenuItems(JSON.parse(saved));
      } catch (e) {
        setMenuItems(MENU_ITEMS);
      }
    } else {
      setMenuItems(MENU_ITEMS);
    }
  }, []);

  const handleAddMenuItem = (item: MenuItem) => {
    const updated = [item, ...menuItems];
    setMenuItems(updated);
    localStorage.setItem('barrel37_menu_items', JSON.stringify(updated));
  };

  const handleDeleteMenuItem = (id: string) => {
    const updated = menuItems.filter(item => item.id !== id);
    setMenuItems(updated);
    localStorage.setItem('barrel37_menu_items', JSON.stringify(updated));
  };

  const handleResetMenu = () => {
    setMenuItems(MENU_ITEMS);
    localStorage.removeItem('barrel37_menu_items');
  };

  // Multi-page scrolls reset
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activePage]);

  // Handle direct url navigation and redirect /admin to admin screen
  useEffect(() => {
    const checkAdminNavigation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      
      if (
        path === '/admin' || 
        path.endsWith('/admin') || 
        path.endsWith('/admin/') || 
        hash === '#/admin' || 
        hash === '#admin' || 
        search.includes('page=admin')
      ) {
        setActivePage('admin');
        
        // Silently redirect URL back to `/` so internal client-side navigation operates smoothly on refresh
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', '/');
        }
      }
    };

    // Run on initial mount
    checkAdminNavigation();

    // Catch forward/backward history and popstate triggers
    window.addEventListener('popstate', checkAdminNavigation);
    return () => {
      window.removeEventListener('popstate', checkAdminNavigation);
    };
  }, []);

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
                menuItems={menuItems}
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
            {activePage === 'admin' && (
              <AdminPanel
                language={language}
                menuItems={menuItems}
                onAddMenuItem={handleAddMenuItem}
                onDeleteMenuItem={handleDeleteMenuItem}
                onResetMenu={handleResetMenu}
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
