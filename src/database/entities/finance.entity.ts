import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Stage } from './stage.entity';

@Entity({ name: 'finances' })
export class Finance {
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

  @ManyToOne(() => Stage, ({ sid }) => sid)
  stage!: Stage;
}
