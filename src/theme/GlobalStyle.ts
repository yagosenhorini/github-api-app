import { rem } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: ${rem(0)};
    padding: ${rem(0)};
    box-sizing: border-box;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.fontPrimary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
