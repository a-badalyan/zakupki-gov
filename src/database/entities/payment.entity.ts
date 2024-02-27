import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Stage } from './stage.entity';
import { Acceptance } from './acceptance.entity';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryColumn({ type: 'text' })
  sid!: string;

  @Column({ type: 'text' })
  documentName!: string;

  @Column({ type: 'text' })
  documentNum!: string;

  @Column({ type: 'timestamp' })
  documentDate!: Date;

  @Column({ type: 'decimal' })
  paidAmount!: string;

  @Column({ type: 'boolean', default: false })
  advancePayment!: boolean;

  @Column({ type: 'text', nullable: true })
  improperExecutionText?: string;

  @Column({ type: 'timestamp' })
  publishDate!: Date;

  @OneToMany(() => Acceptance, ({ payment }) => payment)
  acceptances!: Array<Acceptance>;

  @ManyToOne(() => Stage, ({ sid }) => sid, { cascade: true })
  stage!: Stage;
}
