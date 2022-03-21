import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthProvider from "../contexts/AuthContext";
// import { theme } from "../utils/theme";

import "../styles/globals.css";


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Component {...pageProps} />
          {/* </ThemeProvider> */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
