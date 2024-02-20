import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { Payment } from './payment.entity';
import { Finance } from './finance.entity';
import { Acceptance } from './acceptance.entity';

@Entity({ name: 'stages' })
export class Stage {
  @PrimaryColumn({ type: 'text' })
  sid!: string;

  @Column({ type: 'text' })
  startDate!: Date;

  @Column({ type: 'text' })
  endDate!: Date;

  @Column({ type: 'text' })
  stagePrice!: string;

  @Column({ type: 'text' })
  stageAdvancePaymentSum!: string;

  @ManyToOne(() => Contract, ({ regNum }) => regNum)
  contract!: Contract;

  @OneToMany(() => Payment, ({ sid }) => sid, { cascade: true })
  payments!: Array<Payment>;

  @OneToMany(() => Acceptance, ({ sid }) => sid, { cascade: true })
  acceptances!: Array<Acceptance>;

  @OneToMany(() => Finance, ({ stage }) => stage, { cascade: true })
  finances!: Array<Finance>;
}
