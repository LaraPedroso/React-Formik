import { HomePage } from 'page/Home'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'global/styles/theme/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
