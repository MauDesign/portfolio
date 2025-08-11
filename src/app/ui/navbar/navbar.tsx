'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import '@/app/globals.css';






const Navbar = ({ locale }: {locale: string}) => {
    const t = useTranslations("NavbarLinks");
    const Pathname = usePathname();
    const Router = useRouter();


    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        const path = Pathname.split("/").slice(2).join("/");
        Router.push(`/${newLocale}${path}`);
    }
    return (

        <div className="flex top-0 bg-gray-800 text-white p-4 colums-lg rounded-md opacity-75 backdrop-blur-xs w-3/4 m-auto glass z-50">
            <div className='w-35'>
                <Image
                    src="/img/logo_blanco_MC.png"
                    alt='Logo Mauricio Casado'
                    width={150}
                    height={150}
                />
            </div>

            <div className='w-full rounded-sm content-end'>            
                <nav className='w-full flex justify-end gap-2'>
                    <ul className='inline-flex justify-between gap-2 pt-1 text-lg'>
                        <li><Link href={'/'}>{t("home")}</Link></li>
                        <li><Link href="{`/${locale}/about`}">{t("about")}</Link></li>
                        <li><Link href="{`/${locale}/services`}">{t("services")}</Link></li>
                        <li><Link href="{`/${locale}/portfolio`}">{t("portfolio")}</Link></li>
                        <li><Link href="{`/${locale}/contact`}">{t("contact")}</Link></li>
                        <li><Link href="{`/${locale}/`}"></Link></li>
                    </ul>  
                    <select 
                    value={locale} 
                    onChange={(handleLanguageChange) }
                    className='rounded-md hover:outline-none focus:outline-none bg-[#53f6c7] text-black ' >
                        <option value={"en"}>En</option>
                        <option value={"es"}>Es</option>
                    </select>
                </nav>
             </div>
        </div>
)
};

export default Navbar;

