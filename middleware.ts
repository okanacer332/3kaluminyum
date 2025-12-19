import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Sadece bu yolları eşleştir (api, _next, static dosyalar hariç)
  matcher: ['/', '/(tr|en)/:path*']
};