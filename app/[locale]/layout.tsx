import type { Metadata } from "next"; // Metadata için tip tanımı
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollToTop } from '@/components/ScrollToTop';

// SEKME BAŞLIĞI VE SEO AYARLARI BURADA YAPILIR
export const metadata: Metadata = {
  title: "Mersin 3K Aluminyum",
  description: "Mersin'de Alüminyum Cephe, Cam Balkon ve PVC Sistemleri",
  icons: {
    icon: '/icon.svg', // Eğer favicon.ico yerine svg kullanıyorsan
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  // Next.js 15 için Promise tipi (Hata almamak için önemli)
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

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