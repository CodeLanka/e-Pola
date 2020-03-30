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
import { useFirestoreConnect, isEmpty } from 'react-redux-firebase'

const useStyles = makeStyles(styles)

function NewNeedDialog({ onSubmit, open, onRequestClose }) {
  const classes = useStyles()
  const [catagory, setCatagory] = React.useState('')
  const [product, setProduct] = React.useState('')
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, isValid }
  } = useForm({ mode: 'onChange' })

  useFirestoreConnect({
    collection: 'products',
    where: ['catagory', '==', catagory]
  })

  const products = useSelector(({ firestore: { ordered } }) => ordered.products)

  const handleChange = (event) => {
    setCatagory(event.target.value)
    setProduct('')
  }

  const handleChangeProduct = ([event]) => {
    const selectedProduct = products.find(
      (product) => product.id === event.target.value
    )
    setProduct(selectedProduct)
    return event.target.value
  }

  const handleChangeUnit = ([event]) => {
    return event.target.value
  }

  return (
    <Dialog open={open} onClose={onRequestClose}>
      <DialogTitle id="new-need-dialog-title">What you want?</DialogTitle>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <FormControl className={classes.selection}>
            <InputLabel id="catagories">Catagory</InputLabel>
            <Select
              labelId="catagories"
              id="catagories-list"
              value={catagory}
              onChange={handleChange}
              inputRef={register({
                required: true
              })}
              name="catagory"
              defaultValue="">
              <MenuItem value="dairy">Dairy</MenuItem>
              <MenuItem value="meat">Meat</MenuItem>
              <MenuItem value="vegies">Vegies</MenuItem>
              <MenuItem value="grains">Grains</MenuItem>
              <MenuItem value="poluty">Poluty</MenuItem>
              <MenuItem value="pharmacy">Pharmacy</MenuItem>
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
          <FormControl className={classes.selection}>
            <InputLabel id="amount">How much?</InputLabel>
            <Controller
              as={
                <Select disabled={!product} labelId="amount" name="amount">
                  {!!product &&
                    product.units.map((unit, i) => (
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
  onRequestClose: PropTypes.func.isRequired
}

export default NewNeedDialog
