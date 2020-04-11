import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styles from './HomePage.styles'
import Image from 'material-ui-image'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { useSelector } from 'react-redux'
import {
  isLoaded,
  isEmpty,
  useFirestore,
  useFirestoreConnect
} from 'react-redux-firebase'
import { Trans } from 'react-i18next'

import DoneIcon from '@material-ui/icons/Done'

// const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

const useStyles = makeStyles(styles)

function Home() {
  const classes = useStyles()

  const auth = useSelector(({ firebase }) => firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)

  var authUid = authExists ? auth.uid : ''
  useFirestore()
  useFirestoreConnect([
    {
      collection: 'needs',
      where: ['createdBy', '==', authUid]
    }
  ])
  const needs = useSelector(({ firestore: { ordered } }) => ordered.needs)
  const hasUserAddedItems = needs != null && needs.length > 0

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
            <Trans>
              Worried about basic rations during the curfew?
              <br />
              GIVEME.lk is here to voice your needs.
            </Trans>
          </Typography>
          <br />
          <Typography variant="subtitle2" gutterBottom>
            <Trans>Developed By</Trans>:
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
          <Typography variant="h4" gutterBottom className={classes.welcome}>
            <Trans>
              Welcome to GIVE<strong className={classes.strong}>ME</strong>.lk!
            </Trans>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <Trans>
              Log-in and start adding your requirements to GiveME. This is how
              you do that...
            </Trans>
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
                  <Trans>Step</Trans> 1
                  <span className={classes.checkmark}>
                    {authExists && <DoneIcon />}
                  </span>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <Trans>
                    You log in to GIVE
                    <strong className={classes.strong}>ME</strong>.
                  </Trans>
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
                  <Trans>Step</Trans> 2
                  <span className={classes.checkmark}>
                    {hasUserAddedItems && <DoneIcon />}
                  </span>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <Trans>You request items that you need</Trans>
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
                  <Trans>Step</Trans> 3
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <Trans>Authorized vendors see your requirements</Trans>
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
                  <Trans>Step</Trans> 4
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <Trans>Vendors will come and fulfill your needs.</Trans>
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
