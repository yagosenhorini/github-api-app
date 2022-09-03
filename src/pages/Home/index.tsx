import React from 'react';

import SearchContainer from './components/SearchContainer';
import Timeline from './components/Timeline';

import * as S from './styled';

const HomePage = () => (
  <S.HomeWrapper>
    <SearchContainer />
    <Timeline />
  </S.HomeWrapper>
);

export default HomePage;
