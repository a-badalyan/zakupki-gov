export interface IContract {
  'ns3:export': {
    'ns3:contract': {
      id: IId;
      placementDate: IPlacementDate;
      publishDate: IPublishDate;
      versionNumber: IVersionNumber;
      foundation: IFoundation;
      'conclusionContractSt95Ch17.1': {
        value: string;
      };
      customer: ICustomer;
      placer: IPlacer;
      finances: IFinances;
      signDate: ISignDate;
      regNum: IRegNum;
      number: INumber;
      contractSubject: IContractSubject;
      isOptimyStart: IIsOptimyStart;
      contractLifeCycle: IContractLifeCycle;
      isResidentialPremisesPurchase: IIsResidentialPremisesPurchase;
      priceInfo: IPriceInfo;
      executionPeriod: IExecutionPeriod;
      deliveryPlaceInfo: IDeliveryPlaceInfo;
      products: IProducts;
      suppliersInfo?: ISuppliersInfo;
      href: IHref;
      printForm: IPrintForm;
      scanDocuments: IScanDocuments;
      modification: IModification;
      currentContractStage: ICurrentContractStage;
      okpd2okved2: IOkpd2okved2;
      isUnilateralRefusal: IIsUnilateralRefusal;
    };
  };
}
interface IId {
  value: string;
}
interface IPlacementDate {
  value: string;
}
interface IPublishDate {
  value: Date;
}
interface IVersionNumber {
  value: string;
}
interface IFoundation {
  fcsOrder: IFcsOrder;
}
interface IFcsOrder {
  singleCustomer?: ISingleCustomer;
  order?: IOrder;
}
interface ISingleCustomer {
  reason: IReason;
  purchaseCode?: IPurchaseCode;
  tenderPlan2020Info?: ITenderPlan2020Info;
  attachments?: IAttachments;
}
interface IReason {
  code: ICode;
  name: IName;
}
interface ICode {
  value: string;
}
interface IName {
  value: string;
}
interface IPurchaseCode {
  value: string;
}
interface ITenderPlan2020Info {
  'ns4:plan2020Number': {
    value: string;
  };
  'ns4:position2020Number': {
    value: string;
  };
}
interface ICustomer {
  regNum: IRegNum;
  consRegistryNum: IConsRegistryNum;
  fullName: IFullName;
  inn: IInn;
  kpp: IKpp;
  legalForm: ILegalForm;
  OKPO: IOKPO;
  customerCode: ICustomerCode;
  organizationTypeCode: IOrganizationTypeCode;
  customerAccountsDetails?: ICustomerAccountsDetails;
  shortName?: IShortName;
}
interface IRegNum {
  value: string;
}
interface IConsRegistryNum {
  value: string;
}
interface IFullName {
  value: string;
}
interface IInn {
  value: string;
}
interface IKpp {
  value: string;
}
interface ILegalForm {
  code: ICode;
  singularName: ISingularName;
}
interface ISingularName {
  value: string;
}
interface IOKPO {
  value: string;
}
interface ICustomerCode {
  value: string;
}
interface IOrganizationTypeCode {
  value: string;
}
interface ICustomerAccountsDetails {
  customerAccountDetails: ICustomerAccountDetails | ICustomerAccountDetails[];
}
interface ICustomerAccountDetails {
  'ns4:sid': {
    value: string;
  };
  'ns4:guid': {
    value: string;
  };
  'ns4:accountType': {
    value: string;
  };
  'ns4:personalAccountNumber': {
    value: string;
  };
  'ns4:creditOrgName': {
    value: string;
  };
  'ns4:detailsCreditOrgText': {
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
  'ns4:externalSid'?: {
    value: string;
  };
  electronicContractSid?: IElectronicContractSid;
}

interface IPlacer {
  responsibleOrg: IResponsibleOrg;
  responsibleRole: IResponsibleRole;
}
interface IResponsibleOrg {
  regNum: IRegNum;
  consRegistryNum: IConsRegistryNum;
  fullName: IFullName;
}
interface IResponsibleRole {
  value: string;
}
interface IFinances {
  financingPlan?: IFinancingPlan;
}
interface IFinancingPlan {
  financeSource: IFinanceSource;
  KBKsChange: IKBKsChange;
  stages: IStage | IStage[];
  KVRsChange?: IKVRsChange;
}
interface IFinanceSource {
  budgetFunds?: IBudgetFunds;
  extrabudgetFunds?: IExtrabudgetFunds;
}
interface IBudgetFunds {
  isBudgetFunds: IIsBudgetFunds;
  budget: IBudget;
  OKTMO: IOKTMO;
  budgetLevel: IBudgetLevel;
  fundsBudgetLevel?: IFundsBudgetLevel;
}
interface IIsBudgetFunds {
  value: string;
}
interface IBudget {
  code: ICode;
  name: IName;
}
interface IOKTMO {
  code: ICode;
  name: IName;
}
interface IBudgetLevel {
  value: string;
}
interface IKBKsChange {
  value: string;
}
interface IStage {
  guid: IGuid;
  startDate: IStartDate;
  sid: ISid;
  endDate: IEndDate;
  payments?: IPayment[] | IPayment;
  stagePrice?: IStagePrice;
  externalSid?: IExternalSid;
  stageAdvancePaymentSum?: IStageAdvancePaymentSum;
}

interface IGuid {
  value: string;
}
interface IStartDate {
  value: Date;
}
interface ISid {
  value: string;
}
interface IEndDate {
  value: Date;
}

interface IKBK2016 {
  value: string;
}
interface IPaymentMonth {
  value: string;
}
interface IPaymentYear {
  value: string;
}
interface IPaymentSum {
  value: string;
}
interface ISignDate {
  value: Date;
}
interface INumber {
  value: string;
}
interface IContractSubject {
  value: string;
}
interface IIsOptimyStart {
  value: string;
}
interface IContractLifeCycle {
  value: string;
}
interface IIsResidentialPremisesPurchase {
  value: string;
}
interface IPriceInfo {
  price: IPrice;
  priceType: IPriceType;
  currency: ICurrency;
  priceVAT: IPriceVAT;
  isWithHoldingUnfulfilledClaimsPenalties: IIsWithHoldingUnfulfilledClaimsPenalties;
  amountsReducedByTaxes?: IAmountsReducedByTaxes;
}
interface IPrice {
  value: string;
}
interface IPriceType {
  value: string;
}
interface ICurrency {
  code: ICode;
  name: IName;
}
interface IPriceVAT {
  value: string;
}
interface IIsWithHoldingUnfulfilledClaimsPenalties {
  value: string;
}
interface IExecutionPeriod {
  startDate: IStartDate;
  stages: IStage | IStage[];
  endDate: IEndDate;
}
interface IStagePrice {
  value: string;
}
interface IDeliveryPlaceInfo {
  "'ns4:byKLADRInfo'"?:
    | INs4ByKLADRInfoItem[]
    | {
        'ns4:deliveryPlace': {
          value: string;
        };
      }
    | {
        'ns4:countryInfo': {
          'ns2:countryCode': {
            value: string;
          };
          'ns2:countryFullName': {
            value: string;
          };
        };
        'ns4:deliveryPlace': {
          value: string;
        };
      }
    | {
        'ns4:KLADRInfo': {
          'ns4:kladrCode': {
            value: string;
          };
          'ns4:fullName': {
            value: string;
          };
        };
        'ns4:deliveryPlace': {
          value: string;
        };
        'ns4:noKladrForRegionSettlementInfo': {
          'ns4:region': {
            value: string;
          };
          'ns4:settlement': {
            value: string;
          };
        };
      };

