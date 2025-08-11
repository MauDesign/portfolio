import {Locale} from 'next-intl';
import Projects from "@/app/ui/projects/projects";
import Skills from "@/app/ui/skills/skills";
import Contact from "@/app/ui/contact/contact";
import Header from "@/app/ui/header/header";
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
 params: { locale: Locale };
};


export default async function Home ({ params }: Props) {
  const { locale } = await params;
  
  setRequestLocale(locale);
  
  const t = await getTranslations('Home');

 
return (
   

    <div className="w-full">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Header/>
        <div className='max-w-3/4 m-auto'>
          <Projects />
        </div>
        <div className='w-full bg-gradient-to-r from-teal-200 to-teal-500'>
          <div className='max-w-3/4 m-auto'>
            <Skills />
          </div>
        </div>
        <Contact />
       
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       <p>{t('copy')} &copy; 2025 Mauricio Casado</p>
      </footer>
    </div>
  );
}
