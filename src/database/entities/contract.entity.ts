import {
  Entity,
  Column,
  PrimaryColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Payment } from './payment.entity';
import { Organization } from './organization.entity';
import { Stage } from './stage.entity';
import { Product } from './product.entity';

@Entity({ name: 'contracts' })
export class Contract {
  @PrimaryColumn({ type: 'text' })
  regNum: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  number: string;

  @Column({ type: 'timestamp', nullable: false })
  signDate: Date;

  @Column({ type: 'decimal', nullable: false })
  price: string;

  @Column({ type: 'timestamp', nullable: false })
  executionStartedAt: Date;

  @Column({ type: 'timestamp', nullable: false })
  executionEndedAt: Date;

  @Column({ type: 'timestamp', nullable: false })
  placementDate: Date;

  @Column({ type: 'timestamp', nullable: false })
  publishDate: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'text', nullable: false })
  supplierInn: string;

  @Column({ type: 'text', nullable: false })
  customerInn: string;

  @OneToMany(() => Product, (product) => product.id, { cascade: true })
  products: Array<Product>;

  @ManyToOne(() => Organization, (customer) => customer.inn, { cascade: true })
  customer: Organization;

  @ManyToOne(() => Organization, (supplier) => supplier.inn, { cascade: true })
  supplier: Organization;

  @OneToMany(() => Payment, (payment) => payment.id, { cascade: true })
  payments: Array<Payment>;

  @OneToMany(() => Stage, (stage) => stage.sid, { cascade: true })
  stages: Array<Stage>;
}
