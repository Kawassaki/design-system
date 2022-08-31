export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'neutral';

export interface ButtonProps {
  variant?: ButtonVariant;
}

export interface ButtonContainerProps {
  variant: ButtonVariant;
}
