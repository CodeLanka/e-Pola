import React, { useState } from 'react'
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
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AddLocationIcon from '@material-ui/icons/AddLocation'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import RoomIcon from '@material-ui/icons/Room'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Trans } from 'react-i18next'
import debounce from 'lodash.debounce'
import GoogleMapReact from 'google-map-react'
import { useNotifications } from 'modules/notification'

const useStyles = makeStyles(styles)

function AccountForm({ account, onSubmit }) {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting, isValid },
    getValues
  } = useForm({
    mode: 'onChange',
    nativeValidation: false,
    defaultValues: account
  })

  const { showSuccess, showError } = useNotifications()
  // location to be used in the google map canvas
  const [location, changeLocation] = useState(account.location)
  const [newLocation, changeNewLocation] = useState({ ...account.location })
  const [isLocationUpdating, setLocationUpdating] = useState(false)
  const [zoomLevel, changeZoom] = useState(location != null ? 14 : 6)
  const [isAddressFetching, setAddressFetching] = useState(false)
  /**
   * this calls keshan's backend and gets the location's lat lon information
   * @param address
   * @returns {*}
   */
  function fetchDataFromGooglePlaces(address) {
    // let {data, error} = useSwr('https://api-aw4mzcvpla-uc.a.run.app/api/v1/location?address='+ address, { fetcher })
    setAddressFetching(true)
    setLocationUpdating(false)
    fetch('http://localhost:5000/api/v1/location?address=' + address)
      .then((response) => response.json())
      .then((data) => {
        if (data.candidates.length > 0) {
          const fetchedLocation = data.candidates[0].geometry.location
          changeLocation(fetchedLocation)
          account.location = fetchedLocation
          changeZoom(14)
          showSuccess('New location shown. To save it, press Save')
        }
        setAddressFetching(false)
      })
      .catch(() => {
        showError('We could not find the location of that address')
        setAddressFetching(false)
      })
  }

  /**
   * appends the location to the submitting data. Location is not in the form items
   * @param data
   */
  function submitWithLocation(data) {
    if (isLocationUpdating) {
      data.location = newLocation
    } else {
      data.location = location
    }
    onSubmit(data)
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit(submitWithLocation)}>
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
          onChange={debounce(() => {
            // console.log('fetching...')
            const currentValues = getValues()
            fetchDataFromGooglePlaces(currentValues.address)
          }, 1000)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isAddressFetching ? <CircularProgress /> : <RoomIcon />}
              </InputAdornment>
            )
          }}
        />
        <Typography variant="p">
          <Trans>
            If the marker on the map is wrong, please drag the map to the
            correct location and press Save
          </Trans>
        </Typography>

        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={
            account.location
              ? { lat: account.location.lat, lng: account.location.lng }
              : { lat: 7, lng: 79 }
          }
          center={
            account.location
              ? { lat: account.location.lat, lng: account.location.lng }
              : { lat: 7, lng: 79 }
          }
          zoom={zoomLevel}
          defaultZoom={account.location ? 6 : 14}
          onDrag={(map) => {
            setLocationUpdating(true)

            changeNewLocation({
              lat: map.center.lat(),
              lng: map.center.lng()
            })
          }}>
          {location && <LocationOnIcon lat={location.lat} lng={location.lng} />}
          {isLocationUpdating && (
            <AddLocationIcon
              style={{ color: 'red' }}
              lat={newLocation.lat}
              lng={newLocation.lng}>
              New Location
            </AddLocationIcon>
          )}
        </GoogleMapReact>

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
