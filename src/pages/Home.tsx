import { ChefHat } from 'lucide-react';
import { useLocation } from 'wouter';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop" 
            alt="Rustic Burger Background" 
            className="w-full h-full object-cover blur-sm opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">
          <span className="font-serif italic text-brand-yellow text-xl md:text-2xl mb-4 block">{t('hero.passion')}</span>
          <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tight uppercase mb-8">
            {t('hero.title.1')}<br/><span className="text-brand-yellow">{t('hero.title.2')}</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/70 text-lg md:text-xl font-light mb-10">
            {t('hero.desc')}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLocation('/ementa')}
            className="px-6 py-4 bg-brand-yellow text-black font-display text-2xl tracking-wider hover:bg-white hover:text-black transition-colors uppercase"
          >
            {t('hero.button')}
          </motion.button>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 relative overflow-hidden bg-brand-black">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
          <ChefHat className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <div>
                <span className="font-serif italic text-brand-yellow text-lg">{t('story.subtitle')}</span>
                <h2 className="font-display text-6xl md:text-8xl tracking-wide uppercase mt-2">{t('story.title.1')}<br/>{t('story.title.2')}</h2>
              </div>
              <div className="w-20 h-1 bg-brand-yellow"></div>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                {t('story.p1')}
              </p>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                {t('story.p2')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1574070054707-6338b29db463?q=80&w=800&auto=format&fit=crop" 
                  alt="Making burgers" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-yellow p-8 text-black hidden md:block rounded-2xl shadow-2xl">
                <p className="font-display text-4xl tracking-wider">{t('story.badge.amount')}</p>
                <p className="font-semibold uppercase tracking-widest text-sm">{t('story.badge.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-display text-6xl md:text-8xl tracking-wide uppercase mt-2">{t('gallery.title.1')} <span className="text-brand-yellow">{t('gallery.title.2')}</span></h2>
            <div className="w-20 h-1 bg-brand-yellow mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="aspect-square rounded-xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop" 
                  alt="Gallery image 1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
             </div>
             <div className="aspect-square rounded-xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1594212691516-745a7a8d5fcc?q=80&w=800&auto=format&fit=crop" 
                  alt="Gallery image 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
             </div>
             <div className="aspect-square rounded-xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1625860633266-9907f0bb05fd?q=80&w=800&auto=format&fit=crop" 
                  alt="Gallery image 3" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
             </div>
             <div className="aspect-square rounded-xl overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1553018804-d022b4676be3?q=80&w=800&auto=format&fit=crop" 
                  alt="Gallery image 4" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
