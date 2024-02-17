import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { Document } from './document.entity';

@Entity({ name: 'stages' })
export class Stage {
  @PrimaryColumn({ type: 'text' })
  sid: string;

  @Column({ type: 'text' })
  startDate: Date;

  @Column({ type: 'text' })
  endDate: Date;

  @Column({ type: 'text' })
  stagePrice: string;

  @Column({ type: 'text' })
  stageAdvancePaymentSum: string;

  @ManyToOne(() => Contract, (contract) => contract.regNum, { cascade: true })
  contracts: Array<Contract>;

  @OneToMany(() => Document, (document) => document.sid, { cascade: true })
  document: Document;
}
