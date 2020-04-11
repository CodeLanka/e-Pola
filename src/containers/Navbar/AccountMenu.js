import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles'
import { ACCOUNT_PATH, NEEDS_PATH, ABOUT_PATH } from 'constants/paths'
import AssignmentIcon from '@material-ui/icons/Assignment'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import { Trans } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    marginLeft: '10px',
    [theme.breakpoints.down(600)]: {
      display: 'none'
    },
    [theme.breakpoints.up(600)]: {
      display: 'inline-flex'
    }
  },
  icon: {
    marginLeft: '5px'
  },
  buttonCollapse: {
    [theme.breakpoints.down(600)]: {
      display: 'inline-flex'
    },
    [theme.breakpoints.up(600)]: {
      display: 'none'
    }
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
  function gotoAbout() {
    history.push(ABOUT_PATH)
  }

  return (
    <>
      <div>
        <Button
          className={classes.buttonCollapse}
          aria-owns={anchorEl ? 'my-needs' : null}
          aria-haspopup="false"
          onClick={gotoAbout}>
          <EmojiObjectsIcon className={classes.icon} />
        </Button>
        <Button
          className={classes.buttonCollapse}
          aria-owns={anchorEl ? 'my-needs' : null}
          aria-haspopup="false"
          onClick={gotoNeeds}>
          <AssignmentIcon className={classes.icon} />
        </Button>
        <Button
          className={classes.buttonCollapse}
          aria-owns={anchorEl ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={handleMenu}>
          <AccountCircle className={classes.icon} />
        </Button>
      </div>

      <div>
        <Button
          className={classes.button}
          aria-owns={anchorEl ? 'my-needs' : null}
          aria-haspopup="false"
          onClick={gotoAbout}>
          <Trans>About</Trans>
          <EmojiObjectsIcon className={classes.icon} />
        </Button>
        <Button
          className={classes.button}
          aria-owns={anchorEl ? 'my-needs' : null}
          aria-haspopup="false"
          onClick={gotoNeeds}>
          <Trans>My Requests</Trans>
          <AssignmentIcon className={classes.icon} />
        </Button>
        <Button
          className={classes.button}
          aria-owns={anchorEl ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={handleMenu}>
          <Trans>My Account</Trans>
          <AccountCircle className={classes.icon} />
        </Button>
      </div>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={closeAccountMenu}>
        <MenuItem onClick={goToAccount}>
          <Trans>Account Settings</Trans>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Trans>Sign Out</Trans>
        </MenuItem>
      </Menu>
    </>
  )
}

export default AccountMenu
