import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { ACCOUNT_PATH, NEEDS_PATH } from 'constants/paths'
import styles from './HomePage.styles'

const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

const useStyles = makeStyles(styles)

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3" gutterBottom>
        e-Pola
      </Typography>
      <Paper>
        <Grid container justify="center">
          <Grid item xs className={classes.section}>
            <Typography variant="h6" gutterBottom>
              Welcome to the e-Pola!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              You can Log In and start adding your basic needs in this distressing times.
            </Typography>
            <ol>
              <li>
                Log In first
              </li>
              <li>
                You can add your needs
              </li>
              <li>
                Your needs will be visible to our autorized vendors
              </li>
              <li>
                They will come and fulfill your needs
              </li>
            </ol>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Home
