import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import NeedData from '../NeedData'
import styles from './NeedPage.styles'

const useStyles = makeStyles(styles)

function NeedPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <NeedData />
      </Card>
    </div>
  )
}

export default NeedPage
