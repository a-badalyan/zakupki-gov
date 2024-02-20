import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Contract } from './contract.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'text' })
  okpd2code!: string;

  @Column({ type: 'text' })
  okpd2name!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text', nullable: true })
  type?: string;

  @Column({ type: 'text' })
  okei!: string;

  @Column({ type: 'decimal' })
  price!: string;

  @Column({ type: 'decimal', nullable: true })
  quantity?: string;

  @Column({ type: 'decimal', nullable: true })
  sum?: string;

  @ManyToOne(() => Contract, ({ regNum }) => regNum)
  contract!: Contract;
}
