import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { validateEmail } from 'utils/form'
import styles from './AccountForm.styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PublicIcon from '@material-ui/icons/Public'

const useStyles = makeStyles(styles)

function AccountForm({ account, onSubmit }) {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting, isValid }
  } = useForm({
    mode: 'onChange',
    nativeValidation: false,
    defaultValues: account
  })

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.fields}>
        <Typography variant="h4" className={classes.settingsTitle}>
          Account Settings
        </Typography>
        <TextField
          name="displayName"
          label="Display Name"
          margin="normal"
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <PermIdentityIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField
          label="Your Email"
          type="email"
          name="email"
          placeholder="email"
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register({
            required: true,
            validate: validateEmail
          })}
          error={!!errors.email}
          errorStyle={{ color: 'red' }}
          helperText={errors.email && 'Email must be valid'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <MailOutlineIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="avatarUrl"
          label="Avatar URL"
          inputRef={register}
          margin="normal"
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <PublicIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>

      <div className={classes.saveDiv}>
        <Button
          className={classes.btnSave}
          color="primary"
          type="submit"
          variant="outlined"
          disabled={isSubmitting || !isValid}>
          {isSubmitting ? 'Saving' : 'Save'}
        </Button>
      </div>
    </form>
  )
}

AccountForm.propTypes = {
  account: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default AccountForm
