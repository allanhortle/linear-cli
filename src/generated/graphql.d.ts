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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON values as a string */
  JSONObject: any;
  /** The `TimelessDateScalar` scalar type represents Date values without a timestamp. It expects strings in the format YYYY-MM-DD */
  TimelessDateScalar: any;
};

/** An API key. Grants access to the user's resources. */
export type ApiKey = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The label of the API key. */
  label: Scalars['String'];
};

export type ApiKeyConnection = {
  edges: Array<ApiKeyEdge>;
  nodes: Array<ApiKey>;
  pageInfo: PageInfo;
};

export type ApiKeyCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The label for the API key. */
  label: Scalars['String'];
  /** The API key value (format: /^[a-zA-Z0-9]{40}$/). */
  key: Scalars['String'];
};

export type ApiKeyEdge = {
  node: ApiKey;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type ApiKeyPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The API key that was created. */
  apiKey: ApiKey;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Public information of the OAuth application. */
export type Application = {
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Application name. */
  name: Scalars['String'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
};

export type ArchivePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Contains requested archived model objects. */
export type ArchiveResponse = {
  /** A JSON serialized collection of model objects loaded from the archive */
  archive: Scalars['String'];
  /** The total number of entities in the archive. */
  totalCount: Scalars['Float'];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float'];
};

/** [Alpha] Issue attachment (e.g. support ticket, pull request). */
export type Attachment = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Content for the title line in the Linear attachment widget. */
  title: Scalars['String'];
  /** Content for the subtitle line in the Linear attachment widget. */
  subtitle?: Maybe<Scalars['String']>;
  /** Location of the attachment which is also used as an identifier. Attachment URLs are unique and calls to create a new attachment are idempotent with the URL. */
  url: Scalars['String'];
  /** Custom metadata related to the attachment. */
  metadata: Scalars['JSONObject'];
  /** Information about the source which created the attachment. */
  source?: Maybe<Scalars['JSONObject']>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource: Scalars['Boolean'];
  /** The issue this attachment belongs to. */
  issue: Issue;
};

export type AttachmentConnection = {
  edges: Array<AttachmentEdge>;
  nodes: Array<Attachment>;
  pageInfo: PageInfo;
};

export type AttachmentCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The attachment title. */
  title: Scalars['String'];
  /** The attachment subtitle. */
  subtitle?: Maybe<Scalars['String']>;
  /** Attachment location which is also used as an unique identifier for the attachment. If another attachment is created with the same `url` value, existing record is updated instead. */
  url: Scalars['String'];
  /** The issue to associate the attachment with. */
  issueId: Scalars['String'];
  /** Attachment metadata object with string and number values. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource?: Maybe<Scalars['Boolean']>;
};

export type AttachmentEdge = {
  node: Attachment;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type AttachmentPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The issue attachment that was created. */
  attachment: Attachment;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type AttachmentUpdateInput = {
  /** The attachment title. */
  title: Scalars['String'];
  /** The attachment subtitle. */
  subtitle?: Maybe<Scalars['String']>;
  /** Attachment metadata object with string and number values. */
  metadata?: Maybe<Scalars['JSONObject']>;
};

export type AuthResolverResponse = {
  /** User account ID. */
  id: Scalars['String'];
  /** JWT token for authentication of the account. */
  token?: Maybe<Scalars['String']>;
  /** Email for the authenticated account. */
  email?: Maybe<Scalars['String']>;
  /** Should the signup flow allow access for the domain. */
  allowDomainAccess?: Maybe<Scalars['Boolean']>;
  /** Users belonging to this account. */
  users: Array<User>;
  /** Organizations this account has access to, but is not yet a member. */
  availableOrganizations?: Maybe<Array<Organization>>;
};

/** Public information of the OAuth application, plus the authorized scopes for a given user. */
export type AuthorizedApplication = {
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Application name. */
  name: Scalars['String'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']>;
  /** OAuth application's ID. */
  appId: Scalars['String'];
};

export type BillingDetailsPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars['String']>;
  /** List of invoices, if any. */
  invoices: Array<Invoice>;
  /** The payment method. */
  paymentMethod?: Maybe<Card>;
};

export type BillingEmailPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars['String']>;
};

export type BillingEmailUpdateInput = {
  /** The email address to which to send invoices. */
  email: Scalars['String'];
};

export type Card = {
  /** The brand of the card, e.g. Visa. */
  brand: Scalars['String'];
  /** The last four digits used to identify the card. */
  last4: Scalars['String'];
};

export type CollaborationDocumentUpdateInput = {
  /** Document identifier. */
  issueId: Scalars['String'];
  /** Client's document version number. */
  version: Scalars['Int'];
  /** New document steps from the client. */
  steps: Array<Scalars['JSON']>;
  /** Client identifier. */
  clientId: Scalars['String'];
};

export type CollaborationDocumentUpdatePayload = {
  /** Document steps the client has not seen yet and need to rebase it's local steps on. */
  steps?: Maybe<StepsResponse>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A comment associated with an issue. */
export type Comment = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The comment content in markdown format. */
  body: Scalars['String'];
  /** The time user edited the comment. */
  editedAt?: Maybe<Scalars['DateTime']>;
  /** Comment's URL. */
  url: Scalars['String'];
  /** The user who wrote the comment. */
  user: User;
  /** The issue that the comment is associated with. */
  issue: Issue;
};

export type CommentConnection = {
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The comment content in markdown format. */
  body?: Maybe<Scalars['String']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: Maybe<Scalars['JSON']>;
  /** The issue to associate the comment with. */
  issueId: Scalars['String'];
};

export type CommentEdge = {
  node: Comment;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type CommentPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The comment that was created or updated. */
  comment: Comment;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CommentUpdateInput = {
  /** The comment content. */
  body?: Maybe<Scalars['String']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: Maybe<Scalars['JSON']>;
};

/** GitHub's commit data */
export type CommitPayload = {
  id: Scalars['String'];
  message: Scalars['String'];
  timestamp: Scalars['String'];
  url: Scalars['String'];
  added: Array<Scalars['String']>;
  removed: Array<Scalars['String']>;
  modified: Array<Scalars['String']>;
};

export type ContactCreateInput = {
  /** The type of support contact. */
  type: Scalars['String'];
  /** The message the user sent. */
  message: Scalars['String'];
  /** User's operating system. */
  operatingSystem?: Maybe<Scalars['String']>;
  /** User's browser information. */
  browser?: Maybe<Scalars['String']>;
  /** User's device information. */
  device?: Maybe<Scalars['String']>;
  /** How disappointed the user would be if they could no longer use Linear. */
  disappointmentRating?: Maybe<Scalars['Int']>;
};

export type ContactPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CreateCsvExportReportPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CreateOrJoinOrganizationResponse = {
  organization: Organization;
  user: User;
};

export type CreateOrganizationInput = {
  /** The name of the organization. */
  name: Scalars['String'];
  /** The URL key of the organization. */
  urlKey: Scalars['String'];
  /** Whether the organization should allow email domain access. */
  domainAccess?: Maybe<Scalars['Boolean']>;
  /** The timezone of the organization, passed in by client. */
  timezone?: Maybe<Scalars['String']>;
  /** JSON serialized UTM parameters associated with the creation of the workspace. */
  utm?: Maybe<Scalars['String']>;
};

/** A custom view that has been saved by a user. */
export type CustomView = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The name of the custom view. */
  name: Scalars['String'];
  /** The description of the custom view. */
  description?: Maybe<Scalars['String']>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars['String']>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars['String']>;
  /** The organization of the custom view. */
  organization: Organization;
  /** The team associated with the custom view. */
  team?: Maybe<Team>;
  /** The user who created the custom view. */
  creator: User;
  /** The filters applied to issues in the custom view. */
  filters: Scalars['JSONObject'];
  /** Whether the custom view is shared with everyone in the organization. */
  shared: Scalars['Boolean'];
};

export type CustomViewConnection = {
  edges: Array<CustomViewEdge>;
  nodes: Array<CustomView>;
  pageInfo: PageInfo;
};

export type CustomViewCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The name of the custom view. */
  name: Scalars['String'];
  /** The description of the custom view. */
  description?: Maybe<Scalars['String']>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars['String']>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars['String']>;
  /** The id of the team associated with the custom view. */
  teamId?: Maybe<Scalars['String']>;
  /** The filters applied to issues in the custom view. */
  filters?: Maybe<Scalars['JSONObject']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: Maybe<Scalars['Boolean']>;
};

export type CustomViewEdge = {
  node: CustomView;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type CustomViewPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The custom view that was created or updated. */
  customView: CustomView;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CustomViewUpdateInput = {
  /** The name of the custom view. */
  name?: Maybe<Scalars['String']>;
  /** The description of the custom view. */
  description?: Maybe<Scalars['String']>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars['String']>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars['String']>;
  /** The id of the team associated with the custom view. */
  teamId?: Maybe<Scalars['String']>;
  /** The filters applied to issues in the custom view. */
  filters?: Maybe<Scalars['JSONObject']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: Maybe<Scalars['Boolean']>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type Cycle = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The number of the cycle. */
  number: Scalars['Float'];
  /** The custom name of the cycle. */
  name?: Maybe<Scalars['String']>;
  /** The start time of the cycle. */
  startsAt: Scalars['DateTime'];
  /** The end time of the cycle. */
  endsAt: Scalars['DateTime'];
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The total number of issues in the cycle after each day. */
  issueCountHistory: Array<Scalars['Float']>;
  /** The number of completed issues in the cycle after each day. */
  completedIssueCountHistory: Array<Scalars['Float']>;
  /** The total number of estimation points after each day. */
  scopeHistory: Array<Scalars['Float']>;
  /** The number of completed estimation points after each day. */
  completedScopeHistory: Array<Scalars['Float']>;
  /** The team that the cycle is associated with. */
  team: Team;
  /** Issues associated with the cycle. */
  issues: IssueConnection;
  /** Issues that weren't completed when the cycle was closed. */
  uncompletedIssuesUponClose: IssueConnection;
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleUncompletedIssuesUponCloseArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type CycleConnection = {
  edges: Array<CycleEdge>;
  nodes: Array<Cycle>;
  pageInfo: PageInfo;
};

export type CycleCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars['String']>;
  /** The team to associate the cycle with. */
  teamId: Scalars['String'];
  /** The start date of the cycle. */
  startsAt: Scalars['DateTime'];
  /** The end date of the cycle. */
  endsAt: Scalars['DateTime'];
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
};

export type CycleEdge = {
  node: Cycle;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type CyclePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The Cycle that was created or updated. */
  cycle?: Maybe<Cycle>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CycleUpdateInput = {
  /** The custom name of the cycle. */
  name?: Maybe<Scalars['String']>;
  /** The start date of the cycle. */
  startsAt?: Maybe<Scalars['DateTime']>;
  /** The end date of the cycle. */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** The end date of the cycle. */
  completedAt?: Maybe<Scalars['DateTime']>;
};


export type DebugPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type DeleteOrganizationInput = {
  /** The deletion code to confirm operation. */
  deletionCode: Scalars['String'];
};

/** Collaborative editing steps for documents. */
export type DocumentStep = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Step data. */
  step: Scalars['JSON'];
  /** Step version. */
  version: Scalars['Float'];
  /** Connected client ID. */
  clientId: Scalars['String'];
};

export type EmailUnsubscribeInput = {
  /** Email type to unsubscribed from. */
  type: Scalars['String'];
  /** The user's email validation token. */
  token: Scalars['String'];
  /** The identifier of the user. */
  userId: Scalars['String'];
};

export type EmailUnsubscribePayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type EmailUserAccountAuthChallengeInput = {
  /** The email for which to generate the magic login code. */
  email: Scalars['String'];
  /** Whether the login was requested from the desktop app. */
  isDesktop?: Maybe<Scalars['Boolean']>;
  /** Signup code. */
  signupCode?: Maybe<Scalars['String']>;
};

export type EmailUserAccountAuthChallengeResponse = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** Supported challenge for this user account. Can be either verificationCode or password. */
  authType: Scalars['String'];
};

/** A custom emoji. */
export type Emoji = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The emoji's name. */
  name: Scalars['String'];
  /** The emoji image URL. */
  url: Scalars['String'];
  /** The source of the emoji. */
  source: Scalars['String'];
  /** The user who created the emoji. */
  creator: User;
  /** The organization that the emoji belongs to. */
  organization: Organization;
};

export type EmojiConnection = {
  edges: Array<EmojiEdge>;
  nodes: Array<Emoji>;
  pageInfo: PageInfo;
};

export type EmojiCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The name of the custom emoji. */
  name: Scalars['String'];
  /** The URL for the emoji. */
  url: Scalars['String'];
};

