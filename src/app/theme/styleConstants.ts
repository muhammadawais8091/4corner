import { PopoverOrigin, capitalize } from "@mui/material";
import { customTheme } from '../theme';
import palette from '../theme/palette';
import { StatusType } from "../../generated";
const { primary: { main }, lightColorTwo, lightGray, lightBorderColorTwo, blackOne, white, lightColorThree, pinkThree, lightBorderColor, lightFive, editorBorder, purple1, black, lightBlueOne, darkGray } = palette

export const menuPaperStyles = { sx: { minWidth: "200px" } }
export const displayNone = { sx: { display: 'none' } }

export const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const uploadImage = {
  position: 'absolute',
  right: '0',
  bottom: '-7px',

  [customTheme.breakpoints.down('sm')]: {
    display: 'none'
  }
}

export const previewDetails = {
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
}

export const getInTouch = {
  textTransform: 'capitalize',
  fontSize: '12px',
  boxShadow: 'none',

  [customTheme.breakpoints.down('sm')]: {
    minWidth: '100%',
    marginTop: '16px'
  }
}

export const authBox = {
  width: '450px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
}

export const authLogo = {

}

export const taskAction = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '2rem',
  [customTheme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}

export const leftTaskAction = {
  display: 'flex',

  [customTheme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}

export const previewDrawer = {
  position: 'fixed',
  transform: 'rotate(-89.99deg)',
  backfaceVisibility: 'hidden',
  bottom: '30%',
  right: '-33px',
  padding: '10px 10px 0px 10px',
  zIndex: '100'
}

export const drawerButton = {
  border: `1px solid ${lightColorTwo}`,
  padding: '10px 25px',
  borderTopLeftRadius: '18px',
  borderTopRightRadius: '18px',
  backgroundColor: main,
}

export const widgetBoxSibling = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  alignItems: 'flex-start',

  [customTheme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}

const aspectRatioHeight = (breakPoint: number, height: string) => {
  return {
    [customTheme.breakpoints.down(breakPoint)]: {
      height: height
    },
  }
}

export const hookVideoStylePortrait = {
  height: '263.11px',
  ...aspectRatioHeight(1024, '264.38px'),
  ...aspectRatioHeight(820, '206.72px'),
  ...aspectRatioHeight(768, '394.31px'),
  ...aspectRatioHeight(572, '293.63px'),
  ...aspectRatioHeight(414, '212.63px'),
  ...aspectRatioHeight(390, '199.69px'),
  ...aspectRatioHeight(375, '191.25px'),
  ...aspectRatioHeight(360, '182.81px'),
  ...aspectRatioHeight(320, '160.31px'),
  ...aspectRatioHeight(280, '138.38px')
}

export const libraryVideoStylePortrait = {
  height: '263.11px',

  ...aspectRatioHeight(1024, '172.5px'),
  ...aspectRatioHeight(820, '133.5px'),
  ...aspectRatioHeight(768, '191.81px'),
  ...aspectRatioHeight(572, '302.63px'),
  ...aspectRatioHeight(414, '228.38px'),
  ...aspectRatioHeight(390, '200.25px'),
  ...aspectRatioHeight(375, '191.81px'),
  ...aspectRatioHeight(360, '181.81px'),
  ...aspectRatioHeight(320, '160.88px'),
  ...aspectRatioHeight(280, '138.38px'),
}

export const taskDetailBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [customTheme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'start',
  }
}

export const taskDetailSmsButton = {
  [customTheme.breakpoints.down('sm')]: {
    marginTop: '16px',
    width: '100%',

    "& button": {
      width: '100%',
    }
  }
}

export const drawerImage = {
  maxWidth: '170px',
  width: '100%',
  display: 'block',
  marginTop: '15px',
  marginBottom: '20px'
}

export const phoneStyle = {
  paddingLeft: 15,
  fontSize: 16,
  borderRadius: '4px',
  padding: '16.5px 14px',
  width: '100%',
  border: '1px solid rgba(0, 0, 0, 0.2)'
}

