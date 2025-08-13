import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFBFF",
    },
    secondary: {
      main: "#68099E",
    },
    tertiary: {
      main: "#2A3D40",
    },
  },
  typography: {
    fontFamily: '"DynaPuff", system-ui',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "20px",
          "&.Mui-disabled": {
            backgroundColor: "transparent",
            color: "#999999",
          },
        },
      },
    },
  },
});

export default theme;
