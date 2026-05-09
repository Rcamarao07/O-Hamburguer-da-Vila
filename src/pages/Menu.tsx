import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { menuData } from '../data/menu';

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

        <div className="space-y-16">
          {menuData.map((section, idx) => (
            <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <h3 className="font-display text-4xl text-brand-yellow tracking-wide uppercase mb-6 border-b border-white/10 pb-4">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display text-2xl tracking-wide uppercase flex items-center gap-3">
                        {item.title}
                        {item.popular && (
                          <span className="text-xs font-sans tracking-widest text-brand-black bg-brand-yellow px-2 py-0.5 rounded-full uppercase">
                            Popular
                          </span>
                        )}
                      </h4>
                      <span className="font-display text-xl text-brand-yellow shrink-0 ml-4">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-white/60 text-sm leading-relaxed font-light mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
