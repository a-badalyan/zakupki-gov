import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { Product } from './product.entity';
import { Stage } from './stage.entity';

@Entity({ name: 'documents' })
export class Document {
  @PrimaryColumn({ type: 'text' })
  sid: string;

  @Column({ type: 'text' })
  currency: string;

  @Column({ type: 'text' })
  paid: string;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column({ type: 'jsonb' })
  documentBody: DocAcceptance | PayDoc;

  @Column({ type: 'boolean' })
  finalStageExecution: boolean;

  @Column({ type: 'text' })
  quantity?: string;

  @Column({ type: 'timestamp' })
  publishDate: Date;

  @Column({ type: 'text' })
  url: string;

  @OneToOne(() => Product, (product) => product.id, { cascade: true })
  product: Product;

  @ManyToOne(() => Stage, (stage) => stage.sid, { cascade: true })
  stage: Stage;
}

export interface PayDoc {
  sid: string;
  documentName: string;
  documentDate: Date;
  documentNum: string;
}

export interface DocAcceptance {
  sid: string;
  code: string;
  name: string;
  documentDate: Date;
  documentNum: string;
  deliveryAcceptDate: Date;
  fulfilmentSum: string;
}
