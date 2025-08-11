'use client'

import Image from "next/image";
import React from "react";


interface CarouselProps {
  items: CarouselItemData[];
}

interface CarouselItemData{
  id: string;
  src: string;
  alt: string;
  href?: string;
  title?: string;
  description?: string; 
}

function CarouselSlideContent({ src, alt }: Omit<CarouselItemData, 'id'>) {
  return (
    <Image
      className="w-full"
      src={src}
      alt={alt}
      width={500} // Placeholder, ajusta si tienes un ancho común o más representativo
      height={300} // Placeholder, se ajustará automáticamente por height: 'auto'
      style={{ width: '100%', height: 'auto' }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ejemplo de sizes, ajusta según tu diseño responsivo
      />
    );
  }
export default function Carousel({ items }: CarouselProps) {
    const totalItems = items.length;

  return (
    <div className="carousel w-full rounded-box"> 
            {items.map((item, index) => {
            const prevSlide = `#item${index === 0 ? totalItems : index}`;
            const nextSlide = `#item${index === totalItems - 1 ? 1 : index + 2}`;
          return(
            <div key={item.id} id={`item${index + 1}`} className="carousel-item relative w-full">
            <CarouselSlideContent {...item} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={prevSlide} className="btn btn-circle">❮</a>
              <a href={nextSlide} className="btn btn-circle">❯</a>
            </div>
          </div>
          );
        })}   
    </div>
    );
}
