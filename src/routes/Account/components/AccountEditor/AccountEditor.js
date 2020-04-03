import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { isLoaded, useFirebase } from 'react-redux-firebase'
import LoadingSpinner from 'components/LoadingSpinner'
import { useNotifications } from 'modules/notification'
import defaultUserImageUrl from 'static/User.png'
import AccountForm from '../AccountForm'
import styles from './AccountEditor.styles'
import { Avatar, Typography } from '@material-ui/core'
import ProviderDataForm from '../ProviderDataForm'

const useStyles = makeStyles(styles)

function AccountEditor() {
  const classes = useStyles()
  const firebase = useFirebase()
  const { showSuccess, showError } = useNotifications()

  // Get profile from redux state
  const profile = useSelector(({ firebase }) => firebase.profile)

  if (!isLoaded(profile)) {
    return <LoadingSpinner />
  }

  function updateAccount(newAccount) {
    return firebase
      .updateProfile(newAccount)
      .then(() => showSuccess('Profile updated successfully'))
      .catch((error) => {
        console.error('Error updating profile', error.message || error) // eslint-disable-line no-console
        showError('Error updating profile: ', error.message || error)
        return Promise.reject(error)
      })
  }

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} md={6} lg={6} className={classes.gridItem}>
        <Avatar
          className={classes.avatarCurrent}
          alt="DP image"
          src={(profile && profile.avatarUrl) || defaultUserImageUrl}
        />
        <div className={classes.linkedAccounts}>
          <Typography variant="h6" color="secondary">
            Linked Accounts
          </Typography>
          <div className={classes.linkedItem}>
            {!!profile && !!profile.providerData && (
              <ProviderDataForm providerData={profile.providerData} />
            )}
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={6} className={classes.gridItem}>
        <AccountForm onSubmit={updateAccount} account={profile} />
      </Grid>
    </Grid>
  )
}

export default AccountEditor
