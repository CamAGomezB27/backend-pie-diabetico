import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

async function bootstrap() {
  console.log('🚀 Iniciando el servidor...');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // Obtener la conexión a la base de datos
  const dataSource = app.get(DataSource);

  // Prueba de conexión: Obtener pacientes
  const patients = await dataSource.query('SELECT * FROM patients');
  console.log('📋 Pacientes en la base de datos:', patients);

  console.log(`✅ Servidor corriendo en http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