export type EmojiEdge = {
  node: Emoji;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type EmojiPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The emoji that was created. */
  emoji: Emoji;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type EventCreateInput = {
  /** The category of the event to create. */
  category: Scalars['String'];
  /** The subject of the event. */
  subject: Scalars['String'];
  /** The target identifier of the event. */
  targetId?: Maybe<Scalars['String']>;
  /** The value of the event. */
  value?: Maybe<Scalars['Float']>;
  /** Additional data of the event, encoded as JSON. */
  data?: Maybe<Scalars['JSON']>;
};

export type EventPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** User favorites presented in the sidebar. */
export type Favorite = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of the favorite. */
  type: Scalars['String'];
  /** The order of the item in the favorites list. */
  sortOrder: Scalars['Float'];
  /** The owner of the favorite. */
  user: User;
  /** Favorited issue. */
  issue?: Maybe<Issue>;
  /** Favorited project. */
  project?: Maybe<Project>;
  /** Favorited project team. */
  projectTeam?: Maybe<Project>;
  /** Favorited cycle. */
  cycle?: Maybe<Cycle>;
  /** Favorited issue label. */
  label?: Maybe<IssueLabel>;
};

export type FavoriteConnection = {
  edges: Array<FavoriteEdge>;
  nodes: Array<Favorite>;
  pageInfo: PageInfo;
};

export type FavoriteCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The identifier of the issue to favorite. */
  issueId?: Maybe<Scalars['String']>;
  /** The identifier of the project to favorite. */
  projectId?: Maybe<Scalars['String']>;
  /** The identifier of the project team to favorite. */
  projectTeamId?: Maybe<Scalars['String']>;
  /** The identifier of the cycle to favorite. */
  cycleId?: Maybe<Scalars['String']>;
  /** The identifier of the custom view to favorite. */
  customViewId?: Maybe<Scalars['String']>;
  /** The identifier of the label to favorite. */
  labelId?: Maybe<Scalars['String']>;
  /** The position of the item in the favorites list. */
  sortOrder?: Maybe<Scalars['Float']>;
};

export type FavoriteEdge = {
  node: Favorite;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type FavoritePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The object that was added as a favorite. */
  favorite: Favorite;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type FavoriteUpdateInput = {
  /** The position of the item in the favorites list. */
  sortOrder?: Maybe<Scalars['Float']>;
};

export type FeedbackCreateInput = {
  /** The feedback the user sent. */
  feedback: Scalars['String'];
  /** How disappointed the user would be if he/she could no longer use Linear. */
  disappointmentRating: Scalars['Float'];
};

export type FeedbackPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Object representing Figma preview information. */
export type FigmaEmbed = {
  /** Figma file name. */
  name: Scalars['String'];
  /** Date when the file was updated at the time of embedding. */
  lastModified: Scalars['DateTime'];
  /** Node name. */
  nodeName?: Maybe<Scalars['String']>;
  /** Figma screenshot URL. */
  url?: Maybe<Scalars['String']>;
};

export type FigmaEmbedPayload = {
  /** Figma embed information. */
  figmaEmbed?: Maybe<FigmaEmbed>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A recorded entry of a file uploaded by a user. */
export type FileUpload = {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The user who uploaded the file. */
  creator?: Maybe<User>;
  /** The organization the upload belongs to. */
  organization: Organization;
  /** The asset URL this file is available at. */
  assetUrl?: Maybe<Scalars['String']>;
  /** The MIME type of the uploaded file. */
  contentType?: Maybe<Scalars['String']>;
  /** The name of the uploaded file. */
  filename?: Maybe<Scalars['String']>;
  /** Additional metadata of the file. */
  metaData: Scalars['JSON'];
  /** Size of the uploaded file in bytes. */
  size: Scalars['Float'];
};

/** GitHub OAuth token, plus information about the organizations the user is a member of. */
export type GithubOAuthTokenPayload = {
  /** The OAuth token if the operation to fetch it was successful. */
  token?: Maybe<Scalars['String']>;
  /** A list of the GitHub organizations the user is a member of with attached repositories. */
  organizations?: Maybe<Array<GithubOrg>>;
};

/** Relevant information for the GitHub organization. */
export type GithubOrg = {
  /** GitHub organization id. */
  id: Scalars['String'];
  /** The name of the GitHub organization. */
  name: Scalars['String'];
  /** The login for the GitHub organization. */
  login: Scalars['String'];
  /** Repositories that the organization owns. */
  repositories: Array<GithubRepo>;
};

/** Relevant information for the GitHub repository. */
export type GithubRepo = {
  /** The id of the GitHub repository. */
  id: Scalars['String'];
  /** The name of the GitHub repository. */
  name: Scalars['String'];
};

/** Google Sheets specific settings. */
export type GoogleSheetsSettings = {
  spreadsheetId: Scalars['String'];
  spreadsheetUrl: Scalars['String'];
  sheetId: Scalars['Float'];
  updatedIssuesAt: Scalars['DateTime'];
};

export type GoogleUserAccountAuthInput = {
  /** Code returned from Google's OAuth flow. */
  code: Scalars['String'];
  /** The URI to redirect the user to. */
  redirectUri?: Maybe<Scalars['String']>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String'];
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: Maybe<Array<Scalars['String']>>;
  /** Signup code. */
  signupCode?: Maybe<Scalars['String']>;
};

export type ImageUploadFromUrlPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The URL containing the image. */
  url?: Maybe<Scalars['String']>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** An integration with an external service. */
export type Integration = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The integration's type. */
  service: Scalars['String'];
  /** The organization that the integration is associated with. */
  organization: Organization;
  /** The team that the integration is associated with. */
  team?: Maybe<Team>;
  /** The user that added the integration. */
  creator: User;
};

export type IntegrationConnection = {
  edges: Array<IntegrationEdge>;
  nodes: Array<Integration>;
  pageInfo: PageInfo;
};

export type IntegrationEdge = {
  node: Integration;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type IntegrationPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** An integration resource created by an external service. */
export type IntegrationResource = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The integration's type. */
  resourceType: Scalars['String'];
  /** The external service resource ID. */
  resourceId: Scalars['String'];
  /** Detailed information about the external resource. */
  data: IntegrationResourceData;
  /** The integration that the resource is associated with. */
  integration: Integration;
  /** The issue that the resource is associated with. */
  issue: Issue;
  /** Pull request information for GitHub pull requests and GitLab merge requests. */
  pullRequest: PullRequestPayload;
};

export type IntegrationResourceConnection = {
  edges: Array<IntegrationResourceEdge>;
  nodes: Array<IntegrationResource>;
  pageInfo: PageInfo;
};

/** Integration resource's payload */
export type IntegrationResourceData = {
  /** The payload for an IntegrationResource of type 'githubPullRequest' */
  githubPullRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'gitlabMergeRequest' */
  gitlabMergeRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'githubCommit' */
  githubCommit?: Maybe<CommitPayload>;
  /** The payload for an IntegrationResource of type 'sentryIssue' */
  sentryIssue?: Maybe<SentryIssuePayload>;
};

export type IntegrationResourceEdge = {
  node: IntegrationResource;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

/** The integration resource's settings */
export type IntegrationSettings = {
  slackPost?: Maybe<SlackPostSettings>;
  slackProjectPost?: Maybe<SlackPostSettings>;
  googleSheets?: Maybe<GoogleSheetsSettings>;
  sentry?: Maybe<SentrySettings>;
  zendesk?: Maybe<ZendeskSettings>;
};

export type InviteData = {
  /** The name of the inviter. */
  inviterName: Scalars['String'];
  /** Avatar URLs for the invitees. */
  avatarURLs: Array<Scalars['String']>;
  /** Team names for the invitees. */
  teamNames: Array<Scalars['String']>;
  /** Team identifiers for the invitees. */
  teamIds: Array<Scalars['String']>;
  /** The name of the organization the users were invited to. */
  organizationName: Scalars['String'];
  /** The domain of the organization the users were invited to. */
  organizationDomain: Scalars['String'];
  /** The logo of the organization the users were invited to. */
  organizationLogoUrl?: Maybe<Scalars['String']>;
  /** The user count of the organization. */
  userCount: Scalars['Float'];
};

export type InvitePagePayload = {
  /** Invite data. */
  inviteData?: Maybe<InviteData>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type Invoice = {
  /** The URL at which the invoice can be viewed or paid. */
  url?: Maybe<Scalars['String']>;
  /** The creation date of the invoice. */
  created: Scalars['TimelessDateScalar'];
  /** The due date of the invoice. */
  dueDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** The status of the invoice. */
  status: Scalars['String'];
  /** The invoice total, in cents. */
  total: Scalars['Float'];
};

/** An issue. */
export type Issue = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The issue's unique number. */
  number: Scalars['Float'];
  /** The issue's title. */
  title: Scalars['String'];
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /** The priority of the issue. */
  priority: Scalars['Float'];
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']>;
  /** The order of the item in its column on the board. */
  boardOrder: Scalars['Float'];
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']>;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String'];
  /** Label for the priority. */
  priorityLabel: Scalars['String'];
  /** Issue URL. */
  url: Scalars['String'];
  /** The team that the issue is associated with. */
  team: Team;
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** Suggested branch name for the issue. */
  branchName: Scalars['String'];
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** Integration resources for this issue. */
  integrationResources: IntegrationResourceConnection;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
};


/** An issue. */
export type IssueSubscribersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueChildrenArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueCommentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueHistoryArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueLabelsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueIntegrationResourcesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueRelationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueInverseRelationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueAttachmentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type IssueConnection = {
  edges: Array<IssueEdge>;
  nodes: Array<Issue>;
  pageInfo: PageInfo;
};

export type IssueCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The title of the issue. */
  title: Scalars['String'];
  /** The issue description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']>;
  /** The identifier of the user to assign the issue to. */
  assigneeId?: Maybe<Scalars['String']>;
  /** The identifier of the parent issue. */
  parentId?: Maybe<Scalars['String']>;
  /** The priority of the issue. */
  priority?: Maybe<Scalars['Int']>;
  /** The estimated complexity of the issue. */
  estimate?: Maybe<Scalars['Int']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: Maybe<Array<Scalars['String']>>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: Maybe<Array<Scalars['String']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId: Scalars['String'];
  /** The cycle associated with the issue. */
  cycleId?: Maybe<Scalars['String']>;
  /** The project associated with the issue. */
  projectId?: Maybe<Scalars['String']>;
  /** The team state of the issue. */
  stateId?: Maybe<Scalars['String']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: Maybe<Scalars['Float']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDateScalar']>;
};

export type IssueEdge = {
  node: Issue;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

/** A record of changes to an issue. */
export type IssueHistory = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The issue that was changed. */
  issue: Issue;
  /** The user who made these changes. If null, possibly means that the change made by an integration. */
  actor?: Maybe<User>;
  /** Information about the integration or application which created this history entry. */
  source?: Maybe<Scalars['JSONObject']>;
  /** Whether the issue's description was updated. */
  updatedDescription?: Maybe<Scalars['Boolean']>;
  /** What the title was changed from. */
  fromTitle?: Maybe<Scalars['String']>;
  /** What the title was changed to. */
  toTitle?: Maybe<Scalars['String']>;
  /** The user from whom the issue was re-assigned from. */
  fromAssignee?: Maybe<User>;
  /** The user to whom the issue was assigned to. */
  toAssignee?: Maybe<User>;
  /** What the priority was changed from. */
  fromPriority?: Maybe<Scalars['Float']>;
  /** What the priority was changed to. */
  toPriority?: Maybe<Scalars['Float']>;
  /** The team from which the issue was moved from. */
  fromTeam?: Maybe<Team>;
  /** The team to which the issue was moved to. */
  toTeam?: Maybe<Team>;
  /** The previous parent of the issue. */
  fromParent?: Maybe<Issue>;
  /** The new parent of the issue. */
  toParent?: Maybe<Issue>;
  /** The previous workflow state of the issue. */
  fromState?: Maybe<WorkflowState>;
  /** The new workflow state of the issue. */
  toState?: Maybe<WorkflowState>;
  /** The previous cycle of the issue. */
  fromCycle?: Maybe<Cycle>;
  /** The new cycle of the issue. */
  toCycle?: Maybe<Cycle>;
  /** The previous project of the issue. */
  fromProject?: Maybe<Project>;
  /** The new project of the issue. */
  toProject?: Maybe<Project>;
  /** What the estimate was changed from. */
  fromEstimate?: Maybe<Scalars['Float']>;
  /** What the estimate was changed to. */
  toEstimate?: Maybe<Scalars['Float']>;
  /** Whether the issue was archived or un-archived. */
  archived?: Maybe<Scalars['Boolean']>;
  /** ID's of labels that were added. */
  addedLabelIds?: Maybe<Array<Scalars['String']>>;
  /** ID's of labels that were removed. */
  removedLabelIds?: Maybe<Array<Scalars['String']>>;
  /** Changed issue relationships. */
  relationChanges?: Maybe<Array<IssueRelationHistoryPayload>>;
  autoClosed?: Maybe<Scalars['Boolean']>;
  autoArchived?: Maybe<Scalars['Boolean']>;
  /** What the due date was changed from */
  fromDueDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** What the due date was changed to */
  toDueDate?: Maybe<Scalars['TimelessDateScalar']>;
};

