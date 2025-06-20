'use client'
import React from "react";
import Cards from "@/ui/cards/cards";


const projectsList = [
  {
    id: "1",
    src: "/img/MHTN_MauricioCasado.jpg", // Imagen existente
    alt: "Marholidays Travel Network",
    title: "Marholidays Travel Network",
    description: "Diseño UX/UI para una plataforma de reserva de hoteles rxperiencias y tralados B2B.",
    href: "/projects/booker-hotelero", // Enlace de ejemplo
  },
  {
    id: "2",
    src: "/img/padelpals_MUC_MauricioCasado.jpg", // Nueva imagen de ejemplo 1
    alt: "Descripción del Proyecto Ejemplo 1",
    title: "Padelpals",
    description: "Aplicacion movil para administrar partidos depadel.",
    href: "/projects/ejemplo-1",
  },
  {
    id: "3",
    src: "/img/project-example-2.png", // Nueva imagen de ejemplo 2
    alt: "Descripción del Proyecto Ejemplo 2",
    title: "Plataforma Beta",
    description: "Interfaz web para la gestión de datos complejos.",
    href: "/projects/ejemplo-2",
  },
  {
    id: "4",
    src: "/img/project-example-3.svg", // Nueva imagen de ejemplo 3
    alt: "Otro Proyecto UX/UI",
    title: "Consultoría UX",
    description: "Mejora de la experiencia de usuario para cliente existente.",
    href: "/projects/otro-uxui",
  },
];



export default function Projects() {
  return (
    <div className="w-full mt-5 px-2 sm:px-4 md:px-6"> {/* Padding responsivo para el contenedor */}
      <h1 className="w-full text-5xl mb-8 text-center sm:text-left">Proyectos</h1>
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