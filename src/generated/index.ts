import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AccessUserPayload = {
  __typename?: 'AccessUserPayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
};

export type AdminUpdatePayload = {
  __typename?: 'AdminUpdatePayload';
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type Attachment = {
  __typename?: 'Attachment';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fileSize: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  metaType: MetaType;
  title?: Maybe<Scalars['String']['output']>;
  type: AttachmentType;
  typeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

/** The type is assigned */
export enum AttachmentType {
  JobSummary = 'JOB_SUMMARY',
  User = 'USER'
}

export type AttachmentsPayload = {
  __typename?: 'AttachmentsPayload';
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  pagination?: Maybe<PaginationPayload>;
};

/** The type is assigned */
export enum ConfidentialValue {
  AttorneysEyeOnly = 'ATTORNEYS_EYE_ONLY',
  Confidential = 'CONFIDENTIAL',
  HighlyConfidential = 'HIGHLY_CONFIDENTIAL'
}

export type CreateAttachmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fileSize: Scalars['Float']['input'];
  key: Scalars['String']['input'];
  metaType: MetaType;
  title?: InputMaybe<Scalars['String']['input']>;
  type: AttachmentType;
  typeId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateJobSummaryInput = {
  caseName: Scalars['String']['input'];
  caseNumber: Scalars['String']['input'];
  confidentialValue?: InputMaybe<ConfidentialValue>;
  deponentsFirstName: Scalars['String']['input'];
  deponentsGender: Scalars['String']['input'];
  deponentsLastName: Scalars['String']['input'];
  deponentsTitle: Scalars['String']['input'];
  depositionDate?: InputMaybe<Scalars['String']['input']>;
  isConfidential: Scalars['Boolean']['input'];
  prompt: Scalars['JSON']['input'];
  status?: InputMaybe<StatusType>;
  templateTypes?: InputMaybe<TemplateType>;
  volumeNumber: Scalars['String']['input'];
};

export type CreateOpenAiInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateSummaryGeneratorInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type DeleteAttachmentInput = {
  id: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type FetchAttachmentsInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type FetchJobSummariesInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type FetchUsersInput = {
  from?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  paginationOptions: PaginationInput;
  roleType: Array<UserRoles>;
  status?: InputMaybe<Scalars['Float']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type ForgotPasswordInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type InviteTokenPayload = {
  __typename?: 'InviteTokenPayload';
  email: Scalars['String']['output'];
  isTokenValid: Scalars['Boolean']['output'];
};

export type InviteUserInput = {
  email: Scalars['String']['input'];
  roleType: UserRoles;
};

export type InviteUserPayload = {
  __typename?: 'InviteUserPayload';
  email: Scalars['String']['output'];
  roleType?: Maybe<UserRoles>;
};

export type JobSummariesPayload = {
  __typename?: 'JobSummariesPayload';
  jobSummaries?: Maybe<Array<Maybe<JobSummary>>>;
  pagination?: Maybe<PaginationPayload>;
};

export type JobSummary = {
  __typename?: 'JobSummary';
  caseName: Scalars['String']['output'];
  caseNumber: Scalars['String']['output'];
  confidentialValue?: Maybe<ConfidentialValue>;
  createdAt: Scalars['DateTime']['output'];
  deponentsFirstName: Scalars['String']['output'];
  deponentsGender: Scalars['String']['output'];
  deponentsLastName: Scalars['String']['output'];
  deponentsTitle?: Maybe<Scalars['String']['output']>;
  depositionDate?: Maybe<Scalars['String']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Attachment>>;
  id: Scalars['ID']['output'];
  isConfidential: Scalars['Boolean']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  prompt: Scalars['JSON']['output'];
  status: StatusType;
  templateTypes: TemplateType;
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<User>>;
  volumeNumber?: Maybe<Scalars['String']['output']>;
};

export type JobSummaryWithFile = {
  __typename?: 'JobSummaryWithFile';
  files: Array<Attachment>;
  jobSummary: JobSummary;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rememberMe?: Scalars['Boolean']['input'];
};

/** The type is assigned */
export enum MetaType {
  AvatarFile = 'AVATAR_FILE',
  InputFile = 'INPUT_FILE',
  OutputFile = 'OUTPUT_FILE',
  SummaryFile = 'SUMMARY_FILE',
  TranscriptFile = 'TRANSCRIPT_FILE'
}

export type Mutation = {
  __typename?: 'Mutation';
  createFile: Attachment;
  createJobSummary: JobSummary;
  createOpenAi: OpenAiEntity;
  createSummaryGenerator: SummaryGenerator;
  deactivateUserAccount: User;
  deleteJobSummary: JobSummary;
  forgotPassword: Scalars['Boolean']['output'];
  getSignedUrl: Scalars['String']['output'];
  inviteUser: Scalars['Boolean']['output'];
  login: AccessUserPayload;
  register: User;
  removeFile: AttachmentsPayload;
  removeJobSummary: Scalars['String']['output'];
  removeOpenAi: OpenAiEntity;
  removeSummaryGenerator: SummaryGenerator;
  removeUser: Scalars['Boolean']['output'];
  removeUserRoleFromAdmin: User;
  resendVerificationEmail: Scalars['Boolean']['output'];
  superAdminUpdateAdmin: AdminUpdatePayload;
  updateFile: Attachment;
  updateJobSummary: JobSummary;
  updateOpenAi: OpenAiEntity;
  updateSummaryGenerator: SummaryGenerator;
  updateUser: User;
  updateUserPassword: User;
  updateUserRoleFromAdmin: User;
  updateUserStatusFromAdmin: User;
  userRegistrationWithInvitation: User;
  verifyEmailToken: InviteUserPayload;
  verifyInvitationEmailToken: InviteTokenPayload;
  verifyPasswordTokenAndSetPassword: Scalars['Boolean']['output'];
  verifyResetPasswordToken: Scalars['Boolean']['output'];
};


export type MutationCreateFileArgs = {
  createAttachmentInput: CreateAttachmentInput;
};


export type MutationCreateJobSummaryArgs = {
  createJobSummaryInput: CreateJobSummaryInput;
};


export type MutationCreateOpenAiArgs = {
  createOpenAiInput: CreateOpenAiInput;
};


export type MutationCreateSummaryGeneratorArgs = {
  createSummaryGeneratorInput: CreateSummaryGeneratorInput;
};


export type MutationDeleteJobSummaryArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationGetSignedUrlArgs = {
  getSignedUrl: Scalars['String']['input'];
};


export type MutationInviteUserArgs = {
  inviteUserInput: InviteUserInput;
};


export type MutationLoginArgs = {
  loginUser: LoginUserInput;
};


export type MutationRegisterArgs = {
  registerUserInput: RegisterUserInput;
};


export type MutationRemoveFileArgs = {
  removeAttachmentInput: DeleteAttachmentInput;
};


export type MutationRemoveJobSummaryArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveOpenAiArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSummaryGeneratorArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserRoleFromAdminArgs = {
  role: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationResendVerificationEmailArgs = {
  resendEmailInput: ResendEmailInput;
};


export type MutationSuperAdminUpdateAdminArgs = {
  superAdminUpdateAdminInput: SuperAdminUpdateAdminInput;
};


export type MutationUpdateFileArgs = {
  updateAttachmentInput: UpdateAttachmentInput;
};


export type MutationUpdateJobSummaryArgs = {
  updateJobSummaryInput: UpdateJobSummaryInput;
};


export type MutationUpdateOpenAiArgs = {
  updateOpenAiInput: UpdateOpenAiInput;
};


export type MutationUpdateSummaryGeneratorArgs = {
  updateSummaryGeneratorInput: UpdateSummaryGeneratorInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
  userId: Scalars['String']['input'];
};


export type MutationUpdateUserPasswordArgs = {
  updateUserPasswordInput: UpdateUserPasswordInput;
};


export type MutationUpdateUserRoleFromAdminArgs = {
  role: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateUserStatusFromAdminArgs = {
  status: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUserRegistrationWithInvitationArgs = {
  registerUserInput: RegisterUserWithInvitationInput;
};


export type MutationVerifyEmailTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifyInvitationEmailTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifyPasswordTokenAndSetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationVerifyResetPasswordTokenArgs = {
  token: Scalars['String']['input'];
};

export type OpenAiEntity = {
  __typename?: 'OpenAiEntity';
  /** Example field (placeholder) */
  exampleField: Scalars['String']['output'];
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type PaginationPayload = {
  __typename?: 'PaginationPayload';
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  fetchAllFiles: AttachmentsPayload;
  fetchAllUsers: UserPayload;
  file: Attachment;
  findOne: OpenAiEntity;
  generateSummary: Attachment;
  jobSummaries: JobSummariesPayload;
  jobSummary: JobSummaryWithFile;
  me: User;
  myJobSummary: Array<JobSummary>;
  openAi: Array<Scalars['String']['output']>;
  summaryGenerator: SummaryGenerator;
};


export type QueryFetchAllFilesArgs = {
  fetchAttachmentsInput: FetchAttachmentsInput;
};


export type QueryFetchAllUsersArgs = {
  fetchUsersInput: FetchUsersInput;
};


export type QueryFileArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOneArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGenerateSummaryArgs = {
  typeId: Scalars['String']['input'];
};


export type QueryJobSummariesArgs = {
  fetchJobSummariesInput: FetchJobSummariesInput;
};


export type QueryJobSummaryArgs = {
  id: Scalars['String']['input'];
};


export type QuerySummaryGeneratorArgs = {
  id: Scalars['Int']['input'];
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterUserWithInvitationInput = {
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResendEmailInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  role: UserRoles;
  updatedAt: Scalars['DateTime']['output'];
};

/** it's a status type which would be used as a summary status is it completed or in-progress */
export enum StatusType {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Failed = 'FAILED'
}

export type SummaryGenerator = {
  __typename?: 'SummaryGenerator';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type SuperAdminUpdateAdminInput = {
  fullName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** It's a type of template used to pick designs. */
export enum TemplateType {
  TemplateA = 'TEMPLATE_A',
  TemplateB = 'TEMPLATE_B',
  TemplateC = 'TEMPLATE_C'
}

export type UpdateAttachmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fileSize?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  metaType?: InputMaybe<MetaType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AttachmentType>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateJobSummaryInput = {
  caseName?: InputMaybe<Scalars['String']['input']>;
  caseNumber?: InputMaybe<Scalars['String']['input']>;
  confidentialValue?: InputMaybe<ConfidentialValue>;
  deponentsFirstName?: InputMaybe<Scalars['String']['input']>;
  deponentsGender?: InputMaybe<Scalars['String']['input']>;
  deponentsLastName?: InputMaybe<Scalars['String']['input']>;
  deponentsTitle?: InputMaybe<Scalars['String']['input']>;
  depositionDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isConfidential?: InputMaybe<Scalars['Boolean']['input']>;
  prompt?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<StatusType>;
  templateTypes?: InputMaybe<TemplateType>;
  volumeNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOpenAiInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateSummaryGeneratorInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  fullName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserPasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  profilePicture?: Maybe<Attachment>;
  roles?: Maybe<Array<Maybe<Role>>>;
  status: UserStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  pagination?: Maybe<PaginationPayload>;
  users?: Maybe<Array<Maybe<User>>>;
};

/** The user status */
export enum UserStatus {
  Active = 'ACTIVE',
  Deactivated = 'DEACTIVATED'
}

/** The user role assigned */
export enum UserRoles {
  Admin = 'ADMIN',
  Attorney = 'ATTORNEY',
  Client = 'CLIENT',
  Paralegal = 'PARALEGAL',
  SuperAdmin = 'SUPER_ADMIN'
}

export type LoginMutationVariables = Exact<{
  loginUser: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessUserPayload', accessToken?: string | null, roles?: Array<{ __typename?: 'Role', id: string, role: UserRoles, createdAt: any, updatedAt: any }> | null } };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type VerifyResetPasswordTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyResetPasswordTokenMutation = { __typename?: 'Mutation', verifyResetPasswordToken: boolean };

export type VerifyPasswordTokenAndSetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type VerifyPasswordTokenAndSetPasswordMutation = { __typename?: 'Mutation', verifyPasswordTokenAndSetPassword: boolean };

export type RegisterMutationVariables = Exact<{
  registerUserInput: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, createdAt: any, updatedAt: any, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null } };

export type UserRegistrationWithInvitationMutationVariables = Exact<{
  registerUserInput: RegisterUserWithInvitationInput;
}>;


export type UserRegistrationWithInvitationMutation = { __typename?: 'Mutation', userRegistrationWithInvitation: { __typename?: 'User', createdAt: any, email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, updatedAt: any, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null } };

export type InviteUserMutationVariables = Exact<{
  inviteUserInput: InviteUserInput;
}>;


export type InviteUserMutation = { __typename?: 'Mutation', inviteUser: boolean };

export type VerifyInvitationEmailTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyInvitationEmailTokenMutation = { __typename?: 'Mutation', verifyInvitationEmailToken: { __typename?: 'InviteTokenPayload', email: string, isTokenValid: boolean } };

export type VerifyEmailTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyEmailTokenMutation = { __typename?: 'Mutation', verifyEmailToken: { __typename?: 'InviteUserPayload', email: string, roleType?: UserRoles | null } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, createdAt: any, email: string, emailVerified: boolean, fullName?: string | null, status: UserStatus, updatedAt: any, profilePicture?: { __typename?: 'Attachment', createdAt: any, fileSize: number, id: string, key: string, metaType: MetaType, type: AttachmentType, typeId: string, updatedAt: any, url: string } | null, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null } };

export type CreateJobSummaryMutationVariables = Exact<{
  createJobSummaryInput: CreateJobSummaryInput;
}>;


export type CreateJobSummaryMutation = { __typename?: 'Mutation', createJobSummary: { __typename?: 'JobSummary', caseName: string, caseNumber: string, confidentialValue?: ConfidentialValue | null, depositionDate?: string | null, createdAt: any, deponentsFirstName: string, deponentsGender: string, deponentsLastName: string, deponentsTitle?: string | null, id: string, isConfidential: boolean, isDeleted?: boolean | null, prompt: any, status: StatusType, updatedAt: any, volumeNumber?: string | null, files?: Array<{ __typename?: 'Attachment', createdAt: any, fileSize: number, id: string, key: string, metaType: MetaType, title?: string | null, type: AttachmentType, typeId: string, updatedAt: any, url: string }> | null, users?: Array<{ __typename?: 'User', createdAt: any, email: string, emailVerified: boolean, id: string, status: UserStatus, updatedAt: any }> | null } };

export type FetchAllFilesQueryVariables = Exact<{
  fetchAttachmentsInput: FetchAttachmentsInput;
}>;


export type FetchAllFilesQuery = { __typename?: 'Query', fetchAllFiles: { __typename?: 'AttachmentsPayload', attachments?: Array<{ __typename?: 'Attachment', createdAt: any, description?: string | null, id: string, fileSize: number, key: string, metaType: MetaType, title?: string | null, type: AttachmentType, typeId: string, updatedAt: any, url: string } | null> | null, pagination?: { __typename?: 'PaginationPayload', totalCount?: number | null, totalPages?: number | null, page?: number | null, limit?: number | null } | null } };

export type MutationMutationVariables = Exact<{
  removeAttachmentInput: DeleteAttachmentInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', removeFile: { __typename?: 'AttachmentsPayload', attachments?: Array<{ __typename?: 'Attachment', createdAt: any, description?: string | null, fileSize: number, id: string, key: string, metaType: MetaType, title?: string | null, type: AttachmentType, typeId: string, updatedAt: any, url: string } | null> | null } };

export type GetSignedUrlMutationVariables = Exact<{
  getSignedUrl: Scalars['String']['input'];
}>;


export type GetSignedUrlMutation = { __typename?: 'Mutation', getSignedUrl: string };

export type JobSummaryQueryVariables = Exact<{
  jobSummaryId: Scalars['String']['input'];
}>;


export type JobSummaryQuery = { __typename?: 'Query', jobSummary: { __typename?: 'JobSummaryWithFile', jobSummary: { __typename?: 'JobSummary', caseName: string, caseNumber: string, confidentialValue?: ConfidentialValue | null, createdAt: any, deponentsFirstName: string, deponentsGender: string, deponentsLastName: string, deponentsTitle?: string | null, depositionDate?: string | null, templateTypes: TemplateType, failedReason?: string | null, id: string, isConfidential: boolean, isDeleted?: boolean | null, prompt: any, status: StatusType, updatedAt: any, volumeNumber?: string | null, files?: Array<{ __typename?: 'Attachment', fileSize: number, id: string, key: string, metaType: MetaType, title?: string | null, type: AttachmentType, typeId: string, url: string, createdAt: any, updatedAt: any }> | null, users?: Array<{ __typename?: 'User', email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, updatedAt: any, createdAt: any, profilePicture?: { __typename?: 'Attachment', createdAt: any, fileSize: number, id: string, key: string, metaType: MetaType, type: AttachmentType, typeId: string, updatedAt: any, url: string } | null, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null }> | null } } };

export type UpdateJobSummaryMutationVariables = Exact<{
  updateJobSummaryInput: UpdateJobSummaryInput;
}>;


export type UpdateJobSummaryMutation = { __typename?: 'Mutation', updateJobSummary: { __typename?: 'JobSummary', prompt: any } };

export type JobSummariesQueryVariables = Exact<{
  fetchJobSummariesInput: FetchJobSummariesInput;
}>;


export type JobSummariesQuery = { __typename?: 'Query', jobSummaries: { __typename?: 'JobSummariesPayload', jobSummaries?: Array<{ __typename?: 'JobSummary', caseName: string, caseNumber: string, deponentsFirstName: string, deponentsGender: string, deponentsLastName: string, deponentsTitle?: string | null, id: string, templateTypes: TemplateType, createdAt: any, depositionDate?: string | null, status: StatusType, isConfidential: boolean, prompt: any, volumeNumber?: string | null, updatedAt: any, files?: Array<{ __typename?: 'Attachment', fileSize: number, id: string, key: string, metaType: MetaType, type: AttachmentType, typeId: string, url: string, title?: string | null, createdAt: any, updatedAt: any }> | null, users?: Array<{ __typename?: 'User', createdAt: any, email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, updatedAt: any, profilePicture?: { __typename?: 'Attachment', createdAt: any, description?: string | null, fileSize: number, id: string, key: string, metaType: MetaType, title?: string | null, type: AttachmentType, typeId: string, updatedAt: any, url: string } | null, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null }> | null } | null> | null, pagination?: { __typename?: 'PaginationPayload', limit?: number | null, page?: number | null, totalCount?: number | null, totalPages?: number | null } | null } };

export type RemoveJobSummaryMutationVariables = Exact<{
  removeJobSummaryId: Scalars['String']['input'];
}>;


export type RemoveJobSummaryMutation = { __typename?: 'Mutation', removeJobSummary: string };

export type GenerateSummaryQueryVariables = Exact<{
  typeId: Scalars['String']['input'];
}>;


export type GenerateSummaryQuery = { __typename?: 'Query', generateSummary: { __typename?: 'Attachment', createdAt: any, description?: string | null, fileSize: number, id: string, key: string, metaType: MetaType, title?: string | null, type: AttachmentType, typeId: string, updatedAt: any, url: string } };

export type UpdateUserPasswordMutationVariables = Exact<{
  updateUserPasswordInput: UpdateUserPasswordInput;
}>;


export type UpdateUserPasswordMutation = { __typename?: 'Mutation', updateUserPassword: { __typename?: 'User', createdAt: any, email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, updatedAt: any, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null } };

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', createdAt: any, email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, updatedAt: any, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null } };

export type UpdateUserStatusFromAdminMutationVariables = Exact<{
  status: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
}>;


export type UpdateUserStatusFromAdminMutation = { __typename?: 'Mutation', updateUserStatusFromAdmin: { __typename?: 'User', createdAt: any, email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, updatedAt: any, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null } };

export type RemoveUserMutationVariables = Exact<{
  removeUserId: Scalars['String']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: boolean };

export type FetchAllUsersQueryVariables = Exact<{
  fetchUsersInput: FetchUsersInput;
}>;


export type FetchAllUsersQuery = { __typename?: 'Query', fetchAllUsers: { __typename?: 'UserPayload', pagination?: { __typename?: 'PaginationPayload', limit?: number | null, page?: number | null, totalCount?: number | null, totalPages?: number | null } | null, users?: Array<{ __typename?: 'User', email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, createdAt: any, updatedAt: any, roles?: Array<{ __typename?: 'Role', id: string, role: UserRoles, createdAt: any, updatedAt: any } | null> | null } | null> | null } };

export type UpdateUserRoleFromAdminMutationVariables = Exact<{
  role: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UpdateUserRoleFromAdminMutation = { __typename?: 'Mutation', updateUserRoleFromAdmin: { __typename?: 'User', createdAt: any, email: string, emailVerified: boolean, fullName?: string | null, id: string, status: UserStatus, updatedAt: any, roles?: Array<{ __typename?: 'Role', createdAt: any, id: string, role: UserRoles, updatedAt: any } | null> | null } };


export const LoginDocument = gql`
    mutation Login($loginUser: LoginUserInput!) {
  login(loginUser: $loginUser) {
    accessToken
    roles {
      id
      role
      createdAt
      updatedAt
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginUser: // value for 'loginUser'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($forgotPasswordInput: ForgotPasswordInput!) {
  forgotPassword(forgotPasswordInput: $forgotPasswordInput)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPasswordInput: // value for 'forgotPasswordInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const VerifyResetPasswordTokenDocument = gql`
    mutation VerifyResetPasswordToken($token: String!) {
  verifyResetPasswordToken(token: $token)
}
    `;
export type VerifyResetPasswordTokenMutationFn = Apollo.MutationFunction<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>;

/**
 * __useVerifyResetPasswordTokenMutation__
 *
 * To run a mutation, you first call `useVerifyResetPasswordTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyResetPasswordTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyResetPasswordTokenMutation, { data, loading, error }] = useVerifyResetPasswordTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyResetPasswordTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>(VerifyResetPasswordTokenDocument, options);
      }
export type VerifyResetPasswordTokenMutationHookResult = ReturnType<typeof useVerifyResetPasswordTokenMutation>;
export type VerifyResetPasswordTokenMutationResult = Apollo.MutationResult<VerifyResetPasswordTokenMutation>;
export type VerifyResetPasswordTokenMutationOptions = Apollo.BaseMutationOptions<VerifyResetPasswordTokenMutation, VerifyResetPasswordTokenMutationVariables>;
export const VerifyPasswordTokenAndSetPasswordDocument = gql`
    mutation VerifyPasswordTokenAndSetPassword($resetPasswordInput: ResetPasswordInput!) {
  verifyPasswordTokenAndSetPassword(resetPasswordInput: $resetPasswordInput)
}
    `;
export type VerifyPasswordTokenAndSetPasswordMutationFn = Apollo.MutationFunction<VerifyPasswordTokenAndSetPasswordMutation, VerifyPasswordTokenAndSetPasswordMutationVariables>;

/**
 * __useVerifyPasswordTokenAndSetPasswordMutation__
 *
 * To run a mutation, you first call `useVerifyPasswordTokenAndSetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyPasswordTokenAndSetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyPasswordTokenAndSetPasswordMutation, { data, loading, error }] = useVerifyPasswordTokenAndSetPasswordMutation({
 *   variables: {
 *      resetPasswordInput: // value for 'resetPasswordInput'
 *   },
 * });
 */
export function useVerifyPasswordTokenAndSetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<VerifyPasswordTokenAndSetPasswordMutation, VerifyPasswordTokenAndSetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyPasswordTokenAndSetPasswordMutation, VerifyPasswordTokenAndSetPasswordMutationVariables>(VerifyPasswordTokenAndSetPasswordDocument, options);
      }
export type VerifyPasswordTokenAndSetPasswordMutationHookResult = ReturnType<typeof useVerifyPasswordTokenAndSetPasswordMutation>;
export type VerifyPasswordTokenAndSetPasswordMutationResult = Apollo.MutationResult<VerifyPasswordTokenAndSetPasswordMutation>;
export type VerifyPasswordTokenAndSetPasswordMutationOptions = Apollo.BaseMutationOptions<VerifyPasswordTokenAndSetPasswordMutation, VerifyPasswordTokenAndSetPasswordMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerUserInput: RegisterUserInput!) {
  register(registerUserInput: $registerUserInput) {
    email
    emailVerified
    fullName
    id
    status
    createdAt
    updatedAt
    roles {
      createdAt
      id
      role
      updatedAt
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerUserInput: // value for 'registerUserInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UserRegistrationWithInvitationDocument = gql`
    mutation UserRegistrationWithInvitation($registerUserInput: RegisterUserWithInvitationInput!) {
  userRegistrationWithInvitation(registerUserInput: $registerUserInput) {
    createdAt
    email
    emailVerified
    fullName
    id
    roles {
      createdAt
      id
      role
      updatedAt
    }
    status
    updatedAt
  }
}
    `;
export type UserRegistrationWithInvitationMutationFn = Apollo.MutationFunction<UserRegistrationWithInvitationMutation, UserRegistrationWithInvitationMutationVariables>;

/**
 * __useUserRegistrationWithInvitationMutation__
 *
 * To run a mutation, you first call `useUserRegistrationWithInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserRegistrationWithInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegistrationWithInvitationMutation, { data, loading, error }] = useUserRegistrationWithInvitationMutation({
 *   variables: {
 *      registerUserInput: // value for 'registerUserInput'
 *   },
 * });
 */
export function useUserRegistrationWithInvitationMutation(baseOptions?: Apollo.MutationHookOptions<UserRegistrationWithInvitationMutation, UserRegistrationWithInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserRegistrationWithInvitationMutation, UserRegistrationWithInvitationMutationVariables>(UserRegistrationWithInvitationDocument, options);
      }
export type UserRegistrationWithInvitationMutationHookResult = ReturnType<typeof useUserRegistrationWithInvitationMutation>;
export type UserRegistrationWithInvitationMutationResult = Apollo.MutationResult<UserRegistrationWithInvitationMutation>;
export type UserRegistrationWithInvitationMutationOptions = Apollo.BaseMutationOptions<UserRegistrationWithInvitationMutation, UserRegistrationWithInvitationMutationVariables>;
export const InviteUserDocument = gql`
    mutation InviteUser($inviteUserInput: InviteUserInput!) {
  inviteUser(inviteUserInput: $inviteUserInput)
}
    `;
export type InviteUserMutationFn = Apollo.MutationFunction<InviteUserMutation, InviteUserMutationVariables>;

/**
 * __useInviteUserMutation__
 *
 * To run a mutation, you first call `useInviteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteUserMutation, { data, loading, error }] = useInviteUserMutation({
 *   variables: {
 *      inviteUserInput: // value for 'inviteUserInput'
 *   },
 * });
 */
export function useInviteUserMutation(baseOptions?: Apollo.MutationHookOptions<InviteUserMutation, InviteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InviteUserMutation, InviteUserMutationVariables>(InviteUserDocument, options);
      }
export type InviteUserMutationHookResult = ReturnType<typeof useInviteUserMutation>;
export type InviteUserMutationResult = Apollo.MutationResult<InviteUserMutation>;
export type InviteUserMutationOptions = Apollo.BaseMutationOptions<InviteUserMutation, InviteUserMutationVariables>;
export const VerifyInvitationEmailTokenDocument = gql`
    mutation VerifyInvitationEmailToken($token: String!) {
  verifyInvitationEmailToken(token: $token) {
    email
    isTokenValid
  }
}
    `;
export type VerifyInvitationEmailTokenMutationFn = Apollo.MutationFunction<VerifyInvitationEmailTokenMutation, VerifyInvitationEmailTokenMutationVariables>;

/**
 * __useVerifyInvitationEmailTokenMutation__
 *
 * To run a mutation, you first call `useVerifyInvitationEmailTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyInvitationEmailTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyInvitationEmailTokenMutation, { data, loading, error }] = useVerifyInvitationEmailTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyInvitationEmailTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyInvitationEmailTokenMutation, VerifyInvitationEmailTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyInvitationEmailTokenMutation, VerifyInvitationEmailTokenMutationVariables>(VerifyInvitationEmailTokenDocument, options);
      }
export type VerifyInvitationEmailTokenMutationHookResult = ReturnType<typeof useVerifyInvitationEmailTokenMutation>;
export type VerifyInvitationEmailTokenMutationResult = Apollo.MutationResult<VerifyInvitationEmailTokenMutation>;
export type VerifyInvitationEmailTokenMutationOptions = Apollo.BaseMutationOptions<VerifyInvitationEmailTokenMutation, VerifyInvitationEmailTokenMutationVariables>;
export const VerifyEmailTokenDocument = gql`
    mutation VerifyEmailToken($token: String!) {
  verifyEmailToken(token: $token) {
    email
    roleType
  }
}
    `;
export type VerifyEmailTokenMutationFn = Apollo.MutationFunction<VerifyEmailTokenMutation, VerifyEmailTokenMutationVariables>;

/**
 * __useVerifyEmailTokenMutation__
 *
 * To run a mutation, you first call `useVerifyEmailTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailTokenMutation, { data, loading, error }] = useVerifyEmailTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailTokenMutation, VerifyEmailTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailTokenMutation, VerifyEmailTokenMutationVariables>(VerifyEmailTokenDocument, options);
      }
export type VerifyEmailTokenMutationHookResult = ReturnType<typeof useVerifyEmailTokenMutation>;
export type VerifyEmailTokenMutationResult = Apollo.MutationResult<VerifyEmailTokenMutation>;
export type VerifyEmailTokenMutationOptions = Apollo.BaseMutationOptions<VerifyEmailTokenMutation, VerifyEmailTokenMutationVariables>;
export const GetUserDocument = gql`
    query GetUser {
  me {
    id
    createdAt
    email
    emailVerified
    fullName
    status
    updatedAt
    profilePicture {
      createdAt
      fileSize
      id
      key
      metaType
      type
      typeId
      updatedAt
      url
    }
    roles {
      createdAt
      id
      role
      updatedAt
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateJobSummaryDocument = gql`
    mutation CreateJobSummary($createJobSummaryInput: CreateJobSummaryInput!) {
  createJobSummary(createJobSummaryInput: $createJobSummaryInput) {
    caseName
    caseNumber
    confidentialValue
    depositionDate
    createdAt
    deponentsFirstName
    deponentsGender
    deponentsLastName
    deponentsTitle
    files {
      createdAt
      fileSize
      id
      key
      metaType
      title
      type
      typeId
      updatedAt
      url
    }
    id
    isConfidential
    isDeleted
    prompt
    status
    updatedAt
    users {
      createdAt
      email
      emailVerified
      id
      status
      updatedAt
    }
    volumeNumber
  }
}
    `;
export type CreateJobSummaryMutationFn = Apollo.MutationFunction<CreateJobSummaryMutation, CreateJobSummaryMutationVariables>;

/**
 * __useCreateJobSummaryMutation__
 *
 * To run a mutation, you first call `useCreateJobSummaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobSummaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobSummaryMutation, { data, loading, error }] = useCreateJobSummaryMutation({
 *   variables: {
 *      createJobSummaryInput: // value for 'createJobSummaryInput'
 *   },
 * });
 */
export function useCreateJobSummaryMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobSummaryMutation, CreateJobSummaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobSummaryMutation, CreateJobSummaryMutationVariables>(CreateJobSummaryDocument, options);
      }
export type CreateJobSummaryMutationHookResult = ReturnType<typeof useCreateJobSummaryMutation>;
export type CreateJobSummaryMutationResult = Apollo.MutationResult<CreateJobSummaryMutation>;
export type CreateJobSummaryMutationOptions = Apollo.BaseMutationOptions<CreateJobSummaryMutation, CreateJobSummaryMutationVariables>;
export const FetchAllFilesDocument = gql`
    query FetchAllFiles($fetchAttachmentsInput: FetchAttachmentsInput!) {
  fetchAllFiles(fetchAttachmentsInput: $fetchAttachmentsInput) {
    attachments {
      createdAt
      description
      id
      fileSize
      key
      metaType
      title
      type
      typeId
      updatedAt
      url
    }
    pagination {
      totalCount
      totalPages
      page
      limit
    }
  }
}
    `;

/**
 * __useFetchAllFilesQuery__
 *
 * To run a query within a React component, call `useFetchAllFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllFilesQuery({
 *   variables: {
 *      fetchAttachmentsInput: // value for 'fetchAttachmentsInput'
 *   },
 * });
 */
export function useFetchAllFilesQuery(baseOptions: Apollo.QueryHookOptions<FetchAllFilesQuery, FetchAllFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllFilesQuery, FetchAllFilesQueryVariables>(FetchAllFilesDocument, options);
      }
export function useFetchAllFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllFilesQuery, FetchAllFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllFilesQuery, FetchAllFilesQueryVariables>(FetchAllFilesDocument, options);
        }
export function useFetchAllFilesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchAllFilesQuery, FetchAllFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchAllFilesQuery, FetchAllFilesQueryVariables>(FetchAllFilesDocument, options);
        }
export type FetchAllFilesQueryHookResult = ReturnType<typeof useFetchAllFilesQuery>;
export type FetchAllFilesLazyQueryHookResult = ReturnType<typeof useFetchAllFilesLazyQuery>;
export type FetchAllFilesSuspenseQueryHookResult = ReturnType<typeof useFetchAllFilesSuspenseQuery>;
export type FetchAllFilesQueryResult = Apollo.QueryResult<FetchAllFilesQuery, FetchAllFilesQueryVariables>;
export const MutationDocument = gql`
    mutation Mutation($removeAttachmentInput: DeleteAttachmentInput!) {
  removeFile(removeAttachmentInput: $removeAttachmentInput) {
    attachments {
      createdAt
      description
      fileSize
      id
      key
      metaType
      title
      type
      typeId
      updatedAt
      url
    }
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      removeAttachmentInput: // value for 'removeAttachmentInput'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const GetSignedUrlDocument = gql`
    mutation GetSignedUrl($getSignedUrl: String!) {
  getSignedUrl(getSignedUrl: $getSignedUrl)
}
    `;
export type GetSignedUrlMutationFn = Apollo.MutationFunction<GetSignedUrlMutation, GetSignedUrlMutationVariables>;

/**
 * __useGetSignedUrlMutation__
 *
 * To run a mutation, you first call `useGetSignedUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetSignedUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getSignedUrlMutation, { data, loading, error }] = useGetSignedUrlMutation({
 *   variables: {
 *      getSignedUrl: // value for 'getSignedUrl'
 *   },
 * });
 */
export function useGetSignedUrlMutation(baseOptions?: Apollo.MutationHookOptions<GetSignedUrlMutation, GetSignedUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetSignedUrlMutation, GetSignedUrlMutationVariables>(GetSignedUrlDocument, options);
      }
export type GetSignedUrlMutationHookResult = ReturnType<typeof useGetSignedUrlMutation>;
export type GetSignedUrlMutationResult = Apollo.MutationResult<GetSignedUrlMutation>;
export type GetSignedUrlMutationOptions = Apollo.BaseMutationOptions<GetSignedUrlMutation, GetSignedUrlMutationVariables>;
export const JobSummaryDocument = gql`
    query JobSummary($jobSummaryId: String!) {
  jobSummary(id: $jobSummaryId) {
    jobSummary {
      caseName
      caseNumber
      confidentialValue
      createdAt
      deponentsFirstName
      deponentsGender
      deponentsLastName
      deponentsTitle
      depositionDate
      templateTypes
      failedReason
      files {
        fileSize
        id
        key
        metaType
        title
        type
        typeId
        url
        createdAt
        updatedAt
      }
      id
      isConfidential
      isDeleted
      prompt
      status
      updatedAt
      users {
        email
        emailVerified
        fullName
        id
        profilePicture {
          createdAt
          fileSize
          id
          key
          metaType
          type
          typeId
          updatedAt
          url
        }
        roles {
          createdAt
          id
          role
          updatedAt
        }
        status
        updatedAt
        createdAt
      }
      volumeNumber
    }
  }
}
    `;

/**
 * __useJobSummaryQuery__
 *
 * To run a query within a React component, call `useJobSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobSummaryQuery({
 *   variables: {
 *      jobSummaryId: // value for 'jobSummaryId'
 *   },
 * });
 */
export function useJobSummaryQuery(baseOptions: Apollo.QueryHookOptions<JobSummaryQuery, JobSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobSummaryQuery, JobSummaryQueryVariables>(JobSummaryDocument, options);
      }
export function useJobSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobSummaryQuery, JobSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobSummaryQuery, JobSummaryQueryVariables>(JobSummaryDocument, options);
        }
export function useJobSummarySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<JobSummaryQuery, JobSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<JobSummaryQuery, JobSummaryQueryVariables>(JobSummaryDocument, options);
        }
export type JobSummaryQueryHookResult = ReturnType<typeof useJobSummaryQuery>;
export type JobSummaryLazyQueryHookResult = ReturnType<typeof useJobSummaryLazyQuery>;
export type JobSummarySuspenseQueryHookResult = ReturnType<typeof useJobSummarySuspenseQuery>;
export type JobSummaryQueryResult = Apollo.QueryResult<JobSummaryQuery, JobSummaryQueryVariables>;
export const UpdateJobSummaryDocument = gql`
    mutation UpdateJobSummary($updateJobSummaryInput: UpdateJobSummaryInput!) {
  updateJobSummary(updateJobSummaryInput: $updateJobSummaryInput) {
    prompt
  }
}
    `;
export type UpdateJobSummaryMutationFn = Apollo.MutationFunction<UpdateJobSummaryMutation, UpdateJobSummaryMutationVariables>;

/**
 * __useUpdateJobSummaryMutation__
 *
 * To run a mutation, you first call `useUpdateJobSummaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobSummaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobSummaryMutation, { data, loading, error }] = useUpdateJobSummaryMutation({
 *   variables: {
 *      updateJobSummaryInput: // value for 'updateJobSummaryInput'
 *   },
 * });
 */
export function useUpdateJobSummaryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobSummaryMutation, UpdateJobSummaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobSummaryMutation, UpdateJobSummaryMutationVariables>(UpdateJobSummaryDocument, options);
      }
export type UpdateJobSummaryMutationHookResult = ReturnType<typeof useUpdateJobSummaryMutation>;
export type UpdateJobSummaryMutationResult = Apollo.MutationResult<UpdateJobSummaryMutation>;
export type UpdateJobSummaryMutationOptions = Apollo.BaseMutationOptions<UpdateJobSummaryMutation, UpdateJobSummaryMutationVariables>;
export const JobSummariesDocument = gql`
    query JobSummaries($fetchJobSummariesInput: FetchJobSummariesInput!) {
  jobSummaries(fetchJobSummariesInput: $fetchJobSummariesInput) {
    jobSummaries {
      caseName
      caseNumber
      deponentsFirstName
      deponentsGender
      deponentsLastName
      deponentsTitle
      id
      templateTypes
      createdAt
      depositionDate
      status
      files {
        fileSize
        id
        key
        metaType
        type
        typeId
        url
        title
        createdAt
        updatedAt
      }
      isConfidential
      prompt
      volumeNumber
      updatedAt
      users {
        createdAt
        email
        emailVerified
        fullName
        id
        profilePicture {
          createdAt
          description
          fileSize
          id
          key
          metaType
          title
          type
          typeId
          updatedAt
          url
        }
        roles {
          createdAt
          id
          role
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
    }
    pagination {
      limit
      page
      totalCount
      totalPages
    }
  }
}
    `;

/**
 * __useJobSummariesQuery__
 *
 * To run a query within a React component, call `useJobSummariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobSummariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobSummariesQuery({
 *   variables: {
 *      fetchJobSummariesInput: // value for 'fetchJobSummariesInput'
 *   },
 * });
 */
export function useJobSummariesQuery(baseOptions: Apollo.QueryHookOptions<JobSummariesQuery, JobSummariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobSummariesQuery, JobSummariesQueryVariables>(JobSummariesDocument, options);
      }
export function useJobSummariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobSummariesQuery, JobSummariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobSummariesQuery, JobSummariesQueryVariables>(JobSummariesDocument, options);
        }
export function useJobSummariesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<JobSummariesQuery, JobSummariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<JobSummariesQuery, JobSummariesQueryVariables>(JobSummariesDocument, options);
        }
export type JobSummariesQueryHookResult = ReturnType<typeof useJobSummariesQuery>;
export type JobSummariesLazyQueryHookResult = ReturnType<typeof useJobSummariesLazyQuery>;
export type JobSummariesSuspenseQueryHookResult = ReturnType<typeof useJobSummariesSuspenseQuery>;
export type JobSummariesQueryResult = Apollo.QueryResult<JobSummariesQuery, JobSummariesQueryVariables>;
export const RemoveJobSummaryDocument = gql`
    mutation RemoveJobSummary($removeJobSummaryId: String!) {
  removeJobSummary(id: $removeJobSummaryId)
}
    `;
export type RemoveJobSummaryMutationFn = Apollo.MutationFunction<RemoveJobSummaryMutation, RemoveJobSummaryMutationVariables>;

/**
 * __useRemoveJobSummaryMutation__
 *
 * To run a mutation, you first call `useRemoveJobSummaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveJobSummaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeJobSummaryMutation, { data, loading, error }] = useRemoveJobSummaryMutation({
 *   variables: {
 *      removeJobSummaryId: // value for 'removeJobSummaryId'
 *   },
 * });
 */
export function useRemoveJobSummaryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveJobSummaryMutation, RemoveJobSummaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveJobSummaryMutation, RemoveJobSummaryMutationVariables>(RemoveJobSummaryDocument, options);
      }
