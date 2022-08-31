import { ReactNode } from 'react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'neutral'

export interface ButtonProps {
  variant?: ButtonVariant
  children?: ReactNode
}

export interface ButtonContainerProps {
  variant: ButtonVariant
}
