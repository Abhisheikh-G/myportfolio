import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Header from "../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import OfflineSupport from "../components/OfflineSupport/OfflineSupport";
import "fontsource-roboto";
import StickyFooter from "../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "inherit",
    minHeight: "100vh",
    position: "relative",
  },
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Abhisheikh Gill | Portfolio</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Hi, my name is Abhisheikh Gill. I am a full-stack web developer living in NJ, USA. I make applications use React.js, Node.js, Next.js, Gatsby.js, MongoDB, and PostgreSQL."
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="portfolio" />
        <meta name="apple-mobile-web-app-title" content="portfolio" />
        <meta name="msapplication-navbutton-color" content="#ffea00" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="png" sizes="192x192" href="homescreen.png" />
        <link
          rel="apple-touch-icon"
          type="png"
          sizes="192x192"
          href="homescreen.png"
        />
        <meta name="theme-color" content={theme.palette.secondary.main} />
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abhisheikh Gill | Portfolio" />
        <meta
          property="og:description"
          content="Hi, my name is Abhisheikh Gill. I am a full-stack web developer living in NJ, USA. I make applications use React.js, Node.js, Next.js, Gatsby.js, MongoDB, and PostgreSQL."
        />
        <meta property="og:site_name" content="Abhisheikh Gill | Portfolio" />
        <meta property="og:url" content="https://abhisheikhgill.com" />
        <meta
          property="og:image"
          content="https://abhisheikhgill.com/homescreen.png"
        />
        <meta
          property="twitter:image"
          content="https://abhisheikhgill.com/homescreen.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <OfflineSupport />
        <Box className={classes.root}>
          <Component {...pageProps} />
        </Box>
        <StickyFooter />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
