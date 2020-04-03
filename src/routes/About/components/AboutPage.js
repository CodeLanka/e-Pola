import React from 'react'
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import { ACCOUNT_PATH, NEEDS_PATH } from 'constants/paths'
import styles from './AboutPage.styles'
import Image from 'material-ui-image'
// import Card from '@material-ui/core/Card'
// import CardMedia from '@material-ui/core/CardMedia'
// import CardContent from '@material-ui/core/CardContent'

// const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

const useStyles = makeStyles(styles)

function About() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.welcome}>
        <Typography variant="h4" gutterBottom className={classes.aboutTitle}>
          About Give<strong className={classes.strong}>ME</strong>.lk
        </Typography>
      </div>
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item xs={12} sm={6} className={classes.leftSide}>
          <Image
            src="/img/logo.svg"
            imageStyle={{
              width: '300px',
              height: 'auto',
              position: 'relative'
            }}
            style={{
              padding: '0',
              width: '100%',
              textAlign: 'center',
              marginBottom: '0.5rem',
              flexDirection: 'column'
            }}
          />
          <Typography variant="subtitle2" gutterBottom>
            By CodeLanka
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rightSide}>
          <Typography variant="h4" gutterBottom classNAME={classes.welcome}>
            Who we are
          </Typography>
          <Typography varient="subtitle3" className={classes.aboutText}>
            GDG Sri Lanka is a community of tech enthusiasts who are interested
            in Google Developer Technologies and technical advancements in the
            world. GDG’s are independent groups that are supported by Google but
            not part of it.We are a non-profit entity which strive for
            improvement of the tech education of the local developers. We engage
            in several events and programs to enrich the local developers with
            global knowledge.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