export type RemoveJobSummaryMutationHookResult = ReturnType<typeof useRemoveJobSummaryMutation>;
export type RemoveJobSummaryMutationResult = Apollo.MutationResult<RemoveJobSummaryMutation>;
export type RemoveJobSummaryMutationOptions = Apollo.BaseMutationOptions<RemoveJobSummaryMutation, RemoveJobSummaryMutationVariables>;
export const GenerateSummaryDocument = gql`
    query GenerateSummary($typeId: String!) {
  generateSummary(typeId: $typeId) {
    createdAt
    description
    fileSize
    id
    key
    metaType
    title
    type
    typeId
    updatedAt
    url
  }
}
    `;

/**
 * __useGenerateSummaryQuery__
 *
 * To run a query within a React component, call `useGenerateSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateSummaryQuery({
 *   variables: {
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useGenerateSummaryQuery(baseOptions: Apollo.QueryHookOptions<GenerateSummaryQuery, GenerateSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateSummaryQuery, GenerateSummaryQueryVariables>(GenerateSummaryDocument, options);
      }
export function useGenerateSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateSummaryQuery, GenerateSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateSummaryQuery, GenerateSummaryQueryVariables>(GenerateSummaryDocument, options);
        }
export function useGenerateSummarySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GenerateSummaryQuery, GenerateSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GenerateSummaryQuery, GenerateSummaryQueryVariables>(GenerateSummaryDocument, options);
        }
export type GenerateSummaryQueryHookResult = ReturnType<typeof useGenerateSummaryQuery>;
export type GenerateSummaryLazyQueryHookResult = ReturnType<typeof useGenerateSummaryLazyQuery>;
export type GenerateSummarySuspenseQueryHookResult = ReturnType<typeof useGenerateSummarySuspenseQuery>;
export type GenerateSummaryQueryResult = Apollo.QueryResult<GenerateSummaryQuery, GenerateSummaryQueryVariables>;
export const UpdateUserPasswordDocument = gql`
    mutation updateUserPassword($updateUserPasswordInput: UpdateUserPasswordInput!) {
  updateUserPassword(updateUserPasswordInput: $updateUserPasswordInput) {
    createdAt
    email
    emailVerified
    fullName
    id
    status
    updatedAt
    roles {
      createdAt
      id
      role
      updatedAt
    }
  }
}
    `;
export type UpdateUserPasswordMutationFn = Apollo.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      updateUserPasswordInput: // value for 'updateUserPasswordInput'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(UpdateUserPasswordDocument, options);
      }
export type UpdateUserPasswordMutationHookResult = ReturnType<typeof useUpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationResult = Apollo.MutationResult<UpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationOptions = Apollo.BaseMutationOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userId: String!, $updateUserInput: UpdateUserInput!) {
  updateUser(userId: $userId, updateUserInput: $updateUserInput) {
    createdAt
    email
    emailVerified
    fullName
    id
    status
    updatedAt
    roles {
      createdAt
      id
      role
      updatedAt
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserStatusFromAdminDocument = gql`
    mutation UpdateUserStatusFromAdmin($status: Float!, $userId: String!) {
  updateUserStatusFromAdmin(status: $status, userId: $userId) {
    createdAt
    email
    emailVerified
    fullName
    id
    roles {
      createdAt
      id
      role
      updatedAt
    }
    status
    updatedAt
  }
}
    `;
export type UpdateUserStatusFromAdminMutationFn = Apollo.MutationFunction<UpdateUserStatusFromAdminMutation, UpdateUserStatusFromAdminMutationVariables>;

/**
 * __useUpdateUserStatusFromAdminMutation__
 *
 * To run a mutation, you first call `useUpdateUserStatusFromAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserStatusFromAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserStatusFromAdminMutation, { data, loading, error }] = useUpdateUserStatusFromAdminMutation({
 *   variables: {
 *      status: // value for 'status'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpdateUserStatusFromAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserStatusFromAdminMutation, UpdateUserStatusFromAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserStatusFromAdminMutation, UpdateUserStatusFromAdminMutationVariables>(UpdateUserStatusFromAdminDocument, options);
      }
export type UpdateUserStatusFromAdminMutationHookResult = ReturnType<typeof useUpdateUserStatusFromAdminMutation>;
export type UpdateUserStatusFromAdminMutationResult = Apollo.MutationResult<UpdateUserStatusFromAdminMutation>;
export type UpdateUserStatusFromAdminMutationOptions = Apollo.BaseMutationOptions<UpdateUserStatusFromAdminMutation, UpdateUserStatusFromAdminMutationVariables>;
export const RemoveUserDocument = gql`
    mutation RemoveUser($removeUserId: String!) {
  removeUser(id: $removeUserId)
}
    `;
export type RemoveUserMutationFn = Apollo.MutationFunction<RemoveUserMutation, RemoveUserMutationVariables>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      removeUserId: // value for 'removeUserId'
 *   },
 * });
 */
