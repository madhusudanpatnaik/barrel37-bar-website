import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, User, Plus, Trash2, LogOut, CheckCircle, AlertCircle, Sparkles, Image, Eye, EyeOff } from 'lucide-react';
import { MenuItem, Language } from '../types';

interface AdminPanelProps {
  language: Language;
  menuItems: MenuItem[];
  onAddMenuItem: (item: MenuItem) => void;
  onDeleteMenuItem: (id: string) => void;
  onResetMenu: () => void;
}

// Predefined high-quality royalty-free beverage pictures for quick speakeasy testing
const PRESET_IMAGES = [
  {
    name: 'Aged Single Malt (Amber Glass)',
    url: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Smoked Cedar Old Fashioned',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Artisan Zesty Mule',
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Botanical Elixir (Zero Proof)',
    url: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600'
  }
];

export default function AdminPanel({
  language,
  menuItems,
  onAddMenuItem,
  onDeleteMenuItem,
  onResetMenu
}: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('barrel37_admin_auth') === 'true';
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Form states for adding items
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(45);
  const [category, setCategory] = useState<'whisky' | 'cocktail' | 'mocktail'>('whisky');
  const [ingredientsText, setIngredientsText] = useState('');
  const [calories, setCalories] = useState<string>('');
  const [sensoryNotes, setSensoryNotes] = useState('');
  const [isPopular, setIsPopular] = useState(false);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [selectedPresetImage, setSelectedPresetImage] = useState(PRESET_IMAGES[0].url);
  const [imageType, setImageType] = useState<'preset' | 'custom'>('preset');

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === 'admin' && password === 'barrel37') {
      setIsAuthenticated(true);
      localStorage.setItem('barrel37_admin_auth', 'true');
      setLoginError('');
      triggerNotification('success', language === 'pl' ? 'Pomyślnie zalogowano w krypcie!' : 'Successfully logged into the Crypt!');
    } else {
      setLoginError(
        language === 'pl' 
          ? 'Niewłaściwe poświadczenia. Spróbuj admin / barrel37' 
          : 'Invalid credentials. Enter admin / barrel37'
      );
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('barrel37_admin_auth');
    triggerNotification('success', language === 'pl' ? 'Wylogowano pomyślnie.' : 'Logged out securely.');
  };

  const triggerNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      triggerNotification('error', language === 'pl' ? 'Nazwa trunku jest wymagana' : 'Beverage name is required');
      return;
    }
    if (!description.trim()) {
      triggerNotification('error', language === 'pl' ? 'Opis jest wymagany' : 'Poetic narration path is required');
      return;
    }
    if (!price || price <= 0) {
      triggerNotification('error', language === 'pl' ? 'Podaj właściwy koszt' : 'Please provide a valid price');
      return;
    }

    const finalImage = imageType === 'preset' ? selectedPresetImage : customImageUrl.trim();
    const ingredientsArray = ingredientsText
      .split(',')
      .map(i => i.trim())
      .filter(i => i.length > 0);

    const newItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      description: description.trim(),
      price: Number(price),
      category,
      ingredients: ingredientsArray.length > 0 ? ingredientsArray : ['House Secret Formula'],
      calories: calories ? Number(calories) : undefined,
      sensoryNotes: sensoryNotes.trim() || undefined,
      isPopular,
      image: finalImage || undefined
    };

    onAddMenuItem(newItem);
    triggerNotification(
      'success', 
      language === 'pl' 
        ? `Trunek "${newItem.name}" został wpisany do karty!` 
        : `"${newItem.name}" added to the archives successfully!`
    );

    // Reset Form
    setName('');
    setDescription('');
    setPrice(45);
    setCategory('whisky');
    setIngredientsText('');
    setCalories('');
    setSensoryNotes('');
    setIsPopular(false);
    setCustomImageUrl('');
  };

  return (
    <section className="bg-black text-[#F4F0EA] min-h-screen py-16 md:py-24 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Banner with notifications */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 border shadow-2xl backdrop-blur-md rounded-none ${
                notification.type === 'success'
                  ? 'bg-neutral-950/90 border-gold text-gold shadow-gold/10'
                  : 'bg-neutral-950/90 border-red-500/50 text-red-400'
              }`}
            >
              {notification.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
              <span className="text-xs font-mono tracking-wider">{notification.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header Title */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold uppercase">
            {language === 'pl' ? 'KONTROLA PIWNICY' : 'CELLAR MANAGEMENT'}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-cream">
            {language === 'pl' ? 'Archiwum i Edycja Karty' : 'The Curator’s Ledger'}
          </h1>
          <div className="h-[1px] bg-neutral-900 w-24 my-1"></div>
        </div>

        {!isAuthenticated ? (
          /* ================= LOGIN DIALOG ================= */
          <div className="max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-950 border border-neutral-900 p-8 relative overflow-hidden"
            >
              {/* Subtle visual glow in matching theme */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              
              <div className="flex flex-col items-center text-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-1">
                  <Lock size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-serif text-cream uppercase tracking-wide">
                    {language === 'pl' ? 'Autoryzacja Krypty' : 'Operator Signature'}
                  </h2>
                  <p className="text-[11px] font-mono text-[#8C8476] uppercase tracking-widest mt-1">
                    {language === 'pl' ? 'Wymagane hasło dębowe' : 'Staff entry verification'}
                  </p>
                </div>
              </div>

              {loginError && (
                <div className="mb-6 p-3 bg-red-950/40 border border-red-900 text-red-400 text-xs font-medium flex items-center gap-2">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="cellar_user" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    {language === 'pl' ? 'Weryfikowany Operator' : 'Operator ID'}
                  </label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" />
                    <input
                      id="cellar_user"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin"
                      className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans transition-all placeholder:text-neutral-700"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cellar_pass" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    {language === 'pl' ? 'Hasło Dębowe' : 'Security Passcode'}
                  </label>
                  <div className="relative">
                    <input
                      id="cellar_pass"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-4 pr-10 py-3 bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans transition-all placeholder:text-neutral-700 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </div>

                <button
                  id="admin_signin_submit"
                  type="submit"
                  className="w-full py-4 bg-neutral-900 border border-neutral-800 hover:border-gold text-gold hover:bg-[#0c0c0c] text-[10px] font-mono uppercase tracking-[0.2em] font-bold cursor-pointer transition-all mt-4"
                >
                  {language === 'pl' ? 'Przekręć Klucz' : 'Verify Credentials'}
                </button>
              </form>

              {/* Informative credentials reminder so user is never locked out */}
              <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col gap-1 text-center">
                <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
                  {language === 'pl' ? 'Wersja demonstracyjna krypty' : 'Demostration Mode Credentials'}
                </span>
                <span className="text-[11px] font-mono text-gold/60 mt-0.5">
                  admin / barrel37
                </span>
              </div>

            </motion.div>
          </div>
        ) : (
          /* ================= DASHBOARD GATEWAY ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COMPONENT: ADD FLUID INTAKES FORM */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-neutral-950 border border-neutral-900 p-6 md:p-8 relative">
                
                <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-gold flex items-center gap-2">
                    <Plus size={16} /> {language === 'pl' ? 'Uzupełnij Kartę' : 'Introduce New Creation'}
                  </span>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-800 text-neutral-500 hover:text-red-400 hover:border-red-900/40 text-[9px] font-mono uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <LogOut size={11} /> {language === 'pl' ? 'Blokada' : 'Secure Exit'}
                  </button>
                </div>

                <form onSubmit={handleAddItem} className="space-y-5">
                  
                  {/* Name and category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                        {language === 'pl' ? 'Nazwa Trunku *' : 'Beverage Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Yamazaki 12 Year"
                        className="w-full bg-neutral-900 border border-neutral-850 p-3 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans placeholder:text-neutral-700"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                        {language === 'pl' ? 'Kategoria *' : 'Category *'}
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as any)}
                        className="w-full bg-neutral-900 border border-neutral-850 p-3 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans cursor-pointer"
                      >
                        <option value="whisky">{language === 'pl' ? 'Starzona Whisky' : 'Single Malt Scotch'}</option>
                        <option value="cocktail">{language === 'pl' ? 'Artisan Cocktail' : 'Artisan Cocktail'}</option>
                        <option value="mocktail">{language === 'pl' ? 'Bezalkoholowy Tonik' : 'Zero-Proof Temperance'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Price and calories */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                        {language === 'pl' ? 'Cena (zł) *' : 'Price (ZŁ) *'}
                      </label>
                      <input
                        type="number"
                        min="1"
                        required
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full bg-neutral-900 border border-neutral-850 p-3 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                        {language === 'pl' ? 'Kaloryczność (Opcjonalnie)' : 'Calories (KCAL - Optional)'}
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 110"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-850 p-3 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans placeholder:text-neutral-700"
                      />
                    </div>
                  </div>

                  {/* Description Poetic Narration */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                      {language === 'pl' ? 'Główny Opis Trunku *' : 'Main Narrative / Description *'}
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell the story of how this pour is matured or shaken..."
                      className="w-full bg-neutral-900 border border-neutral-850 p-3 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans resize-none placeholder:text-neutral-700"
                    />
                  </div>

                  {/* Components / Ingredients */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                      {language === 'pl' ? 'Główne Składniki (oddzielone przecinkami)' : 'Key Elements / Ingredients (comma separated)'}
                    </label>
                    <input
                      type="text"
                      value={ingredientsText}
                      onChange={(e) => setIngredientsText(e.target.value)}
                      placeholder="e.g. Mizunara Oak Cask, Highland Spring Water, Roasted Malt"
                      className="w-full bg-neutral-900 border border-neutral-850 p-3 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans placeholder:text-neutral-700"
                    />
                  </div>

                  {/* Sensory Profile Notes */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-neutral-400">
                      {language === 'pl' ? 'Profil Sensoryczny (Walor Smakowy)' : 'Sensory Profile (Flavor Profile Quote)'}
                    </label>
                    <textarea
                      rows={2}
                      value={sensoryNotes}
                      onChange={(e) => setSensoryNotes(e.target.value)}
                      placeholder="e.g. Bracing peat smoke with a deep, silky milk-chocolate finish."
                      className="w-full bg-neutral-900 border border-neutral-850 p-3 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-sans resize-none placeholder:text-neutral-700"
                    />
                  </div>

                  {/* PICTURE SECTION: CUSTOM PASTE OR MATCH CHOSEN PRESETS */}
                  <div className="space-y-3 pt-2 bg-neutral-950 p-4 border border-neutral-900">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-gold flex items-center gap-1.5">
                        <Image size={13} /> {language === 'pl' ? 'Wybór Zdjęcia' : 'Beverage Photography'}
                      </label>
                      <div className="flex gap-2 text-[9px] font-mono">
                        <button
                          type="button"
                          onClick={() => setImageType('preset')}
                          className={`px-2 py-1 border transition-all ${
                            imageType === 'preset' ? 'border-gold text-gold' : 'border-neutral-800 text-neutral-500'
                          }`}
                        >
                          {language === 'pl' ? 'Galeria' : 'Theme Library'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setImageType('custom')}
                          className={`px-2 py-1 border transition-all ${
                            imageType === 'custom' ? 'border-gold text-gold' : 'border-neutral-800 text-neutral-500'
                          }`}
                        >
                          {language === 'pl' ? 'Własny Link' : 'Custom URL'}
                        </button>
                      </div>
                    </div>

                    {imageType === 'preset' ? (
                      <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                        {PRESET_IMAGES.map((img) => (
                          <button
                            key={img.url}
                            type="button"
                            onClick={() => setSelectedPresetImage(img.url)}
                            className={`p-2 bg-neutral-900 border text-left flex items-center gap-2 transition-all relative overflow-hidden ${
                              selectedPresetImage === img.url ? 'border-gold text-gold bg-neutral-900/50' : 'border-neutral-850 text-neutral-400 hover:border-neutral-700'
                            }`}
                          >
                            <img src={img.url} alt={img.name} className="w-8 h-8 object-cover rounded-none shrink-0" referrerPolicy="no-referrer" />
                            <span className="truncate leading-none">{img.name}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <input
                          type="url"
                          value={customImageUrl}
                          onChange={(e) => setCustomImageUrl(e.target.value)}
                          placeholder="https://images.unsplash.com/... or another static image URL"
                          className="w-full bg-neutral-900 border border-neutral-850 p-2.5 focus:border-gold focus:outline-none text-xs text-[#F4F0EA] font-mono placeholder:text-neutral-700"
                        />
                        <p className="text-[9px] text-neutral-500 leading-relaxed font-sans mt-1">
                          {language === 'pl'
                            ? 'Wklej link bezpośredni do obrazu (np. z Unsplash, Imgur itp.)'
                            : 'Provide a direct link to any public image URL (JPEG/PNG/WebP).'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Highlight Checkbox */}
                  <div className="flex items-center gap-2.5 py-1">
                    <input
                      id="beer_popular_check"
                      type="checkbox"
                      checked={isPopular}
                      onChange={(e) => setIsPopular(e.target.checked)}
                      className="w-4 h-4 rounded-none bg-neutral-900 accent-gold border-neutral-800 text-gold focus:ring-0 focus:outline-none cursor-pointer"
                    />
                    <label htmlFor="beer_popular_check" className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476] cursor-pointer selection:bg-transparent">
                      {language === 'pl' ? 'Wyróżnij w karcie (Popularny Trunek)' : 'Highlight on grid (Popular recommendation)'}
                    </label>
                  </div>

                  <button
                    id="admin_add_beverage_btn"
                    type="submit"
                    className="w-full py-4 bg-neutral-900 border border-neutral-850 hover:border-gold hover:text-gold text-white hover:bg-[#0c0c0c] text-[11px] font-mono uppercase tracking-[0.2em] font-bold cursor-pointer transition-all mt-4"
                  >
                    {language === 'pl' ? 'Wpisz Trunek do Ledgeru' : 'Commit Creation to card'}
                  </button>

                </form>
              </div>

              {/* FACTORY ARCHIVE RESET UTILS */}
              <div className="bg-neutral-950 border border-neutral-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Troubleshooting</span>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {language === 'pl' ? 'Chcę zresetować kartę do ustawień fabrycznych.' : 'Reset archives back to original speakeasy menu.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(language === 'pl' ? 'Czy na pewno chcesz usunąć wszystkie zmiany?' : 'Are you sure you want to revert all custom changes?')) {
                      onResetMenu();
                      triggerNotification('success', language === 'pl' ? 'Załadowano oryginalną kartę.' : 'Restored original speakeasy menu!');
                    }
                  }}
                  className="px-5 py-2.5 border border-dashed border-neutral-800 hover:border-red-900 hover:text-red-400 text-[10px] font-mono uppercase tracking-widest cursor-pointer transition-colors"
                >
                  {language === 'pl' ? 'Resetuj Menu' : 'Restore Defaults'}
                </button>
              </div>

            </div>

            {/* RIGHT COMPONENT: LIVE PREVIEW & DELETE MANAGEMENT LIST */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* LIVE CARD PREVIEW SCREEN */}
              <div className="bg-neutral-950 border border-neutral-900 p-6 relative">
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gold mb-4 flex items-center gap-1.5 label-icon">
                  <Eye size={12} /> Live Render Preview
                </span>

                <div className="p-6 bg-[#090909] border border-gold/40 flex flex-col justify-between select-none relative h-80">
                  {isPopular && (
                    <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest uppercase text-gold bg-black/85 px-2.5 py-1 border border-[#cbbba0]/20 flex items-center gap-1">
                      <Sparkles size={10} className="fill-gold text-gold" /> Popular
                    </span>
                  )}
                  <div>
                    {((imageType === 'preset' && selectedPresetImage) || (imageType === 'custom' && customImageUrl)) && (
                      <div className="w-full h-24 mb-3 overflow-hidden border border-neutral-850 bg-neutral-950 relative">
                        <img 
                          src={imageType === 'preset' ? selectedPresetImage : customImageUrl} 
                          alt="Preview" 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // Suppress broken image icons elegantly
                            (e.target as any).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8C8476]">
                      {category === 'whisky' ? (language === 'pl' ? 'Starzona Whisky' : 'Single Malt Scotch') : category === 'cocktail' ? (language === 'pl' ? 'Butikowy Koktajl' : 'Artisan Cocktail') : (language === 'pl' ? 'Bezalkoholowy Tonik' : 'Zero-proof')}
                    </span>
                    
                    <div className="flex justify-between items-baseline gap-4 mt-2">
                      <h3 className="text-base font-serif tracking-tight leading-tight uppercase font-medium text-cream group-hover:text-gold transition-colors">
                        {name || (language === 'pl' ? 'Nazwa Trunku...' : 'Creation Name...')}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-neutral-800 mx-2"></div>
                      <span className="text-gold font-mono font-medium text-xs md:text-sm shrink-0">{price} ZŁ</span>
                    </div>

                    <p className="text-[11px] text-neutral-400 font-sans leading-relaxed mt-2 line-clamp-2">
                       {description || (language === 'pl' ? 'Tutaj pojawi się opis rzemieślniczy...' : 'The elegant description of your drink elements...')}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-neutral-900 flex items-center gap-1.5 text-[9px] font-mono text-[#8C8476] uppercase tracking-wider">
                    Palate Profile details
                  </div>
                </div>
              </div>

              {/* CURRENT ARCHIVES LIST WITH DELETE TRIGGER */}
              <div className="bg-neutral-950 border border-neutral-900 p-6 select-none">
                <div className="pb-3 border-b border-neutral-900 mb-4 flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C8476]">
                    {language === 'pl' ? 'Archiwum karty' : 'The Ledger Index'} ({menuItems.length} {language === 'pl' ? 'pozycji' : 'items'})
                  </span>
                </div>

                <div className="max-h-[380px] overflow-y-auto divide-y divide-neutral-900 pr-1 select-none">
                  {menuItems.map((item) => (
                    <div key={item.id} className="py-3 flex items-center justify-between gap-4 font-sans">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-10 h-10 object-cover border border-neutral-850 shrink-0" 
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-cream truncate leading-snug uppercase tracking-tight">{item.name}</p>
                          <p className="text-[10px] font-mono text-[#8C8476] capitalize mt-0.5">{item.category} · {item.price} ZŁ</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(language === 'pl' ? `Usunąć "${item.name}" z karty?` : `Are you sure you want to remove "${item.name}"?`)) {
                            onDeleteMenuItem(item.id);
                            triggerNotification('success', language === 'pl' ? 'Pozycja została usunięta.' : 'MenuItem removed successfully.');
                          }
                        }}
                        className="p-2 border border-neutral-900 hover:border-red-950 text-neutral-500 hover:text-red-400 cursor-pointer transition-colors shrink-0"
                        title={language === 'pl' ? 'Usuń pozycję' : 'Delete Item'}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
