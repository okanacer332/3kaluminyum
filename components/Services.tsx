"use client";

import { useTranslations } from 'next-intl';
import { Home, Layers, Maximize2, Shield } from 'lucide-react';

export function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      title: t('items.facade.title'),
      description: t('items.facade.description')
    },
    {
      icon: <Maximize2 className="w-8 h-8 text-blue-600" />,
      title: t('items.balcony.title'),
      description: t('items.balcony.description')
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: t('items.aluminum.title'),
      description: t('items.aluminum.description')
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t('items.pvc.title'),
      description: t('items.pvc.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}