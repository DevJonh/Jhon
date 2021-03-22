/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  iconTechnicalAbilities: Array<TechnicalAbilities>;
  imageProject: Array<Project>;
  certificationCertification: Array<Certification>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetIconTechnicalAbilitiesArgs = {
  where?: Maybe<TechnicalAbilitiesWhereInput>;
  orderBy?: Maybe<TechnicalAbilitiesOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetImageProjectArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetCertificationCertificationArgs = {
  where?: Maybe<CertificationWhereInput>;
  orderBy?: Maybe<CertificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  iconTechnicalAbilities?: Maybe<TechnicalAbilitiesCreateManyInlineInput>;
  imageProject?: Maybe<ProjectCreateManyInlineInput>;
  certificationCertification?: Maybe<CertificationCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  iconTechnicalAbilities_every?: Maybe<TechnicalAbilitiesWhereInput>;
  iconTechnicalAbilities_some?: Maybe<TechnicalAbilitiesWhereInput>;
  iconTechnicalAbilities_none?: Maybe<TechnicalAbilitiesWhereInput>;
  imageProject_every?: Maybe<ProjectWhereInput>;
  imageProject_some?: Maybe<ProjectWhereInput>;
  imageProject_none?: Maybe<ProjectWhereInput>;
  certificationCertification_every?: Maybe<CertificationWhereInput>;
  certificationCertification_some?: Maybe<CertificationWhereInput>;
  certificationCertification_none?: Maybe<CertificationWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  iconTechnicalAbilities?: Maybe<TechnicalAbilitiesUpdateManyInlineInput>;
  imageProject?: Maybe<ProjectUpdateManyInlineInput>;
  certificationCertification?: Maybe<CertificationUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  iconTechnicalAbilities_every?: Maybe<TechnicalAbilitiesWhereInput>;
  iconTechnicalAbilities_some?: Maybe<TechnicalAbilitiesWhereInput>;
  iconTechnicalAbilities_none?: Maybe<TechnicalAbilitiesWhereInput>;
  imageProject_every?: Maybe<ProjectWhereInput>;
  imageProject_some?: Maybe<ProjectWhereInput>;
  imageProject_none?: Maybe<ProjectWhereInput>;
  certificationCertification_every?: Maybe<CertificationWhereInput>;
  certificationCertification_some?: Maybe<CertificationWhereInput>;
  certificationCertification_none?: Maybe<CertificationWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Certification = Node & {
  __typename?: 'Certification';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Certification>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  count: Scalars['Int'];
  certification: Asset;
  /** List of Certification versions */
  history: Array<Version>;
};


export type CertificationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CertificationCertificationArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CertificationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CertificationConnectInput = {
  /** Document to connect */
  where: CertificationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CertificationConnection = {
  __typename?: 'CertificationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CertificationEdge>;
  aggregate: Aggregate;
};

export type CertificationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  count: Scalars['Int'];
  certification: AssetCreateOneInlineInput;
};

export type CertificationCreateManyInlineInput = {
  /** Create and connect multiple existing Certification documents */
  create?: Maybe<Array<CertificationCreateInput>>;
  /** Connect multiple existing Certification documents */
  connect?: Maybe<Array<CertificationWhereUniqueInput>>;
};

export type CertificationCreateOneInlineInput = {
  /** Create and connect one Certification document */
  create?: Maybe<CertificationCreateInput>;
  /** Connect one existing Certification document */
  connect?: Maybe<CertificationWhereUniqueInput>;
};

/** An edge in a connection. */
export type CertificationEdge = {
  __typename?: 'CertificationEdge';
  /** The item at the end of the edge. */
  node: Certification;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CertificationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CertificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CertificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CertificationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  count?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  count_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  count_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  count_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  count_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  count_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  count_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  count_gte?: Maybe<Scalars['Int']>;
  certification?: Maybe<AssetWhereInput>;
};

export enum CertificationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  CountAsc = 'count_ASC',
  CountDesc = 'count_DESC'
}

export type CertificationUpdateInput = {
  count?: Maybe<Scalars['Int']>;
  certification?: Maybe<AssetUpdateOneInlineInput>;
};

export type CertificationUpdateManyInlineInput = {
  /** Create and connect multiple Certification documents */
  create?: Maybe<Array<CertificationCreateInput>>;
  /** Connect multiple existing Certification documents */
  connect?: Maybe<Array<CertificationConnectInput>>;
  /** Override currently-connected documents with multiple existing Certification documents */
  set?: Maybe<Array<CertificationWhereUniqueInput>>;
  /** Update multiple Certification documents */
  update?: Maybe<Array<CertificationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Certification documents */
  upsert?: Maybe<Array<CertificationUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Certification documents */
  disconnect?: Maybe<Array<CertificationWhereUniqueInput>>;
  /** Delete multiple Certification documents */
  delete?: Maybe<Array<CertificationWhereUniqueInput>>;
};

export type CertificationUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type CertificationUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CertificationWhereInput;
  /** Update many input */
  data: CertificationUpdateManyInput;
};