  'ns4:byOKTMOInfo'?: {
    'ns4:OKTMOInfo': {
      'ns2:code': {
        value: string;
      };
      'ns2:name': {
        value: string;
      };
    };
    'ns4:deliveryPlace': {
      value: string;
    };
  };
}
interface INs4ByKLADRInfoItem {
  'ns4:KLADRInfo': {
    'ns4:kladrCode': {
      value: string;
    };
    'ns4:fullName': {
      value: string;
    };
  };
  'ns4:deliveryPlace': {
    value: string;
  };
  'ns4:noKladrForRegionSettlementInfo'?: {
    'ns4:region': {
      value: string;
    };
  };
}
interface IProducts {
  product: IProduct[] | IProduct;
  quantityUndefined: IQuantityUndefined;
}

interface IIndexNum {
  value: string;
}
interface IOKPD2 {
  code: ICode;
  name: IName;
}
interface IHierarchyType {
  value: string;
}
interface IType {
  value: string;
}
interface IOKEI {
  code: ICode;
  nationalCode?: INationalCode;
  trueNationalCode?: ITrueNationalCode;
  fullName: IFullName;
  nationalName?: INationalName;
  name?: IName;
}
interface INationalCode {
  value: string;
}
interface ITrueNationalCode {
  value: string;
}
interface INationalName {
  value: string;
}
interface IVolumeSpecifyingMethod {
  value: string;
}
interface IVolumeTextForm {
  value: string;
}
interface ISum {
  value: string;
}
interface IVATRate {
  value: string;
}
interface IImprovedProductReplacement {
  value: string;
}
interface IQuantityUndefined {
  value: string;
}
interface ISuppliersInfo {
  supplierInfo: ISupplierInfo | ISupplierInfo[];
}
export interface ISupplierInfo {
  legalEntityRF?: ILegalEntityRF;
  supplierAccountsDetails: ISupplierAccountsDetails;
  contractorRegistryNum?: IContractorRegistryNum;
  individualPersonRFIndEntr?: IIndividualPersonRFIndEntr;
}

interface ILegalEntityRF {
  EGRULInfo: IEGRULInfo;
  otherInfo: IOtherInfo;
  legalEntityRFSubdivision?: ILegalEntityRFSubdivision;
  legalForm?: ILegalForm;
  fullName?: IFullName;
  shortName?: IShortName;
  INN?: IINN;
  KPP?: IKPP;
  address?: IAddress;
  postAddress?: IPostAddress;
  contactInfo?: IContactInfo;
  contactEMail?: IContactEMail;
  contactPhone?: IContactPhone;
}
interface IEGRULInfo {
  OGRN: IOGRN;
  legalForm?: ILegalForm;
  fullName: IFullName;
  shortName?: IShortName;
  INN: IINN;
  KPP: IKPP;
  address: IAddress;
}
interface IOGRN {
  value: string;
}
interface IShortName {
  value: string;
}
interface IINN {
  value: string;
}
interface IKPP {
  value: string;
}
interface IAddress {
  value: string;
}
interface IOtherInfo {
  contactInfo?: IContactInfo;
  contactEMail: IContactEMail;
  contactPhone: IContactPhone;
  postAdressInfo?: IPostAdressInfo;
  statusInfo?: IStatusInfo;
  largestTaxpayerKPP?: ILargestTaxpayerKPP;
  isIP?: IIsIP;
  personalAccount?: IPersonalAccount;
}
interface IContactInfo {
  lastName: ILastName;
  firstName: IFirstName;
  middleName: IMiddleName;
}
interface ILastName {
  value: string;
}
interface IFirstName {
  value: string;
}
interface IMiddleName {
  value: string;
}
interface IContactEMail {
  value: string;
}
interface IContactPhone {
  value: string;
}
interface ISupplierAccountsDetails {
  supplierAccountDetails: ISupplierAccountDetails;
}
interface ISupplierAccountDetails {
  'ns4:sid': {
    value: string;
  };
  'ns4:guid': {
    value: string;
  };
  'ns4:accountType': {
    value: string;
  };
  'ns4:creditOrgName': {
    value: string;
  };
  'ns4:detailsCreditOrgText': {
    value: string;
  };
  'ns4:bankAccountNumber': {
    value: string;
  };
  'ns4:bik': {
    value: string;
  };
  'ns4:corrAccountNumber'?: {
    value: string;
  };
  'ns4:counterpartyName'?: {
    value: string;
  };
  'ns4:externalSid'?: {
    value: string;
  };
  'ns4:counterparty160Name'?: {
    value: string;
  };
  'ns4:personalAccountNumber'?: {
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
  'ns4:KBK'?: {
    value: string;
  };
  electronicContractSid?: IElectronicContractSid;
}
interface IHref {
  value: string;
}
interface IPrintForm {
  url: IUrl;
  docRegNumber: IDocRegNumber;
}
interface IUrl {
  value: string;
}
interface IDocRegNumber {
  value: string;
}
interface IScanDocuments {
  attachment?: IAttachment | IAttachment[];
  CPEPAttachment?: ICPEPAttachment | ICPEPAttachment[];
}
interface IAttachment {
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
interface ICryptoSigns {
  signature: ISignatureItem[];
}
interface ISignatureItem {
  value: string;
}
interface IModification {
  contractChange?: IContractChange;
  attachments?: IAttachments;
  errorCorrection?: IErrorCorrection;
}
interface IContractChange {
  reason: IReason;
  document: IDocument;
}
interface IDocument {
  code: ICode;
  name: IName;
  base: IBase;
  documentDate: IDocumentDate;
}
interface IBase {
  value: string;
}
interface IDocumentDate {
  value: string;
}
interface IAttachments {
  attachment: IAttachment[] | IAttachment;
}

interface ICurrentContractStage {
  value: string;
}
interface IOkpd2okved2 {
  value: string;
}
interface IIsUnilateralRefusal {
  value: string;
}
interface IOrder {
  notificationNumber: INotificationNumber;
  lotNumber: ILotNumber;
  placing: IPlacing;
  singleCustomer?: ISingleCustomer;
  placingSingleCustomerText: IPlacingSingleCustomerText;
  purchaseCode: IPurchaseCode;
  contractProjectNumber?: IContractProjectNumber;
  tenderPlan2020Info?: ITenderPlan2020Info;
  isStructuredForm?: IIsStructuredForm;
  tenderPlanInfo?: ITenderPlanInfo;
}
interface INotificationNumber {
  value: string;
}
interface ILotNumber {
  value: string;
}
interface IPlacing {
  value: string;
}
interface IPlacingSingleCustomerText {
  value: string;
}
interface IContractProjectNumber {
  value: string;
}
interface IFundsBudgetLevel {
  value: string;
}
interface IExternalSid {
  value: string;
}
interface IPayment {
  KBK2016?: IKBK2016;
  paymentYear: IPaymentYear;
  paymentSum: IPaymentSum;
  paymentMonth?: IPaymentMonth;
  KVR?: IKVR;
}

export interface IProtocolDate {
  value: string;
}
export interface IDocumentBase {
  value: string;
}
export interface IDocumentCode {
  value: string;
}
export interface IEnforcement {
  bankGuarantee?: IBankGuarantee;
  cashAccount?: ICashAccount;
}
interface IBankGuarantee {
  regNumberNotPublishedOnEIS: IRegNumberNotPublishedOnEIS;
  docNumberNotPublishedOnEIS: IDocNumberNotPublishedOnEIS;
  currency: ICurrency;
  guaranteeAmount: IGuaranteeAmount;
  currencyRate?: ICurrencyRate;
}
interface IRegNumberNotPublishedOnEIS {
  value: string;
}
interface IDocNumberNotPublishedOnEIS {
  value: string;
}
interface IGuaranteeAmount {
  value: string;
}
export interface IProduct {
  purchaseObjectSid?: IPurchaseObjectSid;
  sid: ISid;
  externalSid?: IExternalSid;
  guid: IGuid;
  indexNum: IIndexNum;
  KTRU?: IKTRU;
  name: IName;
  hierarchyType: IHierarchyType;
  type?: IType;
  OKEI: IOKEI;
  price: IPrice;
  volumeSpecifyingMethod: IVolumeSpecifyingMethod;
  quantity?: IQuantity;
  sum?: ISum;
  VATRate?: IVATRate;
  improvedProductReplacement: IImprovedProductReplacement;
  OKPD2?: IOKPD2;
  volumeTextForm?: IVolumeTextForm;
  drugPurchaseObjectInfo?: IDrugPurchaseObjectInfo;
  originCountry?: IOriginCountry | IOriginCountry[];
  isMedicalProduct?: IIsMedicalProduct;
  medicalProductInfo?: IMedicalProductInfo;
  electronicContractObjectSid?: IElectronicContractObjectSid;
}

interface IPurchaseObjectSid {
  value: string;
}
interface IKTRU {
  code: ICode;
  name: IName;
  versionId: IVersionId;
  versionNumber: IVersionNumber;
  OKPD2: IOKPD2;
  characteristics?: ICharacteristics;
}
interface IVersionId {
  value: string;
}
interface IQuantity {
  value: string;
}
export interface ICounterpartiesInfo {
  counterpartyInfo: ICounterpartyInfo;
}
interface ICounterpartyInfo {
  'ns4:payingPenaltiesInfo': {
    'ns2:regNum': {
      value: string;
    };
    'ns2:fullName': {
      value: string;
    };
    'ns4:inn': {
      value: string;
    };
    'ns4:kpp': {
      value: string;
    };
  };
  'ns4:counterpartyAccountsDetails': {
    'ns4:counterpartyAccountDetails': {
      'ns4:sid': {
        value: string;
      };
      'ns4:externalSid': {
        value: string;
      };
      'ns4:guid': {
        value: string;
      };
      'ns4:accountType': {
        value: string;
      };
      'ns4:personalAccountNumber': {
        value: string;
      };
      'ns4:creditOrgName': {
        value: string;
      };
      'ns4:detailsCreditOrgText': {
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
      'ns4:OKTMOInfo': {
        'ns4:OKTMO': {
          'ns2:code': {
            value: string;
          };
          'ns2:name': {
            value: string;
          };
        };
      };
      'ns4:KBK': {
        value: string;
      };
    };
  };
}
interface IPostAdressInfo {
  mailingAdress: IMailingAdress;
  mailFacilityName?: IMailFacilityName;
  postBoxNumber?: IPostBoxNumber;
}
interface IMailingAdress {
  value: string;
}
interface IMailFacilityName {
  value: string;
}
interface IPostBoxNumber {
  value: string;
}
interface IContractorRegistryNum {
  value: string;
}
interface ICPEPAttachment {
  publishedContentId: IPublishedContentId;
  fileName: IFileName;
  docDescription: IDocDescription;
  docRegNumber: IDocRegNumber;
  url: IUrl;
  cryptoSigns: ICryptoSigns;
}

interface IErrorCorrection {
  description: IDescription;
}
interface IDescription {
  value: string;
}
export interface IExternalId {
  value: string;
}
export interface IQuantityContractStages {
  value: string;
}
interface ICashAccount {
  currency: ICurrency;
  amount: IAmount;
  currencyRate?: ICurrencyRate;
}
interface IAmount {
  value: string;
}
interface ICurrencyRate {
  rate: IRate;
  raiting: IRaiting;
}
interface IRate {
  value: string;
}
interface IRaiting {
  value: string;
}
export interface ISt14Info {
  NPAsInfo: INPAsInfo[] | INPAsInfo;
}

interface INPAInfo {
  'ns2:code': {
    value: string;
  };
  'ns2:name': {
    value: string;
  };
  'ns2:shortName': {
    value: string;
  };
}
interface IRequirementType {
  value: string;
}
interface IRequirementName {
  value: string;
}
export interface IQualityGuaranteeInfo {
  notPublishedOnEIS?: INotPublishedOnEIS;
  warrantyReqsText: IWarrantyReqsText;
  isQAEnsuramceRequired: IIsQAEnsuramceRequired;
  manufacturerWarrantyReqsText?: IManufacturerWarrantyReqsText;
  providedPeriod?: IProvidedPeriod;
}
interface INotPublishedOnEIS {
  value: string;
}
interface IWarrantyReqsText {
  value: string;
}
interface IIsQAEnsuramceRequired {
  value: string;
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
interface IIsMedicalProduct {
  value: string;
}
interface IMedicalProductInfo {
  medicalProductCode: IMedicalProductCode;
  medicalProductName: IMedicalProductName;
}
interface IMedicalProductCode {
  value: string;
}
interface IMedicalProductName {
  value: string;
}
interface ICharacteristics {
  characteristicsUsingTextForm?:
    | ICharacteristicsUsingTextForm
    | ICharacteristicsUsingTextForm[];
  characteristicsUsingReferenceInfo?:
    | ICharacteristicsUsingReferenceInfoItem[]
    | ICharacteristicsUsingReferenceInfo;
}
interface ICharacteristicsUsingTextForm {
  name: IName;
  type: IType;
  values: IValues;
}
interface IValues {
  value: IValue | (IValue | IValueItem[]);
}
interface IValue {
  qualityDescription?: IQualityDescription;
  OKEI?: IOKEI;
  rangeSet?: IRangeSet;
  valueSet?: IValueSet;
}
interface IQualityDescription {
  value: string;
}
interface IStatusInfo {
  'ns2:code': {
    value: string;
  };
  'ns2:name'?: {
    value: string;
  };
}
export interface IIsDDU {
  value: string;
}

export interface IAdvancePaymentSum {
  sumInPercents: ISumInPercents;
  priceValue: IPriceValue;
}
interface ISumInPercents {
  value: string;
}
interface IPriceValue {
  value: string;
}
interface IStageAdvancePaymentSum {
  priceValue: IPriceValue;
}

interface ILegalEntityRFSubdivision {
  isSubdivision: IIsSubdivision;
  EGRULInfo: IEGRULInfo;
}
interface IIsSubdivision {
  value: string;
}
interface IExtrabudgetFunds {
  isExtrabudgetFunds: IIsExtrabudgetFunds;
  extrabudget: IExtrabudget;
}
interface IIsExtrabudgetFunds {
  value: string;
}
interface IExtrabudget {
  code: ICode;
  name: IName;
}
interface IKVR {
  value: string;
}
interface ICharacteristicsUsingReferenceInfoItem {
  name: IName;
  type: IType;
  kind: IKind;
  values: IValues;
}
interface IKind {
  value: string;
}
interface IValueItem {
  qualityDescription: IQualityDescription;
}
interface ILargestTaxpayerKPP {
  value: string;
}
export interface ISubContractorsSum {
  sumInPercents: ISumInPercents;
  priceValueRUR: IPriceValueRUR;
}
interface IPriceValueRUR {
  value: string;
}
export interface IDefenseContractNumber {
  value: string;
}
export interface IIsGOZ {
  value: string;
}
interface IRangeSet {
  valueRange: IValueRange;
}
interface IValueRange {
  maxMathNotation?: IMaxMathNotation;
  max?: IMax;
  minMathNotation?: IMinMathNotation;
  min?: IMin;
}
interface IMaxMathNotation {
  value: string;
}
interface IMax {
  value: string;
}
interface IMinMathNotation {
  value: string;
}
interface IMin {
  value: string;
}

interface IKVRsChange {
  value: string;
}
interface IManufacturerWarrantyReqsText {
  value: string;
}
interface IDrugPurchaseObjectInfo {
  drugInfoUsingReferenceInfo: IDrugInfoUsingReferenceInfo;
}
interface IDrugInfoUsingReferenceInfo {
  MNNsInfo: IMNNsInfo;
  isZNVLP: IIsZNVLP;
  expirationDateCustomFormatInfo?: IExpirationDateCustomFormatInfo;
}
interface IMNNsInfo {
  MNNInfo: IMNNInfo;
}
interface IMNNInfo {
  MNNExternalCode: IMNNExternalCode;
  MNNDrugCode: IMNNDrugCode;
  MNNName: IMNNName;
  dosageUser: IDosageUser;
  positionsTradeName: IPositionsTradeName;
}
interface IMNNExternalCode {
  value: string;
}
interface IMNNDrugCode {
  value: string;
}
interface IMNNName {
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
interface IPositionsTradeName {
  positionTradeName: IPositionTradeName | IPositionTradeName[];
}
interface IPositionTradeName {
  guid: IGuid;
  sid: ISid;
  positionTradeNameExternalCode: IPositionTradeNameExternalCode;
  drugCode: IDrugCode;
  tradeInfo: ITradeInfo;
  certificateNumber: ICertificateNumber;
  medicamentalFormInfo: IMedicamentalFormInfo;
  dosageInfo: IDosageInfo;
  certificateKeeperName: ICertificateKeeperName;
  manufacturerInfo: IManufacturerInfo;
  packagingsInfo: IPackagingsInfo;
  MNNNormName: IMNNNormName;
  dosageNormName: IDosageNormName;
  medicamentalFormNormName: IMedicamentalFormNormName;
}
interface IPositionTradeNameExternalCode {
  value: string;
}
interface IDrugCode {
  value: string;
}
interface ITradeInfo {
  tradeName: ITradeName;
}
interface ITradeName {
  value: string;
}
interface ICertificateNumber {
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
  dosageOKEI: IDosageOKEI;
  dosageValue: IDosageValue;
  dosageGRLSValue: IDosageGRLSValue;
  dosageUserName: IDosageUserName;
}
interface IDosageName {
  value: string;
}
interface IDosageOKEI {
  code: ICode;
  nationalCode: INationalCode;
  name: IName;
}
interface IDosageValue {
  value: string;
}
interface IDosageGRLSValue {
  value: string;
}
interface ICertificateKeeperName {
  value: string;
}
interface IManufacturerInfo {
  manufacturerOKSM: IManufacturerOKSM;
  manufacturerName: IManufacturerName;
}
interface IManufacturerOKSM {
  countryCode: ICountryCode;
  countryFullName: ICountryFullName;
}
interface IManufacturerName {
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
  completeness: ICompleteness;
  drugQuantity: IDrugQuantity;
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
interface ICompleteness {
  value: string;
}
interface IDrugQuantity {
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
interface IIsZNVLP {
  value: string;
}

interface INPAsInfo {
  NPAInfo: INPAInfo;
  requirementType: IRequirementType;
  requirementName: IRequirementName;
}

interface IValueSet {
  concreteValue: IConcreteValue;
}
interface IConcreteValue {
  value: string;
}
interface ICharacteristicsUsingReferenceInfo {
  name: IName;
  type: IType;
  kind: IKind;
  values: IValues;
}
interface IIndividualPersonRFIndEntr {
  EGRIPInfo: IEGRIPInfo;
  otherInfo: IOtherInfo;
}
interface IEGRIPInfo {
  OGRNIP: IOGRNIP;
  lastName: ILastName;
  firstName: IFirstName;
  middleName: IMiddleName;
  INN: IINN;
  address: IAddress;
}
interface IOGRNIP {
  value: string;
}
interface IIsIP {
  value: string;
}

interface IProvidedPeriod {
  otherPeriodText: IOtherPeriodText;
}
interface IOtherPeriodText {
  value: string;
}
interface IExpirationDateCustomFormatInfo {
  expirationDateMonthYear: IExpirationDateMonthYear;
}
interface IExpirationDateMonthYear {
  month: IMonth;
  year: IYear;
}
interface IMonth {
  value: string;
}
interface IYear {
  value: string;
}
export interface IMedicalDocuments {
  attachment: IAttachment;
}
interface IIsStructuredForm {
  value: string;
}
interface IElectronicContractSid {
  value: string;
}
interface IElectronicContractObjectSid {
  value: string;
}

interface IAmountsReducedByTaxes {
  value: string;
}
export interface IConstructionWorksInfo {
  isConstructionWorks: IIsConstructionWorks;
  constructionWorkGroup: IConstructionWorkGroup;
}
interface IIsConstructionWorks {
  value: string;
}
interface IConstructionWorkGroup {
  code: ICode;
  name: IName;
}
export interface IBankSupportCRNewInfo {
  'ns4:bankSupportContractRequired': {
    value: string;
  };
  'ns4:treasurySupportContractInfo': {
    'ns4:treasurySupportContractRequired': {
      value: string;
    };
    'ns4:treasurySupportContractType': {
      value: string;
    };
  };
}
interface IPersonalAccount {
  value: string;
}
export interface ISingleSupplierP25Part1St93Documents {
  attachment: IAttachment;
}
interface ITenderPlanInfo {
  plan2017Number: IPlan2017Number;
  position2017Number: IPosition2017Number;
}
interface IPlan2017Number {
  value: string;
}
interface IPosition2017Number {
  value: string;
}
export interface IEnergyServiceContractInfo {
  value: string;
}
export interface ISuppliers {
  supplier: ISupplier;
}
interface ISupplier {
  legalEntityRF?: ILegalEntityRF;
  supplierAccountsDetails: ISupplierAccountsDetails;
  individualPersonRF?: IIndividualPersonRF;
}
interface IPostAddress {
  value: string;
}
interface IIndividualPersonRF {
  lastName: ILastName;
  firstName: IFirstName;
  middleName: IMiddleName;
  INN: IINN;
  isIP: IIsIP;
  address: IAddress;
  contactEMail: IContactEMail;
  contactPhone: IContactPhone;
  isCulture: IIsCulture;
}
interface IIsCulture {
  value: string;
}
