import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patients')  // 👈 Esto debe coincidir con el nombre real de la tabla en PostgreSQL
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column({ type: 'date' })
  date_of_birth: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
