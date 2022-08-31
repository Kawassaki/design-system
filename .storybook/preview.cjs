export const parameters = {
  options: {
    storySort: {
      order: ['Design System', ['Palette', 'DarkMode'], 'Components', ['Button']],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}