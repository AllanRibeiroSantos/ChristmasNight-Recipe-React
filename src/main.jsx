import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { botaoTemaClaro, fonteTemaClaro, fundoTemaClaro } from './assets/Theme'
import { GlobalStyle } from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={
      {
        botaoTemaClaro,
        fonteTemaClaro,
        fundoTemaClaro
      }
    }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
