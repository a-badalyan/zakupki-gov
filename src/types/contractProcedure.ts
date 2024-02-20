export interface IContractProcedure {
  'ns3:export': {
    'ns3:contractProcedure': {
      id: IId;
      sid: ISid;
      regNum: IRegNum;
      publishDate: IPublishDate;
      versionNumber: IVersionNumber;
      executions: IExecutions;
      printForm: IPrintForm;
      currentContractStage: ICurrentContractStage;
      okpd2okved2: IOkpd2okved2;
      isEDIBased: IIsEDIBased;
      isPURorASFKBased: IIsPURorASFKBased;
      isUnilateralRefusalAuto: IIsUnilateralRefusalAuto;
    };
  };
}
interface IId {
  value: string;
}
interface ISid {
  value: string;
}
interface IRegNum {
  value: string;
}
interface IPublishDate {
  value: Date;
}
interface IVersionNumber {
  value: string;
}
interface IExecutions {
  stage: IStage;
  ordinalNumber: IOrdinalNumber;
  finalStageExecution?: IFinalStageExecution;
  execution: IExecution | IExecutionItem[];
}
interface IStage {
  sid: ISid;
  startDate?: IStartDate;
  endDate: IEndDate;
  externalSid?: IExternalSid;
}
interface IStartDate {
  value: string;
}
interface IEndDate {
  value: string;
}
interface IOrdinalNumber {
  value: string;
}
interface IFinalStageExecution {
  value: boolean;
}
interface IExecution {
  docAcceptance?: IDocAcceptance;
  currency: ICurrency;
  paid: IPaid;
  paidVATRUR: IPaidVATRUR;
  improperExecutionText?: IImproperExecutionText;
  product?: IProduct;
  quantityContractSubjects?: IQuantityContractSubjects;
  docExecution?: IDocExecution;
  payDoc?: IPayDoc;
  paidRUR?: IPaidRUR;
  guidEDI?: IGuidEDI;
  paidVAT?: IPaidVAT;
  quantityDrugContractSubjects?: IQuantityDrugContractSubjects;
}

interface IQuantityContractSubjects {
  quantityContractSubject:
    | IQuantityContractSubject
    | IQuantityContractSubject[];
}

export interface IDocAcceptance {
  sid: ISid;
  code?: ICode;
  name: IName;
  documentDate: IDocumentDate;
  documentNum: IDocumentNum;
  deliveryAcceptDate?: IDeliveryAcceptDate;
  fulfilmentSum?: IFulfilmentSum;
  fulfilmentSumRUR?: IFulfilmentSumRUR;
  supplierAccountsDetailContractInfo?: ISupplierAccountsDetailContractInfo;
  receiptDocuments?: IReceiptDocuments;
  deliveryAcceptDateEDI?: IDeliveryAcceptDateEDI;
  totalPaymentAmount?: ITotalPaymentAmount;
  externalSid?: IExternalSid;
  amountsReducedByTaxesInfo?: IAmountsReducedByTaxesInfo;
}
interface ICode {
  value: string;
}
interface IName {
  value: string;
}
interface IDocumentDate {
  value: string;
}
interface IDocumentNum {
  value: string;
}
interface IDeliveryAcceptDate {
  value: string;
}
interface IFulfilmentSum {
  value: string;
}
interface IFulfilmentSumRUR {
  value: string;
}
interface ISupplierAccountsDetailContractInfo {
  sid?: ISid;
  guid?: IGuid;
  supplierAccountDetailsInfo: ISupplierAccountDetailsInfo;
  externalSid?: IExternalSid;
}
interface IGuid {
  value: string;
}
interface ISupplierAccountDetailsInfo {
  'ns4:accountType': {
    value: string;
  };
  'ns4:creditOrgName': {
    value: string;
  };
  'ns4:bankAccountNumber': {
    value: string;
  };
  'ns4:bik': {
    value: string;
  };
  'ns4:corrAccountNumber': {
    value: string;
  };
  'ns4:counterpartyName': {
    value: string;
  };
  'ns4:OKTMOInfo'?: {
    'ns4:OKTMO': {
      'ns2:code': {
        value: string;
      };
      'ns2:name': {
        value: string;
      };
    };
  };
  'ns4:personalAccountNumber'?: {
    value: string;
  };
  'ns4:KBK'?: {
    value: string;
  };
}
interface IReceiptDocuments {
  attachment: IAttachment | IAttachment[];
}