export function useRemoveUserMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserMutation, RemoveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(RemoveUserDocument, options);
      }
export type RemoveUserMutationHookResult = ReturnType<typeof useRemoveUserMutation>;
export type RemoveUserMutationResult = Apollo.MutationResult<RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables>;
export const FetchAllUsersDocument = gql`
    query FetchAllUsers($fetchUsersInput: FetchUsersInput!) {
  fetchAllUsers(fetchUsersInput: $fetchUsersInput) {
    pagination {
      limit
      page
      totalCount
      totalPages
    }
    users {
      email
      emailVerified
      fullName
      id
      status
      createdAt
      updatedAt
      roles {
        id
        role
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useFetchAllUsersQuery__
 *
 * To run a query within a React component, call `useFetchAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllUsersQuery({
 *   variables: {
 *      fetchUsersInput: // value for 'fetchUsersInput'
 *   },
 * });
 */
export function useFetchAllUsersQuery(baseOptions: Apollo.QueryHookOptions<FetchAllUsersQuery, FetchAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllUsersQuery, FetchAllUsersQueryVariables>(FetchAllUsersDocument, options);
      }
export function useFetchAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllUsersQuery, FetchAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllUsersQuery, FetchAllUsersQueryVariables>(FetchAllUsersDocument, options);
        }
