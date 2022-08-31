import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  max-width: 1680px;
  max-height: 100vh;
  align-items: center;
  margin: 0 auto;
`

export const ColorSpan = styled.span`
  ${({ color, textColor }: { color: string; textColor: string }) => css`
    display: block;
    padding: 2rem;
    background-color: ${color};
    color: ${textColor};
    font-family: 'Roboto', sans-serif;
    width: 13rem;
  `}
`

export const ColorPaletteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`
