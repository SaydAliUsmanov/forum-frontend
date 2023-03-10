import App from 'app/App'
import ThemeProvider from 'app/provides/ThemeProvider/ui/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
