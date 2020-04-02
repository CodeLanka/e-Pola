import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useFirestore } from 'react-redux-firebase'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import { NEEDS_PATH } from 'constants/paths'
import useNotifications from 'modules/notification/useNotifications'
import styles from './NeedTile.styles'

const useStyles = makeStyles(styles)

function NeedTile({ name, needId, amount, showDelete }) {
  const classes = useStyles()
  const history = useHistory()
  const firestore = useFirestore()
  const { showError, showSuccess } = useNotifications()

  function goToNeed() {
    return history.push(`${NEEDS_PATH}/${needId}`)
  }

  function deleteNeed() {
    return firestore
      .delete(`needs/${needId}`)
      .then(() => showSuccess('Need deleted successfully'))
      .catch((err) => {
        console.error('Error:', err) // eslint-disable-line no-console
        showError(err.message || 'Could not delete need')
        return Promise.reject(err)
      })
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.top}>
        <span className={classes.name} onClick={goToNeed}>
          {name || 'No Name'}
        </span>
        {showDelete ? (
          <Tooltip title="delete">
            <IconButton onClick={deleteNeed}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : null}
      </div>
      <span className={classes.qty}>Qty:</span>
      <span className={classes.amount}>{amount || ''}</span>
    </Paper>
  )
}

NeedTile.propTypes = {
  needId: PropTypes.string.isRequired,
  showDelete: PropTypes.bool,
  name: PropTypes.string,
  amount: PropTypes.string
}

NeedTile.defaultProps = {
  showDelete: true
}

export default NeedTile
