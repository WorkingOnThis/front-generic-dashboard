import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Navbar } from '../dashboard/layout/Navbar'
import { HomeDashboardScreen } from '../dashboard/home/HomeDashboardScreen'
import { SettingsScreen } from '../dashboard/settings/SettingsScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/dashboard/home" component={HomeDashboardScreen} />
          <Route exact path="/dashboard/settings" component={SettingsScreen} />

          <Redirect to="/dashboard/home" />
        </Switch>
      </div>
    </>
  )
}
