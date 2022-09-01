import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Home from '@Pages/Home';

import { GlobalTheme } from '@Theme/GlobalTheme';
import { GithubProvider } from '@Contexts/GithubContext';

describe('<Home />', () => {
  const componentToRender = (
    <GithubProvider>
      <ThemeProvider theme={GlobalTheme}>
        <Home />
      </ThemeProvider>
    </GithubProvider>
  );

  it('should render the page', () => {
    const component = render(componentToRender);
    expect(component).toBeDefined();
  });
});
