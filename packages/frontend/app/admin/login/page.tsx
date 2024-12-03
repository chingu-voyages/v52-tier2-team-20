"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type UserCredentials = {
  email: string
  password: string
}

// TODO replace react-form, zod
function isValidUser({ email, password }: UserCredentials): boolean {
  const validUsersString = process.env.NEXT_PUBLIC_VALID_USERS

  if (!validUsersString) {
    console.error('Environment variable NEXT_PUBLIC_VALID_USERS is not defined')
    return false
  }

  const validUsers = validUsersString.split(',')

  
  return validUsers.some((user) => {
    const [validEmail, validPassword] = user.split(':')
    return validEmail === email && validPassword === password
  })
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const credentials: UserCredentials = { email, password }

    if (isValidUser(credentials)) {
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Login
