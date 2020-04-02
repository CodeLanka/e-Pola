import React from 'react'
import PropTypes from 'prop-types'
import ContentAddCircle from '@material-ui/icons/AddCircle'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import styles from './NewNeedTile.styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(styles)

function NewNeedTile({ onClick }) {
  const classes = useStyles()

  return (
    <Paper className={classes.root} onClick={onClick}>
      <ContentAddCircle className={classes.newIcon} />
      <Typography variant="h6" color="secondary">
        Request new item
      </Typography>
    </Paper>
  )
}

NewNeedTile.propTypes = {
  onClick: PropTypes.func
}

export default NewNeedTile
