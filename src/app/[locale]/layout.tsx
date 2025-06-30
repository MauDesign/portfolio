import { NextIntlClientProvider, hasLocale} from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import React from "react";
import Navbar from '@/ui/navbar/navbar';
import { Poiret_One, Montserrat_Alternates} from "next/font/google";
import "../globals.css";
import { setRequestLocale } from 'next-intl/server';


const poiretone = Poiret_One({
  subsets: ["latin"],
  variable: "--font-poiret-one-regular",
  weight: ["400"],
});

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400"],
});

export default async function RootLayout({
  children,
  params
  }: {
    children: React.ReactNode;
    params: Promise <{locale: string}>;
   }) 
{
  const {locale} = await params;
  if(!hasLocale(routing.locales, locale)){
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={`${poiretone.variable} ${montserrat.variable} antialiased relative`}>
        
        <NextIntlClientProvider>
           <div className='fixed w-full top-0 z-50'>
            <Navbar locale={locale} />
          </div>
        {children}
        </NextIntlClientProvider>        
      </body>
    </html>
  );

}




