import amber from '@material-ui/core/colors/amber'
export default (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '160px',
    width: '300px',
    margin: theme.spacing(0.5),
    padding: theme.spacing(1.3),
    backgroundColor: amber[300]
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  name: {
    marginTop: '1rem',
    fontSize: '2.5rem',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: '#363636',
    '&:hover': {
      color: ''
    },
    '&:visited': {
      textDecoration: 'none'
    }
  },
  amount: {
    fontSize: '1.5rem',
    color: '#363636',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  qty: {
    marginTop: '0.5rem',
    color: '#363636'
  },
  status: {
    fontSize: '0.8rem',
    color: '#363636',
    textAlign: 'right'
  },
  statusWrapper: {
    alignSelf: 'normal',
    marginTop: '10px',
    marginBottom: '5px'
  }
})
