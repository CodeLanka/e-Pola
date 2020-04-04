import React from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from 'react-redux-firebase'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import GoogleButton from 'react-google-button'
import { SIGNUP_PATH } from 'constants/paths'
import { useNotifications } from 'modules/notification'
import LoginForm from '../LoginForm'
import styles from './LoginPage.styles'
import Image from 'material-ui-image'
import logo from './logo.png'

const useStyles = makeStyles(styles)

function LoginPage() {
  const classes = useStyles()
  const firebase = useFirebase()
  const { showError } = useNotifications()

  function onSubmitFail(formErrs, dispatch, err) {
    return showError(formErrs ? 'Form Invalid' : err.message || 'Error')
  }

  function googleLogin() {
    return firebase
      .login({ provider: 'google', type: 'popup' })
      .catch((err) => showError(err.message))
  }

  function emailLogin(creds) {
    return firebase.login(creds).catch((err) => showError(err.message))
  }

  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.panel}>
          <Image
            src={logo}
            imageStyle={{
              width: '300px',
              height: 'auto',
              position: 'relative'
            }}
            style={{
              padding: '0',
              width: '100%',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}
          />
          <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
          <hr className={classes.hr} />
          <div className={classes.orLabel}>
            Use your Google Account to Sign In
          </div>
          <div className={classes.providers}>
            <GoogleButton
              onClick={googleLogin}
              data-test="google-auth-button"
            />
          </div>
          <div className={classes.signup}>
            <span className={classes.signupLabel}>Not Registered Yet?</span>
            <Link className={classes.signupLink} to={SIGNUP_PATH}>
              Sign Up
            </Link>
          </div>
        </Paper>
        <div />
      </div>
      {/* <Image
      src="https://media.giphy.com/media/2XHJQYPWrYT3q/giphy.gif"
      imageStyle={{ width: '300px', height: 'auto' ,position: 'relative'}} 
      style={{padding: '0', width: '100%', textAlign: 'center', marginBottom: '1.5rem', flexDirection: 'column'}}
    /> */}
    </div>
  )
}

export default LoginPage
