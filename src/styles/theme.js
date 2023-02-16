import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    primaryGreen: {
      main: "#3aa648",
      contrastText: "#fff"
    },
    text:{
      primaryGreen: "#3aa648"
    }
  },
  typography: {
    allVariants: {
      fontFamily: "'Work Sans', sans-serif"
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:after": {
            borderColor: "#3aa648"
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#3aa648"
          }
        }
      }
    }
  }
});

export default theme;