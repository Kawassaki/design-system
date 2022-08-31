import { colors } from "../../styles/themes/colors";
import { Container, ColorSpan, ColorPaletteSection } from "./index.styled";

export function Palette() {
  const paletteDictionary = Object.entries(colors).reduce((acc, current) => {
    const [colorName, hex] = current;
    const [colorPrefix] = colorName.split("-");

    if (!acc[colorPrefix]) acc[colorPrefix] = [];
    acc[colorPrefix].push({ hex, colorName });

    return acc;
  }, {} as { [key: string]: { hex: string; colorName: string }[] });

  return (
    <Container>
      {Object.entries(paletteDictionary).map(([colorKey, hexList]) => {
        return (
          <ColorPaletteSection>
            {hexList.map(({ hex, colorName }) => {
              const [, colorOverlay] = colorName.split("-");
              const colorText =
                Number(colorOverlay) >= 600
                  ? colors["gray-50"]
                  : colors["gray-900"];
              return (
                <ColorSpan color={hex} textColor={colorText}>
                  {colorName}: <b>{hex.toUpperCase()}</b>
                </ColorSpan>
              );
            })}
          </ColorPaletteSection>
        );
      })}
    </Container>
  );
}
