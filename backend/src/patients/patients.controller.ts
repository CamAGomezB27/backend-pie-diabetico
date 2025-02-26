import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './entities/patient.entity';

@Controller('patients')  // 👈 Esto define la ruta /patients
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    console.log('🔍 GET /patients fue llamado');  // 👈 Agrega este log
    return this.patientsService.findAll();  // 👈 Llama al servicio
  }
}
