import React from "react";
import { useTranslations } from "next-intl";
import Carousel from "@/app/ui/carousel/carousel";



const myCarouselItems = [
  {
    id: "1",
    src: '/img/MHTN_MauricioCasado.jpg',
    alt: 'Imagen de slide 1',
    title: 'Primer Slide',
    description: 'Una descripción para el primer slide.',
    href: '/pagina-slide1',
  },
  {
    id: '2',
    src: '/img/slide2.jpg',
    alt: 'Imagen de slide 2',
    title: 'Segundo Slide',
    description: 'Más detalles sobre el segundo slide.',
    href: '/pagina-slide2',
  },
  {
    id: '3',
    src: '/img/slide3.jpg',
    alt: 'Imagen de slide 3',
    title: 'Tercer Slide',
    description: 'Información adicional.',
  },
];
export default function MHTN() {
const t = useTranslations("padelpals");
    
    return(
        <div className="flex flex-wrap w-full  max-h-vh pt-36 m-auto p-5">
            <div className="w-1/2 p-3">
              <div className="carousel w-full h-full">
                <Carousel items={myCarouselItems} />
              </div>
 
                
            </div>
            <div className="w-1/2 p-3 pt-0">
                <div className="card w-full bg-white shadow-xl mt-5 m-auto p-5 text-black ">
                    <h1 className="text-3xl font-bold">{t("title")}</h1>
                    <h3 className="text-xl mt-3 mb-3 font-bold">{t("subtitle")}</h3>
                    <p>{t("description")}</p>
                    <h3 className="text-xl mt-3 mb-3 font-bold">{t("subtitle2")}</h3>
                    <p>{t("description2")}</p>
                    <h3 className="text-xl mt-3 mb-3 font-bold">{t("subtitle3")}</h3>
                    <p>{t("description3")}</p>
                    <h3 className="text-xl mt-3 mb-3 font-bold">{t("subtitle4")}</h3>
                    <p>{t("description4")}</p>
                </div>
            </div>

        </div>
    )
}