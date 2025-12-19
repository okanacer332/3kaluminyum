"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('Header');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">3K</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">3K Aluminum</h1>
              <p className="text-[10px] md:text-xs text-gray-600">{t('subtitle')}</p>
            </div>
          </div>

          {/* Desktop Navigation (Orta Kısım) */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('home')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('services')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('about')}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t('gallery')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium hidden lg:block">
              {t('contact')}
            </button>
          </nav>

          {/* Sağ Taraf: Dil Seçimi + Hamburger */}
          <div className="flex items-center gap-2">
            
            {/* Dil Seçimi: Hem Mobil Hem Desktop için burada */}
            <div className="border-r border-gray-200 pr-2 mr-2 md:border-l md:border-r-0 md:pl-4 md:pr-0 md:mr-0 md:ml-4">
               <LanguageSwitcher isMobile={false} />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 px-2 border-t border-gray-200 bg-white shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                {t('services')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                {t('about')}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                {t('gallery')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left font-medium py-2 px-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {t('contact')}
              </button>
              
              {/* Dil seçimi buradan kaldırıldı çünkü artık yukarıda sabit */}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}