export type CertificationUpdateOneInlineInput = {
  /** Create and connect one Certification document */
  create?: Maybe<CertificationCreateInput>;
  /** Update single Certification document */
  update?: Maybe<CertificationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Certification document */
  upsert?: Maybe<CertificationUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Certification document */
  connect?: Maybe<CertificationWhereUniqueInput>;
  /** Disconnect currently connected Certification document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Certification document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CertificationUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CertificationWhereUniqueInput;
  /** Document to update */
  data: CertificationUpdateInput;
};

export type CertificationUpsertInput = {
  /** Create document if it didn't exist */
  create: CertificationCreateInput;
  /** Update document if it exists */
  update: CertificationUpdateInput;
};

export type CertificationUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CertificationWhereUniqueInput;
  /** Upsert data */
  data: CertificationUpsertInput;
};

/** Identifies documents */
export type CertificationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CertificationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CertificationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CertificationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  count?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  count_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  count_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  count_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  count_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  count_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  count_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  count_gte?: Maybe<Scalars['Int']>;
  certification?: Maybe<AssetWhereInput>;
};

/** References Certification record uniquely */
export type CertificationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  count?: Maybe<Scalars['Int']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type Formation = Node & {
  __typename?: 'Formation';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Formation>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  period: Scalars['String'];
  college: Scalars['String'];
  course: Scalars['String'];
  formationType: Scalars['String'];
  /** List of Formation versions */
  history: Array<Version>;
};


export type FormationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FormationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** A connection to a list of items. */
export type FormationConnection = {
  __typename?: 'FormationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FormationEdge>;
  aggregate: Aggregate;
};

export type FormationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  period: Scalars['String'];
  college: Scalars['String'];
  course: Scalars['String'];
  formationType: Scalars['String'];
};

/** An edge in a connection. */
export type FormationEdge = {
  __typename?: 'FormationEdge';
  /** The item at the end of the edge. */
  node: Formation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type FormationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  period?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  period_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  period_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  period_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  period_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  period_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  period_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  period_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  period_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  period_not_ends_with?: Maybe<Scalars['String']>;
  college?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  college_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  college_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  college_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  college_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  college_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  college_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  college_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  college_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  college_not_ends_with?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  course_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  course_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  course_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  course_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  course_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  course_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  course_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  course_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  course_not_ends_with?: Maybe<Scalars['String']>;
  formationType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  formationType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  formationType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  formationType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  formationType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  formationType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  formationType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  formationType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  formationType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  formationType_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FormationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  CollegeAsc = 'college_ASC',
  CollegeDesc = 'college_DESC',
  CourseAsc = 'course_ASC',
  CourseDesc = 'course_DESC',
  FormationTypeAsc = 'formationType_ASC',
  FormationTypeDesc = 'formationType_DESC'
}

export type FormationUpdateInput = {
  period?: Maybe<Scalars['String']>;
  college?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['String']>;
  formationType?: Maybe<Scalars['String']>;
};

export type FormationUpdateManyInput = {
  period?: Maybe<Scalars['String']>;
  college?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['String']>;
  formationType?: Maybe<Scalars['String']>;
};

export type FormationUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormationWhereInput;
  /** Update many input */
  data: FormationUpdateManyInput;
};

