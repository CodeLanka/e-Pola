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
            src="https://media1.giphy.com/media/LpW8NlEe3KBlXoLpXd/source.gif"
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
            e-Pola is a system to fulltill your basic needs in this distressing
            times.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Developed By:
          </Typography>
          <Image
            src="http://codelanka.github.io/images/logo.png"
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
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rightSide}>
          <Typography variant="h4" gutterBottom classNAME={classes.welcome}>
            Welcome to the <strong className={classes.strong}>e</strong>-Pola!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            You can Log In and start adding your basic needs in this distressing
            times.
          </Typography>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="https://image.flaticon.com/icons/svg/701/701997.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 1
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Log in to e-Pola.
                </Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="https://image.flaticon.com/icons/svg/616/616932.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 2
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Request your items.
                </Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="https://image.flaticon.com/icons/svg/616/616934.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 3
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Your needs will be visible to our autorized vendors.
                </Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.cardRoot}>
            <CardMedia
              className={classes.cover}
              component="img"
              width="50%"
              image="https://image.flaticon.com/icons/svg/706/706201.svg"
            />
            <div>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Step 4
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  They will come and fulfill your needs.
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
