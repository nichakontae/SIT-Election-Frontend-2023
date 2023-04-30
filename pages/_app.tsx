import "../styles/globals.css";
import { createTheme,ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: { main: "#326295", light: "#4698CA" },
      secondary: { main: "#919388" },
      error: { main: "#FF5B5B" },
      success: { main: "#68DB40" },
    },
    typography: {
      fontFamily: 'Mitr'
    }
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAMOSIT-Election</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
