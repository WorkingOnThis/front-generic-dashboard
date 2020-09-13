import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { HomeScreen } from '../components/landing/home/HomeScreen'
import { ContactScreen } from '../components/landing/contact/ContactScreen'
import { LoginScreen } from '../components/landing/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { RegisterScreen } from '../components/landing/register/RegisterScreen'

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
