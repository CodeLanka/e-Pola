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

const useStyles = makeStyles(styles)

function useNeedsList() {
  const { showSuccess, showError } = useNotifications()
  const firestore = useFirestore()

  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)

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
    console.log("newInstance", newInstance)
    return firestore
      .add('needs', {
        ...newInstance,
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
  const {
    needs,
    addNeed,
    newDialogOpen,
    toggleDialog
  } = useNeedsList()

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
        {console.log(needs)}
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
