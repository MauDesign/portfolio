import Projects from "@/ui/projects/projects";
import Skills from "@/ui/skills/skills";
import Contact from "@/ui/contact/contact";
import Header from "@/ui/header/header";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  // Leer traducciones desde el servidor
  const t = await getTranslations({ locale, namespace: 'HeaderHero' });
  const autor = t('autor');
  const description = t('frase');

  return {
    title: `${autor} | UX/UI Designer Portfolio`,
    description: description,
    openGraph: {
      title: `${autor} | UX/UI Designer Portfolio`,
      description: description,
      url: `https://www.mauriciocasado.com/${locale}`, // ¡Asegúrate de usar tu dominio real!
      siteName: `${autor} Portfolio`,
      images: [
        {
          url: '/img/MWU_MC.jpg', // Coloca una imagen llamada 'og-image.png' en tu carpeta /public (tamaño recomendado: 1200x630px)
          width: 1200,
          height: 630,
          alt: `Portafolio de ${autor}`,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${autor} | UX/UI Designer Portfolio`,
      description: description,
      images: ['/img/MWU_MC.jpg'], // La misma imagen para Twitter
    },
  };
}


export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations('Home');

  return (
    <div className="w-full">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Header />
        <div className='max-w-3/4 m-auto'>
          <Projects />
        </div>
        <div className='w-full bg-gradient-to-r from-teal-200 to-teal-500'>
          <div className='max-w-3/4 m-auto'>
            <Skills />
          </div>
        </div>
        <Contact locale={locale} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>All rigths reserved &copy; 2025 Mauricio Casado</p>
      </footer>
    </div>
  );
}
