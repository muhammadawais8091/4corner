import { blueGrey } from "@mui/material/colors";
import palette from "../palette";
const { primary: { main: primaryColor }, lightGray, green, white, black, light, lightTen, lightBlack } = palette

export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        WebkitFontSmoothing: 'auto',
      },

      "*": {
        boxSizing: 'border-box',
      },

      "a:active": {
        textDecoration: 'none'
      },

      'a': {
        textDecoration: 'none',
        color: primaryColor
      },

      body: {
        backgroundColor: '#F8F8F9',

        "& .MuiMenu-paper": {
          maxHeight: '180px'
        },

        "& .SnackbarContainer-root": {
          zIndex: '99999999 !important',
        },

        "& .SnackbarItem-wrappedRoot": {
          top: '80px !important'
        },

        "& .SnackbarItem-message": {
          letterSpacing: 0
        },

        "& img": {
          maxWidth: '100%'
        },

        "& .videoContentCard": {
          "& img": {
            transition: 'all .3s ease',
            position: 'absolute',
            top: 0,
            left: 0
          },

          "& .gifImage": {
            opacity: 0
          },

          "&:hover": {
            "& .jpgImage": {
              opacity: 0
            },

            "& .gifImage": {
              opacity: 1
            },

            "& .playerIcon": {
              opacity: 0
            }
          },
        },
      },
    },
  },

  MuiPopover: {
    styleOverrides: {
      root: {
        zIndex: '99999'
      }
    }
  },

  MuiAutocomplete: {
    styleOverrides: {
      popper: {
        zIndex: '999999',

        "& ul": {
          maxHeight: "10rem",
          paddingTop: '8px',
          paddingBottom: '8px',
          border: `1px solid ${lightGray}`
        }
      }
    }
  },

  MuiChip: {
    styleOverrides: {
      colorSuccess: {
        color: green,
        borderColor: green
      },
    }
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        fontSize: '16px',
        fontWeight: '400',
        letterSpacing: '0.15px',
        color: 'rgba(0, 0, 0, 0.87)',

        "&:hover": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },

        },

        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: '1px',
            borderColor: primaryColor,
          }
        },

        '&.Mui-disabled': {
          opacity: 0.5,
        }
      },

      notchedOutline: {
        // borderColor: steelFog,
      }
    }
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        "&:before": {
          borderBottom: '0 !important',
        },
      }
    }
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '0.15px',
        color: 'rgba(0, 0, 0, 0.54)'
      }
    },
  },

  MuiTableCell: {
    styleOverrides: {
      head: {
        backgroundColor: blueGrey[50],
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        padding: '10px 24px',
        borderRadius: '4px',
        textTransform: "capitalize" as const
      },

      containedSecondary: {
        color: white
      }
    }
  },

  MuiTabs: {
    styleOverrides: {
      root: {
        '& .MuiTab-root': {
          fontSize: '14px',
          fontWeight: '500',
          color: '#635C72'
        },
        '& .Mui-selected': {
          color: primaryColor
        }
      }
    }
  },

  MuiPagination: {
    styleOverrides: {
      root: {
        '& .MuiPaginationItem-page': {
          backgroundColor: white,
          color: black,
          border: `1px solid ${light}`,
          transition: '0.3s',
          "&:hover": {
            border: `1px solid ${primaryColor}`,
            backgroundColor: lightTen,
            color: primaryColor,
          }
        },
        '& .MuiPaginationItem-page.Mui-selected': {
          border: `1px solid ${primaryColor}`,
          backgroundColor: lightTen,
          color: primaryColor,
          "&:hover": {
            backgroundColor: 'transparent',
            border: `1px solid ${primaryColor}`,
          }
        }
      }
    }
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      }
    }
  },

  MuiTable: {
    styleOverrides: {
      root: {
        fontSize: '14px',
        boxShadow: 'none',

        th: {
          fontWeight: '600',
          borderBottom: '0.5px solid rgba(0, 0, 0, 0.12)'
        },

        td: {
          fontWeight: '400',
        }
      }
    }
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        fontSize: '16px',
      }
    }
  },

  MuiList: {
    styleOverrides: {
      root: {
        border: '1px solid rgba(0, 0, 0, 0.12)'
      }
    }
  },


  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: white,
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.07)',
        borderBottom: 'transparent',
        borderWidth: '1px',
        "&.Mui-focused": {
          borderBottom: primaryColor,
        }
      }
    }
  },

  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        '& .MuiFormControlLabel-label': {
          width: '100%',
        }
      }
    }
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: '12px',
        marginLeft: '0',
      }
    }
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        color: lightBlack,
        borderBottom: '2px solid transparent',
        fontSize: '14px',
        fontWeight: '500',
        "&:hover": {
          backgroundColor: 'transparent',
          "&:after": {
            content: '""',
            borderBottom: `2px solid ${primaryColor}`,
            position: 'absolute',
            height: '2px',
            width: '100%',
            bottom: '-10px',
            left: '0',
          }
        },
        '&.Mui-selected': {
          backgroundColor: 'transparent',
          fontWeight: '600',
          color: primaryColor,
          "&::after": {
            content: '""',
            borderBottom: `2px solid ${primaryColor}`,
            position: 'absolute',
            height: '2px',
            width: '100%',
            bottom: '-10px',
            left: '0',
          },
          "&:hover": {
            backgroundColor: 'transparent',
          },
        }
      }
    }
  },
}
