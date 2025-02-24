# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY backend/package.json backend/package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del backend
COPY backend ./

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]
