'use client'
import Cards from "@/ui/cards/cards";
import { useTranslations } from 'next-intl';

import React from "react";

interface Project {
    id: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    href: string;
}

interface Props {
    locale: string;
}



const Projects = ({ locale }: Props) =>{
    const t = useTranslations("Projects");
    const tp = useTranslations("ProjectsList");
    

    const projectsList: Project[] = [
      {
          id: "1",
          src: "/img/MHTN_MauricioCasado.jpg", // Imagen existente
          alt: tp("alt1"),
          title: tp("tp1"),
          description: tp("descpro1"),
          href: "/pages/projects/marholidays", // Enlace de ejemplo
        },
        {
          id: "2",
          src: "/img/padelpals_MUC_MauricioCasado.jpg", // Nueva imagen de ejemplo 1
          alt: "Descripción del Proyecto Ejemplo 1",
          title: tp("tp2"),
          description: tp("descpro2"),
          href: "/projects/ejemplo-2",
        },
        {
          id: "3",
          src: "/img/MWU_MC.jpg", // Nueva imagen de ejemplo 3
          alt: tp("alt3"),
          title: tp("tp3"),
          description: tp("descpro3"),
          href: "/projects/otro-uxui",
        },
        {
          id: "4",
          src: "/img/ANDANAC-Mauriciocasado-437x570.jpg", // Nueva imagen de ejemplo 3
          alt: tp("alt4"),
          title: tp("tp4"),
          description: tp("descpro4"),
          href: "/projects/otro-uxui",
        }, 
        {
          id: "5",
          src: "/img/infografias_MC.jpg", // Nueva imagen de ejemplo 3
          alt: tp("alt5"),
          title: tp("tp5"),
          description: tp("descpro5"),
          href: "/projects/otro-uxui",
        }, 
         {
          id: "6",
          src: "/img/Aquadrada_MC.jpg", // Nueva imagen de ejemplo 3
          alt: tp("alt6"),
          title: tp("tp6"),
          description: tp("descpro6"),
          href: "/projects/otro-uxui",
        }, 
   
    ]



  return (
    <div className="w-full mt-5 px-2 sm:px-4 md:px-6"> {/* Padding responsivo para el contenedor */}
      <h1 className="w-full text-5xl mb-8 text-center sm:text-left"> {t("titlep")} </h1>
      {/* Contenedor Masonry: se aplicarán estilos de columna mediante CSS */}
      <div
        className="masonry-container"
        // Las propiedades de columna (column-count, column-gap) se definirán en CSS global o <style jsx>.
        // El gap entre items verticalmente se maneja con margen en el masonry-item.
      >
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="masonry-item mb-6" // mb-6 es el gap vertical entre items
            // 'break-inside: avoid-column;' se aplicará a esta clase en CSS.
          >
            <Cards
              src={project.src}
              alt={project.alt}
              href={project.href}
              title={project.title}
              description={project.description} />
          </div>
        ))}
      </div>
      {/* Estilos JSX para Masonry con CSS Columns. 
          Estos estilos se pueden mover a un archivo CSS global (globals.css) si se prefiere. */}
      <style jsx global>{`
        .masonry-container {
          column-gap: 1.5rem; /* Corresponde a Tailwind 'gap-6' */
          /* Por defecto, una columna para móviles pequeños */
          column-count: 1;
        }
        .masonry-item {
          break-inside: avoid-column; /* Evita que las tarjetas se partan entre columnas */
          /* El margen inferior ya está aplicado con Tailwind 'mb-6' en el div del item */
        }

        /* Puntos de quiebre para el número de columnas */
        @media (min-width: 640px) { /* sm */
          .masonry-container { column-count: 2; }
        }
        @media (min-width: 1024px) { /* lg */
          .masonry-container { column-count: 3; }
        }
        @media (min-width: 1280px) { /* xl */
          .masonry-container { column-count: 4; }
        }
      `}</style>
    </div>
    );
}
export default Projects;