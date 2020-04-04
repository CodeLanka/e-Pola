import React from 'react'
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import { ACCOUNT_PATH, NEEDS_PATH } from 'constants/paths'
import styles from './HomePage.styles'
import Image from 'material-ui-image'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

// const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

const useStyles = makeStyles(styles)

function Home() {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={3} className={classes.mainContainer}>
        <Grid item xs={12} sm={6} className={classes.leftSide}>
          <Image
            src="/img/bikebanner.gif"
            imageStyle={{
              width: '300px',
              height: 'auto',
              position: 'relative'
            }}
            style={{
              padding: '0',
              width: '100%',
              textAlign: 'center',
              marginBottom: '1.5rem',
              flexDirection: 'column'
            }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Worried about basic rations during the curfew? <br />
            GIVEME.lk is here to voice your needs.
          </Typography>
          <br />
          <Typography variant="subtitle2" gutterBottom>
            Developed By:
          </Typography>
          <a
            href="http://codelanka.org"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/img/codelanka.png"
              imageStyle={{
                width: '100px',
                height: 'auto',
                position: 'relative'
              }}
              style={{
                padding: '0',
                width: '100%',
                textAlign: 'center',
                marginBottom: '1.5rem',
                flexDirection: 'column'
              }}
            />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rightSide}>
          <Typography variant="h4" gutterBottom classNAME={classes.welcome}>
            Welcome to GIVE<strong className={classes.strong}>ME</strong>.lk!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Log-in and start adding your requirements to GiveME. This is how you
            do that...
          </Typography>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="/img/step1.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 1
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  You log in to GIVE
                  <strong className={classes.strong}>ME</strong>.
                </Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="/img/step2.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 2
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  You request items that you need
                </Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="/img/step3.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 3
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Authorized vendors see your requirements
                </Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="/img/step4.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 4
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Vendors will come and fulfill your needs.
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
