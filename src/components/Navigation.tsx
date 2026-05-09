import { motion } from 'motion/react';
import { Menu as MenuIcon, ChefHat, Globe } from 'lucide-react';
import { useLocation, Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [location, setLocation] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
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
      <div className="w-full px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <motion.a 
            className="flex items-center gap-2 group cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-black">
              <ChefHat className="w-6 h-6" />
            </div>
            <span className="font-display text-2xl tracking-wider text-white group-hover:text-brand-yellow transition-colors mt-1">
              O Hamburguer da Vila
            </span>
          </motion.a>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
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
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black transition-all font-bold tracking-widest uppercase"
          >
            {t('nav.order')}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors ml-4"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs">{language === 'pt' ? 'EN' : 'PT'}</span>
          </motion.button>
        </div>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white hover:text-brand-yellow"
        >
          <MenuIcon className="w-8 h-8" />
        </motion.button>
      </div>
    </nav>
  );
}
