import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';
import { Contract } from './contract.entity';

@Entity({ name: 'organizations' })
export class Organization {
  @PrimaryColumn({ type: 'text' })
  inn: string;

  @Column({ type: 'text', nullable: false })
  kpp: string;

  @Column({ type: 'text', nullable: false })
  fullName: string;

  @Column({ type: 'text', nullable: false })
  @Index()
  shortName?: string;

  @OneToMany(() => Contract, (contract) => contract.regNum, { cascade: true })
  contracts: Array<Contract>;
}