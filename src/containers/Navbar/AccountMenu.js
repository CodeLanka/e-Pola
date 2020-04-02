import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles'
import { ACCOUNT_PATH, NEEDS_PATH } from 'constants/paths'
import AssignmentIcon from '@material-ui/icons/Assignment'

const useStyles = makeStyles(() => ({}))

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
      <Button
        aria-owns={anchorEl ? 'my-needs' : null}
        aria-haspopup="false"
        onClick={gotoNeeds}>
        My Requests
        <AssignmentIcon />
      </Button>
      <Button
        aria-owns={anchorEl ? 'menu-appbar' : null}
        aria-haspopup="true"
        onClick={handleMenu}>
        My Account
        <AccountCircle className={classes.icon} />
      </Button>
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
