export default (theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '500px'
  },
  inputs: {
    ...theme.flexColumnCenter
  },
  selection: {
    width: '50%',
    [theme.breakpoints.up(600)]: {
      width: '100%'
    }
  },
  buttons: {
    ...theme.flexColumnCenter
  }
})
