/* eslint-disable @typescript-eslint/no-explicit-any */
// packages import
import { ApolloQueryResult } from '@apollo/client';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { GraphQLErrorExtensions } from 'graphql';
import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { Accept } from 'react-dropzone';
import { ValidationRule } from 'react-hook-form';
import { Attachment, ConfidentialValue, Exact, FetchAllUsersQuery, FetchUsersInput, InviteUserInput, JobSummary, Maybe, RegisterUserInput, ResetPasswordInput, StatusType, TemplateType, UpdateUserPasswordInput, User } from '../../generated';
import { Action, State } from '../context/AppContextReducer';
import { AuthAction, AuthState } from '../context/AuthContextReducer';
import { UserAction, UserState } from '../context/UserContextReducer';
import { SummaryDetailsAction, SummaryDetailsState } from '../components/summaryDetail/SummaryDetailReducer';

// packages import

type Key = string | number | undefined;

export enum FileType {
  Text = 'txt',
  Pdf = 'pdf',
  Doc = 'doc'
  // Add more file types as needed
}

export type PasswordType = 'password' | 'text';

export interface CloseSnackbarProps {
  id: Key;
}
export interface BrandSkeletonProps {
  noOfItems: number;
}
export interface TableSkeletonProps {
  noOfRows: number;
  noOfCols?: number;
}

interface ControlLabelProps {
  controllerLabel: string;
  fieldType?: string;
  pattern?: ValidationRule<RegExp>;
  error?: string;
  isPassword?: boolean;
  isDisabled?: boolean;
}

export interface WidgetSkeletonProps {
  noOfRows: number;
}

export interface CustomButtonInterface {
  children?: ReactNode;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

export interface CustomButtonGroupInterface {
  btnText1: string;
  btnText2: string;
  btnText3: string;
}

export interface TabPanelProps extends ChildrenType {
  index: number;
  value: number;
}

export interface PaginationProps {
  loading: boolean;
}
export interface ChildrenType {
  children?: ReactNode;
}

export interface PageHeadingProps {
  title: string;
  subTitle?: string;
  variant?: Variant;
  marginTop?: string;
  apiKey?: boolean;
}

export interface InfoTooltipProps {
  title: string;
}

export interface ErrorResponseType {
  error: string;
  message: string;
  status: number;
}

export interface AppContextReducerType extends State {
  dispatch: Dispatch<Action>;
}

export interface AuthContextReducerType extends AuthState {
  dispatch: Dispatch<AuthAction>;
}

export interface AuthLayoutProps extends ChildrenType {
  title?: string;
  subTitle?: string;
}

export interface ResetPasswordProps extends ResetPasswordInput {
  repeatPassword: string;
}

export interface SignupInterface extends RegisterUserInput {
  roleType?: string;
}

export interface ErrorException extends GraphQLErrorExtensions {
  message: string;
  name: string;

  response: {
    error: string;
    message: string;
    status: number;
    response: ErrorResponseType;
  };
}

export interface AuthContextProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
  isBrandManager: boolean;
  isOperator: boolean;
  userLoader: boolean;
  currentUser: User | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setIsBrandManager: (isAdmin: boolean) => void;
  setUserLoader: (userLoader: boolean) => void;
  setIsOperator: (isOperator: boolean) => void;
  setUser: (currentUser: User | null) => void;
}

export interface RefetchProp {
  refetch?: () => void;
}

export interface DispatchAndState<S, D> extends RefetchProp {
  dispatch: Dispatch<D>;
  state?: S;
  loading?: boolean;
  btnActionText?: string;
}
export interface CustomEntityInterface {
  customEntityText: string;
  customEntityCount: number;
}

export interface UserUpdateProps extends UserProps {
  editUser: boolean;
  setEditUser: Dispatch<SetStateAction<boolean>>;
}

