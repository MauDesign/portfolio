import {Locale, useTranslations} from 'next-intl';
import {use} from 'react';
import Projects from "@/ui/projects/projects";
import Skills from "@/ui/skills/skills";
import Contact from "@/ui/contact/contact";
import Header from "@/ui/header/header";
import { setRequestLocale } from 'next-intl/server';

type Props = {
 params:Promise<{ locale: Locale}>;
};


export default function Home ({params}: Props) {

  const {locale} = use(params);
  setRequestLocale(locale);
  
  const t= useTranslations('Home');

 
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
        <Contact locale={locale}/>
       
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       <p>All rigths reserved &copy; 2025 Mauricio Casado</p>
      </footer>
    </div>
  );
}
