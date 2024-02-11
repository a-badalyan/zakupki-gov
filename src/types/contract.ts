export interface Contract {
  id: string;
  placementDate: Date;
  publishDate: Date;
  versionNumber: string;
  foundation: Foundation;
  'conclusionContractSt95Ch17.1': boolean;
  customer: Customer;
  placer: Placer;
  finances: Finances;
  protocolDate: Date;
  documentBase: string;
  documentCode: string;
  signDate: Date;
  regNum: string;
  number: string;
  contractSubject: string;
  isOptimyStart: boolean;
  contractLifeCycle: boolean;
  isResidentialPremisesPurchase: boolean;
  priceInfo: PriceInfo;
  subContractorsSum: SubContractorsSum;
  executionPeriod: ExecutionPeriod;
  enforcement: Enforcement;
  qualityGuaranteeInfo: QualityGuaranteeInfo;
  deliveryPlaceInfo: DeliveryPlaceInfo;
  products: Products;
  suppliersInfo: SuppliersInfo;
  href: string;
  printForm: PrintForm;
  scanDocuments: ScanDocuments;
  singleSupplierP25Part1St93Documents: SingleSupplierP25Part1St93Documents;
  attachments: Attachments;
  modification: Modification;
  currentContractStage: string;
  okpd2okved2: boolean;
  isUnilateralRefusal: boolean;
  _schemeVersion: string;
  __prefix: string;
}

export interface Attachments {
  attachment: Attachment[];
}

export interface Attachment {
  publishedContentId: string;
  fileName: string;
  docDescription: string;
  docRegNumber: string;
  url: string;
  cryptoSigns: AttachmentCryptoSigns;
}

export interface AttachmentCryptoSigns {
  signature: string[];
}

export interface Customer {
  regNum: string;
  consRegistryNum: string;
  fullName: string;
  shortName: string;
  inn: string;
  kpp: string;
  legalForm: LegalForm;
  OKPO: string;
  customerCode: string;
  organizationTypeCode: string;
  customerAccountsDetails: CustomerAccountsDetails;
}

export interface CustomerAccountsDetails {
  customerAccountDetails: ErAccountDetails;
}

export interface ErAccountDetails {
  sid: DeliveryPlace;
  guid: DeliveryPlace;
  accountType: DeliveryPlace;
  personalAccountNumber?: DeliveryPlace;
  creditOrgName: DeliveryPlace;
  bankAccountNumber: DeliveryPlace;
  bik: DeliveryPlace;
  corrAccountNumber: DeliveryPlace;
  counterpartyName?: DeliveryPlace;
}

export interface DeliveryPlace {
  __prefix: Prefix;
  __text: string;
}

export enum Prefix {
  Ns2 = 'ns2',
  Ns4 = 'ns4',
}

export interface LegalForm {
  code: string;
  singularName: string;
}

export interface DeliveryPlaceInfo {
  byKLADRInfo: ByKLADRInfo;
}

export interface ByKLADRInfo {
  KLADRInfo: KLADRInfo;
  deliveryPlace: DeliveryPlace;
  __prefix: Prefix;
}

export interface KLADRInfo {
  kladrCode: DeliveryPlace;
  fullName: DeliveryPlace;
  __prefix: Prefix;
}

export interface Enforcement {
  bankGuarantee: BankGuarantee;
}

export interface BankGuarantee {
  regNumberNotPublishedOnEIS: boolean;
  docNumberNotPublishedOnEIS: boolean;
  currency: Currency;
  guaranteeAmount: string;
}

export interface Currency {
  code: string;
  name: string;
}

export interface ExecutionPeriod {
  startDate: Date;
  stages: ExecutionPeriodStages;
  endDate: Date;
}

export interface ExecutionPeriodStages {
  sid: string;
  guid: string;
  startDate: Date;
  endDate: Date;
  stagePrice: string;
  stageAdvancePaymentSum: string;
}

export interface Finances {
  financingPlan: FinancingPlan;
}

export interface FinancingPlan {
  financeSource: FinanceSource;
  KBKsChange: boolean;
  stages: Array<FinancingPlanStage>;
}

export interface FinanceSource {
  budgetFunds: BudgetFunds;
}

export interface BudgetFunds {
  isBudgetFunds: boolean;
  budget: Currency;
  OKTMO: Currency;
  budgetLevel: string;
}

export interface FinancingPlanStage {
  guid: string;
  startDate: Date;
  sid: string;
  endDate: Date;
  payments: Payments;
}

export interface Payments {
  KBK2016: string;
  paymentMonth: string;
  paymentYear: string;
  paymentSum: string;
}

export interface Foundation {
  fcsOrder: FCSOrder;
}

export interface FCSOrder {
  order: Order;
}

export interface Order {
  notificationNumber: string;
  lotNumber: string;
  placing: string;
  singleCustomer: SingleCustomer;
  placingSingleCustomerText: string;
  purchaseCode: string;
  contractProjectNumber: string;
}