export interface UserProps extends DispatchAndState<UserState, UserAction> {
  currentUserData: Maybe<User>;
  usersData: Maybe<Array<Maybe<User>>>;
  refetch?: (variables?: Partial<Exact<{ fetchUsersInput: FetchUsersInput }>> | undefined) => Promise<ApolloQueryResult<FetchAllUsersQuery>>;
}

export interface UpdateProfileDialogueInterface {
  isEditOpen?: boolean;
  isAdditionalEditOpen?: boolean;
  label?: string;
  setIsEditOpen?: Dispatch<SetStateAction<boolean>>;
  setIsAdditionalEditOpen?: Dispatch<SetStateAction<boolean>>;
}

export interface UserGeneralInformationInterface extends UpdateProfileDialogueInterface {
  currentUserData: Maybe<User>;
  usersData?: Maybe<Array<Maybe<User>>>;
  dispatch: Dispatch<UserAction>;
}

export interface TableActionButtonInterface {
  editBtnText: string;
  removeBtnText: string;
  editBtnHandler: () => void;
  removeBtnHandler: () => void;
}

export interface TableHeaderProps extends ChildrenType {
  pagination?: ReactNode;
  height?: string;
}

export interface IShowPasswordProps {
  passwordType: string;
  isPassword: boolean | undefined;
  handleShowPassword: () => void;
}

export interface EmptyDataProps {
  description: string;
  button?: boolean;
  height: string;
}

export interface EmptyDataInterface {
  title: string;
  description: string;
  btnText?: string;
}

export interface CustomControlProps extends ControlLabelProps {
  controllerName: string;
  controllerPlaceholder?: string;
  isMultiLine?: boolean;
  maxLength?: number;
  rowsLength?: number;
  readOnly?: boolean;
  tooltipText?: string;
  defaultValue?: string | number;
  isPassword?: boolean;
  inputRef?: RefObject<any>;
  min?: string;
}

export interface CustomModalProps extends ChildrenType {
  isOpen: boolean;
  isDelete?: boolean;
  showCloseIcon?: boolean;
  handleClose?: () => void;
  title?: string;
  subTitle?: string;
  infoIcon?: boolean;
  maxWidth?: string;
  hideBackdrop?: boolean;
}

export interface BreadCrumbProps {
  currentPage: string;
  previousPage: string;
  href?: string;
}

export interface CustomAccordionProps extends ChildrenType {
  expanded: boolean;
  id: string;
  label: string;
  subHeading?: string;
}

export interface AvatarIconInterface {
  color: string;
  bgColor: string;
  text: string;
}

export interface ItemInterface {
  id: string;
  label: string;
}

export interface InviteTest extends InviteUserInput { }

export interface UserRemoveProps extends UserProps {
  removeUser: boolean;
  setRemoveUser: Dispatch<SetStateAction<boolean>>;
  refetch?: (variables?: Partial<Exact<{ fetchUsersInput: FetchUsersInput }>> | undefined) => Promise<ApolloQueryResult<FetchAllUsersQuery>>;
}

export interface SetNewPasswordInput extends UpdateUserPasswordInput {
  newPassword: string;
  currentPassword: string;
  repeatPassword?: string;
}

export interface ThreeDostLoaderProps {
  height: string;
}

export interface PromptsAndCaseInterface extends PromptsInterface {
  caseName: string;
  caseNumber: string;
  deponentsFirstName: string;
  deponentsLastName: string;
  deponentsTitle: string
  isConfidential: boolean;
  volumeNumber: string;
  deponentsGender: string;
}

export interface PromptsAndCaseSwitchInterface extends PromptsAndCaseInterface {
  promptSwitch: boolean | null | undefined;
}

export interface ConfidentialityLevelInterface extends PromptsAndCaseSwitchInterface {
  confidentialValue: ConfidentialValue
}

export interface AdditionalDateInterface extends ConfidentialityLevelInterface {
  depositionDate: string;
}

