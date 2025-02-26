import { Module } from '@nestjs/common'; // ❌ Elimina 'Controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PatientsModule } from './patients/patients.module'; // ✅ Esto está bien

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '12345',
      database: process.env.DB_NAME || 'pie_diabetico',
      autoLoadEntities: true, 
      synchronize: false,
      logging: true, 
    }),
    PatientsModule, // ✅ Importado correctamente
  ],
  controllers: [AppController], // ✅ Está bien
})
export class AppModule {}
