export interface ContractProcedure {
  id: string;
  sid: string;
  regNum: string;
  publishDate: Date;
  versionNumber: string;
  executions: Executions;
  printForm: PrintForm;
  paymentDocuments: PaymentDocuments;
  modificationReason: string;
  currentContractStage: string;
  okpd2okved2: string;
  isEDIBased: string;
  isPURorASFKBased: string;
  isUnilateralRefusalAuto: string;
}

export interface Executions {
  stage: Stage;
  ordinalNumber: string;
  finalStageExecution: string;
  execution: Execution[];
}

export interface Execution {
  payDoc?: PayDoc;
  currency: Currency;
  paid: string;
  paidRUR?: string;
  paidVAT?: string;
  paidVATRUR: string;
  improperExecutionText: string;
  docAcceptance?: DocAcceptance;
  product?: string;
  quantityContractSubjects?: QuantityContractSubjects;
}

export interface Currency {
  code: string;
  name: string;
}

export interface DocAcceptance {
  sid: string;
  code: string;
  name: string;
  documentDate: Date;
  documentNum: string;
  deliveryAcceptDate: Date;
  fulfilmentSum: string;
  fulfilmentSumRUR: string;
  receiptDocuments: ReceiptDocuments;
}

export interface ReceiptDocuments {
  attachment: Attachment;
}

export interface Attachment {
  publishedContentId: string;
  fileName: string;
  docDescription: string;
  docRegNumber: string;
  url: string;
}

export interface PayDoc {
  sid: string;
  documentName: string;
  documentDate: Date;
  documentNum: string;
}

export interface QuantityContractSubjects {
  quantityContractSubject: QuantityContractSubject;
}

export interface QuantityContractSubject {
  sid: string;
  indexNum: string;
  product: Product;
  quantity: string;
  fulfilledCost: string;
  unitPrice: string;
}

export interface Product {
  name: string;
  OKPD2: Currency;
  OKEI: Okei;
  previouslySuppliedQuantity: string;
  hierarchyType: string;
  type: string;
  VATRate: string;
  improvedProductReplacement: string;
}

export interface Okei {
  code: string;
  nationalCode: string;
  trueNationalCode: string;
  fullName: string;
  nationalName: string;
}

export interface Stage {
  sid: string;
  startDate: Date;
  endDate: Date;
}

export interface PaymentDocuments {
  attachment: Attachment[];
}

export interface PrintForm {
  url: string;
  docRegNumber: string;
}