export interface AdditionalTemplateInterface extends AdditionalDateInterface {
  summaryTemplate: TemplateType
}

export interface CustomResolverOptionsForUploadFile {
  names?: ("caseNumber" | "caseName" | "volumeNumber" | "deponentsGender" | "promptSwitch" | "deponentsTitle" | "deponentsFirstName" | "deponentsLastName" | "confidentialValue" | "depositionDate" | "summaryTemplate")[] | undefined;
  context?: any;
  mergeInfo?: any;
}

export interface PromptsInterface {
  [key: string]: any;
}


export interface CustomResolverOptionsForUpdatingFullName {
  names?: ("fullName")[] | undefined;
  context?: any;
  mergeInfo?: any;
}

export interface PromptsArrayInterface {
  prompts: PromptsAndCaseSwitchInterface[];
}

export interface UserAdditionalInformationInterface extends UpdateProfileDialogueInterface {
  currentUserData: Maybe<User>;
  usersData?: Maybe<Array<Maybe<User>>>;
  dispatch: Dispatch<UserAction>;
}

export interface BackButtonProps {
  handleClick?: () => void;
}

export interface UploadFileInput {
  fileId?: string;
  jobSummaryId: string;
  files: File[];
  status: string;
}

export enum AttachmentEnum {
  JOB_SUMMARY = 'jobSummary',
  USER = 'user'
}

export enum MetaTypeEnum {
  INPUT_FILE = 'inputFile',
  OUPUT_FILE = 'outputFile',
  TRANSCRIPT_FILE = 'transcriptFile',
  SUMMARY_FILE = 'summaryFile',
  AVATAR_FILE = 'avatarFile'
}

export interface DeleteDocumentProps {
  jobSummary?: JobSummary
  refetch: () => void;
}

export interface PreviewProps {
  files: File[];
}

export interface UploadDocumentFileProps {
  setFiles: Dispatch<SetStateAction<File[]>>;
  files: File[];
}

export interface PromptComponentInterface {
  isEdit: boolean;
}

export interface CaseInformationProps {
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
  setTemplateValue: Dispatch<React.SetStateAction<TemplateType | undefined>>
}

export interface DocumentViewerProps {
  url: string;
  title: string;
  fileType: string
  handleClose: () => void;
}

export interface UploadImageModalProps extends CustomModalProps {
  entityType: string
  typeId: string
}

export interface UploadDocumentProps {
  avatar: string;
  setAvatar: string;
}

export interface UsersInvitationModelProps {
  email?: string | undefined;
  setEmail?: Dispatch<SetStateAction<string | undefined>>
}

export interface UploadCustomDocumentProps {
  fileId?: string
  fileKey?: string
  typeId: string;
  entityType: string;
  status?: number;
  fieldName?: string
  metaType: string
  type: string,
  accept: Accept | undefined
}

export interface LazyLoadImageProps {
  width: number | string;
  height: number | string;
  signedUrl: string;
  styleProps?: SxProps;
  alt?: string;
  isRound?: boolean;
  onClickImageHandler?: () => void;
}

export interface RegenerateSummaryProps extends CustomModalProps {
  regenerateSummary: () => void;
}

export interface GenerateSummaryProps {
  state: SummaryDetailsState
  dispatch: Dispatch<SummaryDetailsAction>
}

export interface SummaryDetailHeaderProps {
  fileStatus?: StatusType
}

export interface SummaryInfoDetailsInterface extends GenerateSummaryProps {
  summaryLoader: boolean
}

export interface UpdateSummaryFileInterface extends GenerateSummaryProps {

}

export interface GeneratedFilesListInterface extends Omit<SummaryInfoDetailsInterface, "status" | "setFileStatus"> {
  clickFileHandler: (file: Attachment, fileVersion: number) => Promise<void>
}

export interface ProcessingSummaryInterface {
  sx?: SxProps<Theme>;
} 