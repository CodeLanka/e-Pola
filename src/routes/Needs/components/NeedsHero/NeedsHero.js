import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import styles from './NeedsHero.styles'
import { Typography } from '@material-ui/core'
import { Trans } from 'react-i18next'

const useStyles = makeStyles(styles)

function NeedsHero({ onClick }) {
  const classes = useStyles()

  return (
    <Paper className={classes.root} onClick={onClick}>
      <Typography variant="h4">Hello User!</Typography>
        <Typography variant="h6"><Trans>Your Needs List</Trans></Typography>
    </Paper>
  )
}

NeedsHero.propTypes = {
  onClick: PropTypes.func
}

export default NeedsHero
