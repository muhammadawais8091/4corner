import { QueryOptions } from '@apollo/client';

export const INVALID_OR_EXPIRED_TOKEN_MESSAGE = 'Sorry! Your token is expired or invalid';
export const NOT_FOUND_EXCEPTION = 'Not Found Exception';
export const USER_DEACTIVATED = 'User Deactivated';
export const CONFLICT_EXCEPTION = 'conflict exception';
export const CONFLICT = 'conflict';
export const BAD_REQUEST = 'Bad Request';
export const BAD_USER_INPUT = 'Bad User Input';
export const USER_REGISTERED_SUCCESSFULLY = 'User Registered Successfully';
export const EMAIL_ALREADY_IN_USE = 'Email is already in use';
export const SOMETHING_WENT_WRONG = 'Something went wrong';
export const REQUEST_NOT_FOUND = 'Requests not found for current user';
export const TOKEN_NOT_FOUND = 'Token not found';
export const PRECONDITION_FAILED_EXCEPTION = 'Precondition Failed Exception';
export const UNAUTHORIZED = 'Unauthorized';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';
export const INVALID_AUTH_TOKEN = 'Invalid Authorization Token - Expired or Invalid';
export const TOKEN_INVALID = 'Token Invalid';
export const FORGET_PASSWORD = 'Forgot password?';
export const EMAIL_VERIFIED = 'Email Verified!';
export const LOGIN = 'Login';
export const ENTER_LOGIN_DETAILS = 'Enter your details below';
export const VERIFY_TOKEN_TEXT = 'Verifying your token';
export const SIGN_IN = 'Sign in';
export const SIGN_UP = 'Sign Up';
export const INVALID_EMAIL = 'Invalid email address';
export const SAVE = 'Save';
export const NEXT = 'Next'
export const INVITED_USER_SUCCESSFULLY = 'Invitation sent successfully';
export const INVITED_USER_HEADING = 'Invite new member';
export const INVITED_USER_DESCRIPTION = 'Invite new members to your system.';
export const STATUS_UPDATED_SUCCESSFULLY = 'Status Updated Successfully';
export const USER_UPDATED_SUCCESSFULLY = 'User Updated Successfully';
export const ROLES_UPDATED_SUCCESSFULLY = 'Role updated Successfully';
export const REMOVE_USER_SUCCESSFULLY = 'Remove User Successfully';
export const REMOVE_DOCUMENT_SUCCESSFULLY = 'Remove Document Successfully';
export const USER_ALREADY_EXIST = 'User already exists';
export const CREATE_USER_SUCCESS = 'User created successfully';
export const RESET_PASSWORD = 'Reset Password';
export const FORGET_PASSWORD_INSTRUCTION = 'Please enter your associated email to reset password.';
export const SEND_INSTRUCTION = 'Send instructions';
export const PASSWORD_UPDATED_SUCCESSFULLY = 'Password Updated Successfully';
export const PROFILE_UPDATED_SUCCESSFULLY = 'Profile Updated Successfully';
export const BACK_TO_LOGIN = 'Back to login page';
export const SET_PASSWORD = 'Set your Password';
export const CHANGE_PASSWORD = 'Change Password';
export const SET_PASSWORD_SUBTITLE = 'Set up password to complete your signup.';
export const FORBIDDEN_EXCEPTION = 'forbidden exception';
export const EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE = 'Email changed or not verified, please verify your email';
export const WRONG_EMAIL_OR_PASSWORD = 'You have entered wrong email or password';
export const ADMIN_NOT_ACCESSIBLE = 'This user is not able to access admin panel.';
export const NOT_FOUND_EMAIL_MESSAGE = 'No user found with this email';
export const FORGET_PASSWORD_SUCCESS = 'An email has been sent to your registered email address';
export const ROOT_ROUTE = '/';
export const DASHBOARD_ROUTE = '/dashboard';
export const LOGIN_ROUTE = '/login';
export const RESET_PASSWORD_FAILURE = 'Reset password failed';
export const SET_PASSWORD_FAILURE = 'Set password failed';
export const RESET_PASSWORD_SUCCESS = 'Password reset successfully';
export const SET_PASSWORD_SUCCESS = 'Password set successfully';
export const FOLLOW_INSTRUCTIONS = 'Please follow provided link in email to reset your password';
export const PASSWORD_VALIDATION_MESSAGE = 'Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character';
export const INVITE_NEW_USER = 'Invite new user';
export const USERS = 'Users';
export const CANCEL = 'Cancel';
export const SEND_INVITES = 'Send Invite';
export const DATE_FORMAT = 'MM/DD/YYYY';
export const TIME_FORMAT = 'h:mm:ss a';
export const USER_UPDATE_SUCCESS = 'User updated successfully';
export const INTERNAL_SERVER_ERROR = 'Internal server error';
export const USER_PASSWORD_SUCCESS = 'User password updated successfully';
export const PAGE_LIMIT = 10;
export const NO_USER_FOUND = 'No user found';
export const PASSWORD = 'password';
export const TEXT = 'text';
export const URL = 'Url';
export const USER_NAME = 'User name';
export const FILE_IS_LARGER = 'File is larger than 3MB';
export const NO_FILES_FOUND = 'No files found';
export const VIDEO_IS_LARGE = 'File is larger than 4GB';
export const CUSTOMER_SUPPORT = 'Customer Support';
export const ENABLE = 'Enable';
export const DISABLE = 'Disable';
export const UPLOAD_DOC = '+ Upload Doc';
export const GENERATE_SUMMARY = 'Generate Summary';
export const FOUR_O_FOUR = '404';
export const PAGE_NOT_FOUND = 'Page Not Found';
export const LOOKS_LIKE_AN_EMPTY_SPACE = 'Looks like an empty space. You can go back to homepage by clicking the button below';
export const FORGET_PASSWORD_TEXT = "Please enter the email address associated with your account, and we'll email you a link to reset your password.";
export const TEXT_COPIED = 'Copied to clipboard';
export const CALENDER = 'Calendar';
export const VIEW = 'View';
export const EDIT = 'Edit';
export const REMOVE = 'Remove';
export const DELETE = 'Delete';
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-"!@#=+%&/,><':;|_~`])\S{8,99}$/;
export const SPACES_REGEX = /^\S+(?: \S+)*$/;
export const ALPHABETS_REGEX = /^\b(?!.*?\s{2})[A-Za-z ]{1,}\b$/;
export const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ssnReg = /^(\d{3}-?\d{2}-?\d{4})|(xxx-xx-xxxx)$/i;
export const URL_REGEX = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const ADD = 'Add';
export const EMAIL_ADDED = 'Email added successfully';
export const EMAIL_DELETED = 'Email deleted successfully';
export const EMAIL_UPDATED = 'Email updated successfully';
export const AUTH_TOKEN = 'four_corner_token';
export const USER_EMAIL = 'four_corner_user_email';
export const INVITE_SENT = 'Invite sent';
export const UPDATE_PROMPT_SUCCESS = 'Prompts updated successfully';
export const UPDATE_PROMPT_FAILURE = 'Failed to update';
export const SUMMARY_DETAIL = 'four_corner_summary_detail';
export const fileUploadingSteps = ['Case Information', 'Add Prompts', 'Upload Document', 'See Preview'];