export interface IAttachment {
  publishedContentId: IPublishedContentId;
  fileName: IFileName;
  docDescription: IDocDescription;
  docRegNumber: IDocRegNumber;
  url: IUrl;
  cryptoSigns: ICryptoSigns;
}
interface IPublishedContentId {
  value: string;
}
interface IFileName {
  value: string;
}
interface IDocDescription {
  value: string;
}
interface IDocRegNumber {
  value: string;
}
interface IUrl {
  value: string;
}
interface ICryptoSigns {
  signature: ISignature[] | ISignature;
}

interface ICurrency {
  code: ICode;
  name: IName;
}
interface IPaid {
  value: string;
}
interface IPaidVATRUR {
  value: string;
}
interface IImproperExecutionText {
  value: string;
}
interface IProduct {
  value?: string;
  name?: IName;
  OKPD2?: IOKPD2;
  OKEI?: IOKEI;
  previouslySuppliedQuantity?: IPreviouslySuppliedQuantity;
  hierarchyType?: IHierarchyType;
  type?: IType;
  VATRate?: IVATRate;
  improvedProductReplacement?: IImprovedProductReplacement;
  KTRU?: IKTRU;
  quantity?: IQuantity;
  MNNsInfo?: IMNNsInfo;
}

interface IQuantityContractSubject {
  sid?: ISid;
  indexNum: IIndexNum;
  product: IProduct;
  volumeTextForm?: IVolumeTextForm;
  nomenclature?: INomenclature;
  fulfilledCost: IFulfilledCost;
  unitPrice: IUnitPrice;
  quantity?: IQuantity;
  externalSid?: IExternalSid;
  originCountry?: IOriginCountry;
  registrationCountry?: IRegistrationCountry;
}

interface IIndexNum {
  value: string;
}
interface IOKPD2 {
  code: ICode;
  name: IName;
}
interface IOKEI {
  code: ICode;
  nationalCode: INationalCode;
  trueNationalCode: ITrueNationalCode;
  fullName: IFullName;
  nationalName: INationalName;
}
interface INationalCode {
  value: string;
}
interface ITrueNationalCode {
  value: string;
}
interface IFullName {
  value: string;
}
interface INationalName {
  value: string;
}
interface IPreviouslySuppliedQuantity {
  value: string;
}
interface IHierarchyType {
  value: string;
}
interface IType {
  value: string;
}
interface IVATRate {
  value: string;
}
interface IImprovedProductReplacement {
  value: string;
}
interface IVolumeTextForm {
  value: string;
}
interface INomenclature {
  value: string;
}
interface IFulfilledCost {
  value: string;
}
interface IUnitPrice {
  value: string;
}
interface IPrintForm {
  url: IUrl;
  docRegNumber: IDocRegNumber;
}
interface ICurrentContractStage {
  value: string;
}
interface IOkpd2okved2 {
  value: boolean;
}
interface IIsEDIBased {
  value: boolean;
}
interface IIsPURorASFKBased {
  value: boolean;
}
interface IIsUnilateralRefusalAuto {
  value: boolean;
}

interface IDocExecution {
  sid: ISid;
  code: ICode;
  name: IName;
  documentDate: IDocumentDate;
  documentNum: IDocumentNum;
  externalSid?: IExternalSid;
}

