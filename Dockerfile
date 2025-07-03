# Etapa 1: Builder - Instala dependencias y construye la aplicación
FROM node:lts-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala pnpm, ya que los ficheros de contexto sugieren su uso
RUN npm install -g pnpm

# Copia los archivos de definición de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instala las dependencias del proyecto
RUN pnpm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Construye la aplicación para producción
RUN pnpm build

# Etapa 2: Runner - Ejecuta la aplicación construida
FROM node:lts-alpine AS runner
WORKDIR /app

# Establece el entorno a producción para optimizar Next.js
ENV NODE_ENV=production

# Copia los artefactos necesarios desde la etapa 'builder'
# Esto asume que tienes `output: 'standalone'` en tu next.config.mjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expone el puerto en el que corre la aplicación Next.js
EXPOSE 3000

# Comando para iniciar el servidor de Next.js en modo standalone
CMD ["node", "server.js"]