import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import NeedRoute from 'routes/Needs/routes/Need'
import { renderChildren } from 'utils/router'
import NeedsList from '../NeedsList'
import Image from 'material-ui-image'
import NeedsHero from '../NeedsHero'

function NeedsPage({ match }) {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div>
        <NeedsHero />
        <Image
          src="/img/needsbanner.gif"
          imageStyle={{ width: '300px', height: 'auto', position: 'relative' }}
          style={{ padding: '0', width: '100%', textAlign: 'center' }}
        />
      </div>
      <Switch>
        {/* Child routes */}
        {renderChildren([NeedRoute], match)}
        {/* Main Route */}
        <Route exact path={match.path} render={() => <NeedsList />} />
      </Switch>
    </div>
  )
}

NeedsPage.propTypes = {
  match: PropTypes.object.isRequired // from enhancer (withRouter)
}

export default NeedsPage
