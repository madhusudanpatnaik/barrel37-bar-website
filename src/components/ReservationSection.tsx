import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Mail, Phone, User, CheckCircle, Info } from 'lucide-react';
import { Reservation, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ReservationSectionProps {
  language: Language;
}

export default function ReservationSection({ language }: ReservationSectionProps) {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<Omit<Reservation, 'confirmationCode'>>({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '18:30', // Default dinner time
    guests: 2,
    specialRequests: ''
  });

  const [loading, setLoading] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  // Default fine dining times
  const timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 2 : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.date) {
      return;
    }

    setLoading(true);

    // Simulate luxury confirmation process
    setTimeout(() => {
      const uniqueCode = `BRL-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedReservation({
        ...formData,
        confirmationCode: uniqueCode
      });
      setLoading(false);
    }, 1800);
  };

  const resetForm = () => {
    setConfirmedReservation(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: '',
      time: '18:30',
      guests: 2,
      specialRequests: ''
    });
  };

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title elements */}
        <div className="text-center flex flex-col items-center gap-4 mb-16 md:mb-20">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">{t.resPre}</span>
          <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-cream">
            {t.resTitle} <span className="italic font-light text-gold">{t.resTitleItalic}</span>
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
          <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-md leading-relaxed text-center">
            {t.resDesc}
          </p>
        </div>

        {/* Dynamic Display container */}
        <div className="border border-neutral-900 bg-[#090909] p-6 md:p-12 relative overflow-hidden">
          
          {loading && (
            <div className="absolute inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
              {/* Spinner */}
              <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin"></div>
              <span className="text-xs font-mono tracking-[0.3em] text-gold uppercase animate-pulse">
                {t.resTransmitting}
              </span>
            </div>
          )}

          {!confirmedReservation ? (
            /* Reservation Booking Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 1. Date */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476] flex items-center gap-1.5 label-icon">
                    <Calendar size={12} className="text-gold" /> {t.resLabelDate}
                  </label>
                  <input
                    id="res_input_date"
                    type="date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#030303] border border-neutral-900 px-4 py-3.5 text-sm text-cream font-sans focus:outline-none focus:border-gold transition-colors block rounded-none cursor-pointer"
                  />
                </div>

                {/* 2. Dining Time */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476] flex items-center gap-1.5 label-icon">
                    <Clock size={12} className="text-gold" /> {t.resLabelHour}
                  </label>
                  <select
                    id="res_input_time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#030303] border border-neutral-900 px-4 py-3.5 text-sm text-cream font-sans focus:outline-none focus:border-gold transition-colors block rounded-none cursor-pointer"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {slot} {slot.split(':')[0] < '15' ? (language === 'pl' ? 'Lunch' : 'Lunch') : (language === 'pl' ? 'Kolacja' : 'Dinner')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Guests Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476] flex items-center gap-1.5 label-icon">
                    <Users size={12} className="text-gold" /> {t.resLabelGuests}
                  </label>
                  <select
                    id="res_input_guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#030303] border border-neutral-900 px-4 py-3.5 text-sm text-cream font-sans focus:outline-none focus:border-gold transition-colors block rounded-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? t.resGuestsUnit : t.resGuestsUnitPlural}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476] flex items-center gap-1.5 label-icon">
                    <User size={12} className="text-gold" /> {t.resLabelName}
                  </label>
                  <input
                    id="res_input_fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder={language === 'pl' ? 'Np. Aleksander Kowalski' : 'E.g., Alexander Havel'}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#030303] border border-neutral-900 px-4 py-3.5 text-sm text-cream font-sans placeholder-neutral-700 focus:outline-none focus:border-gold transition-colors block rounded-none"
                  />
                </div>

                {/* 5. Contact Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476] flex items-center gap-1.5 label-icon">
                    <Mail size={12} className="text-gold" /> {t.resLabelEmail}
                  </label>
                  <input
                    id="res_input_email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@server.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#030303] border border-neutral-900 px-4 py-3.5 text-sm text-cream font-sans placeholder-neutral-700 focus:outline-none focus:border-gold transition-colors block rounded-none"
                  />
                </div>

                {/* 6. Phone Number */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476] flex items-center gap-1.5 label-icon">
                    <Phone size={12} className="text-gold" /> {t.resLabelPhone}
                  </label>
                  <input
                    id="res_input_phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder={language === 'pl' ? '+48 501 234 567' : '+420 123 456 789'}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#030303] border border-neutral-900 px-4 py-3.5 text-sm text-cream font-sans placeholder-neutral-700 focus:outline-none focus:border-gold transition-colors block rounded-none"
                  />
                </div>

              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476]">
                  {t.resLabelRequests}
                </label>
                <textarea
                  id="res_input_specialRequests"
                  name="specialRequests"
                  rows={3}
                  placeholder={t.resPlaceholderRequests}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full bg-[#030303] border border-neutral-900 px-4 py-3.5 text-xs text-cream font-sans placeholder-neutral-700 focus:outline-none focus:border-gold transition-colors block rounded-none resize-none"
                />
              </div>

              {/* Informative advice */}
              <div className="p-4 bg-neutral-950/50 border-l border-gold flex items-start gap-3">
                <Info size={14} className="text-gold shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
                  {t.resNotice}
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="res_submit_btn"
                  type="submit"
                  className="w-full py-5 bg-gold hover:bg-gold-dark text-black text-xs uppercase tracking-[0.3em] font-bold transition-all cursor-pointer rounded-none"
                >
                  {t.resBtnSubmit}
                </button>
              </div>

            </form>
          ) : (
            /* Reservation Success Receipt Output */
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="py-6 md:py-10 flex flex-col items-center text-center gap-6"
            >
              
              <motion.div 
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: [0.6, 1.1, 1], opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.15 }}
                className="w-16 h-16 rounded-full bg-neutral-950 border border-gold flex items-center justify-center text-gold shadow-lg shadow-gold/20"
              >
                <CheckCircle size={32} />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <span className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase">{t.resSuccessPre}</span>
                <h2 className="text-2xl md:text-4xl font-serif text-cream">{t.resSuccessTitle}</h2>
              </motion.div>

              <div className="h-[1px] bg-neutral-950 w-full my-4"></div>

              {/* Formal Receipt fields */}
              <div className="w-full max-w-md bg-neutral-950 border border-neutral-900 p-6 text-left space-y-4">
                
                {/* confirmation code highlight */}
                <div className="flex justify-between items-center pb-4 border-b border-neutral-900">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{t.resCode}</span>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ 
                      scale: [0.9, 1.05, 1],
                      opacity: 1,
                      boxShadow: [
                        "0 0 0px rgba(194,159,104,0)",
                        "0 0 15px rgba(194,159,104,0.3)",
                        "0 0 4px rgba(194,159,104,0.1)"
                      ]
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.45,
                      ease: "easeOut"
                    }}
                    className="bg-[#12100c] border border-gold/30 px-3 py-1.5 text-gold text-sm font-mono font-bold tracking-wider relative overflow-hidden"
                  >
                    {/* Subtle sliding light effect inside the code badge */}
                    <motion.div 
                      initial={{ left: '-100%' }}
                      animate={{ left: '100%' }}
                      transition={{ delay: 0.9, duration: 1.2, ease: "easeInOut" }}
                      className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                    />
                    {confirmedReservation.confirmationCode}
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-[9px] font-mono text-neutral-500 uppercase">{language === 'pl' ? 'Nazwisko Gościa' : 'Diner Name'}</p>
                    <p className="font-sans text-neutral-200 uppercase mt-1 font-semibold">{confirmedReservation.fullName}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-neutral-500 uppercase">{language === 'pl' ? 'Rozmiar Stolika' : 'Seating capacity'}</p>
                    <p className="font-sans text-neutral-200 mt-1">{confirmedReservation.guests} {confirmedReservation.guests === 1 ? t.resGuestsUnit : t.resGuestsUnitPlural}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-neutral-500 uppercase">{language === 'pl' ? 'Planowana Data' : 'Date Scheduled'}</p>
                    <p className="font-sans text-neutral-200 mt-1">{confirmedReservation.date}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-neutral-500 uppercase">{language === 'pl' ? 'Godzina Seansu' : 'Hour Seated'}</p>
                    <p className="font-sans text-neutral-200 mt-1">{confirmedReservation.time}</p>
                  </div>
                </div>

                {confirmedReservation.specialRequests && (
                  <div className="pt-3 border-t border-neutral-900">
                    <p className="text-[9px] font-mono text-neutral-500 uppercase">{t.resSpecialDirective}</p>
                    <p className="font-sans text-xs italic text-neutral-400 mt-1">"{confirmedReservation.specialRequests}"</p>
                  </div>
                )}
                
              </div>

              <div className="text-[10px] text-neutral-500 font-sans max-w-sm">
                {language === 'pl' 
                  ? `Cyfrowy bilet potwierdzający został wysłany na adres: ${confirmedReservation.email}. W sprawie modyfikacji lub anulowania rezerwacji, prosimy o kontakt pod numerem +48 22 555 01 28.` 
                  : `A digital confirmation pass has been dispatched to ${confirmedReservation.email}. For modification or early cancellation, dial +1 (212) 555-0128.`}
              </div>

              {/* Return shortcut */}
              <div className="pt-6 flex gap-4 w-full justify-center">
                <button
                  id="btn_book_another"
                  onClick={resetForm}
                  className="px-6 py-3 border border-neutral-800 text-xs text-neutral-300 uppercase tracking-wider hover:text-white cursor-pointer transition-colors"
                >
                  {t.resBackBtn}
                </button>
              </div>

            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
