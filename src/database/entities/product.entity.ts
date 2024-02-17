import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { Document } from './document.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'text' })
  okpd2code: string;

  @Column({ type: 'text' })
  okpd2name: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  type: string;

  @Column({ type: 'text' })
  okei: string;

  @Column({ type: 'decimal' })
  price: string;

  @Column({ type: 'decimal', nullable: true })
  quantity?: string;

  @Column({ type: 'decimal', nullable: true })
  sum?: string;

  @ManyToOne(() => Contract, (contract) => contract.regNum, { cascade: true })
  contract: Contract;

  @OneToOne(() => Document, (document) => document.sid, { cascade: true })
  document: Document;
}
