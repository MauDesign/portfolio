import Image from "next/image";
import Navbar from "@/ui/navbar/navbar";
import { useTranslations } from "next-intl";
import { img } from "framer-motion/client";

export default function Header() {
const t = useTranslations("HeaderHero");
return( 
<div className="w-full bg-[url(/img/bg-home.png)] bg-cover bg-no-repeat bg-center mt-2rem">
   
    <div className="w-full flex">
        <div className="p-10 w-1/2 justify-center items-center flex flex-col">
            <h1 className="text-6xl font-Poiret_One">{t("title")} </h1>
            <h3 className="text-3xl font-vmonserrat"><span className="text-[#53f6c7]" >{t("autor")}</span></h3>
        </div>
        <div className="p-3 w-1/2" >
            <Image 
            src="/img/web_MC_MauricioCasado_2.png"
            width={840}
            height={600}
            alt="Fondo Mauricio Casado"
            className="transition/opacity duration-1500"
            />
        </div>
    </div>
    <div className="w-full bg-[#334B5F]">
              <div className="w-5/6 m-auto pt-5 pb-5 ">
                <h1 className="fonr-Poiret-One-Regular text-4xl text-center">{t("frase")}</h1>
                <h3 className="+font-Poiret_One text-center text-l text-[#53f6c7]">{t("f-autor")}</h3>
              </div>
    </div>
    <div className="w-5/6 m-auto"></div>
</div>
);
}
