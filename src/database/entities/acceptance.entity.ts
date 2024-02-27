import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Stage } from './stage.entity';
import { IAttachment } from '@app/types/contractProcedure';
import { Payment } from './payment.entity';

@Entity({ name: 'acceptances' })
export class Acceptance {
  @PrimaryColumn({ type: 'text' })
  sid!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'timestamp' })
  documentDate!: Date;

  @Column({ type: 'text' })
  documentNum!: string;

  @Column({ type: 'decimal', nullable: true })
  fulfillmentSum?: string;

  @Column({ type: 'jsonb', array: false, nullable: true })
  receiptDocuments?: Array<Omit<IAttachment, 'cryptoSigns'>>;

  // TODO: need ?
  @Column({ type: 'decimal', nullable: true })
  totalPaymentAmount?: string;

  @Column({ type: 'timestamp', nullable: true })
  deliveryAcceptDate?: Date;

  @Column({ type: 'timestamp' })
  publishDate!: Date;

  @ManyToOne(() => Payment, ({ sid }) => sid, { cascade: true })
  payment!: Payment;

  @ManyToOne(() => Stage, ({ sid }) => sid, { cascade: true })
  stage!: Stage;
}
