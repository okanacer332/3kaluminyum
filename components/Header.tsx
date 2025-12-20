"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('Header');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sayfa kaydırıldığında header arka planını değiştirir
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Belirli bir bölüme yumuşak kaydırma yapar
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO VE BAŞLIK ALANI */}
          <div 
            className="flex items-center cursor-pointer group h-20" 
            onClick={() => scrollToSection('home')}
          >
            {/* Logo yüksekliği h-20 yapılarak Header'ı tam doldurması sağlandı */}
            <div className="relative h-20 w-auto overflow-hidden">
              <img 
                src="/logo.jpeg" 
                alt="Mersin 3K Alüminyum" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            
            {/* Title tamamen silindi, sadece logo kaldı */}
          </div>

          {/* MASAÜSTÜ NAVİGASYON */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              {t('services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base"
            >
              {t('gallery')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-sm hover:shadow-md hidden lg:block"
            >
              {t('contact')}
            </button>
          </nav>

          {/* SAĞ TARAF: DİL SEÇİCİ VE MOBİL MENÜ BUTONU */}
          <div className="flex items-center gap-1 md:gap-3">
            
            {/* Dil Seçimi (Hem Mobil Hem Masaüstü için doğrudan Header'da) */}
            <div className="border-r border-gray-200 pr-1 md:border-l md:border-r-0 md:pl-4 md:ml-2">
               <LanguageSwitcher isMobile={false} />
            </div>

            {/* Mobil Menü Butonu (Sadece Mobilde Görünür) */}
            <button
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menüyü Aç/Kapat"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBİL NAVİGASYON ÇEKMECESİ */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 px-4 border-t border-gray-100 bg-white shadow-xl rounded-b-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-800 hover:text-blue-600 transition-colors text-left font-semibold py-2 text-lg border-b border-gray-50"
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-800 hover:text-blue-600 transition-colors text-left font-semibold py-2 text-lg border-b border-gray-50"
              >
                {t('services')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-blue-600 transition-colors text-left font-semibold py-2 text-lg border-b border-gray-50"
              >
                {t('about')}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-800 hover:text-blue-600 transition-colors text-left font-semibold py-2 text-lg border-b border-gray-50"
              >
                {t('gallery')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 text-center font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md transition-transform active:scale-95"
              >
                {t('contact')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}