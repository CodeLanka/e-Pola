import amber from '@material-ui/core/colors/amber'

export default {
  palette: {
    primary: {
      main: amber[300]
    },
    secondary: {
      main: '#363636'
    }
  },
  // Enable typography v2: https://material-ui.com/style/typography/#migration-to-typography-v2
  typography: {
    color: '#363636',
    backgroundColor: '#363636',
    useNextVariants: true,
    fontFamily:
      'BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
