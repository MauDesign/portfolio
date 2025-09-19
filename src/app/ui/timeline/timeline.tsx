'use client'

import { useTranslations } from 'next-intl';

import React from "react";

export default function timeline() {
    const t = useTranslations("Timeline");

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        className="h-5 w-5"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    
                        />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic text- text-3xl text-primary">{t("fechas")}</time>
                    <div className="card bg-white p-5 text-black">
                        <h2 className="text-3xl font-bold">{t("title")}</h2>
                        <h4 className="text-2xl font-light text-primary">{t("company1")}</h4>
                        <p><span className="font-bold"> {t("responsabilities")}: </span> {t("r-description")}</p>
                        <p><span className="font-bold"> {t("archivments")}: </span> {t("a-description")}</p>
                    </div>
                </div>
                 <hr className="bg-[#0ac5b2]"/>
            </li>
           
            <li>
                 <hr className="bg-[#0ac5b2]"/>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        className="h-5 w-5"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-end mb-10 ml-5 ">
                    <time className="font-mono italic  text-3xl text-primary">{t("fechas1")}</time>
                    <div className="card bg-white p-5 text-black">
                        <h2 className="text-3xl font-bold">{t("title2")}</h2>
                        <h4 className="text-2xl font-light text-primary">{t("company2")}</h4>
                        <p><span className="font-bold"> {t("responsabilities")}: </span> {t("r-description2")}</p>
                        <p><span className="font-bold"> {t("archivments")}: </span> {t("a-description2")}</p>
                    </div>
                </div>
                 <hr className="bg-[#0ac5b2]"/>
            </li>
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic  text-3xl text-primary">{t("fechas3")}</time>
                    <div className="card bg-white p-5 text-black">
                        <h2 className="text-3xl font-bold">{t("title3")}</h2>
                        <h4 className="text-2xl font-light text-primary">{t("company3")}</h4>
                        <p><span className="font-bold"> {t("responsabilities")}: </span> {t("r-description3")}</p>
                        <p><span className="font-bold"> {t("archivments")}: </span> {t("a-description3")}</p>
                    </div>
                </div>
                
                 <hr className="bg-[#0ac5b2]"/>
            </li>
            <li>
                 <hr className="bg-[#0ac5b2]"/>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        className="h-5 w-5"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="timeline-end mb-10 ml-5 ">
                    <time className="font-mono italic text-3xl text-primary">{t("fechas4")}</time>
                    <div className="card bg-white p-5 text-black">
                        <h2 className="text-3xl font-bold">{t("title4")}</h2>
                        <h4 className="text-2xl font-light text-primary">{t("company4")}</h4>
                        <p><span className="font-bold"> {t("responsabilities")}: </span> {t("r-description4")}</p>
                        <p><span className="font-bold"> {t("archivments")}: </span> {t("a-description4")}</p>
                    </div>
                </div>
            </li>
        </ul>
    )
}