import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import AccountEditor from '../AccountEditor'
import styles from './AccountPage.styles'

const useStyles = makeStyles(styles)

function AccountPage() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} justify="center">
      <Grid item xs={12} md={10} lg={8} className={classes.gridItem}>
        <Paper className={classes.pane}>
          <AccountEditor />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default AccountPage
