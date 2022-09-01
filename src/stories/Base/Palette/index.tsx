import { baseColorTokens as colors } from "../../../styles/baseTokens";
import { Container, ColorSpan, ColorPaletteSection } from "./index.styled";

export function Palette() {
  const paletteDictionary = Object.entries(colors).reduce((acc, current) => {
    const [colorName, hex] = current;
    const colorNameSplited = colorName.split("-");

    const colorPrefix =
      colorNameSplited.length >= 3
        ? `${colorNameSplited[0]}-${colorNameSplited[1]}`
        : colorNameSplited[0];

    if (!acc[colorPrefix]) acc[colorPrefix] = [];
    acc[colorPrefix].push({ hex, colorName });

    return acc;
  }, {} as { [key: string]: { hex: string; colorName: string }[] });

  return (
    <Container>
      {Object.entries(paletteDictionary).map(([colorKey, hexList]) => {
        return (
          <ColorPaletteSection key={colorKey}>
            {hexList.map(({ hex, colorName }) => {
              const colorNameSplited = colorName.split("-");
              const colorText =
                Number(colorNameSplited[colorNameSplited.length - 1]) >= 600
                  ? colors["gray-50"]
                  : colors["gray-900"];
              return (
                <ColorSpan key={hex} color={hex} textColor={colorText}>
                  ${colorName}: <b>{hex.toUpperCase()}</b>
                </ColorSpan>
              );
            })}
          </ColorPaletteSection>
        );
      })}
    </Container>
  );
}