export function useFetchAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchAllUsersQuery, FetchAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchAllUsersQuery, FetchAllUsersQueryVariables>(FetchAllUsersDocument, options);
        }
export type FetchAllUsersQueryHookResult = ReturnType<typeof useFetchAllUsersQuery>;
export type FetchAllUsersLazyQueryHookResult = ReturnType<typeof useFetchAllUsersLazyQuery>;
export type FetchAllUsersSuspenseQueryHookResult = ReturnType<typeof useFetchAllUsersSuspenseQuery>;
export type FetchAllUsersQueryResult = Apollo.QueryResult<FetchAllUsersQuery, FetchAllUsersQueryVariables>;
export const UpdateUserRoleFromAdminDocument = gql`
    mutation UpdateUserRoleFromAdmin($role: String!, $userId: String!) {
  updateUserRoleFromAdmin(role: $role, userId: $userId) {
    createdAt
    email
    emailVerified
    fullName
    id
    roles {
      createdAt
      id
      role
      updatedAt
    }
    status
    updatedAt
  }
}
    `;
export type UpdateUserRoleFromAdminMutationFn = Apollo.MutationFunction<UpdateUserRoleFromAdminMutation, UpdateUserRoleFromAdminMutationVariables>;

/**
 * __useUpdateUserRoleFromAdminMutation__
 *
 * To run a mutation, you first call `useUpdateUserRoleFromAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRoleFromAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRoleFromAdminMutation, { data, loading, error }] = useUpdateUserRoleFromAdminMutation({
 *   variables: {
 *      role: // value for 'role'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpdateUserRoleFromAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRoleFromAdminMutation, UpdateUserRoleFromAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserRoleFromAdminMutation, UpdateUserRoleFromAdminMutationVariables>(UpdateUserRoleFromAdminDocument, options);
      }
export type UpdateUserRoleFromAdminMutationHookResult = ReturnType<typeof useUpdateUserRoleFromAdminMutation>;
export type UpdateUserRoleFromAdminMutationResult = Apollo.MutationResult<UpdateUserRoleFromAdminMutation>;
export type UpdateUserRoleFromAdminMutationOptions = Apollo.BaseMutationOptions<UpdateUserRoleFromAdminMutation, UpdateUserRoleFromAdminMutationVariables>;