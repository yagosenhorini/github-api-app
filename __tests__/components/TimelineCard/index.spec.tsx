import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import TimelineCard from '@Components/TimelineCard';

import theme from '@Theme/index';

describe('<TimelineCard />', () => {
  it('should render the component', async () => {
    const owner = {
      login: 'yagosenhorini',
    };

    const createdDate = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    const updatedDate = new Date(Date.UTC(2020, 12, 20, 3, 23, 16, 738));

    const component = render(
      <ThemeProvider theme={theme}>
        <TimelineCard
          owner={owner}
          html_url="https://github.com/yagosenhorini"
          created_at={createdDate}
          updated_at={updatedDate}
          name="Yago"
        />
      </ThemeProvider>
    );
    expect(component).toBeDefined();
  });
});
