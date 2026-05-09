import { MapPin, Instagram, Facebook, Clock, Phone, ChefHat } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="location" className="border-t border-white/10 bg-brand-dark">
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-black">
                <ChefHat className="w-5 h-5" />
              </div>
              <span className="font-display text-xl tracking-wider text-white mt-1">
                O Hamburguer da Vila
              </span>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/ohamburguerdavila/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl tracking-wide uppercase mb-6">{t('footer.where')}</h4>
            <ul className="space-y-4 text-white/70 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <span>{t('footer.address.1')}<br/>{t('footer.address.2')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>+351 900 000 000</span>
              </li>
            </ul>
            {/* Map Section */}
            <div className="w-full h-40 md:h-48 relative rounded-xl overflow-hidden mt-8 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.554034874457!2d-9.332304923485721!3d38.93665324845564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed1b71ccbe3e5%3A0xe541fb0023a854d9!2sAv.%20Cidade%20de%20Leimen%2014%2C%202640-470%20Mafra%2C%20Portugal!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
                title="Restaurant Location Map"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none bg-brand-yellow/10 mix-blend-color"></div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl tracking-wide uppercase mb-6">{t('footer.hours')}</h4>
            <ul className="space-y-4 text-white/70 text-sm font-light">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-1 uppercase tracking-wider">{t('footer.days.1')}</strong>
                  <span className="block mb-1">{t('footer.hours.1a')}</span>
                  <span className="block">{t('footer.hours.1b')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Clock className="w-5 h-5 text-brand-yellow shrink-0 opacity-0" />
                <div>
                  <strong className="block text-white mb-1 uppercase tracking-wider">{t('footer.days.2')}</strong>
                  <span className="block">{t('footer.hours.2')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Clock className="w-5 h-5 text-brand-yellow shrink-0 opacity-0" />
                <div>
                  <strong className="block text-white mb-1 uppercase tracking-wider">{t('footer.days.3')}</strong>
                  <span className="block">{t('footer.hours.3')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="mt-2 md:mt-0">{t('footer.passion')}</p>
        </div>
      </div>
      </div>
    </footer>
  );
}
