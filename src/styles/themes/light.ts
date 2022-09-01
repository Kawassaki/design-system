import {
  themeBreakpointTokens,
  themeColorTokens,
  themeSpacingTokens,
} from '../themeTokens'

export const light = {
  title: 'light',
  breakpoints: {
    ...themeBreakpointTokens,
  },
  space: {
    ...themeSpacingTokens,
  },
  colors: {
    primary: themeColorTokens['color-primary-softer'],
    accent: themeColorTokens['color-accent-softer'],
    informative: themeColorTokens['color-informative-softer'],
    alert: themeColorTokens['color-alert-softer'],
    notice: themeColorTokens['color-notice-softer'],
    success: themeColorTokens['color-success-softer'],
    neutral: themeColorTokens['color-neutral-softer'],
    background: themeColorTokens['color-neutral-softer'],
    text: themeColorTokens['color-neutral-stronger'],
  },
}
