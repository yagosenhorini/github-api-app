import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Header from '@Containers/Header';

import theme from '@Theme/index';

describe('Header component', () => {
  it('should render the Header component', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(component).toBeTruthy();
  });
});
