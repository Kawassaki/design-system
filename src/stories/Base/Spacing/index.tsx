import { ThemeProvider } from "styled-components";
import { baseSpacingTokens } from "../../../styles/baseTokens";
import { light } from "../../../styles/themes";
import {
  Container,
  SpacingSection,
  SpacingSpan,
  SapcingRepresentation,
} from "./index.styled";

export function Spacing() {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <h1>Spacing</h1>
        {Object.entries(baseSpacingTokens).map(([baseSpacingKey, spacing]) => {
          return (
            <SpacingSection key={baseSpacingKey}>
              <SpacingSpan>${baseSpacingKey}</SpacingSpan>
              <SpacingSpan>{spacing.toString()}</SpacingSpan>
              <SapcingRepresentation spacing={spacing} />
            </SpacingSection>
          );
        })}
      </Container>
    </ThemeProvider>
  );
}
