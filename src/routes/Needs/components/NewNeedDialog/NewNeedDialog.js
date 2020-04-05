import React from 'react'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import styles from './NewNeedDialog.styles'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { useSelector } from 'react-redux'
import { useFirebase, useFirestoreConnect, isEmpty } from 'react-redux-firebase'
import CircularProgress from '@material-ui/core/CircularProgress'
import shortid from 'shortid'

const useStyles = makeStyles(styles)

function NewNeedDialog({ userId, onSubmit, open, onRequestClose }) {
  const classes = useStyles()
  const [isUploading, setIsUploading] = React.useState(false)
  const [uploadedFle, setUploadedFle] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [product, setProduct] = React.useState('')
  const {
    control,
    register,
    unregister,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting, isValid }
  } = useForm({ mode: 'onChange' })

  useFirestoreConnect({
    collection: 'products',
    where: ['category', '==', category]
  })

  // Path within Database for metadata (also used for file Storage path)
  const firebase = useFirebase()

  const onFilesDrop = (e) => {
    setIsUploading(true)
    return firebase
      .uploadFiles(
        `uploads/${userId}`,
        e.target.files,
        `uploads/${userId}/img`,
        { name: `${shortid.generate()}-${e.target.files[0].name}` }
      )
      .then((files) => {
        if (files[0]) {
          setUploadedFle(files[0].downloadURL)
          setValue('uploadedFile', files[0].downloadURL, true)
        }
        setIsUploading(false)
      })
  }

  const products = useSelector(({ firestore: { ordered } }) => ordered.products)

  const handleCreateRequest = (request) => {
    setCategory('')
    setProduct('')
    setUploadedFle('')
    setIsUploading(false)
    reset()
    return onSubmit(request)
  }

  const handleChange = (event) => {
    setCategory(event.target.value)
    setProduct('')
  }

  const handleChangeProduct = ([event]) => {
    const selectedProduct = products.find(
      (product) => product.id === event.target.value
    )
    if (selectedProduct.needUpload) {
      register({ name: 'uploadedFile' }, { required: true })
    } else {
      unregister('uploadedFile')
    }
    setProduct(selectedProduct)
    return event.target.value
  }

  const handleChangeUnit = ([event]) => {
    return event.target.value
  }

  return (
    <Dialog open={open} onClose={onRequestClose}>
      <DialogTitle id="new-need-dialog-title" color="secondary">
        What do you want?
      </DialogTitle>
      <form
        className={classes.root}
        onSubmit={handleSubmit(handleCreateRequest)}>
        <DialogContent>
          <FormControl className={classes.selection}>
            <InputLabel id="catagories">Category</InputLabel>
            <Select
              labelId="catagories"
              id="catagories-list"
              value={category}
              onChange={handleChange}
              inputRef={register({
                required: true
              })}
              name="category"
              defaultValue="">
              <MenuItem value="dairy">
                Dairy{' '}
                <span className={classes.emojis} role="img" alt="Dairy">
                  🧀🥛
                </span>
              </MenuItem>
              <MenuItem value="meat">
                Meat, Seafood & Poultry{' '}
                <span
                  className={classes.emojis}
                  role="img"
                  alt="Meat, Seafood & Poultry">
                  🥩🐔🍤
                </span>
              </MenuItem>
              <MenuItem value="vegetables">
                Vegetables{' '}
                <span className={classes.emojis} role="img" alt="Vegetables">
                  🥔🥕🍆
                </span>
              </MenuItem>
              <MenuItem value="grains">
                Grains{' '}
                <span className={classes.emojis} role="img" alt="Grains">
                  🌾🍚
                </span>
              </MenuItem>
              <MenuItem value="grocery">
                Grocery Items{' '}
                <span className={classes.emojis} role="img" alt="Grocery Items">
                  🍛
                </span>
              </MenuItem>
              <MenuItem value="pharmaceuticals">
                Pharmacy Items{' '}
                <span className={classes.emojis} role="img" alt="Grocery Items">
                  💊
                </span>
              </MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl className={classes.selection}>
            <InputLabel id="product">Products</InputLabel>
            <Controller
              as={
                <Select
                  disabled={isEmpty(products)}
                  labelId="product"
                  name="products_id">
                  {!isEmpty(products) &&
                    products.map((product) => (
                      <MenuItem value={product.id} key={product.id}>
                        {product.name}
                      </MenuItem>
                    ))}
                </Select>
              }
              name="products_id"
              onChange={handleChangeProduct}
              rules={{ required: 'Product is required' }}
              control={control}
              defaultValue=""
            />
          </FormControl>
          <br />
          <br />
          {!!product && !product.disableUnits && product.units && (
            <FormControl className={classes.selection}>
              <InputLabel id="amount">How much?</InputLabel>
              <Controller
                as={
                  <Select disabled={!product} labelId="amount" name="amount">
                    {product.units.map((unit, i) => (
                      <MenuItem value={unit} key={i}>
                        {unit}
                      </MenuItem>
                    ))}
                  </Select>
                }
                name="amount"
                onChange={handleChangeUnit}
                rules={{ required: 'How much is required' }}
                control={control}
                defaultValue=""
              />
            </FormControl>
          )}
          {!!product &&
            product.needUpload &&
            !isUploading &&
            uploadedFle === '' && (
              <FormControl className={classes.selection}>
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.upload}
                  id="contained-button-file"
                  type="file"
                  onChange={onFilesDrop}
                />
              </FormControl>
            )}
          {!!product &&
            product.needUpload &&
            !isUploading &&
            uploadedFle !== '' && <i>File uploaded</i>}
          {isUploading && (
            <div>
              <CircularProgress /> Uploading{' '}
            </div>
          )}
          <TextField
            type="hidden"
            name="name"
            value={product && product.name}
            inputRef={register()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose} color="secondary">
            Cancel
          </Button>
          <Button
            type="submit"
            color="primary"
            disabled={isSubmitting || !isValid}>
            {isSubmitting ? 'Requesting...' : 'Request'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

NewNeedDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired
}

export default NewNeedDialog