export interface SingleCustomer {
  reason: Currency;
}

export interface Modification {
  contractChange: ContractChange;
  attachments: Attachments;
}

export interface ContractChange {
  reason: Currency;
  document: Document;
}

export interface Document {
  code: string;
  name: string;
  base: string;
  documentDate: Date;
}

export interface Placer {
  responsibleOrg: ResponsibleOrg;
  responsibleRole: string;
}

export interface ResponsibleOrg {
  regNum: string;
  consRegistryNum: string;
  fullName: string;
}

export interface PriceInfo {
  price: string;
  priceType: string;
  currency: Currency;
  priceVAT: string;
  amountsReducedByTaxes: boolean;
  isWithHoldingUnfulfilledClaimsPenalties: boolean;
}

export interface PrintForm {
  url: string;
  docRegNumber: string;
}

export interface Products {
  product: Product;
  quantityUndefined: boolean;
}

export interface Product {
  purchaseObjectSid: string;
  sid: string;
  guid: string;
  indexNum: string;
  OKPD2: Currency;
  name: string;
  hierarchyType: string;
  type: string;
  OKEI: OKEI;
  price: string;
  volumeSpecifyingMethod: string;
  quantity: string;
  sum: string;
  VATRate: string;
  improvedProductReplacement: boolean;
}

export interface OKEI {
  code: string;
  nationalCode: string;
  trueNationalCode: string;
  fullName: string;
  nationalName: string;
}

export interface QualityGuaranteeInfo {
  notPublishedOnEIS: boolean;
  warrantyReqsText: string;
  manufacturerWarrantyReqsText: string;
  isQAEnsuramceRequired: boolean;
}

export interface ScanDocuments {
  CPEPAttachment: CPEPAttachment;
}

export interface CPEPAttachment {
  publishedContentId: string;
  fileName: string;
  docDescription: string;
  docRegNumber: string;
  url: string;
  cryptoSigns: CPEPAttachmentCryptoSigns;
}

export interface CPEPAttachmentCryptoSigns {
  signature: Signature[];
}

export interface Signature {
  _type: string;
  __text: string;
}

export interface SingleSupplierP25Part1St93Documents {
  attachment: Attachment;
}

export interface SubContractorsSum {
  sumInPercents: string;
  priceValueRUR: string;
  subContractors: SubContractors;
}

export interface SubContractors {
  subContractor: SubContractor[];
}

export interface SubContractor {
  legalEntityRF?: SubContractorLegalEntityRF;
  individualBusinessmanRF?: IndividualBusinessmanRF;
}

export interface IndividualBusinessmanRF {
  lastName: string;
  firstName: string;
  middleName: string;
  INN: string;
  registrationDate: Date;
  status: string;
  ERSMSPInclusionDate: Date;
  address: string;
  subContractInfo: SubContractInfo;
  subPurchaseObjectsInfo: SubPurchaseObjectsInfo;
}

export interface SubContractInfo {
  subContractDate: Date;
  subContractNumber: string;
  subContractSubject: string;
  contractPriceSpecify: string;
  subContractPriceInfo: SubContractPriceInfo;
}

export interface SubContractPriceInfo {
  price: string;
  currency: Currency;
}

export interface SubPurchaseObjectsInfo {
  subPurchaseObjectInfo: SubPurchaseObjectInfo;
}

export interface SubPurchaseObjectInfo {
  OKPD2: Currency;
  name: string;
  OKEI: OKEI;
  price: string;
  quantity: string;
  sum: string;
  VATRate: string;
}

export interface SubContractorLegalEntityRF {
  legalForm: LegalForm;
  fullName: string;
  firmName: string;
  INN: string;
  KPP: string;
  registrationDate: Date;
  status: string;
  ERSMSPInclusionDate: Date;
  address: string;
  subContractInfo: SubContractInfo;
  subPurchaseObjectsInfo: SubPurchaseObjectsInfo;
}

export interface SuppliersInfo {
  supplierInfo: SupplierInfo;
}

export interface SupplierInfo {
  legalEntityRF: SupplierInfoLegalEntityRF;
  supplierAccountsDetails: SupplierAccountsDetails;
  contractorRegistryNum: string;
}

export interface SupplierInfoLegalEntityRF {
  EGRULInfo: EGRULInfo;
  otherInfo: OtherInfo;
}

export interface EGRULInfo {
  OGRN: string;
  legalForm: LegalForm;
  fullName: string;
  shortName: string;
  INN: string;
  KPP: string;
  address: string;
}

export interface OtherInfo {
  statusInfo: StatusInfo;
  contactEMail: string;
  contactPhone: string;
}

export interface StatusInfo {
  code: DeliveryPlace;
}

export interface SupplierAccountsDetails {
  supplierAccountDetails: ErAccountDetails;
}
