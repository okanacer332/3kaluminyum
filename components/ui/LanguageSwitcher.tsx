"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// KULLANICININ GÖNDERDİĞİ TÜRK BAYRAĞI
const FlagTR = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 900 600" 
    className="w-5 h-auto mr-1.5 rounded-sm shadow-sm border border-gray-100 flex-shrink-0"
  >
    <path d="M0 0h900v600H0z" fill="#e30a17"/>
    <path d="m417.504 300 135.68-44.078-83.86 115.41V228.668l83.86 115.41Zm9.25 80.21c-35.7 56.415-104.387 82.446-168.508 63.86C194.125 425.488 150 366.762 150 300s44.125-125.488 108.246-144.07c64.121-18.586 132.809 7.445 168.508 63.86-33.223-36.97-85.797-49.63-132.203-31.84C248.14 205.737 217.5 250.296 217.5 300s30.64 94.262 77.05 112.05c46.407 17.79 98.981 5.13 132.204-31.84" fill="#fff"/>
  </svg>
);

// KULLANICININ GÖNDERDİĞİ İNGİLTERE BAYRAĞI
const FlagEN = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 800 480" 
    className="w-5 h-auto mr-1.5 rounded-sm shadow-sm border border-gray-100 flex-shrink-0"
  >
    <path fill="#FFF" d="m0,0h800v480H0"/>
    <path stroke="#C8102E" strokeWidth="96" d="m0,240h800M400,0v480"/>
  </svg>
);

export function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select defaultValue={locale} onValueChange={handleLanguageChange}>
      {/* w-[100px]: Genişliği sabitledik (Titremeyi önler).
         focus:ring-0: Mavi çerçeveyi kaldırdık (Opsiyonel, daha temiz görüntü için).
      */}
      <SelectTrigger 
  className={`h-9 border-none bg-transparent focus:ring-0 focus:ring-offset-0 px-2 shadow-none ${isMobile ? 'w-auto' : 'w-[100px]'}`}
>
        <SelectValue placeholder="Language">
          <div className="flex items-center">
            {locale === 'tr' ? <FlagTR /> : <FlagEN />}
            {/* Mobilde sadece bayrak görünsün, masaüstünde yazı da olsun */}
            <span className={`text-sm font-semibold text-gray-700 ${isMobile ? 'hidden' : 'block'}`}>
                {locale === 'tr' ? 'TR' : 'EN'}
            </span>
            {/* Mobilde yazı yerine kısaltma (Opsiyonel, yukarıda hidden yaptık zaten) */}
            <span className={`text-sm font-semibold text-gray-700 ${isMobile ? 'block ml-1' : 'hidden'}`}>
                {locale.toUpperCase()}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      
      <SelectContent align="end" className="min-w-[100px]">
        <SelectItem value="tr" className="font-medium pl-2 cursor-pointer">
          <div className="flex items-center">
            <FlagTR />
            <span className="text-sm">Türkçe</span>
          </div>
        </SelectItem>
        <SelectItem value="en" className="font-medium pl-2 cursor-pointer">
          <div className="flex items-center">
             <FlagEN />
            <span className="text-sm">English</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}