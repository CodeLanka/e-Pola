import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles'
import { ACCOUNT_PATH, NEEDS_PATH } from 'constants/paths'
import Typography from '@material-ui/core/Typography'
import AssignmentIcon from '@material-ui/icons/Assignment'

const useStyles = makeStyles(() => ({
  buttonRoot: {
    color: '#363636',
    padding: 0,
    marginRight: '1em'
  },
  menuLabel: {
    fontSize: '12px',
    marginRight: '5px'
  }
}))

function AccountMenu() {
  const classes = useStyles()
  const [anchorEl, setMenu] = useState(null)
  const history = useHistory()
  const firebase = useFirebase()

  function closeAccountMenu(e) {
    setMenu(null)
  }
  function handleMenu(e) {
    setMenu(e.target)
  }
  function handleLogout() {
    closeAccountMenu()
    // redirect to '/' handled by UserIsAuthenticated HOC
    return firebase.logout()
  }
  function goToAccount() {
    closeAccountMenu()
    history.push(ACCOUNT_PATH)
  }
  function gotoNeeds() {
    history.push(NEEDS_PATH)
  }

  return (
    <>
      <IconButton
        aria-owns={anchorEl ? 'my-needs' : null}
        aria-haspopup="false"
        onClick={gotoNeeds}
        classes={{ root: classes.buttonRoot }}>
        <Typography variant="h6" className={classes.menuLabel}>
          My Requests
        </Typography>
        <AssignmentIcon />
      </IconButton>
      <IconButton
        aria-owns={anchorEl ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}
        classes={{ root: classes.buttonRoot }}>
        <Typography variant="h6" className={classes.menuLabel}>
          My Account
        </Typography>
        <AccountCircle className={classes.icon} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={closeAccountMenu}>
        <MenuItem onClick={goToAccount}>Account Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
      </Menu>
    </>
  )
}

export default AccountMenu
