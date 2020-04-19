import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { validateEmail } from 'utils/form'
import styles from './LoginForm.styles'
import { Trans } from 'react-i18next'

const useStyles = makeStyles(styles)

function LoginForm({ onSubmit }) {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting, isValid }
  } = useForm({
    mode: 'onChange',
    nativeValidation: false
  })

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="email"
        varient="outlined"
        name="email"
        label={<Trans>Your email here...</Trans>}
        margin="normal"
        fullWidth
        inputRef={register({
          required: true,
          validate: validateEmail
        })}
        error={!!errors.email}
        helperText={errors.email && <Trans>Email must be valid</Trans>}
      />
      <TextField
        type="password"
        varient="outlined"
        name="password"
        label={<Trans>Your password here...</Trans>}
        margin="normal"
        fullWidth
        inputRef={register({
          required: true
        })}
        error={!!errors.password}
        helperText={errors.password && <Trans>Password is required</Trans>}
      />
      <div className={classes.submit}>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          disabled={isSubmitting || !isValid}>
          {isSubmitting ? <Trans>Loading</Trans> : <Trans>Login</Trans>}
        </Button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm
