import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner'

function NeedData() {
  const { needId } = useParams()

  // Create listener for needs
  useFirestoreConnect([{ collection: 'needs', doc: needId }])

  // Get needs from redux state
  const need = useSelector(
    ({
      firestore: {
        data: { needs }
      }
    }) => needs && needs[needId]
  )

  // Show loading spinner while need is loading
  if (!isLoaded(need)) {
    return <LoadingSpinner />
  }

  return (
    <CardContent>
      <Typography component="h2">{(need && need.name) || 'Need'}</Typography>
      <Typography>{needId}</Typography>
      <div style={{ marginTop: '4rem' }}>
        <pre>{JSON.stringify(need, null, 2)}</pre>
      </div>
    </CardContent>
  )
}

export default NeedData
