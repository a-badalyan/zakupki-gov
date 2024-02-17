import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Contract } from './contract.entity';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  kbk: string;

  @Column({ type: 'text' })
  paymentMonth: string;

  @Column({ type: 'text' })
  paymentYear: string;

  @Column({ type: 'text' })
  paymentSum: string;

  @ManyToOne(() => Contract, (contract) => contract.regNum, { cascade: true })
  contracts: Array<Contract>;
}
