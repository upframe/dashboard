import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    const fetchBody = {
      email, password
    }
    const fetchData = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(fetchBody),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('https://api.upframe.io/auth/login', fetchData)
      .then((res) => res.json())
      .then((res) => {
        //TODO
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login