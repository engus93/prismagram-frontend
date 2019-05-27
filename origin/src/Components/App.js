import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";

export default () => (
  <ThemeProvider theme={Theme}>
    {/* div랑 같은 뜻 */}
    <>
      <GlobalStyles />
      <AppRouter isLoggedIn={false} />
    </>
  </ThemeProvider>
);
