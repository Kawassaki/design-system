import { ButtonContainer } from "./styled";
import { ButtonProps } from "./types.d";

export function Button({ variant = "primary" }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={variant} />
    </>
  );
}
