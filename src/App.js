import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './features/marvelCharacters/components/Footer'
import Header from './features/marvelCharacters/components/Header'
import MarvelCharacters from './features/marvelCharacters/pages'
import CharacterDetail from './features/marvelCharacters/pages/CharacterDetail'

const updatedTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#090909'
    },
    secondary: {
      main: '#ec1d24'
    }
  }
})
function App() {
  return (
    <>
      <ThemeProvider theme={updatedTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/detail/:id">
              <Header />
              <CharacterDetail />
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <MarvelCharacters />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
