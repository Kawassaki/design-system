import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  max-width: 1680px;
  align-items: center;
  margin: 0 auto;

`

export const SpacingSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.neutral};
    margin: 1rem 0;
    padding: 1rem;
  `}
`;

export const SpacingSpan = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    padding: 2rem;
    margin: 2rem;
    /* border: 1px solid ${theme.colors.informative}; */
    width: 300px;
  `}
`;

export const SapcingRepresentation = styled.div`
  ${({ theme, spacing }: { theme: DefaultTheme, spacing: string }) => css`
    padding: ${spacing};
    background-color: ${theme.colors.primary};
    width: 100%;
  `}
`;