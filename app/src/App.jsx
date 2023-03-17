import MainContainer from './components/MainContainer'
import GlobalStyles from './components/styles/GloblaStyles'
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    // ### Primary

    red: 'hsl(1, 90%, 64%)',
    blue: 'hsl(219, 85%, 26%)',

    //### Neutral

    white: 'hsl(0, 0%, 100%)',
    veryLightGrayishBlue: ' hsl(210, 60%, 98%)',
    lightGrayishBlueOne: 'hsl(211, 68%, 94%)',
    lightGrayishBlueTwo: 'hsl(205, 33%, 90%)',
    grayishBlue: 'hsl(219, 14%, 63%)',
    darkGrayishBlue: 'hsl(219, 12%, 42%)',
    veryDarkBlue: 'hsl(224, 21%, 14%)'
  },

  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainContainer />
      </>
    </ThemeProvider>
  )
}

export default App



// - Mobile: 375px
// - Desktop: 1440px


