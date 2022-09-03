import styled from 'styled-components';
import { rem } from 'polished';

export const SearchContainerWrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: ${rem(30)} 0;
  flex-direction: column;
  max-width: ${rem(300)};
  border-radius: ${rem(10)};
  justify-content: space-between;

  /** */
  ${({ theme }) => theme.mq.greaterThan('sm')`
    max-width: ${rem(600)};
  `}
`;

export const SubmitButtonWrapper = styled.div`
  margin: ${rem(10)} 0;
`;

export const ErrorMessage = styled.p`
  margin: ${rem(10)} 0;
  font-weight: 600;
  font-size: ${rem(16)};
  color: ${({ theme }) => theme.colors.darkRed};
`;