export type FormationUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormationWhereUniqueInput;
  /** Document to update */
  data: FormationUpdateInput;
};

export type FormationUpsertInput = {
  /** Create document if it didn't exist */
  create: FormationCreateInput;
  /** Update document if it exists */
  update: FormationUpdateInput;
};

export type FormationUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormationWhereUniqueInput;
  /** Upsert data */
  data: FormationUpsertInput;
};

/** Identifies documents */
export type FormationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  period?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  period_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  period_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  period_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  period_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  period_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  period_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  period_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  period_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  period_not_ends_with?: Maybe<Scalars['String']>;
  college?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  college_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  college_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  college_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  college_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  college_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  college_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  college_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  college_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  college_not_ends_with?: Maybe<Scalars['String']>;
  course?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  course_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  course_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  course_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  course_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  course_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  course_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  course_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  course_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  course_not_ends_with?: Maybe<Scalars['String']>;
  formationType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  formationType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  formationType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  formationType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  formationType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  formationType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  formationType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  formationType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  formationType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  formationType_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Formation record uniquely */
export type FormationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one certification */
  createCertification?: Maybe<Certification>;
  /** Update one certification */
  updateCertification?: Maybe<Certification>;
  /** Delete one certification from _all_ existing stages. Returns deleted document. */
  deleteCertification?: Maybe<Certification>;
  /** Upsert one certification */
  upsertCertification?: Maybe<Certification>;
  /** Publish one certification */
  publishCertification?: Maybe<Certification>;
  /** Unpublish one certification from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCertification?: Maybe<Certification>;
  /** Update many Certification documents */
  updateManyCertificationsConnection: CertificationConnection;
  /** Delete many Certification documents, return deleted documents */
  deleteManyCertificationsConnection: CertificationConnection;
  /** Publish many Certification documents */
  publishManyCertificationsConnection: CertificationConnection;
  /** Find many Certification documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCertificationsConnection: CertificationConnection;
  /**
   * Update many certifications
   * @deprecated Please use the new paginated many mutation (updateManyCertificationsConnection)
   */
  updateManyCertifications: BatchPayload;
  /**
   * Delete many Certification documents
   * @deprecated Please use the new paginated many mutation (deleteManyCertificationsConnection)
   */
  deleteManyCertifications: BatchPayload;
  /**
   * Publish many Certification documents
   * @deprecated Please use the new paginated many mutation (publishManyCertificationsConnection)
   */
  publishManyCertifications: BatchPayload;
  /**
   * Unpublish many Certification documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCertificationsConnection)
   */
  unpublishManyCertifications: BatchPayload;
  /** Create one formation */
  createFormation?: Maybe<Formation>;
  /** Update one formation */
  updateFormation?: Maybe<Formation>;
  /** Delete one formation from _all_ existing stages. Returns deleted document. */
  deleteFormation?: Maybe<Formation>;
  /** Upsert one formation */
  upsertFormation?: Maybe<Formation>;
  /** Publish one formation */
  publishFormation?: Maybe<Formation>;
  /** Unpublish one formation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormation?: Maybe<Formation>;
  /** Update many Formation documents */
  updateManyFormationsConnection: FormationConnection;
  /** Delete many Formation documents, return deleted documents */
  deleteManyFormationsConnection: FormationConnection;
  /** Publish many Formation documents */
  publishManyFormationsConnection: FormationConnection;
  /** Find many Formation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormationsConnection: FormationConnection;
  /**
   * Update many formations
   * @deprecated Please use the new paginated many mutation (updateManyFormationsConnection)
   */
  updateManyFormations: BatchPayload;
  /**
   * Delete many Formation documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormationsConnection)
   */
  deleteManyFormations: BatchPayload;
  /**
   * Publish many Formation documents
   * @deprecated Please use the new paginated many mutation (publishManyFormationsConnection)
   */
  publishManyFormations: BatchPayload;
  /**
   * Unpublish many Formation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormationsConnection)
   */
  unpublishManyFormations: BatchPayload;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Create one technicalAbilities */
  createTechnicalAbilities?: Maybe<TechnicalAbilities>;
  /** Update one technicalAbilities */
  updateTechnicalAbilities?: Maybe<TechnicalAbilities>;
  /** Delete one technicalAbilities from _all_ existing stages. Returns deleted document. */
  deleteTechnicalAbilities?: Maybe<TechnicalAbilities>;
  /** Upsert one technicalAbilities */
  upsertTechnicalAbilities?: Maybe<TechnicalAbilities>;
  /** Publish one technicalAbilities */
  publishTechnicalAbilities?: Maybe<TechnicalAbilities>;
  /** Unpublish one technicalAbilities from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTechnicalAbilities?: Maybe<TechnicalAbilities>;
  /** Update many TechnicalAbilities documents */
  updateManyTechnicalAbilitieConnection: TechnicalAbilitiesConnection;
  /** Delete many TechnicalAbilities documents, return deleted documents */
  deleteManyTechnicalAbilitieConnection: TechnicalAbilitiesConnection;
  /** Publish many TechnicalAbilities documents */
  publishManyTechnicalAbilitieConnection: TechnicalAbilitiesConnection;
  /** Find many TechnicalAbilities documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTechnicalAbilitieConnection: TechnicalAbilitiesConnection;
  /**
   * Update many technicalAbilitie
   * @deprecated Please use the new paginated many mutation (updateManyTechnicalAbilitieConnection)
   */
  updateManyTechnicalAbilitie: BatchPayload;
  /**
   * Delete many TechnicalAbilities documents
   * @deprecated Please use the new paginated many mutation (deleteManyTechnicalAbilitieConnection)
   */
  deleteManyTechnicalAbilitie: BatchPayload;
  /**
   * Publish many TechnicalAbilities documents
   * @deprecated Please use the new paginated many mutation (publishManyTechnicalAbilitieConnection)
   */
  publishManyTechnicalAbilitie: BatchPayload;
  /**
   * Unpublish many TechnicalAbilities documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTechnicalAbilitieConnection)
   */
  unpublishManyTechnicalAbilitie: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCertificationArgs = {
  data: CertificationCreateInput;
};