export const autoCompletePaperStyles = {
  padding: '10px 20px',
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
}

export const addBrand = {
  padding: '0',
  width: '100%',
  display: 'flex',
  flex: "1",
  height: '100%',
  alignItems: 'normal'
}

export const stepperButtonWrapper = {
  display: 'flex',
  justifyContent: 'flex-end',
  borderTop: `1px solid ${lightGray}`,
  padding: '16px 16px 0px 16px',
  gap: '10px'
}

export const logoBox = {
  width: '50px',
  height: '50px',
  borderRadius: '25px',
  border: `1px solid ${lightBorderColorTwo}`,
  marginTop: '25px',
  overflow: 'hidden',
  position: 'relative',

  '& img': {
    objectFit: 'cover'
  },

  '& .logoOverlay': {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: blackOne,
    opacity: '0',
    top: '0',
    transition: '0.3s',
    ...flexCenter,
  },

  '&:hover': {
    '& .logoOverlay': {
      opacity: '1'
    }
  }
}

export const brandImage = {
  height: '80px',
  maxWidth: '70%',
  marginBottom: "30px",
  borderRadius: "8px",
  objectFit: 'contain'
}

export const brandDummyImage = {
  height: '65px',
  marginBottom: '30px',
  borderRadius: '8px',
  objectFit: 'contain',
}

export const brandUploadImage = {
  height: '150px',
  maxWidth: '150px',
  borderRadius: "8px",
  objectFit: 'contain'
}

export const companyData = {
  marginRight: '10px',
  padding: '8px',
  border: `1px solid ${lightGray}`,
  backgroundColor: white,

  "& img": {
    objectFit: 'contain'
  }
}

export const customInputField = {
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: '400',
  letterSpacing: '0.15px',
  color: lightColorThree,
  border: '1px solid rgba(0, 0, 0, 0.23)',
  height: '59px',
  display: 'flex',
  alignItems: 'center',
  paddingX: '16px',
  marginTop: '8px',
  marginBottom: '4px',
}

export const sketchPicker = {
  position: 'absolute',
  right: '0',
  top: '64px',
  zIndex: '99999',
  boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',

  '& .sketch-picker': {
    boxShadow: 'none !important',
    borderRadius: 'none',
  }
}

export const brandImages = {
  textAlign: 'center',

  "& img": {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    top: '0',
    padding: '15px',
    ...flexCenter
  },

  '@media (max-width: 575px)': {
    marginTop: '1rem'
  }
}

export const widgetBoxWrapper = {
  padding: '20px 24px',
}

export const sketchPickerClose = {
  backgroundColor: white,
  padding: '10px',
  textAlign: 'center',
  cursor: 'pointer',
}

export const widgetImage = {
  height: '50px',
  width: '90px',

  [customTheme.breakpoints.down('sm')]: {
    width: '30%'
  }
}

export const stickyBottom = {
  position: 'sticky',
  bottom: '0',
  backgroundColor: white,
  zIndex: '9999',
  padding: '16px',

  [customTheme.breakpoints.down('md')]: {
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: '9'
  }
}

export const tabsSticky = {
  borderBottom: 1,
  borderColor: 'divider',
  position: 'sticky',
  top: '96px',
  backgroundColor: white,
  zIndex: '100',

  [customTheme.breakpoints.down('md')]: {
    position: 'relative',
    top: '0'
  }
}

export const uploadVideoDescription = {
  fontSize: '12px',
  color: lightColorThree,
  opacity: '0.6',
  width: '50%'
}

export const tabsWrapper = {
  marginTop: '1rem',
  width: '100%',
}

export const childVideoBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}

export const brandSettingsCustomLoader = {
  ...flexCenter,
}

export const deleteButton = {
  backgroundColor: white,
  borderRadius: '100%',

  '&:hover': {
    backgroundColor: white
  }
}

export const editButton = {
  backgroundColor: white,
  borderRadius: '100%',

  '&:hover': {
    backgroundColor: white
  }
}

