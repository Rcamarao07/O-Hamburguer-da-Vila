import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, ChefHat, Globe } from 'lucide-react';
import { useLocation, Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [location, setLocation] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (path.startsWith('#')) {
      if (location !== '/') {
        setLocation('/');
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setLocation(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/5">
      <div className="w-full px-4 lg:px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <motion.a 
            className="flex items-center gap-2 lg:gap-3 group cursor-pointer z-50 relative"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-black shrink-0">
              <ChefHat className="w-6 h-6" />
            </div>
            <span className="font-display text-xl sm:text-2xl tracking-wider text-white group-hover:text-brand-yellow transition-colors mt-1 whitespace-nowrap">
              O Hamburguer da Vila
            </span>
          </motion.a>
        </Link>
        
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 font-medium text-sm uppercase tracking-widest shrink-0">
          <motion.a 
            href="/ementa" 
            onClick={(e) => handleNav(e, '/ementa')}
            className={`hover:text-brand-yellow transition-colors cursor-pointer ${location === '/ementa' ? 'text-brand-yellow' : ''}`}
            whileTap={{ scale: 0.9 }}
          >
            {t('nav.menu')}
          </motion.a>
          <motion.a 
            href="#story" 
            onClick={(e) => handleNav(e, '#story')}
            className="hover:text-brand-yellow transition-colors cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            {t('nav.story')}
          </motion.a>
          <motion.a 
            href="#location" 
            onClick={(e) => handleNav(e, '#location')}
            className="hover:text-brand-yellow transition-colors cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            {t('nav.location')}
          </motion.a>
          <motion.a 
            href="https://www.ubereats.com/pt/store/o-hamburguer-da-vila/yAH1DZZ5TK2i7eMYG4J42w?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="px-4 xl:px-6 py-2 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black transition-all font-bold tracking-widest uppercase inline-block whitespace-nowrap"
          >
            {t('nav.order')}
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors ml-2 xl:ml-4"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs">{language === 'pt' ? 'EN' : 'PT'}</span>
          </motion.button>
        </div>

        <div className="lg:hidden flex items-center gap-4 z-50 relative">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-white hover:text-brand-yellow transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs">{language === 'pt' ? 'EN' : 'PT'}</span>
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-brand-yellow focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col py-6 px-6 gap-6 font-display text-xl tracking-wide uppercase text-center">
              <a 
                href="/ementa" 
                onClick={(e) => handleNav(e, '/ementa')}
                className={`transition-colors py-2 ${location === '/ementa' ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}
              >
                {t('nav.menu')}
              </a>
              <a 
                href="#story" 
                onClick={(e) => handleNav(e, '#story')}
                className="text-white hover:text-brand-yellow transition-colors py-2"
              >
                {t('nav.story')}
              </a>
              <a 
                href="#location" 
                onClick={(e) => handleNav(e, '#location')}
                className="text-white hover:text-brand-yellow transition-colors py-2"
              >
                {t('nav.location')}
              </a>
              <a 
                href="https://www.ubereats.com/pt/store/o-hamburguer-da-vila/yAH1DZZ5TK2i7eMYG4J42w?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-auto px-8 py-3 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black transition-all font-bold mt-4"
              >
                {t('nav.order')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
