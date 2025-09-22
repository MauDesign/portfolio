import type { Metadata } from "next";
import { NextIntlClientProvider} from 'next-intl';
import React from "react";
import Navbar from '@/app/ui/navbar/navbar';
import { Poiret_One, Montserrat_Alternates} from "next/font/google";
import "../globals.css";
import {setRequestLocale } from 'next-intl/server';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';


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
   metadataBase: new URL('https://www.mauriciocasado.com'),
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
    'Diseño UX/UI',
    'agencia diseño web',
    'diseño ui',
    'diseñador ui',
    'diseño de experiencia de usuario',
    'elaboracion de paginas web',
    'diseñar pagina web online',
    'diseñadores freelance',
    'empresas creadoras de paginas web',
    'paginas web modernas',
    'presupuesto creacion pagina web',
    'desarrollo a la medida de software',
    'diseño grafico web',
    'diseño de paginas web ecommerce',
    'pagina web marketing digital',
    'marketing digital paginas web',
    'desarrollo de una pagina web',
    'diseño de páginas web profesionales',
    'diseño web creativo',
    'desarrollo software a la medida',
    'diseño web corporativo',
    'diseño web y desarrollo web',
    'programa a medida',
    'Inteligencia Artifical',
    'agencia digital creativa',
    'agencia digital diseño web',
    'branding pagina web',
    'desarrollo web y diseño web',
    'desarrollo web y multimedia',
    'desarrollo web y programacion',
    'diseñador experiencia de usuario',
    'consultoria en diseño',
    'consultoria en innovacion tecnologica',
    'consultoria en experiencia de usuario',
    'consultoria en desarrollo de software',
        'software development',
    'technological solutions',
    'custom software',
    'web applications',
    'mobile applications',
    'digital transformation',
    'digital marketing',
    'UX/UI Design',
    'web design agency',
    'ui design',
    'ui designer',
    'user experience design',
    'website development',
    'design website online',
    'freelance designers',
    'website creation companies',
    'modern websites',
    'website creation budget',
    'custom software development',
    'web graphic design',
    'ecommerce website design',
    'digital marketing website',
    'digital marketing websites',
    'website development',
    'professional web page design',
    'creative web design',
    'custom software development',
    'corporate web design',
    'web design and web development',
    'custom program',
    'Artificial Intelligence',
    'creative digital agency',
    'digital web design agency',
    'website branding',
    'web development and web design',
    'web and multimedia development',
    'web development and programming',
    'user experience designer',
    'design consulting',
    'technological innovation consulting',
    'user experience consulting',
    'software development consulting',
    'software development',
    'technological solutions',
    'Mauricio Casado'
  ],
  openGraph: {
    title: 'Mauricio Casado - Soluciones Tecnológicas a Medida',
    description: 'Fusionamos tecnología y creatividad para desarrollar software que transforma desafíos en oportunidades.',
    url: 'https://www.mauriciocasado.com', // Reemplaza con tu dominio final
    siteName: 'Mauricio Casado',
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
 

  return (
    <html lang={locale}>
      <body className={`${poiretone.variable} ${montserrat.variable} antialiased relative`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string}/>
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




