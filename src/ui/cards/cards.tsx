'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface CardProps {
  src: string;
  alt: string;
  href?: string;
  title?: string;
  description?: string;
}

export default function Cards({ src, alt, href, title, description }: CardProps) {
  const imageElement = (
    <Image
      // 'group-hover:blur-sm' para desenfocar la imagen cuando se hace hover sobre el 'group' (el Link o div padre)
      // 'object-cover' es útil si el contenedor tiene dimensiones fijas y quieres que la imagen cubra sin distorsionarse.
      // Para altura dinámica basada en la imagen, 'object-cover' no es tan relevante si la imagen ya tiene el aspect ratio correcto.
      className="block w-full h-auto rounded-md group-hover:blur-sm transition-all duration-300"
      src={src}
      alt={alt}
      // Usamos width/height para dar una pista a Next.js, pero style anula para responsividad.
      // Esto permite que la imagen determine su propia altura manteniendo el aspect ratio.
      width={500} // Placeholder, ajusta si tienes un ancho común o más representativo
      height={300} // Placeholder, se ajustará automáticamente por height: 'auto'
      style={{ width: '100%', height: 'auto' }}
      // Ajusta los sizes según tu layout de columnas.
      // Ejemplo: si tienes hasta 4 columnas: 100vw (1 col), 50vw (2 cols), 33vw (3 cols), 25vw (4 cols)
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
    />
  );

  // El 'group' aquí permite que el hover en este div afecte a la imagen (con group-hover:blur-sm)
  // 'overflow-hidden' es importante para que los bordes redondeados se apliquen a la imagen.
  const content = (
    <div className="w-full relative rounded-md group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {imageElement}
      {/* Superposición de texto que aparece en hover */}
      {(title || description) && (
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 
                     bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {title && <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{title}</h3>}
          {description && <p className="text-xs sm:text-sm text-gray-200 leading-tight">{description}</p>}
        </div>
      )}
      {/* Aquí podrías añadir superposiciones de texto o iconos si lo deseas */}
    </div>
  );

  if (href) {
    return (
      // El Link ahora solo envuelve, el estilo principal está en 'content'
      // 'transform hover:scale-105' se puede aplicar aquí o en 'content'
      <Link href={href} className="block w-full transform hover:scale-105 transition-transform duration-300">
        {content}
      </Link>
    );
  }

  // Si no hay href, simplemente renderiza el contenido.
  return content;
}