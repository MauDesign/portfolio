'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

import React from 'react';
import Image from 'next/image';
import '@/app/globals.css';






export default function NavbarLinks() {
    const t = useTranslations("NavbarLinks");
    return (

        <div className="flex bg-gray-800 text-white p-4 colums-lg w-full rounded-md opacity-75 backdrop-blur-xs">
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
                    <ul className='inline-flex justify-between gap-2 pt-1'>
                        <li><Link href="{`/${locale}/`}">{t("home")}</Link></li>
                        <li><Link href="{`/${locale}/about`}">{t("about")}</Link></li>
                        <li><Link href="{`/${locale}/services`}">{t("services")}</Link></li>
                        <li><Link href="{`/${locale}/portfolio`}">{t("portfolio")}</Link></li>
                        <li><Link href="{`/${locale}/contact`}">{t("contact")}</Link></li>
                        <li><Link href="{`/${locale}/`}"></Link></li>
                    </ul>  
           
 
                </nav>
             </div>
        </div>
)
};


