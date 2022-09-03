import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Home from '@Pages/Home';
import theme from '@Theme/index';

import { GithubProvider } from '@Contexts/GithubContext';

describe('<Home />', () => {
  const componentToRender = (
    <GithubProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </GithubProvider>
  );

  it('should render the page', () => {
    const component = render(componentToRender);
    expect(component).toBeDefined();
  });
});
