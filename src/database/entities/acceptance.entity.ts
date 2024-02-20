import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Stage } from './stage.entity';
import { IAttachment } from '@app/types/contractProcedure';

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
  fulfilmentSum?: string;

  @Column({ type: 'jsonb', array: true, default: [] })
  receiptDocuments!: Array<IAttachment>;

  // TODO: need ?
  @Column({ type: 'decimal', nullable: true })
  totalPaymentAmount?: string;

  @Column({ type: 'timestamp' })
  deliveryAcceptDate!: Date;

  @Column({ type: 'timestamp' })
  publishDate!: Date;

  @ManyToOne(() => Stage, ({ sid }) => sid, { cascade: true })
  stage!: Stage;
}
