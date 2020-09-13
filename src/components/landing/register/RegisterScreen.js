import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div className="container mt-5">
      <h3>Register</h3>

      <form>
        <input type="text" placeholder="Name" name="name" autoComplete="off" />

        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          autoComplete="off"
        />

        <button type="submit">Register</button>

        <Link to="/login">Already registered?</Link>
      </form>
    </div>
  )
}
