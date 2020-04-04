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
            Who Are We?
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
          <div className={classes.btnDiv}>
            <Button className={classes.infoButton}>More Info</Button>
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