export type IssueHistoryConnection = {
  edges: Array<IssueHistoryEdge>;
  nodes: Array<IssueHistory>;
  pageInfo: PageInfo;
};

export type IssueHistoryEdge = {
  node: IssueHistory;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

/** An import job for data from an external service */
export type IssueImport = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The id for the user that started the job. */
  creatorId: Scalars['String'];
  /** The service from which data will be imported. */
  service: Scalars['String'];
  /** The status for the import job. */
  status: Scalars['String'];
  /** The data mapping configuration for the import job. */
  mapping?: Maybe<Scalars['JSONObject']>;
  /** User readable error message, if one has occurred during the import. */
  error?: Maybe<Scalars['String']>;
};

export type IssueImportDeletePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The import job that was deleted. */
  issueImport?: Maybe<IssueImport>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Issue import mapping input */
export type IssueImportMappingInput = {
  /** The mapping configuration for users */
  users?: Maybe<Scalars['JSONObject']>;
  /** The mapping configuration for workflow states */
  workflowStates?: Maybe<Scalars['JSONObject']>;
  /** The mapping configuration for epics */
  epics?: Maybe<Scalars['JSONObject']>;
};

export type IssueImportPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The import job that was created or updated. */
  issueImport?: Maybe<IssueImport>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Labels that can be associated with issues. */
export type IssueLabel = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The label's name. */
  name: Scalars['String'];
  /** The label's description. */
  description?: Maybe<Scalars['String']>;
  /** The label's color as a HEX string. */
  color: Scalars['String'];
  /** The team to which the label belongs to. */
  team: Team;
  /** The user who created the label. */
  creator?: Maybe<User>;
  /** Issues associated with the label. */
  issues: IssueConnection;
};


/** Labels that can be associated with issues. */
export type IssueLabelIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type IssueLabelConnection = {
  edges: Array<IssueLabelEdge>;
  nodes: Array<IssueLabel>;
  pageInfo: PageInfo;
};

export type IssueLabelCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The name of the label. */
  name: Scalars['String'];
  /** The description of the label. */
  description?: Maybe<Scalars['String']>;
  /** The color of the label. */
  color?: Maybe<Scalars['String']>;
  /** The team associated with the label. */
  teamId: Scalars['String'];
};

export type IssueLabelEdge = {
  node: IssueLabel;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type IssueLabelPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The label that was created or updated. */
  issueLabel: IssueLabel;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueLabelUpdateInput = {
  /** The name of the label. */
  name?: Maybe<Scalars['String']>;
  /** The description of the label. */
  description?: Maybe<Scalars['String']>;
  /** The color of the label. */
  color?: Maybe<Scalars['String']>;
};

export type IssuePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The issue that was created or updated. */
  issue?: Maybe<Issue>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssuePriorityValue = {
  /** Priority's number value. */
  priority: Scalars['Int'];
  /** Priority's label. */
  label: Scalars['String'];
};

/** A relation between two issues. */
export type IssueRelation = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The relationship of the issue with the related issue. */
  type: Scalars['String'];
  /** The issue whose relationship is being described. */
  issue: Issue;
  /** The related issue. */
  relatedIssue: Issue;
};

export type IssueRelationConnection = {
  edges: Array<IssueRelationEdge>;
  nodes: Array<IssueRelation>;
  pageInfo: PageInfo;
};

export type IssueRelationCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The type of relation of the issue to the related issue. */
  type: IssueRelationType;
  /** The identifier of the issue that is related to another issue. */
  issueId: Scalars['String'];
  /** The identifier of the related issue. */
  relatedIssueId: Scalars['String'];
};

export type IssueRelationEdge = {
  node: IssueRelation;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

/** Issue relation history's payload */
export type IssueRelationHistoryPayload = {
  /** The identifier of the related issue. */
  identifier: Scalars['String'];
  /** The type of the change. */
  type: Scalars['String'];
};

export type IssueRelationPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The issue relation that was created or updated. */
  issueRelation: IssueRelation;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The type of the issue relation. */
export enum IssueRelationType {
  Blocks = 'blocks',
  Duplicate = 'duplicate',
  Related = 'related'
}

export type IssueRelationUpdateInput = {
  /** The type of relation of the issue to the related issue. */
  type?: Maybe<Scalars['String']>;
  /** The identifier of the issue that is related to another issue. */
  issueId?: Maybe<Scalars['String']>;
  /** The identifier of the related issue. */
  relatedIssueId?: Maybe<Scalars['String']>;
};

export type IssueUpdateInput = {
  /** The issue title. */
  title?: Maybe<Scalars['String']>;
  /** The issue description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']>;
  /** The identifier of the user to assign the issue to. */
  assigneeId?: Maybe<Scalars['String']>;
  /** The identifier of the parent issue. */
  parentId?: Maybe<Scalars['String']>;
  /** The priority of the issue. */
  priority?: Maybe<Scalars['Int']>;
  /** The estimated complexity of the issue. */
  estimate?: Maybe<Scalars['Int']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: Maybe<Array<Scalars['String']>>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: Maybe<Array<Scalars['String']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId?: Maybe<Scalars['String']>;
  /** The cycle associated with the issue. */
  cycleId?: Maybe<Scalars['String']>;
  /** The project associated with the issue. */
  projectId?: Maybe<Scalars['String']>;
  /** The team state of the issue. */
  stateId?: Maybe<Scalars['String']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: Maybe<Scalars['Float']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  /** [DEPRECATED] Document version for backwards compatibility. */
  documentVersion?: Maybe<Scalars['Int']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDateScalar']>;
};



export type JoinOrganizationInput = {
  /** The identifier of the organization. */
  organizationId: Scalars['String'];
};

/** A milestone that contains projects. */
export type Milestone = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The name of the milestone. */
  name: Scalars['String'];
  /** The organization that the milestone belongs to. */
  organization: Organization;
  /** The sort order for the milestone. */
  sortOrder: Scalars['Float'];
  /** Projects associated with the milestone. */
  projects: ProjectConnection;
};


/** A milestone that contains projects. */
export type MilestoneProjectsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type MilestoneConnection = {
  edges: Array<MilestoneEdge>;
  nodes: Array<Milestone>;
  pageInfo: PageInfo;
};

export type MilestoneCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The name of the milestone. */
  name: Scalars['String'];
  /** The sort order of the milestone. */
  sortOrder?: Maybe<Scalars['Float']>;
};

export type MilestoneEdge = {
  node: Milestone;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type MilestonePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The milesteone that was created or updated. */
  milestone?: Maybe<Milestone>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type MilestoneUpdateInput = {
  /** The name of the milestone. */
  name?: Maybe<Scalars['String']>;
  /** The sort order of the milestone. */
  sortOrder?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  /** [Deprecated] Creates a new event. */
  eventCreate: EventPayload;
  /** Creates a new API key. */
  apiKeyCreate: ApiKeyPayload;
  /** Deletes an API key. */
  apiKeyDelete: ArchivePayload;
  /** [Alpha] Creates a new attachment, or updates existing if the same `uri` is used. */
  attachmentCreate: AttachmentPayload;
  /** [Alpha] Updates an existing issue attachment. */
  attachmentUpdate: AttachmentPayload;
  /** [Alpha] Archives an issue attachment. */
  attachmentArchive: ArchivePayload;
  /** Finds or creates a new user account by email and sends an email with token. */
  emailUserAccountAuthChallenge: EmailUserAccountAuthChallengeResponse;
  /** Authenticates a user account via email and authentication token. */
  emailTokenUserAccountAuth: AuthResolverResponse;
  /** Authenticates a user account via email and authentication token for SAML. */
  samlTokenUserAccountAuth: AuthResolverResponse;
  /** Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow. */
  googleUserAccountAuth: AuthResolverResponse;
  /** Creates an organization from onboarding. */
  createOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Join an organization from onboarding. */
  joinOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Leave an organization. */
  leaveOrganization: CreateOrJoinOrganizationResponse;
  /** Updates the billing email address for the customer. */
  billingEmailUpdate: BillingEmailPayload;
  /** Update collaborative document with client steps. */
  collaborativeDocumentUpdate: CollaborationDocumentUpdatePayload;
  /** Creates a new comment. */
  commentCreate: CommentPayload;
  /** Updates a comment. */
  commentUpdate: CommentPayload;
  /** Deletes a comment. */
  commentDelete: ArchivePayload;
  /** Saves user message. */
  contactCreate: ContactPayload;
  /** Creates a new custom view. */
  customViewCreate: CustomViewPayload;
  /** Updates a custom view. */
  customViewUpdate: CustomViewPayload;
  /** Deletes a custom view. */
  customViewDelete: ArchivePayload;
  /** Creates a new cycle. */
  cycleCreate: CyclePayload;
  /** Updates a cycle. */
  cycleUpdate: CyclePayload;
  /** Archives a cycle. */
  cycleArchive: ArchivePayload;
  /** Always fails with internal error. Used to debug logging. */
  debugFailWithInternalError: DebugPayload;
  /** Always logs an error to Sentry as warning. Used to debug logging. */
  debugFailWithWarning: DebugPayload;
  /** Create the SAML test organization in development. */
  debugCreateSAMLOrg: DebugPayload;
  /** Unsubscribes the user from one type of emails. */
  emailUnsubscribe: EmailUnsubscribePayload;
  /** Creates a custom emoji. */
  emojiCreate: EmojiPayload;
  /** Deletes an emoji. */
  emojiDelete: ArchivePayload;
  /** Creates a new favorite (project, cycle etc). */
  favoriteCreate: FavoritePayload;
  /** Updates a favorite. */
  favoriteUpdate: FavoritePayload;
  /** Deletes a favorite reference. */
  favoriteDelete: ArchivePayload;
  /** Saves user feedback. */
  feedbackCreate: FeedbackPayload;
  /** XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage. */
  fileUpload: UploadPayload;
  /** Upload an image from an URL to Linear. */
  imageUploadFromUrl: ImageUploadFromUrlPayload;
  /** Connects the organization with the GitHub App. */
  integrationGithubConnect: IntegrationPayload;
  /** Connects the organization with a GitLab Access Token. */
  integrationGitlabConnect: IntegrationPayload;
  /** Integrates the organization with Slack. */
  integrationSlack: IntegrationPayload;
  /** Integrates your personal notifications with Slack. */
  integrationSlackPersonal: IntegrationPayload;
  /** Slack webhook integration. */
  integrationSlackPost: IntegrationPayload;
  /** Slack integration for project notifications. */
  integrationSlackProjectPost: IntegrationPayload;
  /** Imports custom emojis from your Slack workspace. */
  integrationSlackImportEmojis: IntegrationPayload;
  /** Integrates the organization with Figma. */
  integrationFigma: IntegrationPayload;
  /** Integrates the organization with Google Sheets. */
  integrationGoogleSheets: IntegrationPayload;
  /** Manually update Google Sheets data. */
  refreshGoogleSheetsData: IntegrationPayload;
  /** Integrates the organization with Sentry. */
  integrationSentryConnect: IntegrationPayload;
  /** Integrates the organization with Zendesk. */
  integrationZendesk: IntegrationPayload;
  /** Deletes an integration. */
  integrationDelete: ArchivePayload;
  /** Archives an integration resource. */
  integrationResourceArchive: ArchivePayload;
  /** Kicks off a GitHub import job. */
  issueImportCreateGithub: IssueImportPayload;
  /** Kicks off a Jira import job. */
  issueImportCreateJira: IssueImportPayload;
  /** Kicks off a Clubhouse import job. */
  issueImportCreateClubhouse: IssueImportPayload;
  /** Kicks off an Asana import job. */
  issueImportCreateAsana: IssueImportPayload;
  /** Deletes an import job. */
  issueImportDelete: IssueImportDeletePayload;
  /** Kicks off import processing. */
  issueImportProcess: IssueImportPayload;
  /** Creates a new label. */
  issueLabelCreate: IssueLabelPayload;
  /** Updates an label. */
  issueLabelUpdate: IssueLabelPayload;
  /** Archives an issue label. */
  issueLabelArchive: ArchivePayload;
  /** Creates a new issue relation. */
  issueRelationCreate: IssueRelationPayload;
  /** Updates an issue relation. */
  issueRelationUpdate: IssueRelationPayload;
  /** Deletes an issue relation. */
  issueRelationDelete: ArchivePayload;
  /** Creates a new issue. */
  issueCreate: IssuePayload;
  /** Updates an issue. */
  issueUpdate: IssuePayload;
  /** Archives an issue. */
  issueArchive: ArchivePayload;
  /** Unarchives an issue. */
  issueUnarchive: ArchivePayload;
  /** Creates a new milestone. */
  milestoneCreate: MilestonePayload;
  /** Updates a milestone. */
  milestoneUpdate: MilestonePayload;
  /** Deletes a milestone. */
  milestoneDelete: ArchivePayload;
  /** Creates a notification. */
  notificationCreate: NotificationPayload;
  /** Updates a notification. */
  notificationUpdate: NotificationPayload;
  /** Archives a notification. */
  notificationArchive: ArchivePayload;
  /** Unarchives a notification. */
  notificationUnarchive: ArchivePayload;
  /** Creates a new notification subscription for a team or a project. */
  notificationSubscriptionCreate: NotificationSubscriptionPayload;
  /** Deletes a notification subscription reference. */
  notificationSubscriptionDelete: ArchivePayload;
  /** Creates a new OAuth client. */
  oauthClientCreate: OauthClientPayload;
  /** Updates an OAuth client. */
  oauthClientUpdate: OauthClientPayload;
  /** Archives an OAuth client. */
  oauthClientArchive: ArchivePayload;
  /** Updates an OAuth client. */
  oauthClientRotateSecret: RotateSecretPayload;
  /** Revokes an OAuth token. */
  oauthTokenRevoke: OauthTokenRevokePayload;
  /** Verifies a domain to be added to an organization. */
  organizationDomainVerify: OrganizationDomainPayload;
  /** Adds a domain to be allowed for an organization. */
  organizationDomainCreate: OrganizationDomainPayload;
  /** Deletes a domain. */
  organizationDomainDelete: ArchivePayload;
  /** Creates a new organization invite. */
  organizationInviteCreate: OrganizationInvitePayload;
  /** Re-send an organization invite. */
  resentOrganizationInvite: ArchivePayload;
  /** Deletes an organization invite. */
  organizationInviteDelete: ArchivePayload;
  /** Updates the user's organization. */
  organizationUpdate: OrganizationPayload;
  /** Get an organization's delete confirmation token. Administrator privileges required. */
  organizationDeleteChallenge: OrganizationDeletePayload;
  /** Delete's an organization. Administrator privileges required. */
  organizationDelete: OrganizationDeletePayload;
  /** Creates a new project link. */
  projectLinkCreate: ProjectLinkPayload;
  /** Deletes a project link. */
  projectLinkDelete: ArchivePayload;
  /** Creates a new project. */
  projectCreate: ProjectPayload;
  /** Updates a project. */
  projectUpdate: ProjectPayload;
  /** Archives a project. */
  projectArchive: ArchivePayload;
  /** Creates a push subscription. */
  pushSubscriptionCreate: PushSubscriptionPayload;
  /** Deletes a push subscription. */
  pushSubscriptionDelete: PushSubscriptionPayload;
  /** Creates a new reaction. */
  reactionCreate: ReactionPayload;
  /** Deletes a reaction. */
  reactionDelete: ArchivePayload;
  /** Create CSV export report for the organization. */
  createCsvExportReport: CreateCsvExportReportPayload;
  /** Creates a subscription session. Used internally to integrate with Stripe. */
  subscriptionSessionCreate: SubscriptionSessionPayload;
  /** Creates a subscription update session. Used internally to integrate with Stripe. */
  subscriptionUpdateSessionCreate: SubscriptionSessionPayload;
  /** Updates a subscription. */
  subscriptionUpdate: SubscriptionPayload;
  /** Upgrades a subscription plan. */
  subscriptionUpgrade: SubscriptionPayload;
  /** Archives a subscription. */
  subscriptionArchive: ArchivePayload;
  /** Creates a new team membership. */
  teamMembershipCreate: TeamMembershipPayload;
  /** Updates a team membership. */
  teamMembershipUpdate: TeamMembershipPayload;
  /** Deletes a team membership. */
  teamMembershipDelete: ArchivePayload;
  /** Creates a new team. The user who creates the team will automatically be added as a member to the newly created team. */
  teamCreate: TeamPayload;
  /** Updates a team. */
  teamUpdate: TeamPayload;
  /** Archives a team. */
  teamArchive: ArchivePayload;
  /** Deletes a team. */
  teamDelete: ArchivePayload;
  /** Creates a new template. */
  templateCreate: TemplatePayload;
  /** Updates an existing template. */
  templateUpdate: TemplatePayload;
  /** Deletes a template. */
  templateDelete: ArchivePayload;
  /** Updates a user. Only available to organization admins and the user themselves. */
  userUpdate: UserPayload;
  /** Makes user an admin. Can only be called by an admin. */
  userPromoteAdmin: UserAdminPayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userDemoteAdmin: UserAdminPayload;
  /** Suspends a user. Can only be called by an admin. */
  userSuspend: UserAdminPayload;
  /** Un-suspends a user. Can only be called by an admin. */
  userUnsuspend: UserAdminPayload;
  /** Updates the user's settings. */
  userSettingsUpdate: UserSettingsPayload;
  /** [Deprecated] Updates a user's settings flag. */
  userSettingsFlagIncrement: UserSettingsFlagPayload;
  /** Resets user's setting flags. */
  userSettingsFlagsReset: UserSettingsFlagsResetPayload;
  /** Updates a user's settings flag. */
  userFlagUpdate: UserSettingsFlagPayload;
  /** Subscribes user to changelog newsletter. */
  userSubscribeToNewsletter: UserSubscribeToNewsletterPayload;
  /** Creates a new ViewPreferences object. */
  viewPreferencesCreate: ViewPreferencesPayload;
  /** Updates an existing ViewPreferences object. */
  viewPreferencesUpdate: ViewPreferencesPayload;
  /** Deletes a ViewPreferences. */
  viewPreferencesDelete: ArchivePayload;
  /** Creates a new webhook. */
  webhookCreate: WebhookPayload;
  /** Updates an existing Webhook. */
  webhookUpdate: WebhookPayload;
  /** Deletes a Webhook. */
  webhookDelete: ArchivePayload;
  /** Creates a new state, adding it to the workflow of a team. */
  workflowStateCreate: WorkflowStatePayload;
  /** Updates a state. */
  workflowStateUpdate: WorkflowStatePayload;
  /** Archives a state. Only states with issues that have all been archived can be archived. */
  workflowStateArchive: ArchivePayload;
};


export type MutationEventCreateArgs = {
  input: EventCreateInput;
};


export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};


export type MutationApiKeyDeleteArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentCreateArgs = {
  input: AttachmentCreateInput;
};


export type MutationAttachmentUpdateArgs = {
  input: AttachmentUpdateInput;
  id: Scalars['String'];
};


export type MutationAttachmentArchiveArgs = {
  id: Scalars['String'];
};


export type MutationEmailUserAccountAuthChallengeArgs = {
  input: EmailUserAccountAuthChallengeInput;
};


export type MutationEmailTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationSamlTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationGoogleUserAccountAuthArgs = {
  input: GoogleUserAccountAuthInput;
};


export type MutationCreateOrganizationFromOnboardingArgs = {
  survey?: Maybe<OnboardingCustomerSurvey>;
  input: CreateOrganizationInput;
};


export type MutationJoinOrganizationFromOnboardingArgs = {
  input: JoinOrganizationInput;
};


export type MutationLeaveOrganizationArgs = {
  organizationId: Scalars['String'];
};


export type MutationBillingEmailUpdateArgs = {
  input: BillingEmailUpdateInput;
};


export type MutationCollaborativeDocumentUpdateArgs = {
  input: CollaborationDocumentUpdateInput;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentUpdateArgs = {
  input: CommentUpdateInput;
  id: Scalars['String'];
};


export type MutationCommentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationContactCreateArgs = {
  input: ContactCreateInput;
};


export type MutationCustomViewCreateArgs = {
  input: CustomViewCreateInput;
};


export type MutationCustomViewUpdateArgs = {
  input: CustomViewUpdateInput;
  id: Scalars['String'];
};


export type MutationCustomViewDeleteArgs = {
  id: Scalars['String'];
};


export type MutationCycleCreateArgs = {
  input: CycleCreateInput;
};


export type MutationCycleUpdateArgs = {
  input: CycleUpdateInput;
  id: Scalars['String'];
};


export type MutationCycleArchiveArgs = {
  id: Scalars['String'];
};


export type MutationEmailUnsubscribeArgs = {
  input: EmailUnsubscribeInput;
};


export type MutationEmojiCreateArgs = {
  input: EmojiCreateInput;
};


export type MutationEmojiDeleteArgs = {
  id: Scalars['String'];
};


export type MutationFavoriteCreateArgs = {
  input: FavoriteCreateInput;
};


export type MutationFavoriteUpdateArgs = {
  input: FavoriteUpdateInput;
  id: Scalars['String'];
};


export type MutationFavoriteDeleteArgs = {
  id: Scalars['String'];
};


export type MutationFeedbackCreateArgs = {
  input: FeedbackCreateInput;
};


export type MutationFileUploadArgs = {
  metaData?: Maybe<Scalars['JSON']>;
  size: Scalars['Int'];
  contentType: Scalars['String'];
  filename: Scalars['String'];
};


export type MutationImageUploadFromUrlArgs = {
  url: Scalars['String'];
};


export type MutationIntegrationGithubConnectArgs = {
  installationId: Scalars['String'];
};


export type MutationIntegrationGitlabConnectArgs = {
  gitlabUrl: Scalars['String'];
  accessToken: Scalars['String'];
};


export type MutationIntegrationSlackArgs = {
  shouldUseV2Auth?: Maybe<Scalars['Boolean']>;
  redirectUri: Scalars['String'];
  code: Scalars['String'];
};


export type MutationIntegrationSlackPersonalArgs = {
  redirectUri: Scalars['String'];
  code: Scalars['String'];
};


export type MutationIntegrationSlackPostArgs = {
  shouldUseV2Auth?: Maybe<Scalars['Boolean']>;
  redirectUri: Scalars['String'];
  teamId: Scalars['String'];
  code: Scalars['String'];
};


export type MutationIntegrationSlackProjectPostArgs = {
  redirectUri: Scalars['String'];
  projectId: Scalars['String'];
  code: Scalars['String'];
};


export type MutationIntegrationSlackImportEmojisArgs = {
  redirectUri: Scalars['String'];
  code: Scalars['String'];
};


export type MutationIntegrationFigmaArgs = {
  redirectUri: Scalars['String'];
  code: Scalars['String'];
};


export type MutationIntegrationGoogleSheetsArgs = {
  code: Scalars['String'];
};


export type MutationRefreshGoogleSheetsDataArgs = {
  id: Scalars['String'];
};


export type MutationIntegrationSentryConnectArgs = {
  organizationSlug: Scalars['String'];
  code: Scalars['String'];
  installationId: Scalars['String'];
};


export type MutationIntegrationZendeskArgs = {
  redirectUri: Scalars['String'];
  scope: Scalars['String'];
  code: Scalars['String'];
  subdomain: Scalars['String'];
};


export type MutationIntegrationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIntegrationResourceArchiveArgs = {
  id: Scalars['String'];
};


export type MutationIssueImportCreateGithubArgs = {
  instantProcess?: Maybe<Scalars['Boolean']>;
  githubShouldImportOrgProjects?: Maybe<Scalars['Boolean']>;
  githubRepoOwner: Scalars['String'];
  githubRepoName: Scalars['String'];
  githubToken: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationIssueImportCreateJiraArgs = {
  instantProcess?: Maybe<Scalars['Boolean']>;
  jiraHostname: Scalars['String'];
  jiraEmail: Scalars['String'];
  jiraProject: Scalars['String'];
  jiraToken: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationIssueImportCreateClubhouseArgs = {
  instantProcess?: Maybe<Scalars['Boolean']>;
  clubhouseTeamName: Scalars['String'];
  clubhouseToken: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationIssueImportCreateAsanaArgs = {
  instantProcess?: Maybe<Scalars['Boolean']>;
  asanaTeamName: Scalars['String'];
  asanaToken: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationIssueImportDeleteArgs = {
  issueImportId: Scalars['String'];
};


export type MutationIssueImportProcessArgs = {
  mapping: Scalars['JSONObject'];
  issueImportId: Scalars['String'];
};


export type MutationIssueLabelCreateArgs = {
  input: IssueLabelCreateInput;
};


export type MutationIssueLabelUpdateArgs = {
  input: IssueLabelUpdateInput;
  id: Scalars['String'];
};


export type MutationIssueLabelArchiveArgs = {
  id: Scalars['String'];
};


export type MutationIssueRelationCreateArgs = {
  input: IssueRelationCreateInput;
};


export type MutationIssueRelationUpdateArgs = {
  input: IssueRelationUpdateInput;
  id: Scalars['String'];
};


export type MutationIssueRelationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIssueCreateArgs = {
  input: IssueCreateInput;
};


export type MutationIssueUpdateArgs = {
  input: IssueUpdateInput;
  id: Scalars['String'];
};


export type MutationIssueArchiveArgs = {
  trash?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationIssueUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationMilestoneCreateArgs = {
  input: MilestoneCreateInput;
};


export type MutationMilestoneUpdateArgs = {
  input: MilestoneUpdateInput;
  id: Scalars['String'];
};


export type MutationMilestoneDeleteArgs = {
  id: Scalars['String'];
};


export type MutationNotificationCreateArgs = {
  input: NotificationUpdateInput;
  id: Scalars['String'];
};


export type MutationNotificationUpdateArgs = {
  input: NotificationUpdateInput;
  id: Scalars['String'];
};


export type MutationNotificationArchiveArgs = {
  id: Scalars['String'];
};


export type MutationNotificationUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationNotificationSubscriptionCreateArgs = {
  input: NotificationSubscriptionCreateInput;
};


export type MutationNotificationSubscriptionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationOauthClientCreateArgs = {
  input: OauthClientCreateInput;
};


export type MutationOauthClientUpdateArgs = {
  input: OauthClientUpdateInput;
  id: Scalars['String'];
};


export type MutationOauthClientArchiveArgs = {
  id: Scalars['String'];
};


export type MutationOauthClientRotateSecretArgs = {
  id: Scalars['String'];
};


export type MutationOauthTokenRevokeArgs = {
  scope: Array<Scalars['String']>;
  appId: Scalars['String'];
};


export type MutationOrganizationDomainVerifyArgs = {
  input: OrganizationDomainVerificationInput;
};


export type MutationOrganizationDomainCreateArgs = {
  input: OrganizationDomainCreateInput;
};


export type MutationOrganizationDomainDeleteArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationInviteCreateArgs = {
  input: OrganizationInviteCreateInput;
};


export type MutationResentOrganizationInviteArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationInviteDeleteArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationUpdateArgs = {
  input: UpdateOrganizationInput;
};


export type MutationOrganizationDeleteArgs = {
  input: DeleteOrganizationInput;
};


export type MutationProjectLinkCreateArgs = {
  input: ProjectLinkCreateInput;
};


export type MutationProjectLinkDeleteArgs = {
  id: Scalars['String'];
};


export type MutationProjectCreateArgs = {
  input: ProjectCreateInput;
};


export type MutationProjectUpdateArgs = {
  input: ProjectUpdateInput;
  id: Scalars['String'];
};


export type MutationProjectArchiveArgs = {
  id: Scalars['String'];
};


export type MutationPushSubscriptionCreateArgs = {
  input: PushSubscriptionCreateInput;
};


export type MutationPushSubscriptionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationReactionCreateArgs = {
  input: ReactionCreateInput;
};


export type MutationReactionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationCreateCsvExportReportArgs = {
  includePrivateTeamIds?: Maybe<Array<Scalars['String']>>;
};


export type MutationSubscriptionSessionCreateArgs = {
  plan: Scalars['String'];
};


export type MutationSubscriptionUpdateArgs = {
  input: SubscriptionUpdateInput;
  id: Scalars['String'];
};


export type MutationSubscriptionUpgradeArgs = {
  type: Scalars['String'];
  id: Scalars['String'];
};


export type MutationSubscriptionArchiveArgs = {
  id: Scalars['String'];
};


export type MutationTeamMembershipCreateArgs = {
  input: TeamMembershipCreateInput;
};


export type MutationTeamMembershipUpdateArgs = {
  input: TeamMembershipUpdateInput;
  id: Scalars['String'];
};


export type MutationTeamMembershipDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamCreateArgs = {
  copySettingsFromTeamId?: Maybe<Scalars['String']>;
  input: TeamCreateInput;
};


export type MutationTeamUpdateArgs = {
  input: TeamUpdateInput;
  id: Scalars['String'];
};


export type MutationTeamArchiveArgs = {
  id: Scalars['String'];
};


export type MutationTeamDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};


export type MutationTemplateUpdateArgs = {
  input: TemplateUpdateInput;
  id: Scalars['String'];
};


export type MutationTemplateDeleteArgs = {
  id: Scalars['String'];
};


export type MutationUserUpdateArgs = {
  input: UpdateUserInput;
  id: Scalars['String'];
};


export type MutationUserPromoteAdminArgs = {
  id: Scalars['String'];
};


export type MutationUserDemoteAdminArgs = {
  id: Scalars['String'];
};


export type MutationUserSuspendArgs = {
  id: Scalars['String'];
};


export type MutationUserUnsuspendArgs = {
  id: Scalars['String'];
};


export type MutationUserSettingsUpdateArgs = {
  input: UserSettingsUpdateInput;
  id: Scalars['String'];
};


export type MutationUserSettingsFlagIncrementArgs = {
  flag: Scalars['String'];
};


export type MutationUserFlagUpdateArgs = {
  operation: UserFlagUpdateOperation;
  flag: UserFlagType;
};


export type MutationViewPreferencesCreateArgs = {
  input: ViewPreferencesCreateInput;
};


export type MutationViewPreferencesUpdateArgs = {
  input: ViewPreferencesUpdateInput;
  id: Scalars['String'];
};


export type MutationViewPreferencesDeleteArgs = {
  id: Scalars['String'];
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookUpdateArgs = {
  input: WebhookUpdateInput;
  id: Scalars['String'];
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['String'];
};


export type MutationWorkflowStateCreateArgs = {
  input: WorkflowStateCreateInput;
};


export type MutationWorkflowStateUpdateArgs = {
  input: WorkflowStateUpdateInput;
  id: Scalars['String'];
};


export type MutationWorkflowStateArchiveArgs = {
  id: Scalars['String'];
};

export type Node = {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
};

/** A notification sent to a user. */
export type Notification = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Notification type */
  type: Scalars['String'];
  /** Name of the reaction emoji associated with the notification. */
  reactionEmoji?: Maybe<Scalars['String']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']>;
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']>;
  /** The recipient of the notification. */
  user: User;
  /** The issue that the notification is associated with. */
  issue: Issue;
  /** The team which the notification is associated with. */
  team: Team;
  /** The comment which the notification is associated with. */
  comment?: Maybe<Comment>;
};

export type NotificationConnection = {
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type NotificationEdge = {
  node: Notification;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type NotificationPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The notification that was created or updated. */
  notification: Notification;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Notification subscriptions for models. */
export type NotificationSubscription = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The type of the subscription. */
  type: Scalars['String'];
  /** The user associated with notification subscriptions. */
  user: User;
  /** Subscribed team. */
  team?: Maybe<Team>;
  /** Subscribed project. */
  project?: Maybe<Project>;
};

export type NotificationSubscriptionConnection = {
  edges: Array<NotificationSubscriptionEdge>;
  nodes: Array<NotificationSubscription>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The identifier of the team to subscribe to. */
  teamId?: Maybe<Scalars['String']>;
  /** The identifier of the project to subscribe to. */
  projectId?: Maybe<Scalars['String']>;
};

export type NotificationSubscriptionEdge = {
  node: NotificationSubscription;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type NotificationSubscriptionPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The notification subscription that was created or updated. */
  notificationSubscription: NotificationSubscription;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type NotificationUpdateInput = {
  /** The time when notification was marked as read. */
  readAt?: Maybe<Scalars['DateTime']>;
};

/** OAuth2 client application */
export type OauthClient = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** OAuth application's client name. */
  name: Scalars['String'];
  /** Information about the application. */
  description: Scalars['String'];
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer. */
  developerUrl: Scalars['String'];
  /** Image of the application. */
  imageUrl: Scalars['String'];
  /** OAuth application's client secret. */
  clientSecret: Scalars['String'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']>;
};

export type OauthClientCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The application's name. */
  name: Scalars['String'];
  /** User facing description of the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer of the application. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']>;
  /** URL for the app icon. */
  imageUrl?: Maybe<Scalars['String']>;
};

export type OauthClientPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The OAuth client application that was created or updated. */
  oauthClient: OauthClient;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OauthClientUpdateInput = {
  /** The application's name. */
  name?: Maybe<Scalars['String']>;
  /** User facing description of the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer of the application. */
  developer?: Maybe<Scalars['String']>;
  /** URL of the developer (homepage or docs). */
  developerUrl?: Maybe<Scalars['String']>;
  /** List of allowed redirect URIs for the application. */
  redirectUris?: Maybe<Array<Scalars['String']>>;
  /** URL for the app icon. */
  imageUrl?: Maybe<Scalars['String']>;
};

export type OauthTokenRevokePayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OnboardingCustomerSurvey = {
  companyRole?: Maybe<Scalars['String']>;
  companySize?: Maybe<Scalars['String']>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type Organization = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The organization's name. */
  name: Scalars['String'];
  /** The organization's unique URL key. */
  urlKey: Scalars['String'];
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars['String']>;
  /** Rolling 30-day total upload volume for the organization, in megabytes. */
  periodUploadVolume: Scalars['Float'];
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars['String']>;
  /** Whether the Git integration linkback messages should be sent to private repositories. */
  gitLinkbackMessagesEnabled: Scalars['Boolean'];
  /** Whether the Git integration linkback messages should be sent to public repositories. */
  gitPublicLinkbackMessagesEnabled: Scalars['Boolean'];
  /** Whether the organization is using a roadmap. */
  roadmapEnabled: Scalars['Boolean'];
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars['Boolean'];
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars['String']>;
  /** Users associated with the organization. */
  users: UserConnection;
  /** Teams associated with the organization. */
  teams: TeamConnection;
  /** Milestones associated with the organization. */
  milestones: MilestoneConnection;
  /** Integrations associated with the organization. */
  integrations: IntegrationConnection;
  /** The organization's subscription to a paid plan. */
  subscription?: Maybe<Subscription>;
  /** Number of active users in the organization. */
  userCount: Scalars['Int'];
  /** Number of issues in the organization. */
  createdIssueCount: Scalars['Int'];
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationUsersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTeamsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationMilestonesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationIntegrationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type OrganizationDeletePayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Defines the use of a domain by an organization. */
export type OrganizationDomain = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Domain name */
  name: Scalars['String'];
  /** Is this domain verified */
  verified: Scalars['Boolean'];
  /** The user who added the domain. */
  creator?: Maybe<User>;
  /** E-mail used to verify this domain */
  verificationEmail?: Maybe<Scalars['String']>;
};

export type OrganizationDomainCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The domain name to add. */
  name: Scalars['String'];
  /** The email address to which to send the verification code. */
  verificationEmail: Scalars['String'];
  /** Is the domain verified. */
  verified: Scalars['Boolean'];
};

export type OrganizationDomainPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization domain that was created or updated. */
  organizationDomain: OrganizationDomain;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationDomainSimplePayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationDomainVerificationInput = {
  /** The identifier of the domain being verified. */
  organizationDomainId: Scalars['String'];
  /** The verification code sent via email. */
  verificationCode: Scalars['String'];
};

export type OrganizationExistsPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** Whether the organization exists. */
  exists: Scalars['Boolean'];
};

/** An invitation to the organization that has been sent via email. */
export type OrganizationInvite = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The invitees email address. */
  email: Scalars['String'];
  /** The invite was sent to external address. */
  external: Scalars['Boolean'];
  /** The time at which the invite was accepted. Null, if the invite hasn't been accepted */
  acceptedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire */
  expiresAt?: Maybe<Scalars['DateTime']>;
  /** The user who created the invitation. */
  inviter: User;
  /** The user who has accepted the invite. Null, if the invite hasn't been accepted. */
  invitee?: Maybe<User>;
  /** The organization that the invite is associated with. */
  organization: Organization;
};

export type OrganizationInviteConnection = {
  edges: Array<OrganizationInviteEdge>;
  nodes: Array<OrganizationInvite>;
  pageInfo: PageInfo;
};

export type OrganizationInviteCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The email of the invitee. */
  email: Scalars['String'];
  /** The message to send to the invitee. */
  message?: Maybe<Scalars['String']>;
  /** The teams that the user has been invited to. */
  teamIds?: Maybe<Array<Scalars['String']>>;
};

export type OrganizationInviteEdge = {
  node: OrganizationInvite;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type OrganizationInvitePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization invite that was created or updated. */
  organizationInvite: OrganizationInvite;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization that was created or updated. */
  organization?: Maybe<Organization>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type PageInfo = {
  /** Indicates if there are more results when paginating backward. */
  hasPreviousPage: Scalars['Boolean'];
  /** Indicates if there are more results when paginating forward. */
  hasNextPage: Scalars['Boolean'];
  /** Cursor representing the first result in the paginated results. */
  startCursor?: Maybe<Scalars['String']>;
  /** Cursor representing the last result in the paginated results. */
  endCursor?: Maybe<Scalars['String']>;
};

/** By which field should the pagination order by */
export enum PaginationOrderBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** A project. */
export type Project = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The project's name. */
  name: Scalars['String'];
  /** The project's description. */
  description: Scalars['String'];
  /** The project's unique URL slug. */
  slugId: Scalars['String'];
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']>;
  /** The project's color. */
  color: Scalars['String'];
  /** The type of the state. */
  state: Scalars['String'];
  /** The user who created the project. */
  creator: User;
  /** The project lead. */
  lead?: Maybe<User>;
  /** The milestone that this project is associated with. */
  milestone?: Maybe<Milestone>;
  /** [Internal] The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The sort order for the project within its milestone. */
  sortOrder: Scalars['Float'];
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']>;
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean'];
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean'];
  /** Teams associated with this project. */
  teams: TeamConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
};


/** A project. */
export type ProjectTeamsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectMembersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectLinksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type ProjectConnection = {
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The name of the project. */
  name: Scalars['String'];
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']>;
  /** The color of the project. */
  color?: Maybe<Scalars['String']>;
  /** The state of the project. */
  state?: Maybe<Scalars['String']>;
  /** The description for the project. */
  description?: Maybe<Scalars['String']>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: Maybe<Scalars['String']>;
  /** The identifiers of the teams this project is associated with. */
  teamIds: Array<Scalars['String']>;
  /** The identifier of the project lead. */
  leadId?: Maybe<Scalars['String']>;
  /** The identifiers of the members of this project. */
  memberIds?: Maybe<Array<Scalars['String']>>;
  /** [Internal] The planned start date of the project. */
  startDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** The planned target date of the project. */
  targetDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** The sort order for the project within its milestone. */
  sortOrder?: Maybe<Scalars['Float']>;
};

export type ProjectEdge = {
  node: Project;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

/** An external link for a project. */
export type ProjectLink = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The link's URL. */
  url: Scalars['String'];
  /** The link's label. */
  label: Scalars['String'];
  /** The user who created the link. */
  creator: User;
  /** The project that the link is associated with. */
  project: Project;
};

export type ProjectLinkConnection = {
  edges: Array<ProjectLinkEdge>;
  nodes: Array<ProjectLink>;
  pageInfo: PageInfo;
};

export type ProjectLinkCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The URL of the link. */
  url: Scalars['String'];
  /** The label for the link. */
  label: Scalars['String'];
  /** Related project for the link. */
  projectId: Scalars['String'];
};

export type ProjectLinkEdge = {
  node: ProjectLink;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type ProjectLinkPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project that was created or updated. */
  projectLink: ProjectLink;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project that was created or updated. */
  project?: Maybe<Project>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectUpdateInput = {
  /** The state of the project. */
  state?: Maybe<Scalars['String']>;
  /** The name of the project. */
  name?: Maybe<Scalars['String']>;
  /** The description for the project. */
  description?: Maybe<Scalars['String']>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: Maybe<Scalars['String']>;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']>;
  /** The color of the project. */
  color?: Maybe<Scalars['String']>;
  /** The identifiers of the teams this project is associated with. */
  teamIds?: Maybe<Array<Scalars['String']>>;
  /** The identifier of the project lead. */
  leadId?: Maybe<Scalars['String']>;
  /** The identifiers of the members of this project. */
  memberIds?: Maybe<Array<Scalars['String']>>;
  /** [Internal] The planned start date of the project. */
  startDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** The planned target date of the project. */
  targetDate?: Maybe<Scalars['TimelessDateScalar']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: Maybe<Scalars['Boolean']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: Maybe<Scalars['Boolean']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: Maybe<Scalars['Boolean']>;
  /** The sort order for the project within its milestone. */
  sortOrder?: Maybe<Scalars['Float']>;
};

/** Pull request data */
export type PullRequestPayload = {
  status: Scalars['String'];
  number: Scalars['Float'];
  url: Scalars['String'];
  draft: Scalars['Boolean'];
  id: Scalars['String'];
  title: Scalars['String'];
  branch: Scalars['String'];
  userId: Scalars['String'];
  userLogin: Scalars['String'];
  repoLogin: Scalars['String'];
  repoName: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  closedAt: Scalars['String'];
  mergedAt: Scalars['String'];
};

/** A user's web browser push notification subscription. */
export type PushSubscription = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
};

export type PushSubscriptionConnection = {
  edges: Array<PushSubscriptionEdge>;
  nodes: Array<PushSubscription>;
  pageInfo: PageInfo;
};

export type PushSubscriptionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The user identifier of the subscription. */
  userId: Scalars['String'];
  /** The data of the subscription in stringified JSON format. */
  data: Scalars['String'];
};

