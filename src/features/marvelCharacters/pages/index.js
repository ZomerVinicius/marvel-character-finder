import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import CharacterCard from '../components/CharacterCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'

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

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: theme.spacing(4)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Index() {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider theme={updatedTheme}>
        <CssBaseline />
        <Header />
        <main>
          <Container className={classes.cardGrid} maxWidth="xl">
            <SearchBox />
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <CharacterCard card={card} />
              ))}
            </Grid>
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
