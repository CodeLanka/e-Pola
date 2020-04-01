export default (theme) => ({
  avatarCurrent: {
    width: '50%',
    maxWidth: '13rem',
    height: 'auto',
    cursor: 'pointer'
  },
  gridItem: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    // marginTop: theme.spacing(5),
    justify: 'center',
    alignItems: 'center'
  },
  linkedAccounts: {
    marginTop: '2rem',
    justifyContent: 'center',
    alignContent: 'center'
  },
  userName: {
    fontSize: '15px'
  },
  linkedItem: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
  }
})
