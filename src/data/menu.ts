import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- WHISKY ---
  {
    id: 'w-1',
    name: 'Glenfiddich 18 Year',
    description: 'Honeyed oak with warming spice, dried fruit complexity and a long, smooth finish.',
    price: 85,
    category: 'whisky',
    ingredients: ['Peated Malt', 'Charred Oak Cask', 'Spring Water'],
    calories: 120,
    sensoryNotes: 'A pristine balance of slow-aged honey, dry cinnamon spice, and sherry wood undertones.',
    isPopular: true
  },
  {
    id: 'w-2',
    name: 'The Macallan 12',
    description: 'Rich dried fruits, vanilla, ginger, and wood spice with a sherry oak finish.',
    price: 92,
    category: 'whisky',
    ingredients: ['Malted Barley', 'Sherry Seasoned Oak Casks', 'Natural Yeast'],
    calories: 110,
    sensoryNotes: 'Deep amber fruitiness accompanied by toasted hazelnuts and a lingering sweet ginger prickle.'
  },
  {
    id: 'w-3',
    name: 'Hibiki Japanese Harmony',
    description: 'Honey, orange peel, white chocolate, and rose — a floral, silken pour.',
    price: 110,
    category: 'whisky',
    ingredients: ['Malt & Grain Blends', 'Mizunara Oak Casks', 'Yamazaki Spring Water'],
    calories: 115,
    sensoryNotes: 'Enthralling and delicate rosewood aromatics with a luxurious milk-chocolate finish.',
    isPopular: true
  },
  {
    id: 'w-4',
    name: 'Lagavulin 16',
    description: 'Dense peat smoke, iodine, and dark chocolate over a powerful, peaty body.',
    price: 98,
    category: 'whisky',
    ingredients: ['Peated Islay Malt', 'Refill Oak Hogsheads', 'Moorland Water'],
    calories: 125,
    sensoryNotes: 'Heavily smoky, iodine-rich salty sea spray, with sweet caramel molasses providing an anchor.',
    isPopular: true
  },
  {
    id: 'w-5',
    name: 'Amrut Fusion',
    description: 'Tropical fruits, malt, and a hint of smoke from Indian peated barley.',
    price: 62,
    category: 'whisky',
    ingredients: ['Indian Unpeated Barley', 'Scottish Peated Barley', 'Himalayan Spring Runoff'],
    calories: 118,
    sensoryNotes: 'Vibrant, thick mango custard, heavy fresh grain, with a surprising gentle peat smoke trail.'
  },
  {
    id: 'w-6',
    name: 'Redbreast 12',
    description: 'Orchard fruits, toasted wood, and warming spices — the quintessential Irish whiskey.',
    price: 75,
    category: 'whisky',
    ingredients: ['Malted and Unmalted Barley', 'Bourbon and Sherry Casks', 'Midleton Spring Water'],
    calories: 112,
    sensoryNotes: 'Beautifully round, creamy pot-still texture showing sweet baked apples and a deep walnut spice.'
  },

  // --- COCKTAILS ---
  {
    id: 'c-1',
    name: 'The Prohibition Sour',
    description: 'Our opening act. Smooth, frothy, with just enough citrus to wake you up before the night really begins.',
    price: 48,
    category: 'cocktail',
    ingredients: ['High-Proof Bourbon', 'Fresh Lemon Juice', 'Organic Honey', 'Fresh Egg White', 'Angostura Bitters'],
    calories: 180,
    sensoryNotes: 'Decadent, velvety foam followed by a tart, bracing lemon honey snap.',
    isPopular: true
  },
  {
    id: 'c-2',
    name: 'Smoky Old Fashioned',
    description: 'Peated Scotch, Demerara sugar, and hand-pressed cherry bitters, smoked tableside in a cedar chamber.',
    price: 52,
    category: 'cocktail',
    ingredients: ['Peated Scotch', 'Aged Rye', 'Demerara Reduction', 'Cherry Bitters', 'Cedar Wood Smoke'],
    calories: 190,
    sensoryNotes: 'Intense woodfire nose opening up to deep charred sugar and a sharp cherry bite.'
  },
  {
    id: 'c-3',
    name: 'The Peaky Mule',
    description: 'Rye whiskey, house-brewed ginger beer, and a heavy dash of spiced bitters.',
    price: 46,
    category: 'cocktail',
    ingredients: ['Rye Whiskey', 'Macerated Ginger Brew', 'Lime Zest Oil', 'Spiced Bitters'],
    calories: 165,
    sensoryNotes: 'Strong, highly carbonated ginger root kick offset by dry rye grain pepperiness.'
  },

  // --- MOCKTAILS ---
  {
    id: 'k-1',
    name: 'The Temperate Old Fashioned',
    description: 'Distilled non-alcoholic dark wood spirit, smoked caramel, orange zest, and alcohol-free bitters.',
    price: 38,
    category: 'mocktail',
    ingredients: ['Lyre’s American Malt', 'Smoked Demerara Syrup', 'Angostura-free Bitters', 'Orange Peel'],
    calories: 60,
    sensoryNotes: 'Woody, warm and rich without the fire of alcohol, accompanied by crisp citrus oils.'
  },
  {
    id: 'k-2',
    name: 'Ginger Elixir',
    description: 'Macerated ginger root, fresh local honey, sparkling water, and cold-pressed lime.',
    price: 34,
    category: 'mocktail',
    ingredients: ['Organic Ginger Root', 'Wildflower Honey', 'Carbonated Spring Water', 'Key Lime'],
    calories: 85,
    sensoryNotes: 'A sharp, cleansing ginger burn soothed by sweet honey undertones.'
  },
  {
    id: 'k-3',
    name: 'Spiced Grove',
    description: 'Seedlip Spice 94 blend, organic apple reduction, cloves, star anise, and a splash of tonic.',
    price: 36,
    category: 'mocktail',
    ingredients: ['Seedlip Spice 94', 'Organic Red Apple Juice', 'Clove & Star Anise Infusion', 'Light Tonic'],
    calories: 70,
    sensoryNotes: 'Deeply aromatic winter spices paired with dry, woodsy bark elements.'
  }
];
