import React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should fill the input with a valid username to mount the timeline', async () => {
    const { findByTestId } = render(componentToRender);

    const $input = await findByTestId('digitable-term');
    const $button = await findByTestId('submit-button');

    await act(async () => {
      await userEvent.type($input, 'yagosenhorini');
      await userEvent.click($button);
    });

    await waitFor(async () => {
      const $timelineSection = findByTestId('timeline-section');
      expect($timelineSection).toBeDefined();
    });
  });
});
