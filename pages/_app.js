// Styled Components
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// Global Style
//Theme
const theme = {
  colors: {
    primary: '#e8e8e4',
    secondary: '#738290',
    basic: '#272822',
  },
  font: {
    primary: `'Poppins', sans-serif`,
    secondary: `'Josefin Slab', serif`,
  },
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;700;900&display=swap');
  }
  @font-face {
    font-family: 'Josefin Slab', serif;
    src: url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@200;300;700&display=swap');
  }

  body {
    font-family: ${theme.font.primary};
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.primary};
    box-sizing: border-box;
    color: ${theme.colors.basic};
  }
`

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
