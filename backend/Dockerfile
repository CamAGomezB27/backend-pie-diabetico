# Usa una imagen base de Node.js optimizada
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del backend
COPY . .

# Expone el puerto 3000 (NestJS)
EXPOSE 3000

# Comando para iniciar el backend
CMD ["npm", "run", "start"]
