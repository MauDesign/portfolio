'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import React from 'react';
import Image from 'next/image';
import '@/app/globals.css';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = ({ locale }: {locale: string}) => {
    const t = useTranslations("NavbarLinks");

    return (
        <div className="flex top-0 bg-gray-800 text-white p-4 colums-lg rounded-md lg:opacity-75 sm:opacity-80 backdrop-blur-xs w-3/4 m-auto glass z-50">
            <div className='navbar'>
                <div className='navbar-start'>
                    <div className="dropdown opacity-100">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={'/'}>{t("home")}</Link></li>
                            <li><Link href={`/${locale}/about`}>{t("about")}</Link></li>
                            <li><Link href={`/${locale}/services`}>{t("services")}</Link></li>
                            <li><Link href={`/${locale}/portfolio`}>{t("portfolio")}</Link></li>
                            <li><Link href={`/${locale}/contact`}>{t("contact")}</Link></li>
                            <li>
                                <LanguageSwitcher locale={locale} />
                            </li>
                        </ul> 
                    </div>
                    <div className='w-35'>
                        <Image
                            src="/img/logo_blanco_MC.png"
                            alt='Logo Mauricio Casado'
                            width={150}
                            height={150}
                        />
                    </div>
                </div>

                <div className=' navbar-end w-full hidden lg:flex rounded-sm content-end'>            
                        <ul className='menu menu-horizontal px-1 text-lg'>
                            <li><Link href={'/'}>{t("home")}</Link></li>
                            <li><Link href={`/${locale}/about`}>{t("about")}</Link></li>
                            <li><Link href={`/${locale}/services`}>{t("services")}</Link></li>
                            <li><Link href={`/${locale}/portfolio`}>{t("portfolio")}</Link></li>
                            <li><Link href={`/${locale}/contact`}>{t("contact")}</Link></li>
                            <li>
                                <LanguageSwitcher locale={locale} />
                            </li>
                        </ul>  
                </div>
            </div>
        </div>
    )
};

export default Navbar;

