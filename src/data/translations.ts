export type Language = 'en' | 'pl';

export interface TranslationDict {
  // Navigation
  home: string;
  menu: string;
  ambience: string;
  about: string;
  events: string;
  findUs: string;
  bookTable: string;
  skipContent: string;
  brandSub: string;

  // Hero Section
  heroPreTitle: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroDesc: string;
  btnMenu: string;
  btnBook: string;
  scrollDown: string;

  // Our Story
  storyPre: string;
  storyTitle: string;
  storyTitleItalic: string;
  storyDescP1: string;
  storyDescP2: string;
  statSpiritsVal: string;
  statSpiritsLbl: string;
  statFoundedVal: string;
  statFoundedLbl: string;
  statCocktailsVal: string;
  statCocktailsLbl: string;

  // The Cellar
  cellarPreTitle: string;
  cellarTitle: string;
  cellarDesc: string;
  catWhisky: string;
  catCocktails: string;
  catMocktails: string;

  // Find Your Drink (Whisky Matcher)
  matchPre: string;
  matchTitle: string;
  matchDesc: string;
  q1Title: string;
  q1Sub: string;
  q2Title: string;
  q2Sub: string;
  q3Title: string;
  q3Sub: string;
  stepPrefix: string;
  btnNext: string;
  btnPrev: string;
  btnRestart: string;
  matchResultTitle: string;
  matchResultDesc: string;
  matchResultEnjoy: string;

  // Ambience
  ambTitlePre: string;
  ambTitle: string;
  ambQuote: string;
  ambP1: string;
  ambP2: string;
  imgLabel1: string;
  imgLabel2: string;
  imgLabel3: string;
  imgLabel4: string;

  // Signature Creations
  sigPre: string;
  sigTitle: string;
  sigTitleItalic: string;
  sigItemNum1: string;
  sigItemCat1: string;
  sigItemName1: string;
  sigItemIngredients1: string;
  sigItemDesc1: string;
  sigItemName2: string;
  sigItemIngredients2: string;
  sigItemDesc2: string;
  sigItemName3: string;
  sigItemIngredients3: string;
  sigItemDesc3: string;

  // From Oak to Glass Journey
  journeyPre: string;
  journeyTitle: string;
  journeyTitleItalic: string;
  journeyDesc: string;

  // Find Us
  findTitle: string;
  findTitleItalic: string;
  findAddressLbl: string;
  findAddressVal: string;
  findHoursLbl: string;
  findHoursMonThu: string;
  findHoursFriSat: string;
  findHoursSunday: string;
  findReservationsLbl: string;
  findReservationsVal: string;
  findEmailLbl: string;
  findEmailVal: string;
  findMapCaption: string;

  // Events
  eventsPreValue: string;
  eventsTitle: string;
  eventsTitleItalic: string;
  eventsDesc: string;

  // Reservations Form
  resTitlePre: string;
  resTitle: string;
  resTitleItalic: string;
  resSubNotice: string;
  resLabelName: string;
  resNamePlaceholder: string;
  resLabelPhone: string;
  resPhonePlaceholder: string;
  resLabelEmail: string;
  resEmailPlaceholder: string;
  resLabelGuests: string;
  resGuestsPlaceholder: string;
  resLabelDate: string;
  resLabelHour: string;
  resHourPlaceholder: string;
  resLabelRequests: string;
  resRequestsPlaceholder: string;
  resRequiredNotice: string;
  resBtnSubmit: string;
  resOrCall: string;

  // Success screen
  resSuccessTitle: string;
  resSuccessSub: string;
  resSuccessCode: string;
  resSuccessName: string;
  resSuccessPhone: string;
  resSuccessGuests: string;
  resSuccessDate: string;
  resSuccessTime: string;
  resSuccessEmail: string;
  resSuccessNotice: string;
  btnBack: string;

