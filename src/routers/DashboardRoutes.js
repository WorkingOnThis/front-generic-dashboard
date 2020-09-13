import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Navbar } from '../components/dashboard/layout/Navbar'
import { HomeDashboardScreen } from '../components/dashboard/home/HomeDashboardScreen'
import { SettingsScreen } from '../components/dashboard/settings/SettingsScreen'

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
