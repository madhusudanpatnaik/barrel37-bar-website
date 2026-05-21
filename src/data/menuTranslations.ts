import { MenuItem, Language } from '../types';

export interface LocalizedMenuItem {
  name: string;
  description: string;
  ingredients: string[];
  sensoryNotes?: string;
}

export const POLISH_MENU_ITEMS: Record<string, LocalizedMenuItem> = {
  'w-1': {
    name: 'Glenfiddich 18 Year',
    description: 'Miodowy dąb z rozgrzewającymi przyprawami, złożonością suszonych owoców i długim, gładkim finiszem.',
    ingredients: ['Słód Torfowany', 'Wypalane Beczki Dębowe', 'Woda Źródlana'],
    sensoryNotes: 'Nieskazitelna równowaga powoli starzonego miodu, wytrawnego cynamonu i dębowych podtonów sherry.'
  },
  'w-2': {
    name: 'The Macallan 12',
    description: 'Bogate suszone owoce, wanilia, imbir i przyprawy drzewne z wykończeniem z dębu sherry.',
    ingredients: ['Słód Jęczmienny', 'Dębowe Beczki po Sherry', 'Naturalne Drożdże'],
    sensoryNotes: 'Głęboka bursztynowa owocowość z towarzyszeniem prażonych orzechów laskowych i trwałego imbirowego akcentu.'
  },
  'w-3': {
    name: 'Hibiki Japanese Harmony',
    description: 'Miód, skórka pomarańczowa, biała czekolada i róża — kwiatowy, jedwabisty nalew.',
    ingredients: ['Mieszanka Słodów i Zbóż', 'Beczki z Dębu Mizunara', 'Źródlana Woda Yamazaki'],
    sensoryNotes: 'Zachwycający i delikatny aromat palisandru z luksusowym wykończeniem z mlecznej czekolady.'
  },
  'w-4': {
    name: 'Lagavulin 16',
    description: 'Gęsty dym torfowy, jod i ciemna czekolada nad potężnym, torfowym ciałem.',
    ingredients: ['Słód Torfowany Islay', 'Ponownie Napełniane Baryłki Dębowe', 'Woda z Wrzosowisk'],
    sensoryNotes: 'Ciężki dym torfowy, słona morska bryza bogata w jod, połączone ze słodkim dżemem karmelowym.'
  },
  'w-5': {
    name: 'Amrut Fusion',
    description: 'Tropikalne owoce, słód i odrobina dymu z indyjskiego jęczmienia torfowego.',
    ingredients: ['Indyjski Jęczmień Nietorfowany', 'Szkocki Jęczmień Torfowany', 'Himalajskie Spływy Lodowcowe'],
    sensoryNotes: 'Soczysty krem mango, świeże ziarno dębowe z zaskakującym, łagodnym dymkiem torfowym.'
  },
  'w-6': {
    name: 'Redbreast 12',
    description: 'Owoce z sadu, prażone drewno i rozgrzewające przyprawy — kwintesencja irlandzkiej whiskey.',
    ingredients: ['Słodowane i Niesłodowane Ziarno', 'Beczki po Bourbonie i Sherry', 'Woda Źródlana Midleton'],
    sensoryNotes: 'Pięknie okrągła, kremowa tekstura pot-still ukazująca pieczone jabłka i głęboki korzenny orzech włoski.'
  },
  'c-1': {
    name: 'The Prohibition Sour',
    description: 'Nasz pierwszy akt. Gładki, spieniony, z odpowiednią dawką cytrusów, aby obudzić Cię przed rozpoczęciem prawdziwego wieczoru.',
    ingredients: ['Mocny Bourbon', 'Świeży Sok z Cytryny', 'Ekologiczny Miód', 'Świeże Białko Jaja', 'Angostura Bitters'],
    sensoryNotes: 'Aksamitna, gęsta piana, po której następuje rześki, rozgrzewający miodowo-cytrynowy akcent.'
  },
  'c-2': {
    name: 'Smoky Old Fashioned',
    description: 'Wykwintna kompozycja torfowego Scotch, cukru demerara i ręcznie tłoczonych wiśniowych bittersów, wędzona cedrem przy stoliku.',
    ingredients: ['Torfowany Scotch', 'Starzone Żyto', 'Syrop Demerara', 'Wiśniowe Bittersy', 'Dym z Drewna Cedrowego'],
    sensoryNotes: 'Intensywny aromat ogniska cedrowego przechodzący w słodki, głęboki karmel i pikantną dziką wiśnię.'
  },
  'c-3': {
    name: 'The Peaky Mule',
    description: 'Mocna żytnia whiskey, domowe piwo imbirowe i obfita porcja korzennych bittersów.',
    ingredients: ['Żytnia Whiskey', 'Naturalny Warzony Imbir', 'Limonka', 'Mieszanka Bitterów Korzennych'],
    sensoryNotes: 'Szalenie musujące, naturalne imbirowe uderzenie złagodzone wytrawnym dębowym posmakiem żyta.'
  },
  'k-1': {
    name: 'The Temperate Old Fashioned',
    description: 'Destylowany bezalkoholowy ciemny destylat dębowy, wędzony karmel, skórka pomarańczowa i bezalkoholowe bittersy.',
    ingredients: ['Lyre’s American Malt (Bezalko)', 'Syrop Demerara', 'Aromatyczne Bittersy (0%)', 'Skórka Pomarańczy'],
    sensoryNotes: 'Głębokie dębowe nuty bez pieczenia alkoholu, z towarzyszeniem orzeźwiających olejków cytrusowych.'
  },
  'k-2': {
    name: 'Ginger Elixir',
    description: 'Macerowany korzeń imbiru, świeży lokalny miód, woda musująca i wyciskana na zimno limonka.',
    ingredients: ['Ekologiczny Korzeń Imbiru', 'Miód Wielokwiatowy', 'Woda Gazowana ze Źródła', 'Limonka'],
    sensoryNotes: 'Wyrazisty, oczyszczający ogień imbirowy załagodzony aksamitnym, słodkim tłem miodowym.'
  },
  'k-3': {
    name: 'Spiced Grove',
    description: 'Kompozycja Seedlip Spice 94, naturalna redukcja jabłkowa, goździki, anyż gwiazdkowaty i odrobina toniku.',
    ingredients: ['Seedlip Spice 94 (Destylat)', 'Sok z Czerwonych Jabłek', 'Napar z Goździków i Anyżu', 'Lekki Tonik'],
    sensoryNotes: 'Niewiarygodnie aromatyczne zimowe przyprawy korzenne złączone z wytrawnym, owocowym posmakiem.'
  }
};

export function getLocalizedItem(item: MenuItem, language: Language): MenuItem {
  if (language === 'en') return item;
  
  const localized = POLISH_MENU_ITEMS[item.id];
  if (!localized) return item;
  
  return {
    ...item,
    name: localized.name,
    description: localized.description,
    ingredients: localized.ingredients,
    sensoryNotes: localized.sensoryNotes || item.sensoryNotes
  };
}
