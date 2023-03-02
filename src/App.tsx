import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from '~/styles/global'
import { theme } from '~/styles/theme'
import { Router } from './Router'
import { PostsProvider } from '~/contexts/PostsContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PostsProvider>
          <Router />

          <GlobalStyle />
        </PostsProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
