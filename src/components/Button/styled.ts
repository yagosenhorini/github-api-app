import { rem } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.15s;
  width: ${rem(140)};
  height: ${rem(45)};
  border-radius: ${rem(20)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGray};
`;
