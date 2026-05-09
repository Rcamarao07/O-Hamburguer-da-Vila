import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Menu() {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-serif italic text-brand-yellow text-lg">{t('menu.subtitle')}</span>
          <h2 className="font-display text-6xl md:text-8xl tracking-wide uppercase mt-2">{t('menu.title.1')}<span className="text-brand-yellow">{t('menu.title.2')}</span>{t('menu.title.3')}</h2>
          <div className="w-20 h-1 bg-brand-yellow mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Burger Item 1 */}
          <div className="group border border-white/10 rounded-2xl overflow-hidden bg-brand-black hover:border-brand-yellow/50 transition-colors">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
                alt="O Clássico da Vila" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-display tracking-wider text-xl text-brand-yellow bg-black/80 px-3 py-1 rounded">€ 9,50</div>
            </div>
            <div className="p-6 flex flex-col h-auto">
              <h3 className="font-display text-3xl tracking-wide uppercase mb-2">{t('menu.item1.title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mt-2 text-balance flex-1">
                {t('menu.item1.desc')}
              </p>
            </div>
          </div>

          {/* Burger Item 2 */}
          <div className="group border border-white/10 rounded-2xl overflow-hidden bg-brand-black hover:border-brand-yellow/50 transition-colors">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=800&auto=format&fit=crop" 
                alt="Bacon Defumado" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <div className="absolute bottom-4 left-4 font-display tracking-wider text-xl text-brand-yellow bg-black/80 px-3 py-1 rounded">€ 11,00</div>
            </div>
            <div className="p-6 flex flex-col h-auto">
              <h3 className="font-display text-3xl tracking-wide uppercase mb-2">{t('menu.item2.title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mt-2 text-balance flex-1">
                {t('menu.item2.desc')}
              </p>
            </div>
          </div>

          {/* Burger Item 3 */}
          <div className="group border border-white/10 rounded-2xl overflow-hidden bg-brand-black hover:border-brand-yellow/50 transition-colors">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop" 
                alt="Veggie Rústico" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <div className="absolute bottom-4 left-4 font-display tracking-wider text-xl text-brand-yellow bg-black/80 px-3 py-1 rounded">€ 9,00</div>
            </div>
            <div className="p-6 flex flex-col h-auto">
              <h3 className="font-display text-3xl tracking-wide uppercase mb-2">{t('menu.item3.title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mt-2 text-balance flex-1">
                {t('menu.item3.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
