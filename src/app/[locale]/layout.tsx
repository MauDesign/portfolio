import type { Metadata } from "next";
import { NextIntlClientProvider} from 'next-intl';
import React from "react";
import Navbar from '@/app/ui/navbar/navbar';
import { Poiret_One, Montserrat_Alternates} from "next/font/google";
import "../globals.css";
import { getMessages, setRequestLocale } from 'next-intl/server';


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

export const metadata: Metadata = {
  title: "Mauricio Casado - Diseño UX y Consultoria",
  description: "Ayudo a crecer tu negocio desde la creacion de experiencias tecnologicas de alto impacto y desarrollos personalizados.",
  keywords: [
    'desarrollo de software', 
    'soluciones tecnológicas', 
    'software a la medida', 
    'aplicaciones web', 
    'aplicaciones móviles', 
    'transformación digital', 
    'marketing digital',
    'Mauricio Casado'
  ],
  openGraph: {
    title: 'Mauricio Casado - Soluciones Tecnológicas a Medida',
    description: 'Fusionamos tecnología y creatividad para desarrollar software que transforma desafíos en oportunidades.',
    url: 'https://www.mauriciocasado.com', // Reemplaza con tu dominio final
    siteName: 'Idea.ly',
    images: [
      {
        url: '/img/UX-UIdesign.png', // URL absoluta de tu imagen
        width: 600,
        height: 300,
        alt: 'Diseño UX y UI',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

type Props = {
  children: React.ReactNode,
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

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