export type PushSubscriptionEdge = {
  node: PushSubscription;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type PushSubscriptionPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type Query = {
  /** Fetch data to catch up the client to the state of the world. */
  syncBootstrap: SyncResponse;
  /** Fetches an archived model. */
  archivedModelSync: ArchiveResponse;
  /** Fetches archived models. */
  archivedModelsSync: ArchiveResponse;
  /** All API keys for the user. */
  apiKeys: ApiKeyConnection;
  /** Get information for an application and whether a user has approved it for the given scopes. */
  applicationWithAuthorization: UserAuthorizedApplication;
  /** Get all authorized applications for a user */
  authorizedApplications: Array<AuthorizedApplication>;
  /** [Alpha] All issue attachments. */
  attachments: AttachmentConnection;
  /** [Alpha] One specific issue attachment. `url` can be used as the `id` parameter. */
  attachment: Attachment;
  /** [Alpha] Query an issue by its associated attachment, and its id or URI. */
  attachmentIssue: Issue;
  /** Fetch users belonging to this user account. */
  availableUsers: AuthResolverResponse;
  /** Fetch SSO login URL for the email provided. */
  ssoUrlFromEmail: SsoUrlFromEmailResponse;
  /** Billing details for the customer. */
  billingDetails: BillingDetailsPayload;
  /** Join collaborative document and get missing steps. */
  collaborativeDocumentJoin: CollaborationDocumentUpdatePayload;
  /** All comments. */
  comments: CommentConnection;
  /** A specific comment. */
  comment: Comment;
  /** Custom views for the user. */
  customViews: CustomViewConnection;
  /** One specific custom view. */
  customView: CustomView;
  /** All cycles. */
  cycles: CycleConnection;
  /** One specific cycle. */
  cycle: Cycle;
  /** All custom emojis. */
  emojis: EmojiConnection;
  /** A specific emoji. */
  emoji: Emoji;
  /** The user's favorites. */
  favorites: FavoriteConnection;
  /** One specific favorite. */
  favorite: Favorite;
  /** Fetch Figma screenshot and other information with file and node identifiers. */
  figmaEmbedInfo: FigmaEmbedPayload;
  /** All integrations. */
  integrations: IntegrationConnection;
  /** One specific integration. */
  integration: Integration;
  /** All integrations resources (e.g. linked GitHub pull requests for issues). */
  integrationResources: IntegrationResourceConnection;
  /** One specific integration resource. (e.g. linked GitHub pull requests for an issue) */
  integrationResource: IntegrationResource;
  /** Retrieves information for the public invite page. */
  inviteInfo: InvitePagePayload;
  /** Fetches the GitHub token, completing the OAuth flow. */
  issueImportFinishGithubOAuth: GithubOAuthTokenPayload;
  /** All issue labels. */
  issueLabels: IssueLabelConnection;
  /** One specific label. */
  issueLabel: IssueLabel;
  /** All issue relationships. */
  issueRelations: IssueRelationConnection;
  /** One specific issue relation. */
  issueRelation: IssueRelation;
  /** All issues. */
  issues: IssueConnection;
  /** One specific issue. */
  issue: Issue;
  /** [ALPHA] Search issues. This query is experimental and is subject to change without notice. */
  issueSearch: IssueConnection;
  /** Issue priority values and corresponding labels. */
  issuePriorityValues: Array<IssuePriorityValue>;
  /** All milestones. */
  milestones: MilestoneConnection;
  /** One specific milestone. */
  milestone: Milestone;
  /** All notifications. */
  notifications: NotificationConnection;
  /** One specific notification. */
  notification: Notification;
  /** The user's notification subscriptions. */
  notificationSubscriptions: NotificationSubscriptionConnection;
  /** One specific notification subscription. */
  notificationSubscription: NotificationSubscription;
  /** All invites for the organization. */
  organizationInvites: OrganizationInviteConnection;
  /** One specific organization invite. */
  organizationInvite: IssueLabel;
  /** The user's organization. */
  organization: Organization;
  /** Does the organization exist. */
  organizationExists: OrganizationExistsPayload;
  /** All links for the project. */
  projectLinks: ProjectLinkConnection;
  /** One specific project link. */
  projectLink: ProjectLink;
  /** All projects. */
  projects: ProjectConnection;
  /** One specific project. */
  project: Project;
  /** Sends a test push message. */
  pushSubscriptionTest: PushSubscriptionPayload;
  /** All comment emoji reactions. */
  reactions: ReactionConnection;
  /** A specific reaction. */
  reaction: Reaction;
  /** The organization's subscription. */
  subscription?: Maybe<Subscription>;
  /** All team memberships. */
  teamMemberships: TeamMembershipConnection;
  /** One specific team membership. */
  teamMembership: TeamMembership;
  /** All teams. */
  teams: TeamConnection;
  /** One specific team. */
  team: Team;
  /** All templates from all users. */
  templates: Array<Template>;
  /** A specific template. */
  template: Template;
  /** All users for the organization. */
  users: UserConnection;
  /** One specific user. */
  user: User;
  /** The currently authenticated user. */
  viewer: User;
  /** The user's settings. */
  userSettings: UserSettings;
  /** All webhooks. */
  webhooks: WebhookConnection;
  /** A specific webhook. */
  webhook: Webhook;
  /** All issue workflow states. */
  workflowStates: WorkflowStateConnection;
  /** One specific state. */
  workflowState: WorkflowState;
};


export type QuerySyncBootstrapArgs = {
  databaseVersion?: Maybe<Scalars['Int']>;
  sinceSyncId?: Maybe<Scalars['Int']>;
  syncGroups?: Maybe<Array<Scalars['String']>>;
};


export type QueryArchivedModelSyncArgs = {
  identifier: Scalars['String'];
  modelClass: Scalars['String'];
};


export type QueryArchivedModelsSyncArgs = {
  modelClass: Scalars['String'];
  teamId: Scalars['String'];
  trashOption?: Maybe<TrashOptionType>;
  before?: Maybe<Scalars['DateTime']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryApiKeysArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryApplicationWithAuthorizationArgs = {
  redirectUri?: Maybe<Scalars['String']>;
  scope: Array<Scalars['String']>;
  clientId: Scalars['String'];
};


export type QueryAttachmentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryAttachmentArgs = {
  id: Scalars['String'];
};


export type QueryAttachmentIssueArgs = {
  id: Scalars['String'];
};


export type QuerySsoUrlFromEmailArgs = {
  isDesktop?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
};


export type QueryCollaborativeDocumentJoinArgs = {
  clientId: Scalars['String'];
  issueId: Scalars['String'];
  version: Scalars['Int'];
};


export type QueryCommentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryCustomViewsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryCustomViewArgs = {
  id: Scalars['String'];
};


export type QueryCyclesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryCycleArgs = {
  id: Scalars['String'];
};


export type QueryEmojisArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryEmojiArgs = {
  id: Scalars['String'];
};


export type QueryFavoritesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryFavoriteArgs = {
  id: Scalars['String'];
};


export type QueryFigmaEmbedInfoArgs = {
  nodeId?: Maybe<Scalars['String']>;
  fileId: Scalars['String'];
};


export type QueryIntegrationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryIntegrationArgs = {
  id: Scalars['String'];
};


export type QueryIntegrationResourcesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryIntegrationResourceArgs = {
  id: Scalars['String'];
};


export type QueryInviteInfoArgs = {
  teamHash?: Maybe<Scalars['String']>;
  userHash: Scalars['String'];
};


export type QueryIssueImportFinishGithubOAuthArgs = {
  code: Scalars['String'];
};


export type QueryIssueLabelsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryIssueLabelArgs = {
  id: Scalars['String'];
};


export type QueryIssueRelationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryIssueRelationArgs = {
  id: Scalars['String'];
};


export type QueryIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryIssueArgs = {
  id: Scalars['String'];
};


export type QueryIssueSearchArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
  query: Scalars['String'];
};


export type QueryMilestonesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryMilestoneArgs = {
  id: Scalars['String'];
};


export type QueryNotificationsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryNotificationArgs = {
  id: Scalars['String'];
};


export type QueryNotificationSubscriptionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryNotificationSubscriptionArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationInvitesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryOrganizationInviteArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationExistsArgs = {
  urlKey: Scalars['String'];
};


export type QueryProjectLinksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryProjectLinkArgs = {
  id: Scalars['String'];
};


export type QueryProjectsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QueryReactionsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryReactionArgs = {
  id: Scalars['String'];
};


export type QueryTeamMembershipsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String'];
};