export const fileDocumentList = [
  {
    id: 'trans',
    fileName: 'Transcript_001.pdf',
    size: '700KB',
    createAt: 'Jan 4, 2022'
  },

  {
    id: 'legal',
    fileName: 'Legal_Notice-203322.pdf',
    size: '700KB',
    createAt: 'Jan 4, 2022'
  },

  {
    id: 'draft',
    fileName: 'Draft_Floyd_MayWeather.pdf',
    size: '700KB',
    createAt: 'Jan 4, 2022'
  }
];

export const GRAPHQL_QUERY_POLICY = {
  fetchPolicy: 'network-only',
  nextFetchPolicy: 'no-cache',
  notifyOnNetworkStatusChange: true
} as unknown as QueryOptions;

export const AUTH_LINKS = {
  FORGET_PASSWORD_LINK: '/forgot-password',
  LOGIN_LINK: '/login',
  SIGN_UP_LINK: '/signup',
  SET_PASSWORD: '/reset-password',
  VERIFY_EMAIL: '/verify-email',
  CHECK_EMAIL: '/check-email'
};

export const DASHBOARD_LINK = [
  { title: 'Dashboard', link: '/' },
  { title: 'Users', link: '/users' },
  { title: 'Profile', link: '/profile' },
];

export const LOGIN_FIELDS = [
  {
    title: 'Email',
    fieldType: 'email',
    name: 'email'
  },
  {
    title: 'Password',
    fieldType: 'password',
    name: 'password'
  }
];

export const SET_PASSWORD_FIELDS = [
  {
    title: 'New Password',
    fieldType: 'password',
    name: 'password'
  },
  {
    title: 'Confirm Password',
    fieldType: 'password',
    name: 'repeatPassword'
  }
];

export const INVITE_USER_FORM_FIELDS = [
  {
    title: 'Email',
    fieldType: 'email',
    name: 'email'
  },
  {
    title: 'First Name',
    fieldType: 'text',
    name: 'firstName'
  },
  {
    title: 'Last Name',
    fieldType: 'text',
    name: 'lastName'
  }
];

export const DASHBOARD_TABLE_COLUMNS = ['File Name', 'Deposition Date', 'Deponent Name', 'Deponent Title', 'Case', 'Volume #', 'Status', 'Submitted By', 'Template', 'Created At', 'Actions'];

export const ACCEPT_FOR_IMAGES = {
  'file/png': ['.png'],
  'file/jpg': ['.jpg'],
  'file/jpeg': ['.jpeg'],
}

export const TEMPLATE_BASE_URL = 'https://4corners-ai-assets.s3.amazonaws.com/public/sample-docs'
export const TEMPLATE_A = 'AI-SAMPLE-A.docx'
export const TEMPLATE_B = 'AI-SAMPLE-B.docx'
export const TEMPLATE_C = 'AI-SAMPLE-C.docx'

export const IMAGE_MAX_SIZE = 40000000
export const DESCRIPTION_FOR_IMAGE = 'PNG or JPG (Max. 40MB)'
export const VOLUME_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const INFORMATION_FIELDS = ['caseName', 'caseNumber', 'deponentsFirstName', 'deponentsLastName', 'deponentsTitle', 'volumeNumber', 'deponentsGender', 'depositionDate', 'summaryTemplate'];
export const INFORMATION_FIELDS_CONFIDENTIAL = [...INFORMATION_FIELDS, 'confidentialValue']
export const TOOLTIP_POPPER_PROPS = { modifiers: [{ name: 'offset', options: { offset: [0, -12] } }] };
