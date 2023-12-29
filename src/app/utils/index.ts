import { TemplateType, UserRoles } from '../../generated';
import { client } from '../apollo';
import { AUTH_TOKEN, TEMPLATE_A, TEMPLATE_B, TEMPLATE_BASE_URL, TEMPLATE_C, USER_EMAIL } from '../constants';

export const handleLogout = async () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER_EMAIL);
  client.clearStore();
};

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const requiredMessage = (fieldName: string) => `${fieldName} is required.`;

export const firstLetterUppercase = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const formatPhoneNumber = (phoneNumberString: string | null) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return ['(', match[2], ') ', match[3], '-', match[4]].join('');
  }

  return null;
};

export const exampleMessage = (e: string) => `i.e ${e}`;
export const maxLength = (fieldName: string, length: number) => `${fieldName} can be up to ${length} characters long.`;
export const minLength = (fieldName: string, length: number) => `${fieldName} should be at least ${length} characters long.`;
export const validMessage = (fieldName: string, example?: string) => `Please enter valid ${fieldName.toLowerCase()}. ${example ? exampleMessage(example) : ''}`;
export const validMessageForName = (fieldName: string, example?: string) => `Invalid name: ${fieldName.toLowerCase()}. ${example ? exampleMessage(example) : ''}`;

export const formatEnumMember = (value: string) => {
  let formatted = '';

  value?.split('_').map((term) => (formatted = `${formatted} ${term.charAt(0).toUpperCase()}${term.slice(1).toLowerCase()}`));

  return formatted?.trim();
};

export const getCapitalize = (attachment: string) => {
  return attachment.charAt(0).toUpperCase() + attachment.slice(1).toLowerCase();
};

export const handleTabs = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

export const checkDevice = () => {
  if (navigator.vendor != null && navigator.vendor.match(/Apple Computer, Inc./) && (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
    return true;
  } else if (navigator.vendor !== null && navigator.vendor.match(/Apple Computer, Inc./) && navigator.userAgent.match(/iPad/i)) {
    return true;
  } else if (navigator.vendor !== null && navigator.vendor.match(/Apple Computer, Inc./) && navigator.userAgent.indexOf('Safari') !== -1) {
    return true;
  }

  return false;
};

export const getUserRoles = (role: UserRoles | string) => {
  switch (role) {
    case UserRoles.Attorney:
      return [UserRoles.Attorney];

    case UserRoles.Client:
      return [UserRoles.Client];

    case UserRoles.Paralegal:
      return [UserRoles.Paralegal];

    case UserRoles.Admin:
      return [UserRoles.Admin];

    default:
      return [UserRoles.Admin, UserRoles.Client, UserRoles.Paralegal, UserRoles.Attorney];
  }
};

export const formatFileSize = (bytes: number): string => {
  const megabytes = bytes / (1024 * 1024);
  if (megabytes >= 1000) {
    // Convert to gigabytes if it exceeds 999MB
    const gigabytes = megabytes / 1024;
    return `${gigabytes.toFixed(2)} GB`;
  } else {
    return `${megabytes.toFixed(2)} MB`;
  }
};

export const getFullName = (firstName: string, lastName: string) => {
  const capitalizedFirstName = firstLetterUppercase(firstName);
  const capitalizedLastName = firstLetterUppercase(lastName);
  const fullName = `${capitalizedFirstName}  ${capitalizedLastName}`

  return fullName;
}

export const getTemplateUrl = (value: TemplateType) => {
  switch (value) {
    case TemplateType.TemplateA:
      return `${TEMPLATE_BASE_URL}/${TEMPLATE_A}`
    case TemplateType.TemplateB:
      return `${TEMPLATE_BASE_URL}/${TEMPLATE_B}`
    case TemplateType.TemplateC:
      return `${TEMPLATE_BASE_URL}/${TEMPLATE_C}`
    default: return ""
  }
}


