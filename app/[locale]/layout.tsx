import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollToTop } from '@/components/ScrollToTop';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  // DÜZELTME BURADA: params artık Promise tipinde tanımlanmalı
  params: Promise<{ locale: string }>;
}) {
  // Promise'i burada çözüyoruz (Next.js 15 Standardı)
  const { locale } = await params;

  // Gelen dil destekleniyor mu kontrol et
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Mesajları sunucudan al
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          
          {/* Aksiyon Butonları */}
          <WhatsAppButton />
          <ScrollToTop />
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}