interface IKTRU {
  code: ICode;
  name: IName;
  versionId: IVersionId;
  versionNumber: IVersionNumber;
}
interface IVersionId {
  value: string;
}
interface IQuantity {
  value: string;
}

interface IExternalSid {
  value: string;
}
interface IDocumentName {
  value: string;
}
export interface IPayDoc {
  sid: ISid;
  documentName: IDocumentName;
  documentDate: IDocumentDate;
  documentNum: IDocumentNum;
  payDocTypeInfo?: IPayDocTypeInfo;
}
interface IPayDocTypeInfo {
  // Платежный документ для оплаты по документу(ам) о приемке
  docAcceptancePayDoc?: IDocAcceptancePayDoc;
  // Платежный документ для выплаты аванса

  advancePaymentPayDoc?: IAdvancePaymentPayDoc;
}
interface IDocAcceptancePayDoc {
  isDocAcceptancePayDoc: IIsDocAcceptancePayDoc;
  payDocToDocAcceptanceCompliances: IPayDocToDocAcceptanceCompliances;
}
interface IIsDocAcceptancePayDoc {
  value: boolean;
}
interface IPayDocToDocAcceptanceCompliances {
  docAcceptance: IDocAcceptance | IDocAcceptanceItem[];
}
interface IPaidRUR {
  value: string;
}
interface ISignature {
  value: string;
}
interface IDeliveryAcceptDateEDI {
  value: string;
}
interface ITotalPaymentAmount {
  value: string;
}
interface IGuidEDI {
  value: string;
}
interface IExecutionItem {
  docAcceptance?: IDocAcceptance;
  currency: ICurrency;
  paid: IPaid;
  paidVATRUR: IPaidVATRUR;
  improperExecutionText: IImproperExecutionText;
  product?: IProduct;
  quantityContractSubjects?: IQuantityContractSubjects;
  docExecution?: IDocExecution;
  payDoc?: IPayDoc;
  paidRUR?: IPaidRUR;
  paidVAT?: IPaidVAT;
}
interface IOriginCountry {
  countryCode: ICountryCode;
  countryFullName: ICountryFullName;
}
interface ICountryCode {
  value: string;
}
interface ICountryFullName {
  value: string;
}

