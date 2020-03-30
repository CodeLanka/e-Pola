import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useNotifications } from 'modules/notification'
import LoadingSpinner from 'components/LoadingSpinner'
import NeedTile from '../NeedTile'
import NewNeedTile from '../NewNeedTile'
import NewNeedDialog from '../NewNeedDialog'
import styles from './NeedsList.styles'
import { usePosition } from 'use-position'

const useStyles = makeStyles(styles)

function useNeedsList() {
  const { showSuccess, showError } = useNotifications()
  const firestore = useFirestore()
  let lat = ''
  let lon = ''

  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth, profile } }) => auth)
  const profile = useSelector(({ firebase: { profile } }) => profile)
  const { latitude, longitude } = usePosition()

  if (profile.location) {
    const { lat: latitude, lon: longitude } = profile.location
    lat = latitude
    lon = longitude
  } else if (latitude && longitude) {
    lat = latitude
    lon = longitude
  }

  useFirestoreConnect([
    {
      collection: 'needs',
      where: ['createdBy', '==', auth.uid]
    }
  ])

  // Get needs from redux state
  const needs = useSelector(({ firestore: { ordered } }) => ordered.needs)

  // New dialog
  const [newDialogOpen, changeDialogState] = useState(false)
  const toggleDialog = () => changeDialogState(!newDialogOpen)

  function addNeed(newInstance) {
    if (!auth.uid) {
      return showError('You must be logged in to create a need')
    }
    return firestore
      .add('needs', {
        ...newInstance,
        location: { lat, lon },
        createdBy: auth.uid,
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        toggleDialog()
        showSuccess('Need added successfully')
      })
      .catch((err) => {
        console.error('Error:', err) // eslint-disable-line no-console
        showError(err.message || 'Could not add need')
        return Promise.reject(err)
      })
  }

  return { needs, addNeed, newDialogOpen, toggleDialog }
}

function NeedsList() {
  const classes = useStyles()
  const { needs, addNeed, newDialogOpen, toggleDialog } = useNeedsList()

  // Show spinner while needs are loading
  if (!isLoaded(needs)) {
    return <LoadingSpinner />
  }

  return (
    <div className={classes.root}>
      <NewNeedDialog
        onSubmit={addNeed}
        open={newDialogOpen}
        onRequestClose={toggleDialog}
      />
      <div className={classes.tiles}>
        <NewNeedTile onClick={toggleDialog} />
        {!isEmpty(needs) &&
          needs.map((need, ind) => {
            return (
              <NeedTile
                key={`Need-${need.id}-${ind}`}
                name={need && need.name}
                amount={need && need.amount}
                needId={need.id}
              />
            )
          })}
      </div>
    </div>
  )
}

export default NeedsList
