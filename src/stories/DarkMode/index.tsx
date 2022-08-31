import { usePersistedState } from '../../hooks/usePersistedState'
import { dark, light } from '../../styles/themes'
import { Container, PageContainer, SwitchSection } from './index.styled'
import Switch from 'react-switch'
import { ThemeProvider } from 'styled-components'
import icons from '../../components/Icons'

export function DarkMode() {
  const [theme, setTheme] = usePersistedState('theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Container>
          <h1>Header</h1>

          <SwitchSection>
            <icons.MdLightMode />
            <Switch
              onChange={toggleTheme}
              checked={theme.title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={theme.colors.neutral}
              onColor={theme.colors.neutral}
            />
            <icons.MdDarkMode />
          </SwitchSection>
        </Container>
      </PageContainer>
    </ThemeProvider>
  )
}
