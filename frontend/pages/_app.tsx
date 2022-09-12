import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import type { AppProps } from "next/app";

import Script from "next/script";
import Head from "next/head";
import Router from "next/router";

import { trackPage } from "@analytics/tracking";

import theme from "@styles/theme";
import "@styles/global.scss";

export default function App(props: AppProps): React.ReactNode {
  const { Component, pageProps } = props;

  // Workaround for not all NextJS pages firing pageview events because of NextJS link
  React.useEffect(() => {
    const handleRouteChange = () => {
      // Using NextJS link doesn't autopopulate the referrer property
      trackPage({ referrer: window.location.href });
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Muzzomo</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <meta
          content="maximum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta charSet="utf-8" />
      </Head>

      <Script
        dangerouslySetInnerHTML={{
          __html: `
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="K6Zc14raZRwvI6lrIWJzj5sIJTJxCYAF";;analytics.SNIPPET_VERSION="4.15.3";
        analytics.load("K6Zc14raZRwvI6lrIWJzj5sIJTJxCYAF");
        analytics.page();
        }}();
        `,
        }}
        id="segmentScript"
      />
      <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-TMQ57RB" />

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