export const UserThumbnail = {
  maxWidth: '100%',
  objectFit: 'contain',
  width: '100%',
  height: '100%'
}

export const emptyBox = {
  flexDirection: 'column',
  ...flexCenter
}

export const arrowBox = {
  backgroundColor: white,
  width: '26px',
  height: '26px',
  borderRadius: '13px',
  position: 'absolute',
  top: '45%',
  ...flexCenter,
}

export const videoThumbnail = {
  position: 'relative',
  width: 'calc(20% - 8px)',
  height: '86px',
  padding: '5px',
  borderRadius: '4px',
  display: 'flex',
}

export const videoIndexBox = {
  position: 'absolute',
  height: "16px",
  width: "16px",
  background: main,
  color: white,
  fontSize: 11,
  top: "5px",
  right: "5px",
  borderRadius: '50%',
  textAlign: 'center'
}

export const generalInformation = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px'
}

export const radioVideoThumbnail = {
  position: 'absolute',
  height: '100%',
  width: '100%', opacity: 0,
  top: 0,
  left: 0,
  margin: 0
}

export const blurText = {
  textShadow: '0 0 8px #000',
  color: 'transparent',
  userSelect: 'none',
}

export const backdropDialog = {
  position: 'fixed',
  top: '0',
  right: '0',
  left: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '9999'
}

export const btnAddMacro = {
  position: 'absolute',
  right: '5px',
  fontSize: '11px',
  p: '2px'
}

export const deleteButtonWidget = {
  position: 'absolute',
  top: '0',
  right: '5px',

  [customTheme.breakpoints.down('sm')]: { top: '19px' }
}

export const collapseScript = {
  position: 'relative',
  border: `1px solid ${lightGray}`,
  borderRadius: '6px',
  marginTop: '20px',
  background: lightGray,
  padding: '10px 20px'
}

export const widgetColorPosition = (backgroundColor: string) => {
  return {
    position: 'relative',
    top: '0',
    right: '0',
    backgroundColor: backgroundColor
  }
}

export const companyNameBanner = {
  backgroundColor: main,
  textAlign: "center",
  position: 'absolute',
  bottom: '-25px',
  left: '0',
  width: '100%',
}

export const mobileTabsWrapper = {
  height: '460px',
  marginTop: 2,

  [customTheme.breakpoints.down('sm')]: {
    height: '284px',
  },
}

export const stepperStep = {
  '.MuiStep-root:first-child': {
    paddingLeft: '0'
  }
}

export const carouselMainBox = {
  padding: 1,
  minHeight: "200px",
  display: 'flex',
  flexDirection: 'column',

  "& .CarousellImageBox": {
    [customTheme.breakpoints.down('sm')]: {
      height: '150px',
    },
  }
}

export const carouselThumbnailBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  "& .CarousellImageBox": {
    [customTheme.breakpoints.down('sm')]: {
      height: '50px',
    },
  }
}

export const videoIcon = {
  color: white,
  width: '30px',
  height: '30px',

  [customTheme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
}

export const jobsAction = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [customTheme.breakpoints.down('sm')]: { justifyContent: 'start', flexDirection: 'column', alignItems: 'start' }
}

export const filterJobs = {
  width: '130px',

  [customTheme.breakpoints.down('sm')]: { width: '100%' }
}

export const thumbnailCardWrapper = {
  width: '86px',
  height: '86px',
  marginX: 1.25,
  marginBottom: 1,

  [customTheme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
    marginX: .25,
  }
}

export const taskActionCreateButton = {
  padding: "8px 15px",
  textTransform: 'capitalize',

  [customTheme.breakpoints.down('sm')]: { width: '100%', marginTop: 1 }
}

export const hookVideoButtonWrapper = {
  marginX: 'auto',
  marginTop: '2rem',
  backgroundColor: pinkThree,
  ...flexCenter
}

