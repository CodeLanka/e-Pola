import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styles from './AboutPage.styles'
import Image from 'material-ui-image'
import Button from '@material-ui/core/Button'

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
            src="/img/logo.png"
            imageStyle={{
              width: '250px',
              height: 'auto',
              position: 'relative'
            }}
            style={{
              padding: '0',
              width: '100%',
              textAlign: 'center',
              marginBottom: '0.25rem',
              flexDirection: 'column'
            }}
          />
          <Typography variant="subtitle2" gutterBottom>
            By{' '}
            <a className={classes.linkPrimary} href="https://codelanka.org">
              CodeLanka
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rightSide}>
          <Typography variant="h4" gutterBottom classNAME={classes.welcome}>
            What is Give<strong className={classes.strong}>ME</strong>.lk?
          </Typography>
          <Typography varient="subtitle3" className={classes.aboutText}>
            Give<strong className={classes.strong}>ME</strong>.lk is a platform
            aimed at connecting people with wholesale and retail businesses
            during the SARS-CoV-2 breakout's social distancing period.
            <br />
            Our goal is to tell the sellers where the requirement exists for
            their produce to make the home delivery more efficient for them and
            more effective for people who are expecting goods and services.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.leftSide} />
        <Grid item xs={12} sm={6} className={classes.rightSide}>
          <Typography variant="h4" gutterBottom classNAME={classes.welcome}>
            Who is involved?
          </Typography>
          <Typography varient="subtitle3" className={classes.aboutText}>
            This is an idea by the co-founders of{' '}
            <a
              href="http://siyomek.com"
              target="_blank"
              rel="noopener noreferrer">
              Siyomek
            </a>
            , Harshadewa Ariyasinghe and Keshan Sodimana. <br />
            The project is run as an open-sourced{' '}
            <a
              href="https://github.com/codelanka/e-pola"
              target="_blank"
              rel="noopener noreferrer">
              project
            </a>
            &nbsp;by CodeLanka. Codelanka is an initiative by GDG Sri Lanka to
            code things that make sense to the public, irrespective of the
            existence of a financial gain.
          </Typography>
          <div className={classes.btnDiv}>
            <Button
              href="http://codelanka.org"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.infoButton}>
              Read about CodeLanka
            </Button>
          </div>
        </Grid>
      </Grid>
      <div className={classes.welcome}>
        <Typography variant="h4" gutterBottom className={classes.aboutTitle}>
          Attributions
        </Typography>
      </div>
      <div className={classes.partners}>
        <div className={classes.partnerBlock}>
          <Image
            src="/img/flaticon-logo.png"
            imageStyle={{
              width: 'auto',
              height: '50px',
              position: 'relative'
            }}
            style={{
              padding: '0',
              width: '100%',
              textAlign: 'center',
              marginBottom: '0.25rem',
              flexDirection: 'column'
            }}
          />
          <Typography variant="subtitle1" color="textSecondary">
            FlatIcon
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Icons made by{' '}
            <a
              className={classes.linkSecondary}
              href="https://www.flaticon.com/authors/freepik">
              Freepik{' '}
            </a>
            from{' '}
            <a className={classes.linkSecondary} href="www.flaticon.com">
              www.flaticon.com
            </a>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default About
