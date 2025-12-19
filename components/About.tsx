"use client";

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';

export function About() {
  const t = useTranslations('About');

  // JSON dizisinden özellikleri çekiyoruz
  const features = ['feature1', 'feature2', 'feature3', 'feature4'] as const;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
                alt="About Us" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600 rounded-2xl -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('title')}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{t(`features.${feature}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}