import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { HomeScreen } from '../landing/home/HomeScreen'
import { ContactScreen } from '../landing/contact/ContactScreen'
import { LoginScreen } from '../landing/login/LoginScreen'
import { DashboardRoutes } from '../routers/DashboardRoutes'
import { RegisterScreen } from '../landing/register/RegisterScreen'

export const AppRouter = () => {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Route path="/dashboard" component={DashboardRoutes} />
          <Route exact path="/" component={HomeScreen} />

          <Redirect to="/login" />

        </Switch>

      </div>
    </Router>
  )
}
