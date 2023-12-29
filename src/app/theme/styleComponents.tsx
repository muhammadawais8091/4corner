import { Alert, Box, Button, Menu, Typography, styled } from "@mui/material";
import palette from "./palette";
import { flexCenter } from './styleConstants';

const { lightBlack, primary: { main: primaryMain } } = palette

export const AuthLayoutContainer = styled(Box)(() => ({
  minHeight: "100vh",
  padding: '24px',
  maxWidth: 500,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "center"
}));

export const DrawerList = styled(Box)(() => ({
  "& .MuiListItemButton-root": {
    color: lightBlack,
    borderBottom: 'none',
    fontSize: '14px',
    fontWeight: '400',
    height: '50px',

    "&:hover": {
      backgroundColor: 'transparent',
      color: primaryMain,

      "&:after": {
        display: 'none'
      }
    },

    '&.active': {
      backgroundColor: 'transparent',
      color: primaryMain,

      "&::after": {
        display: 'none'
      },

      "&:hover": {
        backgroundColor: 'transparent',
      },
    }
  }
}));

export const UserRightActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'start',
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: '1rem',
  },

  '& button': {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },

  '& .MuiFormControl-root': {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },

    '& .MuiInputBase-root': {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      },
    }
  }
}));

export const RemoveButton = styled(Button)(() => ({
  textTransform: 'capitalize',
  backgroundColor: palette.redTwo,

  "&:hover": {
    backgroundColor: palette.redTwo
  }
}));

export const Logo = styled(Box)(() => ({
  display: 'flex',
  maxHeight: 60,
  marginRight: '20px',

  'img': {
    maxHeight: '60px',
    objectFit: 'contain'
  }
}));

export const TitleBox = styled(Box)(() => ({
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  backgroundColor: primaryMain,
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px'
}));

export const Controls = styled(Button)(() => ({
  position: 'absolute',
  top: '10px',
  textTransform: 'capitalize',
  padding: '0',
  minWidth: 'auto'
}));

export const AccordionWrapper = styled(Box)(() => ({
  marginBottom: '1rem',
  padding: '7px 16px',
  backgroundColor: palette.white
}));

export const EmptyDataBox = styled(Box)(() => ({
  marginTop: '2rem',
  borderRadius: '5px',
  marginBottom: "2rem",
  padding: '29px',
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const ImageWrapper = styled(Box)(() => ({
  '& img': {
    objectFit: 'cover',
  }
}));

export const AlertWarning = styled(Alert)(() => ({
  color: palette.white,
  backgroundColor: palette.yellow,
  fontSize: '1rem',
  maxWidth: '665px',

  '& svg': {
    fill: palette.white
  }
}));

export const PageNotFountText = styled(Typography)(({ theme }) => ({
  fontSize: '68px',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  }
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: '30rem',
  fontWeight: '600',
  opacity: '0.1',

  [theme.breakpoints.down('lg')]: {
    fontSize: '25rem',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '18rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '10rem',
  }
}));

export const ErrorBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: '50%',
  left: '50%',
  width: '100%',
  transform: `translate(-50%, -50%)`,
  'p': {
    [theme.breakpoints.down('sm')]: {
      padding: '10px',
    }
  }
}));

export const CustomPhoneContainer = styled(Box)(() => ({
  '.react-tel-input .form-control': {
    height: '56px',
    '-webkit-appearance': 'none',

    "&:focus": {
      outline: 'none',
    }
  },

  '.MuiFormControl-root.MuiFormControl-fullWidth': {
    marginTop: '8px'
  },

  '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
    transform: ' translate(10px, -6px) scale(0.75)',
    background: "none",
    padding: '0 6px',
    zIndex: '99',
    backgroundColor: palette.white
  },

  '.display_none': {
    display: 'none!important'
  },

  '.special-label': {
    display: 'none!important'
  },

  '.transparent': {
    color: 'transparent',
  },

  '.appearance': {
    '-webkit-appearance': 'none',
  }
}))

export const AppLoading = styled(Box)(() => ({
  height: '100vh',
  width: '100%',
  flexDirection: 'column',
  ...flexCenter,
}));

export const CustomMenu = styled(Menu)(() => ({
  '& .MuiList-root': {
    border: `1px solid ${palette.lightGray}`,
    minWidth: '250px',
    maxWidth: '290px',
    background: palette.white,
    boxShadow: `0px 0px 15px ${palette.lightSeven}`,
    borderRadius: '4px',
    paddingTop: '0',
    paddingBottom: '0',
    '& .MuiMenuItem-root': {
      paddingTop: '10px',
      paddingBottom: '10px'
    }
  }
}));

export const CompanyNameBox = styled(Box)(() => ({
  maxHeight: '205px',
  overflow: 'auto',
}));

export const CheckEmailWrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  maxWidth: 500,
  margin: '0 auto',
  textAlign: 'center',
  padding: '0 30px'
}));

export const SearchDocumentField = styled(Box)(() => ({
  '.MuiFormControl-root': {
    height: '100%',
    borderRadius: '8px',

    '.MuiInputBase-root': {
      height: '100%',
    }
  }
}));

export const UploadArea = styled(Box)(() => ({
  border: `1px dashed ${palette.lightGray}`,
  borderRadius: '4px',
  padding: '24px 16px'
}));

export const UploadBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const UploadIcon = styled(Box)(() => ({
  backgroundColor: palette.light,
  width: '40px',
  height: '40px',
  borderRadius: '100%',
  marginBottom: '.5rem',
  marginRight: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
