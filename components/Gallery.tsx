"use client";

import { useTranslations } from 'next-intl';
import { ImageWithFallback } from './figma/ImageWithFallback'; // Dosya yolu sende farklı olabilir

export function Gallery() {
  const t = useTranslations('Gallery');

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
              <ImageWithFallback
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                  {t('viewProject')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}