export const portraitGalleryICons = {
  backgroundColor: white,
  height: '35px',
  width: '35px',
  boxShadow: '0px 0px 13px 0px rgb(0 0 0 / 20%);',
  ...flexCenter
}

export const radioButtonStyles = {
  position: 'absolute',
  top: '-20px',
  left: '0px',
  backgroundColor: white,
  zIndex: '9',

  '&:hover': {
    backgroundColor: white,
  }
}

export const mockButtonStyles = {
  border: `1px solid ${main}`,
  width: '100%',
  textTransform: 'none',
}

export const isPortraitStyle = {
  width: '60%',
  margin: '0 auto',
  height: '272px',
  objectFit: 'cover',
  display: 'block',
}

export const isPortraitMobileStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  display: 'block',
}

export const isLandscapeStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
}

export const isLandscapeMobileStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  display: 'block',
}

export const uploadHookVideoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [customTheme.breakpoints.down('sm')]: {
    alignItems: 'start',
    flexDirection: 'column',

    "& button": {
      width: '100%',
      marginTop: 1
    }
  }
}

export const ctaButtonStyle = {
  width: '30%',
  position: 'relative',
  marginLeft: '0',

  [customTheme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: '24px'
  }
}

export const pathWaysBannerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5rem',
  transform: 'scale(.6)',
  transformOrigin: 'center',

  [customTheme.breakpoints.down('sm')]: {
    transform: 'scale(.5)',
  }
}

export const bannerImageIdlePreview = {
  position: 'absolute',
  bottom: '32px',
  width: '100%',
  textAlign: 'center',
  left: '50%',
  zIndex: '9999',
  maxWidth: 'calc(100% - 270px)',
  transform: 'translate(-50%)',

  [customTheme.breakpoints.down(515)]: {
    transform: 'scale(0.5)',
    bottom: '26px'
  }
}

export const bannerImageFocusedPreview = {
  position: 'absolute',
  bottom: '-5px',
  width: '100%',
  textAlign: 'center',
  left: '0',
  zIndex: '9999',
  height: '30px',
  transform: 'scale(0.7)',

  [customTheme.breakpoints.down(515)]: {
    transform: 'scale(0.4)',
    bottom: '-15px',
    left: '-15px',
  }
}

export const idleLeftSlide = {
  height: '197px',
  minWidth: '350px',
  transform: 'scale(0.8)',
  overflow: 'hidden',
  marginLeft: '-280px',

  [customTheme.breakpoints.down(1200)]: {
    height: '169px',
    minWidth: '300px',
    marginLeft: '-233px',
  },

  [customTheme.breakpoints.down(515)]: {
    height: '84px',
    minWidth: '150px',
    marginLeft: '-87px',
  },
}

export const dashboardStickyColumn = {
  position: "sticky",
  right: 0,
  minWidth: '100px',
}

export const idleRightSlide = {
  height: '197px',
  minWidth: '350px',
  transform: 'scale(0.8)',
  overflow: 'hidden',
  marginRight: '-280px',

  [customTheme.breakpoints.down(1200)]: {
    height: '169px',
    minWidth: '300px',
  },

  [customTheme.breakpoints.down(515)]: {
    height: '84px',
    minWidth: '150px',
  },
}

export const idleSlideCentered = {
  height: '197px',
  minWidth: '350px',

  [customTheme.breakpoints.down(1200)]: {
    height: '169px',
    minWidth: '300px',
  },

  [customTheme.breakpoints.down(515)]: {
    height: '84px',
    minWidth: '150px',
  },
}

export const portraitMobileButtonStyle = {
  position: 'absolute',
  bottom: '70px',
  left: '38%',
  zIndex: '9',
}

export const sampleFileStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '16px',
  alignItems: 'center',
  padding: '15px',
  marginY: '20px',
  backgroundColor: lightBorderColor,
  border: `1px dashed ${lightFive}`,
  borderRadius: '4px'
}

export const videoShadowStyle = {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
  zIndex: 9
}

