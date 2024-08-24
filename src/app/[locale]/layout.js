import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { firaGo } from '../lib/fonts';

import "./globals.css";

import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Legacy of Catholic Missions",
  description: "Religious fragmentation and connectedness in Georgia in the 18th and 19th centuries",
};

export default async function LocaleLayout({ children, params: { locale } }) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${firaGo.variable} font-firaGo font-light bg-slate-50`}>
        <NextIntlClientProvider messages={messages}>
          <div className='flex flex-col min-h-screen'>
            <Header locale={locale} />
            <main className='max-w-7xl w-full mx-auto py-8 px-5'>
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
