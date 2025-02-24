import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carga variables desde .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Usa la conexión de .env
      autoLoadEntities: true,
      synchronize: true, // ⚠️ SOLO en desarrollo, en producción usar migraciones
    }),
  ],
})
export class AppModule {}
