import {
  Entity,
  Column,
  PrimaryColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Organization } from './organization.entity';
import { Stage } from './stage.entity';
import { Product } from './product.entity';

@Entity({ name: 'contracts' })
export class Contract {
  @PrimaryColumn({ type: 'text' })
  regNum!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text' })
  number!: string;

  @Column({ type: 'decimal' })
  price!: string;

  @Column({ type: 'timestamp' })
  signDate!: Date;

  @Column({ type: 'timestamp' })
  executionStartedAt!: Date;

  @Column({ type: 'timestamp' })
  executionEndedAt!: Date;

  @Column({ type: 'timestamp' })
  publishDate!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Organization, ({ inn }) => inn, { cascade: true })
  customer!: Organization;

  @ManyToOne(() => Organization, ({ inn }) => inn, { cascade: true })
  supplier!: Organization;

  @OneToMany(() => Product, ({ contract }) => contract, { cascade: true })
  products!: Array<Product>;

  @OneToMany(() => Stage, ({ contract }) => contract, { cascade: true })
  stages!: Array<Stage>;
}
