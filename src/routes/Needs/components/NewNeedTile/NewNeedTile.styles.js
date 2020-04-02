import amber from '@material-ui/core/colors/amber'
export default (theme) => ({
  root: {
    ...theme.flexRowCenter,
    alignItems: 'center',
    cursor: 'pointer',
    height: '150px',
    width: '300px',
    margin: theme.spacing(0.5),
    padding: theme.spacing(1.3),
    overflow: 'hidden',
    backgroundColor: amber[300]
  },
  newIcon: {
    width: '4rem',
    height: '4rem',
    color: '#363636',
    transition: 'all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms',
    '&:hover': {
      color: '#757575'
    },
    marginRight: '0.5rem'
  }
})
