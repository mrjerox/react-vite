import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { themeOptions } from './configs/mui/theme'
import './index.css'

const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Button>This button has disabled ripples.</Button>
    </ThemeProvider>
  </React.StrictMode>,
)