export type QueryTeamsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryTeamArgs = {
  id: Scalars['String'];
};


export type QueryTemplateArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryWebhooksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryWebhookArgs = {
  id: Scalars['String'];
};


export type QueryWorkflowStatesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


export type QueryWorkflowStateArgs = {
  id: Scalars['String'];
};

/** A reaction associated with a comment. */
export type Reaction = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Name of the reaction's emoji. */
  emoji: Scalars['String'];
  /** The user who reacted. */
  user: User;
  /** The comment that the reaction is associated with. */
  comment: Comment;
};

export type ReactionConnection = {
  edges: Array<ReactionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type ReactionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one */
  id?: Maybe<Scalars['String']>;
  /** The emoji the user reacted with. */
  emoji?: Maybe<Scalars['String']>;
  /** The comment to associate the reaction with. */
  commentId: Scalars['String'];
};

export type ReactionEdge = {
  node: Reaction;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type ReactionPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  reaction: Reaction;
  success: Scalars['Boolean'];
};

export type RotateSecretPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The integration resource's settings */
export type SamlConfiguration = {
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars['String']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars['String']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars['String']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars['String']>;
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: Maybe<Array<Scalars['String']>>;
};

export type SamlConfigurationInput = {
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars['String']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars['String']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars['String']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars['String']>;
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: Maybe<Array<Scalars['String']>>;
};

