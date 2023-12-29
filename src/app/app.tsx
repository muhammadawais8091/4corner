// packages block
import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
// components block
import { CloseButton, SnackbarUtilsConfiguration } from "./components/common/Alert";
// others
import { client } from "./apollo";
import { AuthContextProvider } from "./context";
import { AppContextProvider } from "./context/AppContext";
import { MainRoutes } from "./routes";
import { customTheme } from "./theme";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export const App = () => (
  <SnackbarProvider
    maxSnack={5} autoHideDuration={5000} action={key => <CloseButton id={key} />}
    preventDuplicate={true} anchorOrigin={{ vertical: "top", horizontal: "right" }}
    classes={{ containerRoot: 'snackbarProvider' }}
  >
    <SnackbarUtilsConfiguration />

    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <ApolloProvider client={client}>
        <AuthContextProvider>
          <AppContextProvider>
            <MainRoutes />
          </AppContextProvider>
        </AuthContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  </SnackbarProvider>
)