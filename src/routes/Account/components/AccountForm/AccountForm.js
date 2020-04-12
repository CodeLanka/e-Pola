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
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import RoomIcon from '@material-ui/icons/Room'
import { Trans } from 'react-i18next'

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
          <Trans>Account Settings</Trans>
        </Typography>
        <TextField
          name="displayName"
          label={<Trans>Display Name</Trans>}
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PermIdentityIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="contactNumber"
          label={<Trans>Contact Number</Trans>}
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PhoneIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="identityNumber"
          label={<Trans>NIC Number</Trans>}
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FingerprintIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          name="address"
          label={<Trans>Delivery Address</Trans>}
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RoomIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          label={<Trans>Your Email</Trans>}
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
                <MailOutlineIcon />
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
          {isSubmitting ? <Trans>Saving</Trans> : <Trans>Save</Trans>}
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
