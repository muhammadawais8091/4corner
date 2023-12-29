import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status: {
      danger: CSSProperties["color"];
    };
  }
}

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    black: string;
    green: string;
    red: string;
  }
} 
