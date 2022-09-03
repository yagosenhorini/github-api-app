import { render } from '@testing-library/react';

import Button from '@Components/Button';
import { ThemeProvider } from 'styled-components';
import theme from '@Theme/index';

describe('Button component', () => {
  it('Should render the Button', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    );
    expect(component).toBeTruthy();
  });
});