/** Sentry issue data */
export type SentryIssuePayload = {
  /** The Sentry identifier for the issue. */
  issueId: Scalars['String'];
  /** The description of the issue. */
  webUrl: Scalars['String'];
  /** The type of the actor who created the issue. */
  actorType: Scalars['String'];
  /** The Sentry identifier of the actor who created the issue. */
  actorId: Scalars['Float'];
  /** The name of the Sentry actor who created this issue. */
  actorName: Scalars['String'];
  /** The Sentry identifier of the project this issue belongs to. */
  projectId: Scalars['Float'];
  /** The slug of the project this issue belongs to. */
  projectSlug: Scalars['String'];
  /** The title of the issue. */
  issueTitle: Scalars['String'];
  /** The shortId of the issue. */
  shortId: Scalars['String'];
  /** The date this issue was first seen. */
  firstSeen: Scalars['String'];
  /** The name of the first release version this issue appeared on, if available. */
  firstVersion?: Maybe<Scalars['String']>;
};

/** Sentry specific settings. */
export type SentrySettings = {
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String'];
};

/** Slack notification specific settings. */
export type SlackPostSettings = {
  channel: Scalars['String'];
  channelId: Scalars['String'];
  configurationUrl: Scalars['String'];
};

export type SsoUrlFromEmailResponse = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** SAML SSO sign-in URL. */
  samlSsoUrl: Scalars['String'];
};

export type StepsResponse = {
  /** Client's document version. */
  version: Scalars['Int'];
  /** New document steps from the client. */
  steps?: Maybe<Array<Scalars['JSON']>>;
  /** List of client IDs for the document steps. */
  clientIds: Array<Scalars['String']>;
};

/** The subscription of an organization. */
export type Subscription = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The subscription type. */
  type: Scalars['String'];
  /** The number of seats in the subscription. */
  seats: Scalars['Float'];
  /** The creator of the subscription. */
  creator?: Maybe<User>;
  /** The organization that the subscription is associated with. */
  organization: Organization;
  /** The date the subscription was canceled, if any. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars['String']>;
};

export type SubscriptionPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The subscription entity being mutated. */
  subscription: Subscription;
  /** The date the subscription was set to cancel at the end of the billing period, if any. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type SubscriptionSessionPayload = {
  /** The subscription session that was created or updated. */
  session?: Maybe<Scalars['String']>;
};

export type SubscriptionUpdateInput = {
  /** The date the subscription was set to cancel, if any. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars['String']>;
};

/**
 * Contains either the full serialized state of the application or delta packets that the requester can
 *   apply to the local data set in order to be up-to-date.
 */
export type SyncResponse = {
  /**
   * The full state of the organization as a serialized JSON object.
   *     Mutually exclusive with the delta property
   */
  state?: Maybe<Scalars['String']>;
  /**
   * JSON serialized delta changes that the client can apply to its local state
   *     in order to catch up with the state of the world.
   */
  delta?: Maybe<Scalars['String']>;
  /** The sync groups that the user is subscribed to. */
  subscribedSyncGroups: Array<Scalars['String']>;
  /** The last sync id covered by the response. */
  lastSyncId: Scalars['Float'];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float'];
};

export type SynchronizedPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
};

/** An organizational unit that contains issues. */
export type Team = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The team's name. */
  name: Scalars['String'];
  /** The team's unique key. The key is used in URLs. */
  key: Scalars['String'];
  /** The team's description. */
  description?: Maybe<Scalars['String']>;
  /** Whether the team uses cycles. */
  cyclesEnabled: Scalars['Boolean'];
  /** The day of the week that a new cycle starts. */
  cycleStartDay: Scalars['Float'];
  /** The duration of a cycle in weeks. */
  cycleDuration: Scalars['Float'];
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime: Scalars['Float'];
  /** Auto assign started issues to current cycle. */
  cycleIssueAutoAssignStarted: Scalars['Boolean'];
  /** Auto assign completed issues to current cycle. */
  cycleIssueAutoAssignCompleted: Scalars['Boolean'];
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive: Scalars['Boolean'];
  /** How many upcoming cycles to create. */
  upcomingCycleCount: Scalars['Float'];
  /** The timezone of the team. Defaults to "America/Los_Angeles" */
  timezone: Scalars['String'];
  /** Unique hash for the team to be used in invite URLs. */
  inviteHash: Scalars['String'];
  /** The issue estimation type to use. */
  issueEstimationType: Scalars['String'];
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero: Scalars['Boolean'];
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended: Scalars['Boolean'];
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate: Scalars['Float'];
  /** The default template to use for new issues created by members of the team. */
  defaultTemplateForMembersId?: Maybe<Scalars['String']>;
  /** The default template to use for new issues created by non-members of the team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars['String']>;
  /** Internal. Whether the team is private or not. */
  private: Scalars['Boolean'];
  /** The workflow state into which issues are moved when a PR has been opened as draft. */
  draftWorkflowState?: Maybe<WorkflowState>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowState?: Maybe<WorkflowState>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowState?: Maybe<WorkflowState>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowState?: Maybe<WorkflowState>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory: Scalars['Boolean'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean'];
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean'];
  /** Period after which issues are automatically closed in months. Null/undefined means disabled. */
  autoClosePeriod?: Maybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. Defaults to the first canceled state. */
  autoCloseStateId?: Maybe<Scalars['String']>;
  /** Period after which automatically closed and completed issues are automatically archived in months. Null/undefined means disabled. */
  autoArchivePeriod?: Maybe<Scalars['Float']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. Defaults to the first canceled state. */
  markedAsDuplicateWorkflowState?: Maybe<WorkflowState>;
  /** Issues associated with the team. */
  issues: IssueConnection;
  /** Cycles associated with the team. */
  cycles: CycleConnection;
  /** Team's currently active cycle. */
  activeCycle?: Maybe<Cycle>;
  /** Users who are members of this team. */
  members: UserConnection;
  /** Memberships associated with the team. For easier access of the same data, use `members` query. */
  memberships: TeamMembershipConnection;
  /** Projects associated with the team. */
  projects: ProjectConnection;
  /** The states that define the workflow associated with the team. */
  states: WorkflowStateConnection;
  /** Templates associated with the team. */
  templates: TemplateConnection;
  /** Labels associated with the team. */
  labels: IssueLabelConnection;
  /** The organization that the team is associated with. */
  organization: Organization;
  /** Calender feed (iCal) for cycles. */
  cycleCalenderUrl: Scalars['String'];
  /** Webhooks associated with the team. */
  webhooks: WebhookConnection;
};


/** An organizational unit that contains issues. */
export type TeamIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamCyclesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembersArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembershipsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamProjectsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamStatesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamTemplatesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamLabelsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamWebhooksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type TeamConnection = {
  edges: Array<TeamEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

export type TeamCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The name of the team. */
  name: Scalars['String'];
  /** The description of the team. */
  description?: Maybe<Scalars['String']>;
  /** The key of the team. If not given, the key will be generated based on the name of the team. */
  key?: Maybe<Scalars['String']>;
  /** The organization associated with the team. */
  organizationId?: Maybe<Scalars['String']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: Maybe<Scalars['Boolean']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: Maybe<Scalars['Float']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: Maybe<Scalars['Int']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: Maybe<Scalars['Int']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: Maybe<Scalars['Boolean']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: Maybe<Scalars['Boolean']>;
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive?: Maybe<Scalars['Boolean']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: Maybe<Scalars['Float']>;
  /** The timezone of the team. */
  timezone?: Maybe<Scalars['String']>;
  /** The issue estimation type to use. */
  issueEstimationType?: Maybe<Scalars['String']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: Maybe<Scalars['Boolean']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: Maybe<Scalars['Boolean']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: Maybe<Scalars['Float']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: Maybe<Scalars['Boolean']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: Maybe<Scalars['String']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars['String']>;
  /** Internal. Whether the team is private or not. */
  private?: Maybe<Scalars['Boolean']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: Maybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: Maybe<Scalars['String']>;
  /** Period after which closed and completed issues are automatically archived, in months. 0 means disabled. */
  autoArchivePeriod?: Maybe<Scalars['Float']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: Maybe<Scalars['String']>;
};

export type TeamEdge = {
  node: Team;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

/** Defines the membership of a user to a team. */
export type TeamMembership = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Whether the user is the owner of the team */
  owner?: Maybe<Scalars['Boolean']>;
  /** The user that the membership is associated with. */
  user: User;
  /** The team that the membership is associated with. */
  team: Team;
};

export type TeamMembershipConnection = {
  edges: Array<TeamMembershipEdge>;
  nodes: Array<TeamMembership>;
  pageInfo: PageInfo;
};

export type TeamMembershipCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The identifier of the user associated with the membership. */
  userId: Scalars['String'];
  /** The identifier of the team associated with the membership. */
  teamId: Scalars['String'];
  /** Internal. Whether the user is the owner of the team. */
  owner?: Maybe<Scalars['Boolean']>;
};

export type TeamMembershipEdge = {
  node: TeamMembership;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type TeamMembershipPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The team membership that was created or updated. */
  teamMembership?: Maybe<TeamMembership>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type TeamMembershipUpdateInput = {
  /** Internal. Whether the user is the owner of the team. */
  owner: Scalars['Boolean'];
};

export type TeamPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The team that was created or updated. */
  team?: Maybe<Team>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type TeamUpdateInput = {
  /** The name of the team. */
  name?: Maybe<Scalars['String']>;
  /** The description of the team. */
  description?: Maybe<Scalars['String']>;
  /** The key of the team. */
  key?: Maybe<Scalars['String']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: Maybe<Scalars['Boolean']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: Maybe<Scalars['Float']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: Maybe<Scalars['Int']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: Maybe<Scalars['Int']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: Maybe<Scalars['Boolean']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: Maybe<Scalars['Boolean']>;
  /** Only allow issues with cycles in Active Issues. */
  cycleLockToActive?: Maybe<Scalars['Boolean']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: Maybe<Scalars['Float']>;
  /** The timezone of the team. */
  timezone?: Maybe<Scalars['String']>;
  /** The issue estimation type to use. */
  issueEstimationType?: Maybe<Scalars['String']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: Maybe<Scalars['Boolean']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: Maybe<Scalars['Boolean']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: Maybe<Scalars['Float']>;
  /** The workflow state into which issues are moved when a draft PR has been opened. */
  draftWorkflowStateId?: Maybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowStateId?: Maybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowStateId?: Maybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowStateId?: Maybe<Scalars['String']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: Maybe<Scalars['Boolean']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: Maybe<Scalars['Boolean']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: Maybe<Scalars['Boolean']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: Maybe<Scalars['Boolean']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: Maybe<Scalars['String']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars['String']>;
  /** Internal. Whether the team is private or not. */
  private?: Maybe<Scalars['Boolean']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: Maybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: Maybe<Scalars['String']>;
  /** Period after which closed and completed issues are automatically archived, in months. */
  autoArchivePeriod?: Maybe<Scalars['Float']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: Maybe<Scalars['String']>;
};

/** A template object used for creating new issues faster. */
export type Template = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The entity type this template is for. */
  type: Scalars['String'];
  /** The name of the template. */
  name: Scalars['String'];
  /** Template description. */
  description?: Maybe<Scalars['String']>;
  /** Template data. */
  templateData: Scalars['JSON'];
  /** The team that the template is associated with. */
  team: Team;
  /** The user who created the template. */
  creator?: Maybe<User>;
};

export type TemplateConnection = {
  edges: Array<TemplateEdge>;
  nodes: Array<Template>;
  pageInfo: PageInfo;
};

export type TemplateCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The template type, e.g. 'issue'. */
  type: Scalars['String'];
  /** The identifier or key of the team associated with the template. */
  teamId: Scalars['String'];
  /** The template name. */
  name: Scalars['String'];
  /** The template description. */
  description?: Maybe<Scalars['String']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData: Scalars['JSON'];
};

