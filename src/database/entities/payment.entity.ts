import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contract } from './contract.entity';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  kbk: string;

  @Column({ type: 'text', nullable: false })
  paymentMonth: string;

  @Column({ type: 'text', nullable: false })
  paymentYear: string;

  @Column({ type: 'text', nullable: false })
  paymentSum: string;

  @ManyToOne(() => Contract, (contract) => contract.regNum, { cascade: true })
  contracts: Array<Contract>;
}
