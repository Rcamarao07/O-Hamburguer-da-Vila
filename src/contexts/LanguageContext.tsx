import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.menu': 'Ementa',
    'nav.story': 'Nossa História',
    'nav.location': 'Localização',
    'nav.order': 'Encomendar',
    
    'hero.passion': 'Feito à mão com paixão',
    'hero.title.1': 'A Experiência',
    'hero.title.2': 'Rústica',
    'hero.desc': 'Hambúrgueres preparados com uma mistura secreta, cheddar derretido e o nosso molho especial da casa, servidos num pão brioche quente e tostado em manteiga. Bem-vindo à melhor hamburgueria da zona.',
    'hero.button': 'Ver Ementa',

    'story.subtitle': 'Desde 2020',
    'story.title.1': 'Feito para o',
    'story.title.2': 'Bairro',
    'story.p1': 'O Hamburguer da Vila começou com um objetivo simples: servir hambúrgueres honestos e verdadeiros. Picamos a nossa carne diariamente, usamos pães frescos de fermentação natural e selecionamos ingredientes locais de excelência.',
    'story.p2': 'Acreditamos no poder de uma boa refeição para ligar as pessoas. O ambiente rústico, o cheiro da carne na brasa e a boa música fazem parte de quem somos. É muito mais que um hambúrguer; é a nossa comunidade.',
    'story.badge.amount': '100%',
    'story.badge.text': 'Artesanal',

    'gallery.title.1': 'Nossa',
    'gallery.title.2': 'Galeria',

    'menu.subtitle': 'A Nossa Seleção',
    'menu.title.1': 'Clássicos ',
    'menu.title.2': 'da',
    'menu.title.3': ' Vila',
    
    'menu.item1.title': 'O Clássico da Vila',
    'menu.item1.desc': 'Duplo smash burger de fraldinha (160g), queijo prato derretido, cebola caramelizada, molho especial da casa e picles no pão brioche.',
    
    'menu.item2.title': 'Bacon Defumado',
    'menu.item2.desc': 'Mistura de angus 180g, provolone defumado, fatias de bacon artesanal super crocante, molho barbecue e cebola estaladiça no pão australiano.',
    
    'menu.item3.title': 'Veggie Rústico',
    'menu.item3.desc': 'Hambúrguer de grão de bico com cogumelos, queijo coalho grelhado, rúcula fresca, maionese de ervas e tomate confit no pão de brioche.',

    'footer.desc': 'A hamburgueria rústica mais autêntica de Mafra. Venha pela comida, fique pela energia.',
    'footer.where': 'Onde estamos',
    'footer.address.1': 'Av. Cidade de Leimen 14',
    'footer.address.2': '2640-470 Mafra',
    'footer.hours': 'Horários',
    'footer.days.1': 'Terça a Sábado',
    'footer.hours.1a': '12h - 15h',
    'footer.hours.1b': '19h - 22h',
    'footer.days.2': 'Feriados',
    'footer.hours.2': '12h - 15h',
    'footer.days.3': 'Descanso',
    'footer.hours.3': 'Domingo e Segunda',
    'footer.rights': 'O Hamburguer da Vila. Todos os direitos reservados.',
    'footer.passion': 'Feito com paixão'
  },
  en: {
    'nav.menu': 'Menu',
    'nav.story': 'Our Story',
    'nav.location': 'Location',
    'nav.order': 'Order Now',
    
    'hero.passion': 'Handcrafted with passion',
    'hero.title.1': 'The Rustic',
    'hero.title.2': 'Experience',
    'hero.desc': 'Burgers made with our secret blend, melted cheddar, and our special house sauce, served in a warm, butter-toasted brioche bun. Welcome to the best burger joint in the neighborhood.',
    'hero.button': 'View Menu',

    'story.subtitle': 'Since 2020',
    'story.title.1': 'Built for the',
    'story.title.2': 'Neighborhood',
    'story.p1': 'O Hamburguer da Vila started with a simple goal: to serve honest and real burgers. We grind our meat daily, use fresh sourdough buns, and select excellent local ingredients.',
    'story.p2': 'We believe in the power of a good meal to connect people. The rustic environment, the smell of grilled meat, and good music are part of who we are. It\'s more than a burger; it\'s our community.',
    'story.badge.amount': '100%',
    'story.badge.text': 'Artisanal',

    'gallery.title.1': 'Our',
    'gallery.title.2': 'Gallery',

    'menu.subtitle': 'Our Selection',
    'menu.title.1': 'Vila\'s',
    'menu.title.2': ' ',
    'menu.title.3': 'Classics',
    
    'menu.item1.title': 'The Classic Vila',
    'menu.item1.desc': 'Double smashed flank steak burger (160g), melted prato cheese, caramelized onions, house special sauce, and pickles in a brioche bun.',
    
    'menu.item2.title': 'Smoked Bacon',
    'menu.item2.desc': '180g Angus blend, smoked provolone, ultra-crispy artisan bacon slices, barbecue sauce, and crispy onion in an Australian bun.',
    
    'menu.item3.title': 'Rustic Veggie',
    'menu.item3.desc': 'Chickpea and mushroom burger, grilled halloumi cheese, fresh arugula, herb mayonnaise, and confit tomato in a brioche bun.',

    'footer.desc': 'The most authentic rustic burger joint in Mafra. Come for the food, stay for the vibes.',
    'footer.where': 'Find Us',
    'footer.address.1': 'Av. Cidade de Leimen 14',
    'footer.address.2': '2640-470 Mafra',
    'footer.hours': 'Hours',
    'footer.days.1': 'Tue - Sat',
    'footer.hours.1a': '12h - 15h',
    'footer.hours.1b': '19h - 22h',
    'footer.days.2': 'Holidays',
    'footer.hours.2': '12h - 15h',
    'footer.days.3': 'Closed',
    'footer.hours.3': 'Sunday and Monday',
    'footer.rights': 'O Hamburguer da Vila. All rights reserved.',
    'footer.passion': 'Crafted with passion'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