export type TemplateEdge = {
  node: Template;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type TemplatePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The template that was created or updated. */
  template: Template;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type TemplateUpdateInput = {
  /** The template name. */
  name?: Maybe<Scalars['String']>;
  /** The template description. */
  description?: Maybe<Scalars['String']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData?: Maybe<Scalars['JSON']>;
};


export type TokenUserAccountAuthInput = {
  /** The email which to login via the magic login code. */
  email: Scalars['String'];
  /** The magic login code. */
  token: Scalars['String'];
  /** The timezone of the user's browser. */
  timezone: Scalars['String'];
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: Maybe<Array<Scalars['String']>>;
};

/** How trashed models should be loaded. */
export enum TrashOptionType {
  IncludeTrash = 'includeTrash',
  ExcludeTrash = 'excludeTrash',
  TrashOnly = 'trashOnly'
}

export type UpdateOrganizationInput = {
  /** The name of the organization. */
  name?: Maybe<Scalars['String']>;
  /** The logo of the organization. */
  logoUrl?: Maybe<Scalars['String']>;
  /** The URL key of the organization. */
  urlKey?: Maybe<Scalars['String']>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars['String']>;
  /** Whether the Git integration linkback messages should be sent for private repositories. */
  gitLinkbackMessagesEnabled?: Maybe<Scalars['Boolean']>;
  /** Whether the Git integration linkback messages should be sent for public repositories. */
  gitPublicLinkbackMessagesEnabled?: Maybe<Scalars['Boolean']>;
  /** Whether the organization is using project milestones. */
  roadmapEnabled?: Maybe<Scalars['Boolean']>;
  /** Linear Preview feature flags */
  linearPreviewFlags?: Maybe<Scalars['JSONObject']>;
  /** List of services that are allowed to be used for login. */
  allowedAuthServices?: Maybe<Array<Scalars['String']>>;
};

export type UpdateUserInput = {
  /** The name of the user. */
  name?: Maybe<Scalars['String']>;
  /** The display name of the user. */
  displayName?: Maybe<Scalars['String']>;
  /** The avatar image URL of the user. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Whether the user account is active. */
  active?: Maybe<Scalars['Boolean']>;
  /** Reason for deactivation. */
  disableReason?: Maybe<Scalars['String']>;
  /** Whether the user account has admin privileges. */
  admin?: Maybe<Scalars['Boolean']>;
};

/** Object representing Google Cloud upload policy, plus additional data. */
export type UploadFile = {
  /** The filename. */
  filename: Scalars['String'];
  /** The content type. */
  contentType: Scalars['String'];
  /** The size of the uploaded file. */
  size: Scalars['Int'];
  /** The signed URL the for the uploaded file. (assigned automatically) */
  uploadUrl: Scalars['String'];
  /** The asset URL for the uploaded file. (assigned automatically) */
  assetUrl: Scalars['String'];
  metaData?: Maybe<Scalars['JSON']>;
  headers: Array<UploadFileHeader>;
};

export type UploadFileHeader = {
  /** Upload file header key. */
  key: Scalars['String'];
  /** Upload file header value. */
  value: Scalars['String'];
};

export type UploadPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Object describing the file to be uploaded. */
  uploadFile?: Maybe<UploadFile>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A user that has access to the the resources of an organization. */
export type User = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The user's full name. */
  name: Scalars['String'];
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars['String'];
  /** The user's email address. */
  email: Scalars['String'];
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Reason why is the account disabled. */
  disableReason?: Maybe<Scalars['String']>;
  /** Unique hash for the user to be used in invite URLs. */
  inviteHash: Scalars['String'];
  /** The last time the user was seen online. If null, the user is currently online. */
  lastSeen?: Maybe<Scalars['DateTime']>;
  /** Whether the user is an organization administrator. */
  admin: Scalars['Boolean'];
  /** Whether the user account is active or disabled. */
  active: Scalars['Boolean'];
  /** Issues assigned to the user. */
  assignedIssues: IssueConnection;
  /** Issues created by the user. */
  createdIssues: IssueConnection;
  /** Organization in which the user belongs to. */
  organization: Organization;
  /** Number of issues created. */
  createdIssueCount: Scalars['Int'];
  /** Teams the user is part of. */
  teams: TeamConnection;
  /** Memberships associated with the user. For easier access of the same data, use `teams` query. */
  teamMemberships: TeamMembershipConnection;
};


/** A user that has access to the the resources of an organization. */
export type UserAssignedIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserCreatedIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamMembershipsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A user account. */
export type UserAccount = {
  /** The models identifier. */
  id: Scalars['ID'];
  /** The time at which the model was created. */
  createdAt: Scalars['DateTime'];
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime'];
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The user's name. */
  name?: Maybe<Scalars['String']>;
  /** The user's email address. */
  email: Scalars['String'];
  /** The authentication service used to create the account. */
  service: Scalars['String'];
  /** Users belonging to the account. */
  users: Array<User>;
};

export type UserAdminPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Public information of the OAuth application, plus whether the application has been authorized for the given scopes. */
export type UserAuthorizedApplication = {
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Application name. */
  name: Scalars['String'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Whether the user has authorized the application for the given scopes. */
  isAuthorized: Scalars['Boolean'];
};

export type UserConnection = {
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  node: User;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

/** The types of flags that the user can have. */
export enum UserFlagType {
  CompletedOnboarding = 'completedOnboarding',
  DesktopInstalled = 'desktopInstalled',
  DesktopDownloadToastDismissed = 'desktopDownloadToastDismissed',
  EmptyBacklogDismissed = 'emptyBacklogDismissed',
  EmptyCustomViewsDismissed = 'emptyCustomViewsDismissed',
  EmptyActiveIssuesDismissed = 'emptyActiveIssuesDismissed',
  EmptyMyIssuesDismissed = 'emptyMyIssuesDismissed',
  CycleWelcomeDismissed = 'cycleWelcomeDismissed',
  ProjectWelcomeDismissed = 'projectWelcomeDismissed',
  AnalyticsWelcomeDismissed = 'analyticsWelcomeDismissed',
  FigmaPromptDismissed = 'figmaPromptDismissed',
  MigrateThemePreference = 'migrateThemePreference',
  ListSelectionTip = 'listSelectionTip',
  CanPlaySnake = 'canPlaySnake'
}

/** Operations that can be applied to UserFlagType */
export enum UserFlagUpdateOperation {
  Incr = 'incr',
  Decr = 'decr',
  Clear = 'clear',
  Lock = 'lock'
}

export type UserPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The user that was created or updated. */
  user?: Maybe<User>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The settings of a user as a JSON object. */
export type UserSettings = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The notification channel settings the user has selected. */
  notificationPreferences: Scalars['JSONObject'];
  /** The email types the user has unsubscribed from. */
  unsubscribedFrom: Array<Scalars['String']>;
  /** The user associated with these settings. */
  user: User;
};

export type UserSettingsFlagPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The flag key which was updated. */
  flag: Scalars['String'];
  /** The flag value after update. */
  value: Scalars['Int'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type UserSettingsFlagsResetPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type UserSettingsPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The user's settings. */
  userSettings: UserSettings;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type UserSettingsUpdateInput = {
  /** The user's settings. */
  settings?: Maybe<Scalars['String']>;
  /** The types of emails the user has unsubscribed from. */
  unsubscribedFrom?: Maybe<Array<Scalars['String']>>;
  /** The user's notification preferences. */
  notificationPreferences?: Maybe<Scalars['JSONObject']>;
};

export type UserSubscribeToNewsletterPayload = {
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** View preferences. */
export type ViewPreferences = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The view preference type. */
  type: Scalars['String'];
  /** The view type. */
  viewType: Scalars['String'];
};

export type ViewPreferencesCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The type of view preferences (either user or organization level preferences). */
  type: ViewPreferencesType;
  /** The view type of the view preferences are associated with. */
  viewType: ViewType;
  /** View preferences object. */
  preferences: Scalars['JSONObject'];
  /** The team these view preferences are associated with. */
  teamId?: Maybe<Scalars['String']>;
  /** The project these view preferences are associated with. */
  projectId?: Maybe<Scalars['String']>;
  /** The label these view preferences are associated with. */
  labelId?: Maybe<Scalars['String']>;
  /** The user profile these view preferences are associated with. */
  userId?: Maybe<Scalars['String']>;
  /** The cycle these view preferences are associated with. */
  cycleId?: Maybe<Scalars['String']>;
  /** The custom view these view preferences are associated with. */
  customViewId?: Maybe<Scalars['String']>;
};

export type ViewPreferencesPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The view preferences entity being mutated. */
  viewPreferences: ViewPreferences;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The type of view preferences (either user or organization level preferences). */
export enum ViewPreferencesType {
  Organization = 'organization',
  User = 'user'
}

export type ViewPreferencesUpdateInput = {
  /** View preferences. */
  preferences: Scalars['JSONObject'];
};

/** The client view this custom view is targeting. */
export enum ViewType {
  Inbox = 'inbox',
  MyIssues = 'myIssues',
  UserProfile = 'userProfile',
  Board = 'board',
  CompletedCycle = 'completedCycle',
  Cycle = 'cycle',
  Project = 'project',
  Label = 'label',
  ActiveIssues = 'activeIssues',
  Backlog = 'backlog',
  AllIssues = 'allIssues',
  CustomView = 'customView',
  Roadmap = 'roadmap',
  Projects = 'projects'
}

/** A webhook used to send HTTP notifications over data updates */
export type Webhook = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Webhook label */
  label: Scalars['String'];
  /** Webhook URL */
  url: Scalars['String'];
  /** Whether the Webhook is enabled. */
  enabled: Scalars['Boolean'];
  /** The team that the webhook is associated with. */
  team: Team;
  /** The user who created the webhook. */
  creator?: Maybe<User>;
  /** Secret token for verifying the origin on the recipient side. */
  secret?: Maybe<Scalars['String']>;
  /** The resource types this webhook is subscribed to. */
  resourceTypes: Array<Scalars['String']>;
};

export type WebhookConnection = {
  edges: Array<WebhookEdge>;
  nodes: Array<Webhook>;
  pageInfo: PageInfo;
};

export type WebhookCreateInput = {
  /** Label for the webhook. */
  label?: Maybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** Whether this webhook is enabled. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** An optional secret token used to sign the webhook payload. */
  secret?: Maybe<Scalars['String']>;
  /** The URL that will be called on data changes. */
  url: Scalars['String'];
  /** List of resources the webhook should subscribe to. */
  resourceTypes: Array<Scalars['String']>;
  /** The identifier or key of the team associated with the Webhook. */
  teamId: Scalars['String'];
};

export type WebhookEdge = {
  node: Webhook;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type WebhookPayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The webhook entity being mutated. */
  webhook: Webhook;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type WebhookUpdateInput = {
  /** Label for the webhook. */
  label?: Maybe<Scalars['String']>;
  /** An optional secret token used to sign the Webhook payload. */
  secret?: Maybe<Scalars['String']>;
  /** Whether this webhook is enabled. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The URL that will be called on data changes. */
  url?: Maybe<Scalars['String']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes?: Maybe<Array<Scalars['String']>>;
};

/** A state in a team workflow. */
export type WorkflowState = Node & {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The state's name. */
  name: Scalars['String'];
  /** The state's UI color as a HEX string. */
  color: Scalars['String'];
  /** Description of the state. */
  description?: Maybe<Scalars['String']>;
  /** The position of the state in the team flow. */
  position: Scalars['Float'];
  /** The type of the state. */
  type: Scalars['String'];
  /** The team to which this state belongs to. */
  team: Team;
  /** Issues belonging in this state. */
  issues: IssueConnection;
};


/** A state in a team workflow. */
export type WorkflowStateIssuesArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  includeArchived?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type WorkflowStateConnection = {
  edges: Array<WorkflowStateEdge>;
  nodes: Array<WorkflowState>;
  pageInfo: PageInfo;
};

export type WorkflowStateCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars['String']>;
  /** The workflow type. */
  type: Scalars['String'];
  /** The name of the state. */
  name: Scalars['String'];
  /** The color of the state. */
  color: Scalars['String'];
  /** The description of the state. */
  description?: Maybe<Scalars['String']>;
  /** The position of the state. */
  position?: Maybe<Scalars['Float']>;
  /** The team associated with the state. */
  teamId: Scalars['String'];
};

export type WorkflowStateEdge = {
  node: WorkflowState;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type WorkflowStatePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The state that was created or updated. */
  workflowState: WorkflowState;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type WorkflowStateUpdateInput = {
  /** The name of the state. */
  name?: Maybe<Scalars['String']>;
  /** The color of the state. */
  color?: Maybe<Scalars['String']>;
  /** The description of the state. */
  description?: Maybe<Scalars['String']>;
  /** The position of the state. */
  position?: Maybe<Scalars['Float']>;
};

/** Zendesk specific settings. */
export type ZendeskSettings = {
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String'];
  /** The ID of the Linear bot user. */
  botUserId: Scalars['String'];
};

export type CycleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CycleQuery = { cycle: { number: number, name?: Maybe<string>, completedScopeHistory: Array<number>, scopeHistory: Array<number>, issues: { nodes: Array<{ identifier: string, title: string, state: { type: string, color: string, name: string, position: number }, assignee?: Maybe<{ name: string }>, project?: Maybe<{ name: string, color: string }> }> } } };

export type IssueQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type IssueQuery = { issue: { createdAt: any, updatedAt: any, completedAt?: Maybe<any>, description?: Maybe<string>, url: string, title: string, identifier: string, priorityLabel: string, state: { name: string, color: string }, assignee?: Maybe<{ name: string }>, cycle?: Maybe<{ name?: Maybe<string> }>, project?: Maybe<{ name: string, color: string }>, labels: { nodes: Array<{ name: string, color: string }> } } };
