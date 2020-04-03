import amber from '@material-ui/core/colors/amber'
export default (theme) => ({
  root: {
    ...theme.flexColumnCenter,
    flexGrow: 1
  },
  section: {
    ...theme.flexColumnCenter,
    padding: theme.spacing(2)
  },
  mainContainer: {
    padding: '2.5em'
  },
  leftSide: {
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  rightSide: {
    textAlign: 'center'
  },
  strong: {
    color: amber[300]
  },
  aboutTitle: {
    fontWeight: 'bold'
  },
  welcome: {
    textAlign: 'center',
    marginTop: '2rem'
  },
  aboutText: {
    marginTop: '1rem',
    textAlign: 'justify'
  }
})
