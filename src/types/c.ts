export interface Root {
  'ns3:export': Ns3Export;
}

export interface Ns3Export {
  $: GeneratedType;
  'ns3:contract': Ns3Contract[];
}

export interface GeneratedType {
  xmlns: string;
  'xmlns:ns2': string;
  'xmlns:ns4': string;
  'xmlns:ns3': string;
  'xmlns:ns6': string;
  'xmlns:ns5': string;
  'xmlns:ns8': string;
  'xmlns:ns7': string;
  'xmlns:ns13': string;
  'xmlns:ns9': string;
  'xmlns:ns12': string;
  'xmlns:ns11': string;
  'xmlns:ns10': string;
  'xmlns:ns14': string;
}

export interface Ns3Contract {
  $: GeneratedType2;
  id: string[];
  externalId: string[];
  placementDate: string[];
  publishDate: string[];
  versionNumber: string[];
  foundation: Foundation[];
  'conclusionContractSt95Ch17.1': string[];
  customer: Customer[];
  placer: Placer[];
  finances: Finance[];
  protocolDate: string[];
  documentBase: string[];
  documentCode: string[];
  signDate: string[];
  regNum: string[];
  number: string[];
  contractSubject: string[];
  isOptimyStart: string[];
  contractLifeCycle: string[];
  isResidentialPremisesPurchase: string[];
  priceInfo: PriceInfo[];
  quantityContractStages: string[];
  executionPeriod: ExecutionPeriod[];
  enforcement: Enforcement[];
  deliveryPlaceInfo: DeliveryPlaceInfo[];
  products: Product[];
  counterpartiesInfo: CounterpartiesInfo[];
  suppliersInfo: SuppliersInfo[];
  href: string[];
  printForm: PrintForm[];
  scanDocuments: ScanDocument[];
  modification: Modification[];
  currentContractStage: string[];
  okpd2okved2: string[];
  isUnilateralRefusal: string[];
}

export interface GeneratedType2 {
  schemeVersion: string;
}

export interface Foundation {
  fcsOrder: FcsOrder[];
}

export interface FcsOrder {
  order: Order[];
}

export interface Order {
  notificationNumber: string[];
  lotNumber: string[];
  placing: string[];
  singleCustomer: SingleCustomer[];
  placingSingleCustomerText: string[];
  purchaseCode: string[];
  contractProjectNumber: string[];
  tenderPlan2020Info: TenderPlan2020Info[];
}

export interface SingleCustomer {
  reason: Reason[];
}

export interface Reason {
  code: string[];
  name: string[];
}

export interface TenderPlan2020Info {
  'ns4:plan2020Number': string[];
  'ns4:position2020Number': string[];
}

export interface Customer {
  regNum: string[];
  consRegistryNum: string[];
  fullName: string[];
  shortName?: string[];
  inn: string[];
  kpp: string[];
  legalForm: LegalForm[];
  OKPO: string[];
  customerCode: string[];
  organizationTypeCode: string[];
  customerAccountsDetails: CustomerAccountsDetail[];
}

export interface LegalForm {
  code: string[];
  singularName: string[];
}

export interface CustomerAccountsDetail {
  customerAccountDetails: CustomerAccountDetail[];
}

export interface CustomerAccountDetail {
  'ns4:sid': string[];
  'ns4:externalSid': string[];
  'ns4:guid': string[];
  'ns4:accountType': string[];
  'ns4:personalAccountNumber': string[];
  'ns4:creditOrgName': string[];
  'ns4:detailsCreditOrgText': string[];
  'ns4:bankAccountNumber': string[];
  'ns4:bik': string[];
  'ns4:corrAccountNumber': string[];
}

export interface Placer {
  responsibleOrg: ResponsibleOrg[];
  responsibleRole: string[];
}

export interface ResponsibleOrg {
  regNum: string[];
  consRegistryNum: string[];
  fullName: string[];
}

export interface Finance {
  financingPlan: FinancingPlan[];
}

export interface FinancingPlan {
  financeSource: FinanceSource[];
  KBKsChange: string[];
  stages: Stage[];
}

export interface FinanceSource {
  budgetFunds: BudgetFund[];
}

export interface BudgetFund {
  isBudgetFunds: string[];
  budget: Budget[];
  OKTMO: Oktmo[];
  budgetLevel: string[];
  fundsBudgetLevel: string[];
}

export interface Budget {
  code: string[];
  name: string[];
}

export interface Oktmo {
  code: string[];
  name: string[];
}

export interface Stage {
  externalSid: string[];
  guid: string[];
  startDate: string[];
  sid: string[];
  endDate: string[];
  payments: Payment[];
}

export interface Payment {
  KBK2016: string[];
  paymentYear: string[];
  paymentSum: string[];
}

export interface PriceInfo {
  price: string[];
  priceType: string[];
  currency: Currency[];
  priceVAT: string[];
  isWithHoldingUnfulfilledClaimsPenalties: string[];
}

export interface Currency {
  code: string[];
  name: string[];
}

export interface ExecutionPeriod {
  startDate: string[];
  stages: Stage2[];
  endDate: string[];
}

export interface Stage2 {
  sid: string[];
  externalSid: string[];
  guid: string[];
  startDate: string[];
  endDate: string[];
  stagePrice: string[];
}

export interface Enforcement {
  cashAccount: CashAccount[];
}

export interface CashAccount {
  currency: Currency2[];
  amount: string[];
  currencyRate: CurrencyRate[];
}

export interface Currency2 {
  code: string[];
  name: string[];
}

export interface CurrencyRate {
  rate: string[];
  raiting: string[];
}

export interface DeliveryPlaceInfo {
  'ns4:byKLADRInfo': Ns4ByKladrinfo[];
}