export const editorBox = {
  maxHeight: '250px',

  "& .draft-wrapper": {
    marginTop: '4px',
    marginBottom: '8px',

    '& .rdw-editor-toolbar': {
      marginBottom: '0px',
      borderBottom: '0px',

      "& .rdw-inline-wrapper": {
        "& .rdw-option-wrapper:not(:nth-child(-n+3))": {
          display: 'none',
        },
      },

      "& .rdw-list-wrapper": {
        "& .rdw-option-wrapper:not(:nth-child(-n+2))": {
          display: 'none',
        }
      },

      "& .rdw-colorpicker-wrapper , .rdw-embedded-wrapper, .rdw-emoji-wrapper , .rdw-image-wrapper , .rdw-remove-wrapper , .rdw-history-wrapper , .rdw-text-align-wrapper": {
        display: 'none'
      }
    },

    '& .rdw-editor-main': {
      "& .DraftEditor-root": {
        border: `1px solid ${editorBorder}`,
        backgroundColor: white,
        paddingX: '10px',
        position: 'relative',
        height: '125px',
        overflow: 'auto',

        "& .DraftEditor-editorContainer": {
          height: '80%',
        }
      }
    },

    '& .rdw-link-decorator-wrapper': {
      '& .rdw-link-decorator-icon': {
        left: '100%'
      }
    },

    '& .rdw-link-modal': {
      '& .rdw-link-modal-target-option': {
        marginBottom: '10px'
      }
    }

  }
}

export const taskOrders = {
  width: 350,
  maxWidth: '100%',

  [customTheme.breakpoints.down('sm')]: {
    width: '100%',
  }
}

export const selectBrand = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingY: '2rem',
  position: 'sticky',
  transition: 'top 0.3s linear, box-shadow 0.3s linear',

  [customTheme.breakpoints.down('sm')]:
    { flexDirection: 'column' }
}

export const testingApi = {
  "& code": {
    display: 'block',
    padding: '10px 20px',
  }
}

export const stickyHeadingEvents = {
  position: 'sticky',
  top: '145px',
  background: white,
  zIndex: '99'
}

export const apiKeyHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: 3,

  [customTheme.breakpoints.down(700)]: {
    flexDirection: 'column',
    alignItems: 'start',

    "& Button": {
      marginTop: '16px',
      width: '100%'
    }
  }
}

export const apiKeyHeading = {
  display: 'flex',
  alignItems: 'flex-end',

  [customTheme.breakpoints.down('sm')]: {
    alignItems: 'start',
    flexDirection: 'column'
  }
}

export const HookVideoHeadingWrapper = {
  position: 'absolute',
  top: 0,
  width: '100%',
  padding: 1,
  background: 'linear-gradient(180deg,rgba(0,0,0,.53),transparent)',
  zIndex: 999
}

export const PopoverStyle = {
  backgroundColor: 'black',
  color: 'white',
  maxWidth: '150px',
  padding: 1
}

export const LandscapeHookVideoWrapper = {
  width: '100%',
  height: '405px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const VideoLoaderImage = {
  position: 'absolute',
  top: '0',
  left: '0',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  zIndex: '10'
}

export const VideoLoaderOverlay = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '20',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.53) 0%, rgba(0, 0, 0, 0) 100%)'
}

export const TabsStyle = {
  borderBottom: 1,
  borderColor: 'divider'
}

export const BrandWrapper = {
  position: 'relative',
  zIndex: '9',
  transition: '0.3s',

  "&:hover": {
    transform: 'scale(1.05)',
    zIndex: '99',
    backgroundColor: '#FFFFFF'
  }
}

export const FocusBannerImage = {
  maxWidth: 'calc(100% - 26px)',
  transform: 'scale(0.9)',
  transformOrigin: 'bottom',
}

export const featureImageStyle = {
  marginTop: '6px',
  paddingRight: '20px',
  width: '30%',
  height: '100%',
  display: 'flex',

  "& img": {
    objectFit: 'contain !important'
  }
}

