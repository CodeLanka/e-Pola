export default (theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '500px',
    maxWidth: '100%'
  },
  inputs: {
    ...theme.flexColumnCenter
  },
  selection: {
    width: '100%'
  },
  buttons: {
    ...theme.flexColumnCenter
  },
  emojis: {
    fontSize: '35px'
  }
})
