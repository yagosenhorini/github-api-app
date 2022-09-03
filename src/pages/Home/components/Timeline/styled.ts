import styled from 'styled-components';

import { rem } from 'polished';

export const LoadingMessage = styled.p`
  font-size: ${rem(24)};
  margin: ${rem(20)} auto;
  color: ${({ theme }) => theme.colors.black};
`;

export const TimelineWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  position: relative;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  &:before {
    content: '';
    top: 0;
    width: 4px;
    height: 100%;
    left: ${rem(500)};
    position: absolute;
    background: ${({ theme }) => theme.colors.timelineColumnColor};
  }
`;

export const TimelineIconWrapper = styled.div`
  top: ${rem(130)};
  right: ${rem(200)};
  width: ${rem(30)};
  height: ${rem(30)};
  border-radius: 50%;
  text-align: center;
  position: relative;
  font-size: ${rem(32)};
  background: ${({ theme }) => theme.colors.timelineIcon};
`;
