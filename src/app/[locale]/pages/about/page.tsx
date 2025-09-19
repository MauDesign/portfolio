import React from "react";
import { useTranslations } from "next-intl";
import Timeline from "@/app/ui/timeline/timeline";
import Image from "next/image";

export default function About() {
const t = useTranslations("About");
    
    return(
    <div className="w-full">
        <div className=" w-3/4 m-auto card  mt-36">
            <div className="w-full flex flex-wrap">
                <div className="lg:w-1/3 sm:w-full">
                    <Image
                        src="/img/web_MC_MauricioCasado_2.png"
                        alt="Mauricio Casado"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="lg:w-2/3 sm:w-full">
                    <div className="card w-full bg-white shadow-xl mt-5 p-5 text-black ">
                        <h1 className="text-3xl font-bold">{t("title")}</h1>
                        <h3 className="text-xl mt-3 mb-3 font-bold">{t("subtitle")}</h3>
                        <p className="mb-3">{t("description")}</p>
                        <p>{t("description2")}</p>
                        <h3 className="text-xl mt-3 mb-3 font-bold">{t("subtitle2")}</h3>
                        <p>{t("description3")}</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap  mt-5 p-5 glass bg-transparent rounded-2xl">
                <h3 className="text-2xl mt-3 mb-3 font-bold">{t("subtitle3")}</h3>
                    <Timeline/>

            </div>
        </div>
    </div>
    )
}