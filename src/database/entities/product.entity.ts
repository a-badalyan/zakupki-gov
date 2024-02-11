import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { Contract } from './contract.entity';
import { Document } from './document.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  okpd2code: string;

  @Column()
  okpd2name: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  okei: string;

  @Column()
  price: string;

  @Column()
  quantity?: string;

  @Column()
  sum?: string;

  @Column()
  contractRegNum: string;

  @ManyToOne(() => Contract, (contract) => contract.regNum, { cascade: true })
  contract: Contract;

  @OneToOne(() => Document, (document) => document.sid, { cascade: true })
  document?: Document;
}
