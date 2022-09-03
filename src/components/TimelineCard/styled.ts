import styled from 'styled-components';

import { rem } from 'polished';

export const TimelineCardWrapper = styled.div`
  display: flex;
  position: relative;
  width: ${rem(300)};
  height: ${rem(200)};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: ${rem(10)};
  margin: ${rem(20)} auto ${rem(40)};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TimelineCardName = styled.h2`
  text-align: center;
  margin: ${rem(10)} 0;
  font-size: ${rem(24)};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const TimelineCardOwner = styled.h3`
  margin: ${rem(10)} 0;
  font-size: ${rem(16)};
  color: ${({ theme }) => theme.colors.black};
`;

export const TimelineCardLink = styled.p`
  text-align: center;
  font-size: ${rem(12)};
  margin-bottom: ${rem(10)};
  color: ${({ theme }) => theme.colors.darkRed};
`;

export const TimelineCreatedDate = styled.span`
  font-size: ${rem(16)};
  color: ${({ theme }) => theme.colors.darkGray};
`;
