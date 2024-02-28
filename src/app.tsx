import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globals"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <h1>Coffee Delivery</h1>
    </ThemeProvider>
  )
}

export default App