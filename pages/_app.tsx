import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@Theme/GlobalStyle';
import { GithubProvider } from '@Contexts/GithubContext';

import theme from '@Theme/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GithubProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </GithubProvider>
  );
}

export default MyApp;
