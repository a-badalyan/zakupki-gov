import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Stage } from './stage.entity';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', nullable: true })
  kbk?: string;

  @Column({ type: 'text', nullable: true })
  paymentMonth?: string;

  @Column({ type: 'text' })
  paymentYear!: string;

  @Column({ type: 'text' })
  paymentSum!: string;

  @ManyToOne(() => Stage, (stage) => stage.sid)
  stage!: Stage;
}