  // Additional dynamic properties
  aboutPre: string;
  aboutTitle: string;
  aboutTitleItalic: string;
  location: string;
  openingHours: string;
  tastingPrice: string;
  sensoryProfile: string;
  resPre: string;
  resDesc: string;
  resTransmitting: string;
  resGuestsUnit: string;
  resGuestsUnitPlural: string;
  resPlaceholderRequests: string;
  resNotice: string;
  resSuccessPre: string;
  resCode: string;
  resSpecialDirective: string;
  resBackBtn: string;
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: {
    home: 'Home',
    menu: 'Menu',
    ambience: 'Ambience',
    about: 'About',
    events: 'Events',
    findUs: 'Find Us',
    bookTable: 'Reserve a Table',
    skipContent: 'Skip to content',
    brandSub: 'EXCLUSIVE SPIRITS. INTIMATE ATMOSPHERE.',

    heroPreTitle: 'Est. 2024 · Premium Whiskey Bar',
    heroTitle1: 'BARREL 37 BAR',
    heroTitle2: 'Where Every Pour',
    heroTitle3: 'Tells a Story',
    heroDesc: 'Hand-curated spirits, intimate atmosphere, and cocktails crafted with the discipline of a lost era.',
    btnMenu: 'Explore Menu',
    btnBook: 'Book a Table',
    scrollDown: 'Scroll',

    storyPre: 'Our Story',
    storyTitle: 'Aged in Tradition,',
    storyTitleItalic: 'Poured with Passion',
    storyDescP1: 'Barrel 37 was born from a single obsession — the belief that a good drink is an experience, not a transaction. Hidden behind an unassuming door, designed to feel like a discovery: warm torch light reflecting off brick walls, oil portraits of animals in elegant attire, and the gentle scent of oak in the air.',
    storyDescP2: 'Our collection spans over 200 single malts, blends and rare spirits from distilleries in Scotland, Japan, Ireland and India. Every cocktail on the menu is built on the same philosophy — restraint, precision, and the courage to let the spirit speak for itself.',
    statSpiritsVal: '200+',
    statSpiritsLbl: 'Spirits',
    statFoundedVal: '2024',
    statFoundedLbl: 'Founded',
    statCocktailsVal: '40+',
    statCocktailsLbl: 'Signature Cocktails',

    cellarPreTitle: 'The Cellar',
    cellarTitle: 'Crafted for Connoisseurs',
    cellarDesc: 'Every spirit chosen with obsessive care. Every cocktail — a small act of theatre.',
    catWhisky: 'Whisky',
    catCocktails: 'Cocktails',
    catMocktails: 'Non-Alcoholic',

    matchPre: 'Interactive',
    matchTitle: 'Find Your Drink',
    matchDesc: 'Three questions. One perfect match. Whisky chosen for you.',
    q1Title: 'What flavour do you prefer?',
    q1Sub: 'Choose one flavour profile',
    q2Title: 'What strength/character fits you best?',
    q2Sub: 'Select your preferred dynamic',
    q3Title: 'Which region speaks to you?',
    q3Sub: 'Select your desired provenance',
    stepPrefix: 'Step',
    btnNext: 'Next Plan →',
    btnPrev: '← Back',
    btnRestart: 'Start Over',
    matchResultTitle: 'Your Perfect Match',
    matchResultDesc: 'Based on your palate, we recommend trying our signature pour:',
    matchResultEnjoy: 'Speak to our bartender to have this poured neat or on a custom single cube of hand-carved ice.',

    ambTitlePre: 'Atmosphere',
    ambTitle: '"We don\'t just serve drinks — we serve an era."',
    ambQuote: 'Brick walls adorned with oil portraits of animals in elegant attire. Candles flickering on aged wood. The quiet hum of a gramophone in the corner. Barrel 37 was designed to feel like a secret — as if you stumbled upon somewhere better than anywhere you were looking for.',
    ambP1: 'The 1920s aren’t just an era — they’re an attitude. A stubbornness toward quality, craft and a little theatre. That’s exactly what we pour into every glass.',
    ambP2: 'Under shadows of copper and amber backlights, we host guests who appreciate slower times and pristine recipes.',
    imgLabel1: 'Bar interior with warm amber lighting',
    imgLabel2: 'Whiskey glass close up',
    imgLabel3: 'Candlelight ambience',
    imgLabel4: 'Speakeasy crowd in 1920s attire',

    sigPre: 'Signature Creations',
    sigTitle: 'The Barrel 37',
    sigTitleItalic: 'Canon',
    sigItemNum1: '01',
    sigItemCat1: 'Sygnatura Baru / House Signature',
    sigItemName1: 'The Prohibition Sour',
    sigItemIngredients1: 'Bourbon · Lemon · Honey · Egg White · Angostura',
    sigItemDesc1: 'Our opening act. Smooth, frothy, with just enough citrus to wake you up before the night really begins.',
    sigItemName2: 'Smoky Old Fashioned',
    sigItemIngredients2: 'Peated Scotch · Demerara · Cherry Bitters',
    sigItemDesc2: 'Rich, peaty wood-notes meet deep sugar sweetness and a complex double dash of macerated cherry spice.',
    sigItemName3: 'The Peaky Mule',
    sigItemIngredients3: 'Rye Whiskey · Ginger Beer · Spiced Bitters',
    sigItemDesc3: 'Spicy, dynamic and carbonated. Rye grain punch backed by robust root ginger warmth.',

    journeyPre: 'The Story',
    journeyTitle: 'From Oak',
    journeyTitleItalic: 'to Glass',
    journeyDesc: 'Every drop at Barrel 37 travels a long road. Here\'s how it gets to you.',

    findTitle: 'Find the',
    findTitleItalic: 'Door',
    findAddressLbl: 'Address',
    findAddressVal: 'ul. Dietla 37, Kazimierz, Kraków 31-070',
    findHoursLbl: 'Opening Hours',
    findHoursMonThu: 'Mon – Thu   18:00 – 01:00',
    findHoursFriSat: 'Fri – Sat      18:00 – 02:00',
    findHoursSunday: 'Sunday    19:00 – 00:00',
    findReservationsLbl: 'Reservations',
    findReservationsVal: '+48 12 345 67 89',
    findEmailLbl: 'E-mail',
    findEmailVal: 'hello@barrel37.pl',
    findMapCaption: 'Barrel 37 Bar, ul. Dietla 37, Kraków (Behind the black mahogany door)',

    eventsPreValue: 'Upcoming Events',
    eventsTitle: 'Events in the',
    eventsTitleItalic: 'Speakeasy',
    eventsDesc: 'Live music, tasting evenings and private events. Check back regularly for guest lists.',

    resTitlePre: 'Reservations',
    resTitle: 'Ready for',
    resTitleItalic: 'Barrel 37?',
    resSubNotice: 'Walk-ins welcome · Reservations recommended on weekends',
    resLabelName: 'Full Name *',
    resNamePlaceholder: 'E.g., John Smith',
    resLabelPhone: 'Phone *',
    resPhonePlaceholder: '+48 XXX XXX XXX',
    resLabelEmail: 'E-mail',
    resEmailPlaceholder: 'you@example.com',
    resLabelGuests: 'Number of Guests *',
    resGuestsPlaceholder: 'Choose capacity',
    resLabelDate: 'Date *',
    resLabelHour: 'Preferred Hour *',
    resHourPlaceholder: 'Select time slot',
    resLabelRequests: 'Special Requests',
    resRequestsPlaceholder: 'Anniversary, dietary preferences, seat selection...',
    resRequiredNotice: '* Required fields. We will confirm via phone or WhatsApp.',
    resBtnSubmit: 'Confirm Reservation',
    resOrCall: 'Or call us:',

    resSuccessTitle: 'Seating Secured',
    resSuccessSub: 'Your reservation is logistically locked. Walk down to Dietla 37 and look for the brass number 37 dial.',
    resSuccessCode: 'Booking Code',
    resSuccessName: 'Name',
    resSuccessPhone: 'Phone',
    resSuccessGuests: 'Guests',
    resSuccessDate: 'Date',
    resSuccessTime: 'Time',
    resSuccessEmail: 'Email',
    resSuccessNotice: 'Please note: we hold reservations for up to 15 minutes past scheduled hours. Elegant smart casual attire is highly appreciated.',
    btnBack: 'Reserve Again',

    // Additional dynamic properties
    aboutPre: 'Our Story',
    aboutTitle: 'Aged in Tradition,',
    aboutTitleItalic: 'Poured with Passion',
    location: 'Location',
    openingHours: 'Opening Hours',
    tastingPrice: 'Price per Tasting',
    sensoryProfile: 'Sensory Profile',
    resPre: 'Reservations',
    resDesc: 'Walk-ins welcome · Reservations recommended on weekends',
    resTransmitting: 'Securing seat...',
    resGuestsUnit: 'Guest',
    resGuestsUnitPlural: 'Guests',
    resPlaceholderRequests: 'Anniversary, dietary preferences, seat selection...',
    resNotice: 'Reservations are kept for 15 minutes. Smart casual dress code is appreciated.',
    resSuccessPre: 'Reservation Confirmed',
    resCode: 'Confirmation Code',
    resSpecialDirective: 'Special Directives',
    resBackBtn: 'Reserve Another Table'
  },
  pl: {
    home: 'Start',
    menu: 'Menu',
    ambience: 'Klimat',
    about: 'O nas',
    events: 'Wydarzenia',
    findUs: 'Gdzie Jesteśmy',
    bookTable: 'Zarezerwuj Stolik',
    skipContent: 'Przejdź do treści',
    brandSub: 'EKSKLUZYWNE TRUNKI. KAMERALNA ATMOSFERA.',

    heroPreTitle: 'Zał. 2024 · Ekskluzywny Bar Whiskey',
    heroTitle1: 'BARREL 37 BAR',
    heroTitle2: 'Gdzie Każda Porcja',
    heroTitle3: 'Pisze Historię',
    heroDesc: 'Ręcznie wyselekcjonowane trunki, intymna atmosfera i koktajle tworzone z dyscypliną minionej epoki.',
    btnMenu: 'Poznaj Menu',
    btnBook: 'Zarezerwuj',
    scrollDown: 'Przewiń',

    storyPre: 'O nas',
    storyTitle: 'Zakorzeniony w tradycji,',
    storyTitleItalic: 'Lany z pasją',
    storyDescP1: 'Barrel 37 zrodził się z jednej obsesji – przekonania, że dobry drink to doświadczenie, a nie transakcja. Ukryty za niepozornymi drzwiami, zaprojektowany tak, by dawać radość odkrywania: ciepłe światło pochodni odbijające się od ceglanych ścian, portrety zwierząt w eleganckich strojach i łagodny zapach dębu w powietrzu.',
    storyDescP2: 'Nasza kolekcja obejmuje ponad 200 whisky słodowych, mieszanych i rzadkich alkoholi z destylarni w Szkocji, Japonii, Irlandii i Indiach. Każdy koktajl w menu opiera się na tej samej filozofii – umiarze, precyzji i odwadze, by dać rzemiosłu przemówić samemu za siebie.',
    statSpiritsVal: '200+',
    statSpiritsLbl: 'Trunki',
    statFoundedVal: '2024',
    statFoundedLbl: 'Założone',
    statCocktailsVal: '40+',
    statCocktailsLbl: 'Kultowe Koktajle',

    cellarPreTitle: 'Wytworna Piwnica',
    cellarTitle: 'Tworzone dla Koneserów',
    cellarDesc: 'Każdy trunek wybrany z obsesyjną troską. Każdy koktajl – mały spektakl teatralny.',
    catWhisky: 'Whisky',
    catCocktails: 'Koktajle',
    catMocktails: 'Bezalkoholowe',

    matchPre: 'Interaktywny',
    matchTitle: 'Znajdź Swojego Drink',
    matchDesc: 'Trzy pytania. Jedno idealne dopasowanie. Whisky dobrana specjalnie dla Ciebie.',
    q1Title: 'Jaki profil smakowy preferujesz?',
    q1Sub: 'Wybierz jeden wiodący profil',
    q2Title: 'Jaka moc / charakter Ci dzisiaj odpowiada?',
    q2Sub: 'Wybierz dynamikę serwowania',
    q3Title: 'Który region świata najbardziej Cię ciekawi?',
    q3Sub: 'Wybierz pochodzenie whisky',
    stepPrefix: 'Krok',
    btnNext: 'Kolejny krok →',
    btnPrev: '← Wstecz',
    btnRestart: 'Zacznij od nowa',
    matchResultTitle: 'Twoja Idealna Pozycja',
    matchResultDesc: 'Na podstawie Twoich preferencji, rekomendujemy spróbować:',
    matchResultEnjoy: 'Poproś naszego barmana o nalanie tej pozycji na czysto lub na ręcznie ciosanej kostce lodu.',

    ambTitlePre: 'Atmosfera',
    ambTitle: '"Nie podajemy tylko drinków — podajemy pełną epokę."',
    ambQuote: 'Ceglane ściany zdobione portretami olejnymi zwierząt w wytwornych strojach. Świece migoczące na starym drewnie. Cichy szum gramofonu w kącie. Barrel 37 został zaprojektowany, aby sprawiać wrażenie sekretnej komnaty – jakbyś trafił do miejsca lepszego niż cokolwiek, czego szukałeś.',
    ambP1: 'Lata 20. to nie tylko czasy — to postawa. Upór w dążeniu do najwyższej jakości, dyscypliny rzemiosła i szczypty magii. Dokładnie to wlewamy do każdego kieliszka w barze.',
    ambP2: 'Pod intrygującym, miedziano-bursztynowym oświetleniem gościmy ludzi pragnących uciec od pospiechu i rozkoszować się bezbłędnymi recepturami.',
    imgLabel1: 'Wnętrze baru z ciepłym bursztynowym oświetleniem',
    imgLabel2: 'Szklanka whiskey z bliska',
    imgLabel3: 'Ciepłe oświetlenie świec',
    imgLabel4: 'Grupa speakeasy w strojach z lat 20.',

    sigPre: 'Dzieła Autorskie',
    sigTitle: 'Kanon Baru',
    sigTitleItalic: 'Barrel 37',
    sigItemNum1: '01',
    sigItemCat1: 'Sygnatura Baru / House Signature',
    sigItemName1: 'The Prohibition Sour',
    sigItemIngredients1: 'Bourbon · Cytryna · Miód · Białko Jaja · Angostura',
    sigItemDesc1: 'Nasz pierwszy akt. Gładki, spieniony, z odpowiednią dawką cytrusów, aby obudzić Cię przed rozpoczęciem prawdziwego wieczoru.',
    sigItemName2: 'Smoky Old Fashioned',
    sigItemIngredients2: 'Torfowy Scotch · Cukier Demerara · Wiśniowy Bitter',
    sigItemDesc2: 'Nuty bogatego, torfowego drewna spotykają głęboką słodycz i złożoną podwójną dawkę macerowanych wiśni.',
    sigItemName3: 'The Peaky Mule',
    sigItemIngredients3: 'Żytnia Whisky · Piwo Imbirowe · Korzenny Bitter',
    sigItemDesc3: 'Pikantny, dynamiczny i gazowany. Żytnie uderzenie wsparte intensywnym ciepłem imbiru.',

    journeyPre: 'Opowieść',
    journeyTitle: 'Od Dębu',
    journeyTitleItalic: 'do Szkła',
    journeyDesc: 'Każda kropla w Barrel 37 przebywa długą drogę. Oto proces jej narodzin w Twoim szkle.',

    findTitle: 'Znajdź',
    findTitleItalic: 'Drzwi',
    findAddressLbl: 'Adres',
    findAddressVal: 'ul. Dietla 37, Kazimierz, Kraków 31-070',
    findHoursLbl: 'Godziny Otwarcia',
    findHoursMonThu: 'Pon – Czw   18:00 – 01:00',
    findHoursFriSat: 'Pią – Sob      18:00 – 02:00',
    findHoursSunday: 'Niedziela    19:00 – 00:00',
    findReservationsLbl: 'Rezerwacje',
    findReservationsVal: '+48 12 345 67 89',
    findEmailLbl: 'E-mail',
    findEmailVal: 'hello@barrel37.pl',
    findMapCaption: 'Barrel 37 Bar, ul. Dietla 37, Kraków (Za ciężkimi, czarnymi drzwiami z mahoniu)',

    eventsPreValue: 'Najbliższe Wydarzenia',
    eventsTitle: 'Zdarzenia w',
    eventsTitleItalic: 'Speakeasy',
    eventsDesc: 'Muzyka na żywo, wieczory degustacyjne i zamknięte wydarzenia. Zaglądaj tu regularnie po wolne miejsca.',

    resTitlePre: 'Rezerwacja',
    resTitle: 'Czas na',
    resTitleItalic: 'Barrel 37?',
    resSubNotice: 'Goście bez rezerwacji mile widziani · W weekendy zalecana rezerwacja online',
    resLabelName: 'Imię i Nazwisko *',
    resNamePlaceholder: 'np. Jan Kowalski',
    resLabelPhone: 'Telefon *',
    resPhonePlaceholder: '+48 XXX XXX XXX',
    resLabelEmail: 'Adres E-mail',
    resEmailPlaceholder: 'ty@example.pl',
    resLabelGuests: 'Liczba Osób *',
    resGuestsPlaceholder: 'Wybierz liczbę',
    resLabelDate: 'Data *',
    resLabelHour: 'Preferowana Godzina *',
    resHourPlaceholder: 'Wybierz godzinę',
    resLabelRequests: 'Specjalne Życzenia',
    resRequestsPlaceholder: 'Urodziny, preferencje żywieniowe, wybór miejsca...',
    resRequiredNotice: '* Pola wymagane. Rezerwację potwierdzimy telefonicznie lub przez WhatsApp.',
    resBtnSubmit: 'Potwierdź Rezerwację',
    resOrCall: 'Lub zadzwoń bezpośrednio:',

    resSuccessTitle: 'Stolik Zarezerwowany',
    resSuccessSub: 'Twoje miejsce zostało pomyślnie zabezpieczone. Przyjdź na ulicę Dietla 37 i pociągnij za mosiężną rączkę z tarczą 37.',
    resSuccessCode: 'Kod Rezerwacji',
    resSuccessName: 'Nazwisko',
    resSuccessPhone: 'Telefon',
    resSuccessGuests: 'Liczba Osób',
    resSuccessDate: 'Data',
    resSuccessTime: 'Godzina',
    resSuccessEmail: 'Email',
    resSuccessNotice: 'Zasada: rezerwacje utrzymujemy przez maksymalnie 15 minut spóźnienia. Elegancki strój typu smart casual jest wysoce doceniany.',
    btnBack: 'Zarezerwuj Kolejny',

    // Additional dynamic properties
    aboutPre: 'Nasza historia',
    aboutTitle: 'Zakorzeniony w tradycji,',
    aboutTitleItalic: 'Lany z pasją',
    location: 'Lokalizacja',
    openingHours: 'Godziny Otwarcia',
    tastingPrice: 'Koszt degustacji',
    sensoryProfile: 'Profil sensoryczny',
    resPre: 'Rezerwacje',
    resDesc: 'Goście bez rezerwacji mile widziani · W weekendy zalecana rezerwacja online',
    resTransmitting: 'Zabezpieczanie miejsca...',
    resGuestsUnit: 'Osoba',
    resGuestsUnitPlural: 'Osob',
    resPlaceholderRequests: 'Urodziny, preferencje żywieniowe, wybór miejsca...',
    resNotice: 'Rezerwacje utrzymujemy przez 15 minut od zaplanowanej godziny. Strój smart casual mile widziany.',
    resSuccessPre: 'Potwierdzenie Rezerwacji',
    resCode: 'Kod Rezerwacji',
    resSpecialDirective: 'Specjalne Życzenia',
    resBackBtn: 'Zarezerwuj Kolejny Stolik'
  }
};
