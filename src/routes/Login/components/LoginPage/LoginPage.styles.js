import amber from '@material-ui/core/colors/amber'
export default (theme) => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    fontWeight: 400,
    paddingTop: '1.5rem',
    backgroundColor: 'white'
  },
  panel: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    flexGrow: 1,
    padding: '2rem',
    minWidth: '450px',
    minHeight: '270px',
    border: '5px solid',
    boxShadow: 'none',
    borderColor: amber[300],
    zIndex: 10
  },
  orLabel: {
    marginTop: '1rem',
    marginBottom: '.5rem',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  signup: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    marginTop: '2rem'
  },
  signupLabel: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  signupLink: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#363636'
  },
  providers: {
    marginTop: '1rem'
  },
  hr: {
    width: '300px',
    backhroundColor: 'lightgrey'
  }
})
