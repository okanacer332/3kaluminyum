import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css"; // CSS yoluna dikkat et, bir üst klasörde kaldı

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Params'ı await etmemiz gerekiyor (Next.js 15+ kuralı)
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}