"use client";

import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">3K</span>
              </div>
              <span className="text-xl font-bold">3K Aluminum</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              {t('description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView()} className="hover:text-blue-400 transition-colors">{t('links.home')}</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView()} className="hover:text-blue-400 transition-colors">{t('links.services')}</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView()} className="hover:text-blue-400 transition-colors">{t('links.about')}</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="hover:text-blue-400 transition-colors">{t('links.contact')}</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t('social')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 3K Aluminum. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}