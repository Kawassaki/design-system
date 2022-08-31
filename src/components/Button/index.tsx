import { ButtonContainer } from './styled'
import { ButtonProps } from './types.d'

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <>
      <ButtonContainer variant={variant}>{children}</ButtonContainer>
    </>
  )
}
