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
  welcome: {
    fontWeight: 'bold'
  },
  rightSide: {
    textAlign: 'center'
  },
  strong: {
    color: amber[300]
  },
  list: {
    textAlign: 'left'
  },
  cardRoot: {
    ...theme.flexColumnCenter,
    flexGrow: 1,
    flexDirection: 'row',
    marginBottom: '1em',
    boxShadow: 'none',
    border: '5px solid',
    borderColor: amber[300],
    borderRadius: '5px'
  },
  cover: {
    width: '10%',
    marginLeft: '20px'
  },
  content: {
    textAlign: 'left',
    marginLeft: '10px'
  }
})
