import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { themeOptions } from './configs/mui/theme'
import './index.css'

const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Button>This button has disabled ripples.</Button>
      <Typography color="text.primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla mollitia omnis adipisci magnam vel doloribus quas expedita fugit, consequuntur ipsa quae ex corporis voluptas laborum exercitationem ea voluptatum! Quidem.</Typography>
    </ThemeProvider>
  </React.StrictMode>,
)
