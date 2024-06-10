import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/header'
import { Container } from '../../components/Container/container'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from '../../styles/themes/default'
import { GlobalStyles } from '../../styles/global'

export function PageBase() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Container>
        <Header />
        <Outlet />
      </Container>

      <GlobalStyles />
    </ThemeProvider>
  )
}
