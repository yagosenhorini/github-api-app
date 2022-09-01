import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Footer from '@Containers/Footer';
import Header from '@Containers/Header';

import { GlobalStyle } from '@Theme/GlobalStyle';
import { GlobalTheme as theme } from '@Theme/GlobalTheme';
import { GithubProvider } from '@Contexts/GithubContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GithubProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </GithubProvider>
  );
}

export default MyApp;