export type MutationUpdateCertificationArgs = {
  where: CertificationWhereUniqueInput;
  data: CertificationUpdateInput;
};


export type MutationDeleteCertificationArgs = {
  where: CertificationWhereUniqueInput;
};


export type MutationUpsertCertificationArgs = {
  where: CertificationWhereUniqueInput;
  upsert: CertificationUpsertInput;
};


export type MutationPublishCertificationArgs = {
  where: CertificationWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishCertificationArgs = {
  where: CertificationWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyCertificationsConnectionArgs = {
  where?: Maybe<CertificationManyWhereInput>;
  data: CertificationUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCertificationsConnectionArgs = {
  where?: Maybe<CertificationManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCertificationsConnectionArgs = {
  where?: Maybe<CertificationManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyCertificationsConnectionArgs = {
  where?: Maybe<CertificationManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyCertificationsArgs = {
  where?: Maybe<CertificationManyWhereInput>;
  data: CertificationUpdateManyInput;
};


export type MutationDeleteManyCertificationsArgs = {
  where?: Maybe<CertificationManyWhereInput>;
};


export type MutationPublishManyCertificationsArgs = {
  where?: Maybe<CertificationManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyCertificationsArgs = {
  where?: Maybe<CertificationManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFormationArgs = {
  data: FormationCreateInput;
};


export type MutationUpdateFormationArgs = {
  where: FormationWhereUniqueInput;
  data: FormationUpdateInput;
};


export type MutationDeleteFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type MutationUpsertFormationArgs = {
  where: FormationWhereUniqueInput;
  upsert: FormationUpsertInput;
};


export type MutationPublishFormationArgs = {
  where: FormationWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFormationArgs = {
  where: FormationWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFormationsConnectionArgs = {
  where?: Maybe<FormationManyWhereInput>;
  data: FormationUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFormationsConnectionArgs = {
  where?: Maybe<FormationManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFormationsConnectionArgs = {
  where?: Maybe<FormationManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyFormationsConnectionArgs = {
  where?: Maybe<FormationManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyFormationsArgs = {
  where?: Maybe<FormationManyWhereInput>;
  data: FormationUpdateManyInput;
};


export type MutationDeleteManyFormationsArgs = {
  where?: Maybe<FormationManyWhereInput>;
};


export type MutationPublishManyFormationsArgs = {
  where?: Maybe<FormationManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFormationsArgs = {
  where?: Maybe<FormationManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationUpdateProjectArgs = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  where: ProjectWhereUniqueInput;
  upsert: ProjectUpsertInput;
};


export type MutationPublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
};


export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateTechnicalAbilitiesArgs = {
  data: TechnicalAbilitiesCreateInput;
};


export type MutationUpdateTechnicalAbilitiesArgs = {
  where: TechnicalAbilitiesWhereUniqueInput;
  data: TechnicalAbilitiesUpdateInput;
};


export type MutationDeleteTechnicalAbilitiesArgs = {
  where: TechnicalAbilitiesWhereUniqueInput;
};


export type MutationUpsertTechnicalAbilitiesArgs = {
  where: TechnicalAbilitiesWhereUniqueInput;
  upsert: TechnicalAbilitiesUpsertInput;
};


export type MutationPublishTechnicalAbilitiesArgs = {
  where: TechnicalAbilitiesWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishTechnicalAbilitiesArgs = {
  where: TechnicalAbilitiesWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyTechnicalAbilitieConnectionArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
  data: TechnicalAbilitiesUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTechnicalAbilitieConnectionArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTechnicalAbilitieConnectionArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyTechnicalAbilitieConnectionArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyTechnicalAbilitieArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
  data: TechnicalAbilitiesUpdateManyInput;
};


export type MutationDeleteManyTechnicalAbilitieArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
};


export type MutationPublishManyTechnicalAbilitieArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyTechnicalAbilitieArgs = {
  where?: Maybe<TechnicalAbilitiesManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Project = Node & {
  __typename?: 'Project';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  minDescription: Scalars['String'];
  tecnology: Scalars['String'];
  image: Asset;
  github?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  slug: Scalars['String'];
  /** List of Project versions */
  history: Array<Version>;
};


export type ProjectDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ProjectImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ProjectConnectInput = {
  /** Document to connect */
  where: ProjectWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  aggregate: Aggregate;
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  minDescription: Scalars['String'];
  tecnology: Scalars['String'];
  image: AssetCreateOneInlineInput;
  github?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  slug: Scalars['String'];
};

export type ProjectCreateManyInlineInput = {
  /** Create and connect multiple existing Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Connect one existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** The item at the end of the edge. */
  node: Project;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  minDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  minDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  minDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  minDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  minDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  minDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  minDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  minDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  minDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  minDescription_not_ends_with?: Maybe<Scalars['String']>;
  tecnology?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tecnology_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tecnology_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tecnology_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tecnology_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tecnology_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tecnology_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tecnology_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tecnology_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tecnology_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<AssetWhereInput>;
  github?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  github_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  github_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  github_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  github_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  github_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  github_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  github_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  github_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  github_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
};

export enum ProjectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  MinDescriptionAsc = 'minDescription_ASC',
  MinDescriptionDesc = 'minDescription_DESC',
  TecnologyAsc = 'tecnology_ASC',
  TecnologyDesc = 'tecnology_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type ProjectUpdateInput = {
  name?: Maybe<Scalars['String']>;
  minDescription?: Maybe<Scalars['String']>;
  tecnology?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  github?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyInlineInput = {
  /** Create and connect multiple Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectConnectInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Delete multiple Project documents */
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  minDescription?: Maybe<Scalars['String']>;
  tecnology?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProjectWhereInput;
  /** Update many input */
  data: ProjectUpdateManyInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Update single Project document */
  update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Disconnect currently connected Project document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Project document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Document to update */
  data: ProjectUpdateInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Upsert data */
  data: ProjectUpsertInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  minDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  minDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  minDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  minDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  minDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  minDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  minDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  minDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  minDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  minDescription_not_ends_with?: Maybe<Scalars['String']>;
  tecnology?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  tecnology_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tecnology_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  tecnology_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  tecnology_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  tecnology_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  tecnology_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  tecnology_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  tecnology_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  tecnology_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<AssetWhereInput>;
  github?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  github_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  github_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  github_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  github_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  github_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  github_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  github_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  github_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  github_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  github?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple certifications */
  certifications: Array<Certification>;
  /** Retrieve a single certification */
  certification?: Maybe<Certification>;
  /** Retrieve multiple certifications using the Relay connection interface */
  certificationsConnection: CertificationConnection;
  /** Retrieve document version */
  certificationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple formations */
  formations: Array<Formation>;
  /** Retrieve a single formation */
  formation?: Maybe<Formation>;
  /** Retrieve multiple formations using the Relay connection interface */
  formationsConnection: FormationConnection;
  /** Retrieve document version */
  formationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple technicalAbilitie */
  technicalAbilitie: Array<TechnicalAbilities>;
  /** Retrieve a single technicalAbilities */
  technicalAbilities?: Maybe<TechnicalAbilities>;
  /** Retrieve multiple technicalAbilitie using the Relay connection interface */
  technicalAbilitieConnection: TechnicalAbilitiesConnection;
  /** Retrieve document version */
  technicalAbilitiesVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCertificationsArgs = {
  where?: Maybe<CertificationWhereInput>;
  orderBy?: Maybe<CertificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCertificationArgs = {
  where: CertificationWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCertificationsConnectionArgs = {
  where?: Maybe<CertificationWhereInput>;
  orderBy?: Maybe<CertificationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCertificationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFormationsArgs = {
  where?: Maybe<FormationWhereInput>;
  orderBy?: Maybe<FormationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFormationArgs = {
  where: FormationWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFormationsConnectionArgs = {
  where?: Maybe<FormationWhereInput>;
  orderBy?: Maybe<FormationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFormationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectsConnectionArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTechnicalAbilitieArgs = {
  where?: Maybe<TechnicalAbilitiesWhereInput>;
  orderBy?: Maybe<TechnicalAbilitiesOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTechnicalAbilitiesArgs = {
  where: TechnicalAbilitiesWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTechnicalAbilitieConnectionArgs = {
  where?: Maybe<TechnicalAbilitiesWhereInput>;
  orderBy?: Maybe<TechnicalAbilitiesOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTechnicalAbilitiesVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type TechnicalAbilities = Node & {
  __typename?: 'TechnicalAbilities';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<TechnicalAbilities>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  icon: Asset;
  name: Scalars['String'];
  /** List of TechnicalAbilities versions */
  history: Array<Version>;
};


export type TechnicalAbilitiesDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TechnicalAbilitiesIconArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TechnicalAbilitiesHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type TechnicalAbilitiesConnectInput = {
  /** Document to connect */
  where: TechnicalAbilitiesWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type TechnicalAbilitiesConnection = {
  __typename?: 'TechnicalAbilitiesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TechnicalAbilitiesEdge>;
  aggregate: Aggregate;
};

export type TechnicalAbilitiesCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  icon: AssetCreateOneInlineInput;
  name: Scalars['String'];
};

export type TechnicalAbilitiesCreateManyInlineInput = {
  /** Create and connect multiple existing TechnicalAbilities documents */
  create?: Maybe<Array<TechnicalAbilitiesCreateInput>>;
  /** Connect multiple existing TechnicalAbilities documents */
  connect?: Maybe<Array<TechnicalAbilitiesWhereUniqueInput>>;
};

export type TechnicalAbilitiesCreateOneInlineInput = {
  /** Create and connect one TechnicalAbilities document */
  create?: Maybe<TechnicalAbilitiesCreateInput>;
  /** Connect one existing TechnicalAbilities document */
  connect?: Maybe<TechnicalAbilitiesWhereUniqueInput>;
};

/** An edge in a connection. */
export type TechnicalAbilitiesEdge = {
  __typename?: 'TechnicalAbilitiesEdge';
  /** The item at the end of the edge. */
  node: TechnicalAbilities;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TechnicalAbilitiesManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechnicalAbilitiesWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechnicalAbilitiesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechnicalAbilitiesWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<AssetWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TechnicalAbilitiesOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type TechnicalAbilitiesUpdateInput = {
  icon?: Maybe<AssetUpdateOneInlineInput>;
  name?: Maybe<Scalars['String']>;
};

export type TechnicalAbilitiesUpdateManyInlineInput = {
  /** Create and connect multiple TechnicalAbilities documents */
  create?: Maybe<Array<TechnicalAbilitiesCreateInput>>;
  /** Connect multiple existing TechnicalAbilities documents */
  connect?: Maybe<Array<TechnicalAbilitiesConnectInput>>;
  /** Override currently-connected documents with multiple existing TechnicalAbilities documents */
  set?: Maybe<Array<TechnicalAbilitiesWhereUniqueInput>>;
  /** Update multiple TechnicalAbilities documents */
  update?: Maybe<Array<TechnicalAbilitiesUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TechnicalAbilities documents */
  upsert?: Maybe<Array<TechnicalAbilitiesUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple TechnicalAbilities documents */
  disconnect?: Maybe<Array<TechnicalAbilitiesWhereUniqueInput>>;
  /** Delete multiple TechnicalAbilities documents */
  delete?: Maybe<Array<TechnicalAbilitiesWhereUniqueInput>>;
};

export type TechnicalAbilitiesUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type TechnicalAbilitiesUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TechnicalAbilitiesWhereInput;
  /** Update many input */
  data: TechnicalAbilitiesUpdateManyInput;
};

export type TechnicalAbilitiesUpdateOneInlineInput = {
  /** Create and connect one TechnicalAbilities document */
  create?: Maybe<TechnicalAbilitiesCreateInput>;
  /** Update single TechnicalAbilities document */
  update?: Maybe<TechnicalAbilitiesUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TechnicalAbilities document */
  upsert?: Maybe<TechnicalAbilitiesUpsertWithNestedWhereUniqueInput>;
  /** Connect existing TechnicalAbilities document */
  connect?: Maybe<TechnicalAbilitiesWhereUniqueInput>;
  /** Disconnect currently connected TechnicalAbilities document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected TechnicalAbilities document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type TechnicalAbilitiesUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TechnicalAbilitiesWhereUniqueInput;
  /** Document to update */
  data: TechnicalAbilitiesUpdateInput;
};

export type TechnicalAbilitiesUpsertInput = {
  /** Create document if it didn't exist */
  create: TechnicalAbilitiesCreateInput;
  /** Update document if it exists */
  update: TechnicalAbilitiesUpdateInput;
};

export type TechnicalAbilitiesUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TechnicalAbilitiesWhereUniqueInput;
  /** Upsert data */
  data: TechnicalAbilitiesUpsertInput;
};

/** Identifies documents */
export type TechnicalAbilitiesWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TechnicalAbilitiesWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TechnicalAbilitiesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TechnicalAbilitiesWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  icon?: Maybe<AssetWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

/** References TechnicalAbilities record uniquely */
export type TechnicalAbilitiesWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type GetAbilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAbilitiesQuery = (
  { __typename?: 'Query' }
  & { technicalAbilitie: Array<(
    { __typename?: 'TechnicalAbilities' }
    & Pick<TechnicalAbilities, 'id' | 'name'>
    & { icon: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'url'>
    ) }
  )> }
);

export type GetFormationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormationQuery = (
  { __typename?: 'Query' }
  & { formations: Array<(
    { __typename?: 'Formation' }
    & Pick<Formation, 'id' | 'period' | 'formationType' | 'course' | 'college'>
  )> }
);

export type GetCertificateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCertificateQuery = (
  { __typename?: 'Query' }
  & { certifications: Array<(
    { __typename?: 'Certification' }
    & Pick<Certification, 'count'>
    & { certification: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'url' | 'id'>
    ) }
  )> }
);

export type GetProjectsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetProjectsQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'minDescription' | 'slug'>
    & { image: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'url'>
    ) }
  )> }
);

export type GetProjectBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetProjectBySlugQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'minDescription' | 'description' | 'github' | 'tecnology' | 'slug'>
    & { image: (
      { __typename?: 'Asset' }
      & Pick<Asset, 'url'>
    ) }
  )> }
);