export interface Ns4ByKladrinfo {
  'ns4:deliveryPlace': string[];
}

export interface Product {
  product: Product2[];
  quantityUndefined: string[];
}

export interface Product2 {
  purchaseObjectSid: string[];
  sid: string[];
  externalSid: string[];
  guid: string[];
  indexNum: string[];
  KTRU?: Ktru[];
  name: string[];
  hierarchyType: string[];
  type: string[];
  OKEI: Okei[];
  price: string[];
  volumeSpecifyingMethod: string[];
  quantity?: string[];
  sum: string[];
  VATRate: string[];
  improvedProductReplacement: string[];
  OKPD2?: Okpd2[];
}

export interface Ktru {
  code: string[];
  name: string[];
  versionId: string[];
  versionNumber: string[];
  OKPD2: Okpd2[];
}

export interface Okpd2 {
  code: string[];
  name: string[];
}

export interface Okei {
  code: string[];
  nationalCode?: string[];
  trueNationalCode: string[];
  fullName: string[];
  nationalName: string[];
}

export interface CounterpartiesInfo {
  counterpartyInfo: CounterpartyInfo[];
}

export interface CounterpartyInfo {
  'ns4:payingPenaltiesInfo': Ns4PayingPenaltiesInfo[];
  'ns4:counterpartyAccountsDetails': CounterpartyAccountsDetail[];
}

export interface Ns4PayingPenaltiesInfo {
  'ns2:regNum': string[];
  'ns2:fullName': string[];
  'ns4:inn': string[];
  'ns4:kpp': string[];
}

export interface CounterpartyAccountsDetail {
  'ns4:counterpartyAccountDetails': CounterpartyAccountDetail[];
}

export interface CounterpartyAccountDetail {
  'ns4:sid': string[];
  'ns4:externalSid': string[];
  'ns4:guid': string[];
  'ns4:accountType': string[];
  'ns4:personalAccountNumber': string[];
  'ns4:creditOrgName': string[];
  'ns4:detailsCreditOrgText': string[];
  'ns4:bankAccountNumber': string[];
  'ns4:bik': string[];
  'ns4:corrAccountNumber': string[];
  'ns4:counterparty160Name': string[];
  'ns4:OKTMOInfo': Ns4Oktmoinfo[];
  'ns4:KBK': string[];
}

export interface Ns4Oktmoinfo {
  'ns4:OKTMO': Ns4Oktmo[];
}

export interface Ns4Oktmo {
  'ns2:code': string[];
  'ns2:name': string[];
}

export interface SuppliersInfo {
  supplierInfo: SupplierInfo[];
}

export interface SupplierInfo {
  legalEntityRF: LegalEntityRf[];
  supplierAccountsDetails: SupplierAccountsDetail[];
  contractorRegistryNum: string[];
}

export interface LegalEntityRf {
  EGRULInfo: Egrulinfo[];
  otherInfo: OtherInfo[];
}

export interface Egrulinfo {
  OGRN: string[];
  legalForm: LegalForm2[];
  fullName: string[];
  shortName: string[];
  INN: string[];
  KPP: string[];
  address: string[];
}

export interface LegalForm2 {
  code: string[];
  singularName: string[];
}

export interface OtherInfo {
  postAdressInfo: PostAdressInfo[];
  contactInfo: ContactInfo[];
  contactEMail: string[];
  contactPhone: string[];
}

export interface PostAdressInfo {
  mailingAdress: string[];
}

export interface ContactInfo {
  lastName: string[];
  firstName: string[];
  middleName: string[];
}

export interface SupplierAccountsDetail {
  supplierAccountDetails: SupplierAccountDetail[];
}

export interface SupplierAccountDetail {
  'ns4:sid': string[];
  'ns4:externalSid': string[];
  'ns4:guid': string[];
  'ns4:accountType': string[];
  'ns4:creditOrgName': string[];
  'ns4:detailsCreditOrgText': string[];
  'ns4:bankAccountNumber': string[];
  'ns4:bik': string[];
  'ns4:corrAccountNumber': string[];
  'ns4:counterparty160Name': string[];
}

export interface PrintForm {
  url: string[];
  docRegNumber: string[];
}

export interface ScanDocument {
  attachment: Attachment[];
  CPEPAttachment: Cpepattachment[];
}

export interface Attachment {
  publishedContentId: string[];
  fileName: string[];
  docDescription: string[];
  docRegNumber: string[];
  url: string[];
  cryptoSigns: CryptoSign[];
}

export interface CryptoSign {
  signature: string[];
}

export interface Cpepattachment {
  publishedContentId: string[];
  fileName: string[];
  docDescription: string[];
  docRegNumber: string[];
  url: string[];
  cryptoSigns: CryptoSign2[];
}

export interface CryptoSign2 {
  signature: [Signature, Signature2, string, string];
}

export interface Signature {
  _: string;
  $: GeneratedType3;
}

export interface GeneratedType3 {
  type: string;
}

export interface Signature2 {
  _: string;
  $: GeneratedType4;
}

export interface GeneratedType4 {
  type: string;
}

export interface Modification {
  contractChange: ContractChange[];
  attachments: Attachment2[];
}

export interface ContractChange {
  reason: Reason2[];
  document: Document[];
}

export interface Reason2 {
  code: string[];
  name: string[];
}

export interface Document {
  code: string[];
  name: string[];
  base: string[];
  documentDate: string[];
}

export interface Attachment2 {
  attachment: Attachment3[];
}

export interface Attachment3 {
  publishedContentId: string[];
  fileName: string[];
  docDescription: string[];
  docRegNumber: string[];
  url: string[];
  cryptoSigns: CryptoSign3[];
}

export interface CryptoSign3 {
  signature: string[];
}
