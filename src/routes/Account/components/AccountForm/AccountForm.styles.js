export default (theme) => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
  fields: {
    width: '100%',
    marginBottom: '2rem'
  },
  btnSave: {
    color: '#363636',
    backgroundColor: 'transparent',
    borderColor: '#363636'
  },
  settingsTitle: {
    color: '#363636'
  },
  saveDiv: {
    textAlign: 'left!important'
  }
})
