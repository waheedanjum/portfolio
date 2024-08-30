import { createTheme } from "@mui/material";

const Theme = createTheme({
  typography: {
    fontFamily: "Sora, sans-serif",
    allVariants: {
      color: "#ffffff",
    },
  },
  palette: {
    background: {
      default: "#0f0715",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#ffff", // Set the default icon color to white
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(21,49,112,1) 80%)", // Set your desired background color
        },
        // overflowX: "hidden",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // This will make the text case normal
        },
      },
    },
  },
});

export default Theme;
