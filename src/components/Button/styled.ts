import styled, { css } from "styled-components";
import { ButtonContainerProps } from "./types";

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, variant }) =>
    css`
    width: 100px;
    height: 40px;
    background-color: ${theme.colors[variant]};
    color: ${theme.colors.text};
  `}
`;