export const videoContentWrapper = {
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
  gap: '18px',
  marginBottom: '10px',
  flexWrap: 'wrap',
}

export const videoViewsCommentsActions = {
  display: 'flex',
  gap: '10px',
  alignItems: "center"
}

export const searchCardContent = {
  marginBottom: "10px",
  width: "100%",
  maxHeight: "calc(100vh - 310px)",
  overflow: "auto"
}

export const videoBoxContent = {
  borderRadius: '5px',
  overflow: 'hidden',
  objectFit: 'cover'
}

export const iconsBox = {
  position: "absolute",
  top: -15,
  right: "-25px",
  width: "auto",
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "6px",
  borderRadius: "30px",
  opacity: 0,
}

export const playCircleIcon = {
  color: "#FF5996",
  height: "24px",
  width: "24px",
  cursor: 'pointer'
}

export const iconButton = {
  marginLeft: "4px",
  backgroundColor: '#fff',
  '&:hover': {
    background: '#fff'
  }
}

export const addButton = {
  background: "#6A6A6A",
  color: "white",
  borderRadius: "5px",
  width: "75px",
  height: "40px",
  '&:hover': {
    background: '#6A6A6A'
  }
}

export const playerIconStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 10
}

export const transcriptGridStyle = {
  overflowY: 'auto',
  minHeight: '30vh',
  overflowX: 'hidden',
  pr: '25px',
  pt: '20px',

  '::-webkit-scrollbar': {
    width: '10px'
  },

  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px grey',
    borderRadius: '10px'
  },

  ':: -webkit-scrollbar-thumb': {
    background: purple1,
    borderRadius: '10px'
  }
}

export const skeletonStyleVideoList = {
  display: 'flex',
  gap: '10px',
  marginTop: 1,
  height: '25px',
}

export const hoveringBoxStyle = {
  pt: '24px',
  pb: '28px',
}

export const videoCommentChip = {
  display: 'flex',
  margin: "10px 0 0 10px",
  gap: '10px'
}

export const emailInputFieldParentBox = {
  maxWidth: 500,
  marginBottom: 2,
  display: 'flex',
  gap: "16px",
  alignItems: "flex-start"
}

export const emailInputFieldWrapper = {
  display: "flex",
  width: "calc(33.333333% - 20px)",
  alignItems: "center",
  gap: 0.2
}

export const emailEditSaveParentBox = {
  display: "flex",
  gap: "15px",
  alignItems: "center"
}

export const playCircleOutlineIconWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  justifyContent: "flex-start"
}

export const playCircleIconSearch = {
  ...playCircleOutlineIconWrapper,
  marginBottom: '15px',
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0,0,0,0.7)",
  borderRadius: "30px",
  width: "auto",
  padding: "0px 10px 0px 5px",
  right: 20
}

export const speakerDataSentenceTypography = {
  marginTop: '8px',
  fontSize: '16px',
  fontWeight: '400',
  color: "#2F2F2F"
}

export const overLayWrapper = {
  position: 'absolute',
  background: 'rgba(0, 0, 0, 0.1)',
  height: '100%',
  width: '100%',
  left: 0,
  top: 0,
  borderRadius: '5px',
  cursor: 'not-allowed',
  zIndex: 99,
}

export const videoDetailParentBox = {
  padding: '0 20px 12px 20px',
  backgroundColor: "white",
  marginTop: '10px'
}

export const emailInputFieldWrapperParentBox = {
  display: "flex",
  gap: "20px",
  flexWrap: 'wrap',
  paddingTop: 2
}

export const purpleLabelStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  color: 'purple1',
  padding: '10px 0px'
};

export const timeChipStyle = {
  marginBottom: '10px',
  borderRadius: "5px",
  marginLeft: '10px',
  display: 'inline',
  padding: '5px'
}

export const videoSearchSummaryCard = {
  border: "1px solid #E0E0E0",
  marginBottom: "10px",
  paddingBottom: '10px',
  position: "relative"
}

