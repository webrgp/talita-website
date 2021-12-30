export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
  PrismicStructuredText: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ne?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImgixFixed = {
  base64: Scalars['String'];
  height: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Scalars['String'];
  srcWebp: Scalars['String'];
  width: Scalars['Int'];
};

export type ImgixFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImgixFluid = {
  aspectRatio: Scalars['Float'];
  base64: Scalars['String'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Scalars['String'];
  srcWebp: Scalars['String'];
};

export type ImgixFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
};

export type ImgixParamsInput = {
  /** Alias for `pdfAnnotation`. */
  annotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: InputMaybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  balph?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendCrop`. */
  bc?: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  bh?: InputMaybe<Scalars['Float']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  blendClr?: InputMaybe<Scalars['String']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: InputMaybe<Scalars['Float']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendAlign`. */
  blendalign?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  blendclr?: InputMaybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  blendh?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendMode`. */
  blendmode?: InputMaybe<Scalars['String']>;
  /** Alias for `blendPad`. */
  blendpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  blendsize?: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  blendw?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  blendx?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: InputMaybe<Scalars['Int']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendMode`. */
  bm?: InputMaybe<Scalars['String']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: InputMaybe<Scalars['String']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: InputMaybe<Scalars['Int']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: InputMaybe<Scalars['String']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: InputMaybe<Scalars['Int']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  bs?: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  bw?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  bx?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: InputMaybe<Scalars['Float']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: InputMaybe<Scalars['Int']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: InputMaybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: InputMaybe<Scalars['Int']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: InputMaybe<Scalars['String']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: InputMaybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: InputMaybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: InputMaybe<Scalars['Float']>;
  /** Alias for `h`. */
  height?: InputMaybe<Scalars['Float']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: InputMaybe<Scalars['Int']>;
  /** Alias for `invert`. */
  inv?: InputMaybe<Scalars['Boolean']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. */
  iptc?: InputMaybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: InputMaybe<Scalars['Boolean']>;
  /** Alias for `mark`. */
  m?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  malph?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: InputMaybe<Scalars['String']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: InputMaybe<Scalars['Float']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: InputMaybe<Scalars['Int']>;
  /** Alias for `markAlign`. */
  markalign?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  markalpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  markbase?: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  markh?: InputMaybe<Scalars['Float']>;
  /** Alias for `markPad`. */
  markpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  marktile?: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  markw?: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  markx?: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: InputMaybe<Scalars['Int']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: InputMaybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  maskbg?: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: InputMaybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: InputMaybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  mb?: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  mh?: InputMaybe<Scalars['Float']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: InputMaybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: InputMaybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: InputMaybe<Scalars['Int']>;
  /** Alias for `monochrome`. */
  mono?: InputMaybe<Scalars['String']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: InputMaybe<Scalars['String']>;
  /** Alias for `markPad`. */
  mp?: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  mtile?: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  mw?: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  mx?: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: InputMaybe<Scalars['Int']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: InputMaybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: InputMaybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: InputMaybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: InputMaybe<Scalars['Float']>;
  /** Alias for `txt`. */
  t?: InputMaybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLine`. */
  tl?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: InputMaybe<Scalars['Int']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: InputMaybe<Scalars['String']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimColor`. */
  trimcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `trimMd`. */
  trimmd?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimPad`. */
  trimpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `trimSd`. */
  trimsd?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  tsz?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: InputMaybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: InputMaybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: InputMaybe<Scalars['Int']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: InputMaybe<Scalars['String']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtAlign`. */
  txtalign?: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLead`. */
  txtlead?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtPad`. */
  txtpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtShad`. */
  txtshad?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  txtsize?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: InputMaybe<Scalars['Int']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: InputMaybe<Scalars['Float']>;
  /** Alias for `w`. */
  width?: InputMaybe<Scalars['Float']>;
};

export enum ImgixPlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
}

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
}

export type PrismicAllDocumentTypes =
  | PrismicBlogPost
  | PrismicHomepage
  | PrismicServices
  | PrismicTeamMember
  | PrismicTestimonials;

export type PrismicAlternateLanguageType = {
  document?: Maybe<PrismicAllDocumentTypes>;
  id?: Maybe<Scalars['ID']>;
  lang?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type PrismicAlternateLanguageTypeFilterInput = {
  id?: InputMaybe<IdQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  raw?: InputMaybe<JsonQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicAlternateLanguageTypeFilterListInput = {
  elemMatch?: InputMaybe<PrismicAlternateLanguageTypeFilterInput>;
};

export type PrismicBlogPost = Node & {
  _previewable: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  children: Array<Node>;
  data: PrismicBlogPostDataType;
  dataRaw: Scalars['JSON'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  parent?: Maybe<Node>;
  prismicId: Scalars['ID'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  uid: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type PrismicBlogPostFirst_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicBlogPostLast_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicBlogPostConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicBlogPostEdge>;
  group: Array<PrismicBlogPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicBlogPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicBlogPostConnectionDistinctArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostConnectionGroupArgs = {
  field: PrismicBlogPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicBlogPostConnectionMaxArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostConnectionMinArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostConnectionSumArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostDataCoverPictureImageThumbnailsType = {
  listing?: Maybe<PrismicImageThumbnailType>;
};

export type PrismicBlogPostDataCoverPictureImageThumbnailsTypeFilterInput = {
  listing?: InputMaybe<PrismicImageThumbnailTypeFilterInput>;
};

export type PrismicBlogPostDataCoverPictureImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<PrismicBlogPostDataCoverPictureImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};

export type PrismicBlogPostDataCoverPictureImageTypeFixedArgs = {
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PrismicBlogPostDataCoverPictureImageTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PrismicBlogPostDataCoverPictureImageTypeGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};

export type PrismicBlogPostDataCoverPictureImageTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicBlogPostDataCoverPictureImageTypeFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  fixed?: InputMaybe<ImgixFixedFilterInput>;
  fluid?: InputMaybe<ImgixFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  thumbnails?: InputMaybe<PrismicBlogPostDataCoverPictureImageThumbnailsTypeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicBlogPostDataType = {
  cover_picture?: Maybe<PrismicBlogPostDataCoverPictureImageType>;
  related_posts?: Maybe<PrismicLinkType>;
  rich_content?: Maybe<PrismicStructuredTextType>;
  summary?: Maybe<PrismicStructuredTextType>;
  title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicBlogPostDataTypeFilterInput = {
  cover_picture?: InputMaybe<PrismicBlogPostDataCoverPictureImageTypeFilterInput>;
  related_posts?: InputMaybe<PrismicLinkTypeFilterInput>;
  rich_content?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  summary?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicBlogPostEdge = {
  next?: Maybe<PrismicBlogPost>;
  node: PrismicBlogPost;
  previous?: Maybe<PrismicBlogPost>;
};

export enum PrismicBlogPostFieldsEnum {
  Previewable = '_previewable',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesUid = 'alternate_languages___uid',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DataRaw = 'dataRaw',
  DataCoverPictureAlt = 'data___cover_picture___alt',
  DataCoverPictureCopyright = 'data___cover_picture___copyright',
  DataCoverPictureDimensionsHeight = 'data___cover_picture___dimensions___height',
  DataCoverPictureDimensionsWidth = 'data___cover_picture___dimensions___width',
  DataCoverPictureFixedBase64 = 'data___cover_picture___fixed___base64',
  DataCoverPictureFixedHeight = 'data___cover_picture___fixed___height',
  DataCoverPictureFixedSizes = 'data___cover_picture___fixed___sizes',
  DataCoverPictureFixedSrc = 'data___cover_picture___fixed___src',
  DataCoverPictureFixedSrcSet = 'data___cover_picture___fixed___srcSet',
  DataCoverPictureFixedSrcSetWebp = 'data___cover_picture___fixed___srcSetWebp',
  DataCoverPictureFixedSrcWebp = 'data___cover_picture___fixed___srcWebp',
  DataCoverPictureFixedWidth = 'data___cover_picture___fixed___width',
  DataCoverPictureFluidAspectRatio = 'data___cover_picture___fluid___aspectRatio',
  DataCoverPictureFluidBase64 = 'data___cover_picture___fluid___base64',
  DataCoverPictureFluidSizes = 'data___cover_picture___fluid___sizes',
  DataCoverPictureFluidSrc = 'data___cover_picture___fluid___src',
  DataCoverPictureFluidSrcSet = 'data___cover_picture___fluid___srcSet',
  DataCoverPictureFluidSrcSetWebp = 'data___cover_picture___fluid___srcSetWebp',
  DataCoverPictureFluidSrcWebp = 'data___cover_picture___fluid___srcWebp',
  DataCoverPictureGatsbyImageData = 'data___cover_picture___gatsbyImageData',
  DataCoverPictureLocalFileAbsolutePath = 'data___cover_picture___localFile___absolutePath',
  DataCoverPictureLocalFileAccessTime = 'data___cover_picture___localFile___accessTime',
  DataCoverPictureLocalFileAtime = 'data___cover_picture___localFile___atime',
  DataCoverPictureLocalFileAtimeMs = 'data___cover_picture___localFile___atimeMs',
  DataCoverPictureLocalFileBase = 'data___cover_picture___localFile___base',
  DataCoverPictureLocalFileBirthTime = 'data___cover_picture___localFile___birthTime',
  DataCoverPictureLocalFileBirthtime = 'data___cover_picture___localFile___birthtime',
  DataCoverPictureLocalFileBirthtimeMs = 'data___cover_picture___localFile___birthtimeMs',
  DataCoverPictureLocalFileBlksize = 'data___cover_picture___localFile___blksize',
  DataCoverPictureLocalFileBlocks = 'data___cover_picture___localFile___blocks',
  DataCoverPictureLocalFileChangeTime = 'data___cover_picture___localFile___changeTime',
  DataCoverPictureLocalFileChildren = 'data___cover_picture___localFile___children',
  DataCoverPictureLocalFileChildrenImageSharp = 'data___cover_picture___localFile___childrenImageSharp',
  DataCoverPictureLocalFileCtime = 'data___cover_picture___localFile___ctime',
  DataCoverPictureLocalFileCtimeMs = 'data___cover_picture___localFile___ctimeMs',
  DataCoverPictureLocalFileDev = 'data___cover_picture___localFile___dev',
  DataCoverPictureLocalFileDir = 'data___cover_picture___localFile___dir',
  DataCoverPictureLocalFileExt = 'data___cover_picture___localFile___ext',
  DataCoverPictureLocalFileExtension = 'data___cover_picture___localFile___extension',
  DataCoverPictureLocalFileGid = 'data___cover_picture___localFile___gid',
  DataCoverPictureLocalFileId = 'data___cover_picture___localFile___id',
  DataCoverPictureLocalFileIno = 'data___cover_picture___localFile___ino',
  DataCoverPictureLocalFileMode = 'data___cover_picture___localFile___mode',
  DataCoverPictureLocalFileModifiedTime = 'data___cover_picture___localFile___modifiedTime',
  DataCoverPictureLocalFileMtime = 'data___cover_picture___localFile___mtime',
  DataCoverPictureLocalFileMtimeMs = 'data___cover_picture___localFile___mtimeMs',
  DataCoverPictureLocalFileName = 'data___cover_picture___localFile___name',
  DataCoverPictureLocalFileNlink = 'data___cover_picture___localFile___nlink',
  DataCoverPictureLocalFilePrettySize = 'data___cover_picture___localFile___prettySize',
  DataCoverPictureLocalFilePublicUrl = 'data___cover_picture___localFile___publicURL',
  DataCoverPictureLocalFileRdev = 'data___cover_picture___localFile___rdev',
  DataCoverPictureLocalFileRelativeDirectory = 'data___cover_picture___localFile___relativeDirectory',
  DataCoverPictureLocalFileRelativePath = 'data___cover_picture___localFile___relativePath',
  DataCoverPictureLocalFileRoot = 'data___cover_picture___localFile___root',
  DataCoverPictureLocalFileSize = 'data___cover_picture___localFile___size',
  DataCoverPictureLocalFileSourceInstanceName = 'data___cover_picture___localFile___sourceInstanceName',
  DataCoverPictureLocalFileUid = 'data___cover_picture___localFile___uid',
  DataCoverPictureUrl = 'data___cover_picture___url',
  DataRelatedPostsId = 'data___related_posts___id',
  DataRelatedPostsIsBroken = 'data___related_posts___isBroken',
  DataRelatedPostsLang = 'data___related_posts___lang',
  DataRelatedPostsLinkType = 'data___related_posts___link_type',
  DataRelatedPostsLocalFileAbsolutePath = 'data___related_posts___localFile___absolutePath',
  DataRelatedPostsLocalFileAccessTime = 'data___related_posts___localFile___accessTime',
  DataRelatedPostsLocalFileAtime = 'data___related_posts___localFile___atime',
  DataRelatedPostsLocalFileAtimeMs = 'data___related_posts___localFile___atimeMs',
  DataRelatedPostsLocalFileBase = 'data___related_posts___localFile___base',
  DataRelatedPostsLocalFileBirthTime = 'data___related_posts___localFile___birthTime',
  DataRelatedPostsLocalFileBirthtime = 'data___related_posts___localFile___birthtime',
  DataRelatedPostsLocalFileBirthtimeMs = 'data___related_posts___localFile___birthtimeMs',
  DataRelatedPostsLocalFileBlksize = 'data___related_posts___localFile___blksize',
  DataRelatedPostsLocalFileBlocks = 'data___related_posts___localFile___blocks',
  DataRelatedPostsLocalFileChangeTime = 'data___related_posts___localFile___changeTime',
  DataRelatedPostsLocalFileChildren = 'data___related_posts___localFile___children',
  DataRelatedPostsLocalFileChildrenImageSharp = 'data___related_posts___localFile___childrenImageSharp',
  DataRelatedPostsLocalFileCtime = 'data___related_posts___localFile___ctime',
  DataRelatedPostsLocalFileCtimeMs = 'data___related_posts___localFile___ctimeMs',
  DataRelatedPostsLocalFileDev = 'data___related_posts___localFile___dev',
  DataRelatedPostsLocalFileDir = 'data___related_posts___localFile___dir',
  DataRelatedPostsLocalFileExt = 'data___related_posts___localFile___ext',
  DataRelatedPostsLocalFileExtension = 'data___related_posts___localFile___extension',
  DataRelatedPostsLocalFileGid = 'data___related_posts___localFile___gid',
  DataRelatedPostsLocalFileId = 'data___related_posts___localFile___id',
  DataRelatedPostsLocalFileIno = 'data___related_posts___localFile___ino',
  DataRelatedPostsLocalFileMode = 'data___related_posts___localFile___mode',
  DataRelatedPostsLocalFileModifiedTime = 'data___related_posts___localFile___modifiedTime',
  DataRelatedPostsLocalFileMtime = 'data___related_posts___localFile___mtime',
  DataRelatedPostsLocalFileMtimeMs = 'data___related_posts___localFile___mtimeMs',
  DataRelatedPostsLocalFileName = 'data___related_posts___localFile___name',
  DataRelatedPostsLocalFileNlink = 'data___related_posts___localFile___nlink',
  DataRelatedPostsLocalFilePrettySize = 'data___related_posts___localFile___prettySize',
  DataRelatedPostsLocalFilePublicUrl = 'data___related_posts___localFile___publicURL',
  DataRelatedPostsLocalFileRdev = 'data___related_posts___localFile___rdev',
  DataRelatedPostsLocalFileRelativeDirectory = 'data___related_posts___localFile___relativeDirectory',
  DataRelatedPostsLocalFileRelativePath = 'data___related_posts___localFile___relativePath',
  DataRelatedPostsLocalFileRoot = 'data___related_posts___localFile___root',
  DataRelatedPostsLocalFileSize = 'data___related_posts___localFile___size',
  DataRelatedPostsLocalFileSourceInstanceName = 'data___related_posts___localFile___sourceInstanceName',
  DataRelatedPostsLocalFileUid = 'data___related_posts___localFile___uid',
  DataRelatedPostsRaw = 'data___related_posts___raw',
  DataRelatedPostsSize = 'data___related_posts___size',
  DataRelatedPostsSlug = 'data___related_posts___slug',
  DataRelatedPostsTags = 'data___related_posts___tags',
  DataRelatedPostsTarget = 'data___related_posts___target',
  DataRelatedPostsType = 'data___related_posts___type',
  DataRelatedPostsUid = 'data___related_posts___uid',
  DataRelatedPostsUrl = 'data___related_posts___url',
  DataRichContentHtml = 'data___rich_content___html',
  DataRichContentRaw = 'data___rich_content___raw',
  DataRichContentRichText = 'data___rich_content___richText',
  DataRichContentText = 'data___rich_content___text',
  DataSummaryHtml = 'data___summary___html',
  DataSummaryRaw = 'data___summary___raw',
  DataSummaryRichText = 'data___summary___richText',
  DataSummaryText = 'data___summary___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataTitleRichText = 'data___title___richText',
  DataTitleText = 'data___title___text',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrismicId = 'prismicId',
  Tags = 'tags',
  Type = 'type',
  Uid = 'uid',
  Url = 'url',
}

export type PrismicBlogPostFilterInput = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicBlogPostDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicBlogPostGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicBlogPostEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrismicBlogPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicBlogPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicBlogPostGroupConnectionDistinctArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostGroupConnectionGroupArgs = {
  field: PrismicBlogPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicBlogPostGroupConnectionMaxArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostGroupConnectionMinArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostGroupConnectionSumArgs = {
  field: PrismicBlogPostFieldsEnum;
};

export type PrismicBlogPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PrismicBlogPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicEmbedType = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type PrismicEmbedTypeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicEmbedTypeEdge>;
  group: Array<PrismicEmbedTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicEmbedTypeConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionGroupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicEmbedTypeConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionMinArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionSumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeEdge = {
  next?: Maybe<PrismicEmbedType>;
  node: PrismicEmbedType;
  previous?: Maybe<PrismicEmbedType>;
};

export enum PrismicEmbedTypeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type PrismicEmbedTypeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type PrismicEmbedTypeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicEmbedTypeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrismicEmbedTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicEmbedTypeGroupConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionGroupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicEmbedTypeGroupConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionMinArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionSumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PrismicEmbedTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicGeoPointType = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PrismicHomepage = Node & {
  _previewable: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  children: Array<Node>;
  data: PrismicHomepageDataType;
  dataRaw: Scalars['JSON'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  parent?: Maybe<Node>;
  prismicId: Scalars['ID'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomepageFirst_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicHomepageLast_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicHomepageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicHomepageEdge>;
  group: Array<PrismicHomepageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicHomepage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicHomepageConnectionDistinctArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageConnectionGroupArgs = {
  field: PrismicHomepageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicHomepageConnectionMaxArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageConnectionMinArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageConnectionSumArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageDataBodyFeaturedColumns = PrismicSliceType & {
  id: Scalars['ID'];
  items: Array<PrismicHomepageDataBodyFeaturedColumnsItem>;
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type PrismicHomepageDataBodyFeaturedColumnsItem = {
  content?: Maybe<PrismicStructuredTextType>;
  svg_icon?: Maybe<PrismicLinkType>;
  title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomepageDataBodyRedRibbonCta = PrismicSliceType & {
  id: Scalars['ID'];
  primary: PrismicHomepageDataBodyRedRibbonCtaPrimary;
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type PrismicHomepageDataBodyRedRibbonCtaPrimary = {
  content?: Maybe<PrismicStructuredTextType>;
  cta_button_link?: Maybe<PrismicLinkType>;
  cta_button_text?: Maybe<Scalars['String']>;
};

export type PrismicHomepageDataBodyServicesGrid = PrismicSliceType & {
  id: Scalars['ID'];
  items: Array<PrismicHomepageDataBodyServicesGridItem>;
  primary: PrismicHomepageDataBodyServicesGridPrimary;
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type PrismicHomepageDataBodyServicesGridItem = {
  featured_services?: Maybe<PrismicLinkType>;
};

export type PrismicHomepageDataBodyServicesGridPrimary = {
  cta_button_link?: Maybe<PrismicLinkType>;
  cta_button_text?: Maybe<Scalars['String']>;
  intro?: Maybe<PrismicStructuredTextType>;
  title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomepageDataBodySlicesType =
  | PrismicHomepageDataBodyFeaturedColumns
  | PrismicHomepageDataBodyRedRibbonCta
  | PrismicHomepageDataBodyServicesGrid
  | PrismicHomepageDataBodyTestimonials;

export type PrismicHomepageDataBodyTestimonials = PrismicSliceType & {
  id: Scalars['ID'];
  items: Array<PrismicHomepageDataBodyTestimonialsItem>;
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type PrismicHomepageDataBodyTestimonialsItem = {
  testimonial?: Maybe<PrismicLinkType>;
};

export type PrismicHomepageDataHeroBannerPictureImageThumbnailsType = {
  Mobile?: Maybe<PrismicImageThumbnailType>;
};

export type PrismicHomepageDataHeroBannerPictureImageThumbnailsTypeFilterInput =
  {
    Mobile?: InputMaybe<PrismicImageThumbnailTypeFilterInput>;
  };

export type PrismicHomepageDataHeroBannerPictureImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<PrismicHomepageDataHeroBannerPictureImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomepageDataHeroBannerPictureImageTypeFixedArgs = {
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PrismicHomepageDataHeroBannerPictureImageTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PrismicHomepageDataHeroBannerPictureImageTypeGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};

export type PrismicHomepageDataHeroBannerPictureImageTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicHomepageDataHeroBannerPictureImageTypeFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  fixed?: InputMaybe<ImgixFixedFilterInput>;
  fluid?: InputMaybe<ImgixFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  thumbnails?: InputMaybe<PrismicHomepageDataHeroBannerPictureImageThumbnailsTypeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicHomepageDataSeoBodyGeneralCard = PrismicSliceType & {
  id: Scalars['ID'];
  primary: PrismicHomepageDataSeoBodyGeneralCardPrimary;
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type PrismicHomepageDataSeoBodyGeneralCardPrimary = {
  description?: Maybe<PrismicStructuredTextType>;
  image?: Maybe<PrismicHomepageDataSeoBodyGeneralCardPrimaryImageImageType>;
  title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomepageDataSeoBodyGeneralCardPrimaryImageImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomepageDataSeoBodyGeneralCardPrimaryImageImageTypeFixedArgs =
  {
    height?: InputMaybe<Scalars['Int']>;
    imgixParams?: InputMaybe<ImgixParamsInput>;
    placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
    quality?: InputMaybe<Scalars['Int']>;
    width?: InputMaybe<Scalars['Int']>;
  };

export type PrismicHomepageDataSeoBodyGeneralCardPrimaryImageImageTypeFluidArgs =
  {
    imgixParams?: InputMaybe<ImgixParamsInput>;
    maxHeight?: InputMaybe<Scalars['Int']>;
    maxWidth?: InputMaybe<Scalars['Int']>;
    placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
    srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  };

export type PrismicHomepageDataSeoBodyGeneralCardPrimaryImageImageTypeGatsbyImageDataArgs =
  {
    aspectRatio?: InputMaybe<Scalars['Float']>;
    backgroundColor?: InputMaybe<Scalars['String']>;
    breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    height?: InputMaybe<Scalars['Int']>;
    imgixParams?: InputMaybe<ImgixParamsInput>;
    layout?: InputMaybe<GatsbyImageLayout>;
    outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    placeholder?: InputMaybe<ImgixPlaceholder>;
    placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
    sizes?: InputMaybe<Scalars['String']>;
    srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
    srcSetMinWidth?: InputMaybe<Scalars['Int']>;
    width?: InputMaybe<Scalars['Int']>;
    widthTolerance?: InputMaybe<Scalars['Float']>;
  };

export type PrismicHomepageDataSeoBodyGeneralCardPrimaryImageImageTypeUrlArgs =
  {
    imgixParams?: InputMaybe<ImgixParamsInput>;
  };

export type PrismicHomepageDataSeoBodySlicesType =
  | PrismicHomepageDataSeoBodyGeneralCard
  | PrismicHomepageDataSeoBodyTwitterCard;

export type PrismicHomepageDataSeoBodyTwitterCard = PrismicSliceType & {
  id: Scalars['ID'];
  primary: PrismicHomepageDataSeoBodyTwitterCardPrimary;
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type PrismicHomepageDataSeoBodyTwitterCardPrimary = {
  card_type?: Maybe<Scalars['String']>;
  description?: Maybe<PrismicStructuredTextType>;
  image?: Maybe<PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageType>;
  title?: Maybe<PrismicStructuredTextType>;
  twitter_handle?: Maybe<Scalars['String']>;
};

export type PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageThumbnailsType =
  {
    large_image?: Maybe<PrismicImageThumbnailType>;
  };

export type PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageTypeFixedArgs =
  {
    height?: InputMaybe<Scalars['Int']>;
    imgixParams?: InputMaybe<ImgixParamsInput>;
    placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
    quality?: InputMaybe<Scalars['Int']>;
    width?: InputMaybe<Scalars['Int']>;
  };

export type PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageTypeFluidArgs =
  {
    imgixParams?: InputMaybe<ImgixParamsInput>;
    maxHeight?: InputMaybe<Scalars['Int']>;
    maxWidth?: InputMaybe<Scalars['Int']>;
    placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
    srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  };

export type PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageTypeGatsbyImageDataArgs =
  {
    aspectRatio?: InputMaybe<Scalars['Float']>;
    backgroundColor?: InputMaybe<Scalars['String']>;
    breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    height?: InputMaybe<Scalars['Int']>;
    imgixParams?: InputMaybe<ImgixParamsInput>;
    layout?: InputMaybe<GatsbyImageLayout>;
    outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    placeholder?: InputMaybe<ImgixPlaceholder>;
    placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
    sizes?: InputMaybe<Scalars['String']>;
    srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
    srcSetMinWidth?: InputMaybe<Scalars['Int']>;
    width?: InputMaybe<Scalars['Int']>;
    widthTolerance?: InputMaybe<Scalars['Float']>;
  };

export type PrismicHomepageDataSeoBodyTwitterCardPrimaryImageImageTypeUrlArgs =
  {
    imgixParams?: InputMaybe<ImgixParamsInput>;
  };

export type PrismicHomepageDataType = {
  body: Array<PrismicHomepageDataBodySlicesType>;
  hero_banner_picture?: Maybe<PrismicHomepageDataHeroBannerPictureImageType>;
  hero_title?: Maybe<PrismicStructuredTextType>;
  seo_body: Array<PrismicHomepageDataSeoBodySlicesType>;
};

export type PrismicHomepageDataTypeFilterInput = {
  hero_banner_picture?: InputMaybe<PrismicHomepageDataHeroBannerPictureImageTypeFilterInput>;
  hero_title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomepageEdge = {
  next?: Maybe<PrismicHomepage>;
  node: PrismicHomepage;
  previous?: Maybe<PrismicHomepage>;
};

export enum PrismicHomepageFieldsEnum {
  Previewable = '_previewable',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesUid = 'alternate_languages___uid',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DataRaw = 'dataRaw',
  DataHeroBannerPictureAlt = 'data___hero_banner_picture___alt',
  DataHeroBannerPictureCopyright = 'data___hero_banner_picture___copyright',
  DataHeroBannerPictureDimensionsHeight = 'data___hero_banner_picture___dimensions___height',
  DataHeroBannerPictureDimensionsWidth = 'data___hero_banner_picture___dimensions___width',
  DataHeroBannerPictureFixedBase64 = 'data___hero_banner_picture___fixed___base64',
  DataHeroBannerPictureFixedHeight = 'data___hero_banner_picture___fixed___height',
  DataHeroBannerPictureFixedSizes = 'data___hero_banner_picture___fixed___sizes',
  DataHeroBannerPictureFixedSrc = 'data___hero_banner_picture___fixed___src',
  DataHeroBannerPictureFixedSrcSet = 'data___hero_banner_picture___fixed___srcSet',
  DataHeroBannerPictureFixedSrcSetWebp = 'data___hero_banner_picture___fixed___srcSetWebp',
  DataHeroBannerPictureFixedSrcWebp = 'data___hero_banner_picture___fixed___srcWebp',
  DataHeroBannerPictureFixedWidth = 'data___hero_banner_picture___fixed___width',
  DataHeroBannerPictureFluidAspectRatio = 'data___hero_banner_picture___fluid___aspectRatio',
  DataHeroBannerPictureFluidBase64 = 'data___hero_banner_picture___fluid___base64',
  DataHeroBannerPictureFluidSizes = 'data___hero_banner_picture___fluid___sizes',
  DataHeroBannerPictureFluidSrc = 'data___hero_banner_picture___fluid___src',
  DataHeroBannerPictureFluidSrcSet = 'data___hero_banner_picture___fluid___srcSet',
  DataHeroBannerPictureFluidSrcSetWebp = 'data___hero_banner_picture___fluid___srcSetWebp',
  DataHeroBannerPictureFluidSrcWebp = 'data___hero_banner_picture___fluid___srcWebp',
  DataHeroBannerPictureGatsbyImageData = 'data___hero_banner_picture___gatsbyImageData',
  DataHeroBannerPictureLocalFileAbsolutePath = 'data___hero_banner_picture___localFile___absolutePath',
  DataHeroBannerPictureLocalFileAccessTime = 'data___hero_banner_picture___localFile___accessTime',
  DataHeroBannerPictureLocalFileAtime = 'data___hero_banner_picture___localFile___atime',
  DataHeroBannerPictureLocalFileAtimeMs = 'data___hero_banner_picture___localFile___atimeMs',
  DataHeroBannerPictureLocalFileBase = 'data___hero_banner_picture___localFile___base',
  DataHeroBannerPictureLocalFileBirthTime = 'data___hero_banner_picture___localFile___birthTime',
  DataHeroBannerPictureLocalFileBirthtime = 'data___hero_banner_picture___localFile___birthtime',
  DataHeroBannerPictureLocalFileBirthtimeMs = 'data___hero_banner_picture___localFile___birthtimeMs',
  DataHeroBannerPictureLocalFileBlksize = 'data___hero_banner_picture___localFile___blksize',
  DataHeroBannerPictureLocalFileBlocks = 'data___hero_banner_picture___localFile___blocks',
  DataHeroBannerPictureLocalFileChangeTime = 'data___hero_banner_picture___localFile___changeTime',
  DataHeroBannerPictureLocalFileChildren = 'data___hero_banner_picture___localFile___children',
  DataHeroBannerPictureLocalFileChildrenImageSharp = 'data___hero_banner_picture___localFile___childrenImageSharp',
  DataHeroBannerPictureLocalFileCtime = 'data___hero_banner_picture___localFile___ctime',
  DataHeroBannerPictureLocalFileCtimeMs = 'data___hero_banner_picture___localFile___ctimeMs',
  DataHeroBannerPictureLocalFileDev = 'data___hero_banner_picture___localFile___dev',
  DataHeroBannerPictureLocalFileDir = 'data___hero_banner_picture___localFile___dir',
  DataHeroBannerPictureLocalFileExt = 'data___hero_banner_picture___localFile___ext',
  DataHeroBannerPictureLocalFileExtension = 'data___hero_banner_picture___localFile___extension',
  DataHeroBannerPictureLocalFileGid = 'data___hero_banner_picture___localFile___gid',
  DataHeroBannerPictureLocalFileId = 'data___hero_banner_picture___localFile___id',
  DataHeroBannerPictureLocalFileIno = 'data___hero_banner_picture___localFile___ino',
  DataHeroBannerPictureLocalFileMode = 'data___hero_banner_picture___localFile___mode',
  DataHeroBannerPictureLocalFileModifiedTime = 'data___hero_banner_picture___localFile___modifiedTime',
  DataHeroBannerPictureLocalFileMtime = 'data___hero_banner_picture___localFile___mtime',
  DataHeroBannerPictureLocalFileMtimeMs = 'data___hero_banner_picture___localFile___mtimeMs',
  DataHeroBannerPictureLocalFileName = 'data___hero_banner_picture___localFile___name',
  DataHeroBannerPictureLocalFileNlink = 'data___hero_banner_picture___localFile___nlink',
  DataHeroBannerPictureLocalFilePrettySize = 'data___hero_banner_picture___localFile___prettySize',
  DataHeroBannerPictureLocalFilePublicUrl = 'data___hero_banner_picture___localFile___publicURL',
  DataHeroBannerPictureLocalFileRdev = 'data___hero_banner_picture___localFile___rdev',
  DataHeroBannerPictureLocalFileRelativeDirectory = 'data___hero_banner_picture___localFile___relativeDirectory',
  DataHeroBannerPictureLocalFileRelativePath = 'data___hero_banner_picture___localFile___relativePath',
  DataHeroBannerPictureLocalFileRoot = 'data___hero_banner_picture___localFile___root',
  DataHeroBannerPictureLocalFileSize = 'data___hero_banner_picture___localFile___size',
  DataHeroBannerPictureLocalFileSourceInstanceName = 'data___hero_banner_picture___localFile___sourceInstanceName',
  DataHeroBannerPictureLocalFileUid = 'data___hero_banner_picture___localFile___uid',
  DataHeroBannerPictureUrl = 'data___hero_banner_picture___url',
  DataHeroTitleHtml = 'data___hero_title___html',
  DataHeroTitleRaw = 'data___hero_title___raw',
  DataHeroTitleRichText = 'data___hero_title___richText',
  DataHeroTitleText = 'data___hero_title___text',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrismicId = 'prismicId',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
}

export type PrismicHomepageFilterInput = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicHomepageDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicHomepageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicHomepageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrismicHomepageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicHomepage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicHomepageGroupConnectionDistinctArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageGroupConnectionGroupArgs = {
  field: PrismicHomepageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicHomepageGroupConnectionMaxArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageGroupConnectionMinArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageGroupConnectionSumArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PrismicHomepageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicImageDimensionsType = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type PrismicImageDimensionsTypeFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type PrismicImageThumbnailType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};

export type PrismicImageThumbnailTypeFixedArgs = {
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PrismicImageThumbnailTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};

export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicImageThumbnailTypeFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  fixed?: InputMaybe<ImgixFixedFilterInput>;
  fluid?: InputMaybe<ImgixFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicLinkType = {
  document?: Maybe<PrismicAllDocumentTypes>;
  id?: Maybe<Scalars['ID']>;
  isBroken?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  link_type?: Maybe<PrismicLinkTypeEnum>;
  localFile?: Maybe<File>;
  raw?: Maybe<Scalars['JSON']>;
  size?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum PrismicLinkTypeEnum {
  Any = 'Any',
  Document = 'Document',
  Media = 'Media',
  Web = 'Web',
}

export type PrismicLinkTypeEnumQueryOperatorInput = {
  eq?: InputMaybe<PrismicLinkTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<PrismicLinkTypeEnum>>>;
  ne?: InputMaybe<PrismicLinkTypeEnum>;
  nin?: InputMaybe<Array<InputMaybe<PrismicLinkTypeEnum>>>;
};

export type PrismicLinkTypeFilterInput = {
  id?: InputMaybe<IdQueryOperatorInput>;
  isBroken?: InputMaybe<BooleanQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  link_type?: InputMaybe<PrismicLinkTypeEnumQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  raw?: InputMaybe<JsonQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicServices = Node & {
  _previewable: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  children: Array<Node>;
  data: PrismicServicesDataType;
  dataRaw: Scalars['JSON'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  parent?: Maybe<Node>;
  prismicId: Scalars['ID'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type PrismicServicesFirst_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicServicesLast_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicServicesConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicServicesEdge>;
  group: Array<PrismicServicesGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicServices>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicServicesConnectionDistinctArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesConnectionGroupArgs = {
  field: PrismicServicesFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicServicesConnectionMaxArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesConnectionMinArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesConnectionSumArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesDataCoverPictureImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};

export type PrismicServicesDataCoverPictureImageTypeFixedArgs = {
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PrismicServicesDataCoverPictureImageTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PrismicServicesDataCoverPictureImageTypeGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};

export type PrismicServicesDataCoverPictureImageTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicServicesDataCoverPictureImageTypeFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  fixed?: InputMaybe<ImgixFixedFilterInput>;
  fluid?: InputMaybe<ImgixFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicServicesDataType = {
  content?: Maybe<PrismicStructuredTextType>;
  cover_picture?: Maybe<PrismicServicesDataCoverPictureImageType>;
  title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicServicesDataTypeFilterInput = {
  content?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  cover_picture?: InputMaybe<PrismicServicesDataCoverPictureImageTypeFilterInput>;
  title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicServicesEdge = {
  next?: Maybe<PrismicServices>;
  node: PrismicServices;
  previous?: Maybe<PrismicServices>;
};

export enum PrismicServicesFieldsEnum {
  Previewable = '_previewable',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesUid = 'alternate_languages___uid',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DataRaw = 'dataRaw',
  DataContentHtml = 'data___content___html',
  DataContentRaw = 'data___content___raw',
  DataContentRichText = 'data___content___richText',
  DataContentText = 'data___content___text',
  DataCoverPictureAlt = 'data___cover_picture___alt',
  DataCoverPictureCopyright = 'data___cover_picture___copyright',
  DataCoverPictureDimensionsHeight = 'data___cover_picture___dimensions___height',
  DataCoverPictureDimensionsWidth = 'data___cover_picture___dimensions___width',
  DataCoverPictureFixedBase64 = 'data___cover_picture___fixed___base64',
  DataCoverPictureFixedHeight = 'data___cover_picture___fixed___height',
  DataCoverPictureFixedSizes = 'data___cover_picture___fixed___sizes',
  DataCoverPictureFixedSrc = 'data___cover_picture___fixed___src',
  DataCoverPictureFixedSrcSet = 'data___cover_picture___fixed___srcSet',
  DataCoverPictureFixedSrcSetWebp = 'data___cover_picture___fixed___srcSetWebp',
  DataCoverPictureFixedSrcWebp = 'data___cover_picture___fixed___srcWebp',
  DataCoverPictureFixedWidth = 'data___cover_picture___fixed___width',
  DataCoverPictureFluidAspectRatio = 'data___cover_picture___fluid___aspectRatio',
  DataCoverPictureFluidBase64 = 'data___cover_picture___fluid___base64',
  DataCoverPictureFluidSizes = 'data___cover_picture___fluid___sizes',
  DataCoverPictureFluidSrc = 'data___cover_picture___fluid___src',
  DataCoverPictureFluidSrcSet = 'data___cover_picture___fluid___srcSet',
  DataCoverPictureFluidSrcSetWebp = 'data___cover_picture___fluid___srcSetWebp',
  DataCoverPictureFluidSrcWebp = 'data___cover_picture___fluid___srcWebp',
  DataCoverPictureGatsbyImageData = 'data___cover_picture___gatsbyImageData',
  DataCoverPictureLocalFileAbsolutePath = 'data___cover_picture___localFile___absolutePath',
  DataCoverPictureLocalFileAccessTime = 'data___cover_picture___localFile___accessTime',
  DataCoverPictureLocalFileAtime = 'data___cover_picture___localFile___atime',
  DataCoverPictureLocalFileAtimeMs = 'data___cover_picture___localFile___atimeMs',
  DataCoverPictureLocalFileBase = 'data___cover_picture___localFile___base',
  DataCoverPictureLocalFileBirthTime = 'data___cover_picture___localFile___birthTime',
  DataCoverPictureLocalFileBirthtime = 'data___cover_picture___localFile___birthtime',
  DataCoverPictureLocalFileBirthtimeMs = 'data___cover_picture___localFile___birthtimeMs',
  DataCoverPictureLocalFileBlksize = 'data___cover_picture___localFile___blksize',
  DataCoverPictureLocalFileBlocks = 'data___cover_picture___localFile___blocks',
  DataCoverPictureLocalFileChangeTime = 'data___cover_picture___localFile___changeTime',
  DataCoverPictureLocalFileChildren = 'data___cover_picture___localFile___children',
  DataCoverPictureLocalFileChildrenImageSharp = 'data___cover_picture___localFile___childrenImageSharp',
  DataCoverPictureLocalFileCtime = 'data___cover_picture___localFile___ctime',
  DataCoverPictureLocalFileCtimeMs = 'data___cover_picture___localFile___ctimeMs',
  DataCoverPictureLocalFileDev = 'data___cover_picture___localFile___dev',
  DataCoverPictureLocalFileDir = 'data___cover_picture___localFile___dir',
  DataCoverPictureLocalFileExt = 'data___cover_picture___localFile___ext',
  DataCoverPictureLocalFileExtension = 'data___cover_picture___localFile___extension',
  DataCoverPictureLocalFileGid = 'data___cover_picture___localFile___gid',
  DataCoverPictureLocalFileId = 'data___cover_picture___localFile___id',
  DataCoverPictureLocalFileIno = 'data___cover_picture___localFile___ino',
  DataCoverPictureLocalFileMode = 'data___cover_picture___localFile___mode',
  DataCoverPictureLocalFileModifiedTime = 'data___cover_picture___localFile___modifiedTime',
  DataCoverPictureLocalFileMtime = 'data___cover_picture___localFile___mtime',
  DataCoverPictureLocalFileMtimeMs = 'data___cover_picture___localFile___mtimeMs',
  DataCoverPictureLocalFileName = 'data___cover_picture___localFile___name',
  DataCoverPictureLocalFileNlink = 'data___cover_picture___localFile___nlink',
  DataCoverPictureLocalFilePrettySize = 'data___cover_picture___localFile___prettySize',
  DataCoverPictureLocalFilePublicUrl = 'data___cover_picture___localFile___publicURL',
  DataCoverPictureLocalFileRdev = 'data___cover_picture___localFile___rdev',
  DataCoverPictureLocalFileRelativeDirectory = 'data___cover_picture___localFile___relativeDirectory',
  DataCoverPictureLocalFileRelativePath = 'data___cover_picture___localFile___relativePath',
  DataCoverPictureLocalFileRoot = 'data___cover_picture___localFile___root',
  DataCoverPictureLocalFileSize = 'data___cover_picture___localFile___size',
  DataCoverPictureLocalFileSourceInstanceName = 'data___cover_picture___localFile___sourceInstanceName',
  DataCoverPictureLocalFileUid = 'data___cover_picture___localFile___uid',
  DataCoverPictureUrl = 'data___cover_picture___url',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataTitleRichText = 'data___title___richText',
  DataTitleText = 'data___title___text',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrismicId = 'prismicId',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
}

export type PrismicServicesFilterInput = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicServicesDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicServicesGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicServicesEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrismicServicesGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicServices>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicServicesGroupConnectionDistinctArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesGroupConnectionGroupArgs = {
  field: PrismicServicesFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicServicesGroupConnectionMaxArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesGroupConnectionMinArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesGroupConnectionSumArgs = {
  field: PrismicServicesFieldsEnum;
};

export type PrismicServicesSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PrismicServicesFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicSharedSliceType = {
  id: Scalars['ID'];
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
  variation: Scalars['String'];
  version: Scalars['String'];
};

export type PrismicSliceType = {
  id: Scalars['ID'];
  slice_label?: Maybe<Scalars['String']>;
  slice_type: Scalars['String'];
};

export type PrismicStructuredTextQueryOperatorInput = {
  eq?: InputMaybe<Scalars['PrismicStructuredText']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['PrismicStructuredText']>>>;
  ne?: InputMaybe<Scalars['PrismicStructuredText']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['PrismicStructuredText']>>>;
};

export type PrismicStructuredTextType = {
  html?: Maybe<Scalars['String']>;
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  raw: Scalars['PrismicStructuredText'];
  richText: Scalars['PrismicStructuredText'];
  text?: Maybe<Scalars['String']>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: InputMaybe<StringQueryOperatorInput>;
  raw?: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
  richText?: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicTeamMember = Node & {
  _previewable: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  children: Array<Node>;
  data: PrismicTeamMemberDataType;
  dataRaw: Scalars['JSON'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  parent?: Maybe<Node>;
  prismicId: Scalars['ID'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type PrismicTeamMemberFirst_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicTeamMemberLast_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicTeamMemberConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicTeamMemberEdge>;
  group: Array<PrismicTeamMemberGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicTeamMember>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicTeamMemberConnectionDistinctArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberConnectionGroupArgs = {
  field: PrismicTeamMemberFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicTeamMemberConnectionMaxArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberConnectionMinArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberConnectionSumArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberDataProfilePictureImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
};

export type PrismicTeamMemberDataProfilePictureImageTypeFixedArgs = {
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PrismicTeamMemberDataProfilePictureImageTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PrismicTeamMemberDataProfilePictureImageTypeGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};

export type PrismicTeamMemberDataProfilePictureImageTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicTeamMemberDataProfilePictureImageTypeFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  fixed?: InputMaybe<ImgixFixedFilterInput>;
  fluid?: InputMaybe<ImgixFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicTeamMemberDataType = {
  job_title?: Maybe<PrismicStructuredTextType>;
  name?: Maybe<PrismicStructuredTextType>;
  profile_picture?: Maybe<PrismicTeamMemberDataProfilePictureImageType>;
};

export type PrismicTeamMemberDataTypeFilterInput = {
  job_title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  name?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  profile_picture?: InputMaybe<PrismicTeamMemberDataProfilePictureImageTypeFilterInput>;
};

export type PrismicTeamMemberEdge = {
  next?: Maybe<PrismicTeamMember>;
  node: PrismicTeamMember;
  previous?: Maybe<PrismicTeamMember>;
};

export enum PrismicTeamMemberFieldsEnum {
  Previewable = '_previewable',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesUid = 'alternate_languages___uid',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DataRaw = 'dataRaw',
  DataJobTitleHtml = 'data___job_title___html',
  DataJobTitleRaw = 'data___job_title___raw',
  DataJobTitleRichText = 'data___job_title___richText',
  DataJobTitleText = 'data___job_title___text',
  DataNameHtml = 'data___name___html',
  DataNameRaw = 'data___name___raw',
  DataNameRichText = 'data___name___richText',
  DataNameText = 'data___name___text',
  DataProfilePictureAlt = 'data___profile_picture___alt',
  DataProfilePictureCopyright = 'data___profile_picture___copyright',
  DataProfilePictureDimensionsHeight = 'data___profile_picture___dimensions___height',
  DataProfilePictureDimensionsWidth = 'data___profile_picture___dimensions___width',
  DataProfilePictureFixedBase64 = 'data___profile_picture___fixed___base64',
  DataProfilePictureFixedHeight = 'data___profile_picture___fixed___height',
  DataProfilePictureFixedSizes = 'data___profile_picture___fixed___sizes',
  DataProfilePictureFixedSrc = 'data___profile_picture___fixed___src',
  DataProfilePictureFixedSrcSet = 'data___profile_picture___fixed___srcSet',
  DataProfilePictureFixedSrcSetWebp = 'data___profile_picture___fixed___srcSetWebp',
  DataProfilePictureFixedSrcWebp = 'data___profile_picture___fixed___srcWebp',
  DataProfilePictureFixedWidth = 'data___profile_picture___fixed___width',
  DataProfilePictureFluidAspectRatio = 'data___profile_picture___fluid___aspectRatio',
  DataProfilePictureFluidBase64 = 'data___profile_picture___fluid___base64',
  DataProfilePictureFluidSizes = 'data___profile_picture___fluid___sizes',
  DataProfilePictureFluidSrc = 'data___profile_picture___fluid___src',
  DataProfilePictureFluidSrcSet = 'data___profile_picture___fluid___srcSet',
  DataProfilePictureFluidSrcSetWebp = 'data___profile_picture___fluid___srcSetWebp',
  DataProfilePictureFluidSrcWebp = 'data___profile_picture___fluid___srcWebp',
  DataProfilePictureGatsbyImageData = 'data___profile_picture___gatsbyImageData',
  DataProfilePictureLocalFileAbsolutePath = 'data___profile_picture___localFile___absolutePath',
  DataProfilePictureLocalFileAccessTime = 'data___profile_picture___localFile___accessTime',
  DataProfilePictureLocalFileAtime = 'data___profile_picture___localFile___atime',
  DataProfilePictureLocalFileAtimeMs = 'data___profile_picture___localFile___atimeMs',
  DataProfilePictureLocalFileBase = 'data___profile_picture___localFile___base',
  DataProfilePictureLocalFileBirthTime = 'data___profile_picture___localFile___birthTime',
  DataProfilePictureLocalFileBirthtime = 'data___profile_picture___localFile___birthtime',
  DataProfilePictureLocalFileBirthtimeMs = 'data___profile_picture___localFile___birthtimeMs',
  DataProfilePictureLocalFileBlksize = 'data___profile_picture___localFile___blksize',
  DataProfilePictureLocalFileBlocks = 'data___profile_picture___localFile___blocks',
  DataProfilePictureLocalFileChangeTime = 'data___profile_picture___localFile___changeTime',
  DataProfilePictureLocalFileChildren = 'data___profile_picture___localFile___children',
  DataProfilePictureLocalFileChildrenImageSharp = 'data___profile_picture___localFile___childrenImageSharp',
  DataProfilePictureLocalFileCtime = 'data___profile_picture___localFile___ctime',
  DataProfilePictureLocalFileCtimeMs = 'data___profile_picture___localFile___ctimeMs',
  DataProfilePictureLocalFileDev = 'data___profile_picture___localFile___dev',
  DataProfilePictureLocalFileDir = 'data___profile_picture___localFile___dir',
  DataProfilePictureLocalFileExt = 'data___profile_picture___localFile___ext',
  DataProfilePictureLocalFileExtension = 'data___profile_picture___localFile___extension',
  DataProfilePictureLocalFileGid = 'data___profile_picture___localFile___gid',
  DataProfilePictureLocalFileId = 'data___profile_picture___localFile___id',
  DataProfilePictureLocalFileIno = 'data___profile_picture___localFile___ino',
  DataProfilePictureLocalFileMode = 'data___profile_picture___localFile___mode',
  DataProfilePictureLocalFileModifiedTime = 'data___profile_picture___localFile___modifiedTime',
  DataProfilePictureLocalFileMtime = 'data___profile_picture___localFile___mtime',
  DataProfilePictureLocalFileMtimeMs = 'data___profile_picture___localFile___mtimeMs',
  DataProfilePictureLocalFileName = 'data___profile_picture___localFile___name',
  DataProfilePictureLocalFileNlink = 'data___profile_picture___localFile___nlink',
  DataProfilePictureLocalFilePrettySize = 'data___profile_picture___localFile___prettySize',
  DataProfilePictureLocalFilePublicUrl = 'data___profile_picture___localFile___publicURL',
  DataProfilePictureLocalFileRdev = 'data___profile_picture___localFile___rdev',
  DataProfilePictureLocalFileRelativeDirectory = 'data___profile_picture___localFile___relativeDirectory',
  DataProfilePictureLocalFileRelativePath = 'data___profile_picture___localFile___relativePath',
  DataProfilePictureLocalFileRoot = 'data___profile_picture___localFile___root',
  DataProfilePictureLocalFileSize = 'data___profile_picture___localFile___size',
  DataProfilePictureLocalFileSourceInstanceName = 'data___profile_picture___localFile___sourceInstanceName',
  DataProfilePictureLocalFileUid = 'data___profile_picture___localFile___uid',
  DataProfilePictureUrl = 'data___profile_picture___url',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrismicId = 'prismicId',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
}

export type PrismicTeamMemberFilterInput = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicTeamMemberDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicTeamMemberGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicTeamMemberEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrismicTeamMemberGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicTeamMember>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicTeamMemberGroupConnectionDistinctArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberGroupConnectionGroupArgs = {
  field: PrismicTeamMemberFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicTeamMemberGroupConnectionMaxArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberGroupConnectionMinArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberGroupConnectionSumArgs = {
  field: PrismicTeamMemberFieldsEnum;
};

export type PrismicTeamMemberSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PrismicTeamMemberFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicTestimonials = Node & {
  _previewable: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  children: Array<Node>;
  data: PrismicTestimonialsDataType;
  dataRaw: Scalars['JSON'];
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  parent?: Maybe<Node>;
  prismicId: Scalars['ID'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type PrismicTestimonialsFirst_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicTestimonialsLast_Publication_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicTestimonialsConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicTestimonialsEdge>;
  group: Array<PrismicTestimonialsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicTestimonials>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicTestimonialsConnectionDistinctArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsConnectionGroupArgs = {
  field: PrismicTestimonialsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicTestimonialsConnectionMaxArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsConnectionMinArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsConnectionSumArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsDataType = {
  cite?: Maybe<PrismicStructuredTextType>;
  cite_complement?: Maybe<PrismicStructuredTextType>;
  quote?: Maybe<PrismicStructuredTextType>;
};

export type PrismicTestimonialsDataTypeFilterInput = {
  cite?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  cite_complement?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  quote?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicTestimonialsEdge = {
  next?: Maybe<PrismicTestimonials>;
  node: PrismicTestimonials;
  previous?: Maybe<PrismicTestimonials>;
};

export enum PrismicTestimonialsFieldsEnum {
  Previewable = '_previewable',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesUid = 'alternate_languages___uid',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DataRaw = 'dataRaw',
  DataCiteHtml = 'data___cite___html',
  DataCiteRaw = 'data___cite___raw',
  DataCiteRichText = 'data___cite___richText',
  DataCiteText = 'data___cite___text',
  DataCiteComplementHtml = 'data___cite_complement___html',
  DataCiteComplementRaw = 'data___cite_complement___raw',
  DataCiteComplementRichText = 'data___cite_complement___richText',
  DataCiteComplementText = 'data___cite_complement___text',
  DataQuoteHtml = 'data___quote___html',
  DataQuoteRaw = 'data___quote___raw',
  DataQuoteRichText = 'data___quote___richText',
  DataQuoteText = 'data___quote___text',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrismicId = 'prismicId',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
}

export type PrismicTestimonialsFilterInput = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicTestimonialsDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicTestimonialsGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicTestimonialsEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrismicTestimonialsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicTestimonials>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicTestimonialsGroupConnectionDistinctArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsGroupConnectionGroupArgs = {
  field: PrismicTestimonialsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicTestimonialsGroupConnectionMaxArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsGroupConnectionMinArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsGroupConnectionSumArgs = {
  field: PrismicTestimonialsFieldsEnum;
};

export type PrismicTestimonialsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PrismicTestimonialsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PrismicTypePathType = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  kind: Scalars['String'];
  parent?: Maybe<Node>;
  path: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type PrismicTypePathTypeConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicTypePathTypeEdge>;
  group: Array<PrismicTypePathTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicTypePathTypeConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionGroupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicTypePathTypeConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionMinArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionSumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeEdge = {
  next?: Maybe<PrismicTypePathType>;
  node: PrismicTypePathType;
  previous?: Maybe<PrismicTypePathType>;
};

export enum PrismicTypePathTypeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Kind = 'kind',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  Type = 'type',
}

export type PrismicTypePathTypeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  kind?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type PrismicTypePathTypeGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<PrismicTypePathTypeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<PrismicTypePathTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type PrismicTypePathTypeGroupConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionGroupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PrismicTypePathTypeGroupConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionMinArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionSumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PrismicTypePathTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Query = {
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allPrismicBlogPost: PrismicBlogPostConnection;
  allPrismicEmbedType: PrismicEmbedTypeConnection;
  allPrismicHomepage: PrismicHomepageConnection;
  allPrismicServices: PrismicServicesConnection;
  allPrismicTeamMember: PrismicTeamMemberConnection;
  allPrismicTestimonials: PrismicTestimonialsConnection;
  allPrismicTypePathType: PrismicTypePathTypeConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  prismicBlogPost?: Maybe<PrismicBlogPost>;
  prismicEmbedType?: Maybe<PrismicEmbedType>;
  prismicHomepage?: Maybe<PrismicHomepage>;
  prismicServices?: Maybe<PrismicServices>;
  prismicTeamMember?: Maybe<PrismicTeamMember>;
  prismicTestimonials?: Maybe<PrismicTestimonials>;
  prismicTypePathType?: Maybe<PrismicTypePathType>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllPrismicBlogPostArgs = {
  filter?: InputMaybe<PrismicBlogPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PrismicBlogPostSortInput>;
};

export type QueryAllPrismicEmbedTypeArgs = {
  filter?: InputMaybe<PrismicEmbedTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PrismicEmbedTypeSortInput>;
};

export type QueryAllPrismicHomepageArgs = {
  filter?: InputMaybe<PrismicHomepageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PrismicHomepageSortInput>;
};

export type QueryAllPrismicServicesArgs = {
  filter?: InputMaybe<PrismicServicesFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PrismicServicesSortInput>;
};

export type QueryAllPrismicTeamMemberArgs = {
  filter?: InputMaybe<PrismicTeamMemberFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PrismicTeamMemberSortInput>;
};

export type QueryAllPrismicTestimonialsArgs = {
  filter?: InputMaybe<PrismicTestimonialsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PrismicTestimonialsSortInput>;
};

export type QueryAllPrismicTypePathTypeArgs = {
  filter?: InputMaybe<PrismicTypePathTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PrismicTypePathTypeSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryPrismicBlogPostArgs = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicBlogPostDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryPrismicEmbedTypeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QueryPrismicHomepageArgs = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicHomepageDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryPrismicServicesArgs = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicServicesDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryPrismicTeamMemberArgs = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicTeamMemberDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryPrismicTestimonialsArgs = {
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  data?: InputMaybe<PrismicTestimonialsDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryPrismicTypePathTypeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  kind?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitle = 'siteMetadata___title',
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyImgixFluidFragment = {
  aspectRatio: number;
  src: string;
  srcWebp: string;
  srcSet: string;
  srcSetWebp: string;
  sizes: string;
  base64: string;
};

export type GatsbyImgixFluid_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcWebp: string;
  srcSet: string;
  srcSetWebp: string;
  sizes: string;
};

export type GatsbyImgixFixedFragment = {
  base64: string;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type GatsbyImgixFixed_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type GatsbyImageSharpFixedFragment = {
  base64?: string | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  tracedSVG?: string | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  base64?: string | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | undefined;
  srcSetWebp?: string | undefined;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | undefined;
  srcSetWebp?: string | undefined;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | undefined;
  srcSetWebp?: string | undefined;
};

export type GatsbyImageSharpFluidFragment = {
  base64?: string | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  tracedSVG?: string | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  base64?: string | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | undefined;
  srcSetWebp?: string | undefined;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | undefined;
  srcSetWebp?: string | undefined;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | undefined;
  srcSetWebp?: string | undefined;
  sizes: string;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = {
  allSiteFunction: { nodes: Array<{ functionRoute: string }> };
  allSitePage: { nodes: Array<{ path: string }> };
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
  site?:
    | {
        siteMetadata?:
          | {
              title?: string | undefined;
              description?: string | undefined;
              author?: string | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type TestimonialsQueryVariables = Exact<{ [key: string]: never }>;

export type TestimonialsQuery = {
  allPrismicTestimonials: {
    edges: Array<{
      node: {
        data: {
          cite?: { text?: string | undefined } | undefined;
          quote?: { text?: string | undefined } | undefined;
          cite_complement?: { text?: string | undefined } | undefined;
        };
      };
    }>;
  };
};

export type TestimonialsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type TestimonialsQueryQuery = {
  allPrismicTestimonials: {
    nodes: Array<{
      data: {
        cite?: { text?: string | undefined } | undefined;
        quote?: { text?: string | undefined } | undefined;
        cite_complement?: { text?: string | undefined } | undefined;
      };
    }>;
  };
};

export type HomeQueryVariables = Exact<{ [key: string]: never }>;

export type HomeQuery = {
  prismicHomepage?:
    | {
        id: string;
        url?: string | undefined;
        data: {
          hero_title?: { text?: string | undefined } | undefined;
          hero_banner_picture?:
            | {
                alt?: string | undefined;
                url?: string | undefined;
                gatsbyImageData?: unknown | undefined;
                thumbnails?:
                  | {
                      Mobile?:
                        | {
                            alt?: string | undefined;
                            copyright?: string | undefined;
                            url?: string | undefined;
                            gatsbyImageData?: unknown | undefined;
                          }
                        | undefined;
                    }
                  | undefined;
              }
            | undefined;
        };
      }
    | undefined;
};

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_2_Query = {
  site?: { buildTime?: string | undefined } | undefined;
};