interface IAdvancePaymentPayDoc {
  isAdvancePaymentPayDoc: IIsAdvancePaymentPayDoc;
}
interface IIsAdvancePaymentPayDoc {
  value: boolean;
}
interface IRegistrationCountry {
  countryCode: ICountryCode;
  countryFullName: ICountryFullName;
}
interface IPaidVAT {
  value: string;
}
interface IQuantityDrugContractSubjects {
  quantityDrugContractSubject:
    | IQuantityDrugContractSubject
    | IQuantityDrugContractSubject[];
}
interface IDrugProductInfo {
  drugInfoUsingReferenceInfo: IDrugInfoUsingReferenceInfo;
}
interface IDrugInfoUsingReferenceInfo {
  positionTradeNameExternalCode: IPositionTradeNameExternalCode;
}
interface IPositionTradeNameExternalCode {
  value: string;
}
interface IMNNsInfo {
  MNNInfo: IMNNInfo;
}
interface IMNNInfo {
  MNNName: IMNNName;
  positionsTradeName: IPositionsTradeName;
  dosageUser: IDosageUser;
}
interface IMNNName {
  value: string;
}
interface IPositionsTradeName {
  positionTradeName: IPositionTradeName;
}
interface IPositionTradeName {
  tradeInfo: ITradeInfo;
  medicamentalFormInfo: IMedicamentalFormInfo;
  dosageInfo: IDosageInfo;
  packagingsInfo: IPackagingsInfo;
  MNNNormName: IMNNNormName;
  dosageNormName: IDosageNormName;
  medicamentalFormNormName: IMedicamentalFormNormName;
}
interface ITradeInfo {
  tradeName: ITradeName;
}
interface ITradeName {
  value: string;
}
interface IMedicamentalFormInfo {
  medicamentalFormName: IMedicamentalFormName;
}
interface IMedicamentalFormName {
  value: string;
}
interface IDosageInfo {
  dosageName: IDosageName;
  dosageValue: IDosageValue;
  dosageGRLSValue: IDosageGRLSValue;
}
interface IDosageName {
  value: string;
}
interface IDosageValue {
  value: string;
}
interface IDosageGRLSValue {
  value: string;
}
interface IPackagingsInfo {
  packagingInfo: IPackagingInfo;
}
interface IPackagingInfo {
  primaryPackagingInfo: IPrimaryPackagingInfo;
  packaging1Quantity: IPackaging1Quantity;
  packaging2Quantity: IPackaging2Quantity;
  sumaryPackagingQuantity: ISumaryPackagingQuantity;
}
interface IPrimaryPackagingInfo {
  primaryPackagingName: IPrimaryPackagingName;
}
interface IPrimaryPackagingName {
  value: string;
}
interface IPackaging1Quantity {
  value: string;
}
interface IPackaging2Quantity {
  value: string;
}
interface ISumaryPackagingQuantity {
  value: string;
}
interface IMNNNormName {
  value: string;
}
interface IDosageNormName {
  value: string;
}
interface IMedicamentalFormNormName {
  value: string;
}
interface IDosageUser {
  dosageUserOKEI: IDosageUserOKEI;
  dosageUserName: IDosageUserName;
}
interface IDosageUserOKEI {
  code: ICode;
  fullName: IFullName;
}
interface IDosageUserName {
  value: string;
}
interface IConsumerPackagesQuantity {
  value: string;
}
interface ISumaryDrugQuantity {
  value: string;
}
interface IPackagePrice {
  value: string;
}
interface IVATRUR {
  value: string;
}
interface IDrugSeries {
  value: string;
}
interface IExpirationDate {
  value: string;
}
interface IIsZNVLP {
  value: string;
}
interface IFulfilmentCostRUR {
  value: string;
}
interface IPricesZNVLPInfo {
  maxSalesPrice: IMaxSalesPrice;
  actualSalesPrice: IActualSalesPrice;
  wholesaleAllowancesRUR: IWholesaleAllowancesRUR;
  wholesaleAllowancesInProcent: IWholesaleAllowancesInProcent;
}
interface IMaxSalesPrice {
  value: string;
}
interface IActualSalesPrice {
  value: string;
}
interface IWholesaleAllowancesRUR {
  value: string;
}
interface IWholesaleAllowancesInProcent {
  value: string;
}
interface IQuantityDrugContractSubject {
  sid: ISid;
  drugProductInfo: IDrugProductInfo;
  product: IProduct;
  consumerPackagesQuantity: IConsumerPackagesQuantity;
  sumaryDrugQuantity: ISumaryDrugQuantity;
  packagePrice: IPackagePrice;
  VATRate: IVATRate;
  VATRUR: IVATRUR;
  drugSeries: IDrugSeries;
  expirationDate: IExpirationDate;
  isZNVLP: IIsZNVLP;
  pricesZNVLPInfo: IPricesZNVLPInfo;
  originCountry: IOriginCountry;
  registrationCountry: IRegistrationCountry;
  fulfilmentCostRUR: IFulfilmentCostRUR;
}
interface IDocAcceptanceItem {
  sid: ISid;
  name: IName;
  documentDate: IDocumentDate;
  documentNum: IDocumentNum;
}
interface IAmountsReducedByTaxesInfo {
  amountsReducedByTaxeInfo: IAmountsReducedByTaxeInfo;
  total: ITotal;
}
interface IAmountsReducedByTaxeInfo {
  taxeInfo: ITaxeInfo;
  sum: ISum;
}
interface ITaxeInfo {
  'ns2:code': {
    value: string;
  };
  'ns2:name': {
    value: string;
  };
}
interface ISum {
  value: string;
}
interface ITotal {
  value: string;
}