export const videoSearchSummaryBox = {
  display: "flex",
  flexDirection: "column",
  padding: "20px 0px 0px 20px",
  flex: "1"
}

export const videoListingImageBox = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '6px'
}

export const transcriptionParentBox = {
  display: 'flex',
  paddingBottom: '10px',
  alignItems: 'start',
  gap: '10px'
}

export const videoSearchMapperBox = {
  maxHeight: "200px",
  overflow: 'auto',
  maxWidth: "calc(100% - 20px)",
  marginTop: '10px',

  '::-webkit-scrollbar': {
    width: '10px'
  },

  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px grey',
    borderRadius: '10px'
  },

  ':: -webkit-scrollbar-thumb': {
    background: purple1,
    borderRadius: '10px'
  },
}

export const sentenceTypographyStyle = {
  margin: '5px',
  '&:hover': {
    color: 'purple'
  }
}

export const containerStyle = {
  position: 'absolute',
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '5px'
};

export const recordedVideoSkeleton = {
  width: '100%',
  height: '308px',
  transform: 'scale(1)',
  transformOrigin: 0
}

export const btnTableSummary = {
  px: '15px',
  py: '7px',
  borderRadius: '8px',
  color: black
}

export const btnView = {
  p: 0,
  color: '#3498DB',
  fontWeight: '600',
  textTransform: 'lowercase',
  fontSize: '16px'
}


export const avatarWrapper = {
  '& .css-c10psq-MuiAvatar-root-MuiAvatarGroup-avatar': {
    backgroundColor: lightBlueOne,
    color: main,
    fontSize: '14px'
  }
}

export const getChipColor = (role: string) => {
  const userRole = capitalize(role);

  if (userRole === 'Admin') {
    return {
      color: main,
      border: `1px solid ${main}`
    }
  } else if (userRole === 'Client') {
    return {
      color: palette.darkGray,
      border: `1px solid ${darkGray}`
    }
  }
}

export const fileCount = {
  backgroundColor: lightBlueOne,
  padding: '5px 10px',
  borderRadius: '5px',
  color: main, fontWeight: '700',
  fontSize: '18px'
}

export const promptBox = {
  border: '1px solid #E4E7EC',
  p: '16px',
  borderRadius: '8px',
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
}

export const parentPromptsWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '660px',
}

export const customControllerBox = {
  overflow: 'auto',
  maxHeight: 'calc(100vh - 530px)',

  '::-webkit-scrollbar': {
    width: '10px'
  },

  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px grey',
    borderRadius: '10px'
  },

  ':: -webkit-scrollbar-thumb': {
    background: main,
    borderRadius: '10px'
  },
}

export const wordPreviewBox = {
  backgroundColor: "white",
  p: '20px',
  borderRadius: '8px',
  boxShadow: `0px 0px 15px ${palette.lightSeven}`,
  mb: '15px',
  cursor: 'pointer'
}

export const lockedFieldIcon = {
  position: 'absolute',
  top: '50%',
  right: '22px',
  transform: 'translateY(-50%)'
}

export const fileIconBox = {
  maxWidth: "32px",
  mr: 1,
  "svg": {
    maxWidth: '100%',
    height: 'auto'
  }
}

export const summaryDetailFileStatus = (status: StatusType) => {
  switch (status) {
    case StatusType.Active:
      return {
        color: 'yellow',
        borderColor: 'yellow'
      }

    case StatusType.Completed:
      return {
        color: '#228b22',
        borderColor: '#228b22'
      }

    case StatusType.Failed:
      return {
        color: 'red',
        borderColor: 'red'
      }
    default:
      return {}
  }
}

export const dataPickerStyle = {
  "& .MuiStack-root": {
    "& .MuiTextField-root": {
      width: '100% !important'
    }
  }
}

export const anchorOrigin: PopoverOrigin = { vertical: "bottom", horizontal: "right" }
export const transformOrigin: PopoverOrigin = { vertical: "top", horizontal: "right" }