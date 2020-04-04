import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import { Avatar } from '@material-ui/core'
import logo from './logo.png'

const useStyles = makeStyles(styles)

function NavbarWithoutAuth({ children, brandPath }) {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Avatar
          className={classes.brandLogo}
          variant="square"
          src={logo}
          component={Link}
          to={brandPath || '/'}
        />
        <div className={classes.flex} />
        {children}
      </Toolbar>
    </AppBar>
  )
}

NavbarWithoutAuth.propTypes = {
  children: PropTypes.element,
  brandPath: PropTypes.string
}

export default NavbarWithoutAuth
