import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    font-family: 'Roboto';
  `}
`
export const PageContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 1080px;
    height: 100vh;
    background-color: ${theme.colors.background};
  `}
`

export const SwitchSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`
