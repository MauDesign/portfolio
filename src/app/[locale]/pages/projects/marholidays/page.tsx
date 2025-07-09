import React from "react";
import Carousel from "@/ui/carousel/carousel";



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
    return(
        <div className="columns-2 mt-20 gap-5 w-full m-auto">
            <div className="column">
              <div className="carousel w-full">
                <Carousel items={myCarouselItems} />
              </div>
"  
                
            </div>
            <div className="column">
                <div className="card w-96 bg-base-100 shadow-xl mt-5 m-auto">
                    <h1 className="text-3xl">Mar Holidays Travel Network</h1>
                    <p></p>
                </div>
            </div>

        </div>
    )
}