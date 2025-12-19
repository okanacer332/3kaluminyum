import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
 
  // Gelen dil desteklenmiyorsa varsayılan dili ata
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    // DÜZELTME BURADA: ../../ yerine ../ yaptık
    messages: (await import(`../messages/${locale}.json`)).default
  };
});