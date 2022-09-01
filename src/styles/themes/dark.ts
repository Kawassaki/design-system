import {
  themeBreakpointTokens,
  themeColorTokens,
  themeSpacingTokens,
} from '../themeTokens'

export const dark = {
  title: 'dark',
  breakpoints: {
    ...themeBreakpointTokens,
  },
  space: {
    ...themeSpacingTokens,
  },
  colors: {
    primary: themeColorTokens['color-primary-stronger'],
    accent: themeColorTokens['color-accent-stronger'],
    informative: themeColorTokens['color-informative-stronger'],
    alert: themeColorTokens['color-alert-stronger'],
    notice: themeColorTokens['color-notice-stronger'],
    success: themeColorTokens['color-success-stronger'],
    neutral: themeColorTokens['color-neutral-stronger'],
    background: themeColorTokens['color-neutral-stronger'],
    text: themeColorTokens['color-neutral-softest'],
  },
}
