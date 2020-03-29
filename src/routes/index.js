import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import NeedsRoute from './Needs'
import AccountRoute from './Account'
import NotFoundRoute from './NotFound'

export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={() => <Home.component />} />
        {/* Build Route components from routeSettings */
        [
          AccountRoute,
          NeedsRoute,
          NeedsRoute,
          SignupRoute,
          LoginRoute
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${settings.path}`} {...settings} />
        ))}
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
