import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { login } from '../../../actions/auth';

export const LoginScreen = ({ history }) => {

  // const handleLogin = () => {
  //   history.push('/dashboard');
  //   // history.replace('/dashboard');
  // }
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: 'demiansamirtorres@gmail.com',
    password: '123456'
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(12345, 'demian'))
  }

  return (
    <div className="container mt-5">
      <h3>Login</h3>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit">Login</button>

        <div>
          <p>Login with social networks</p>

          <div>
            <div>
              <img
                // src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/register">Create new account</Link>
      </form>
    </div>
  )
}
