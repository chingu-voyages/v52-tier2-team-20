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
    <div className="flex flex-col max-w-[228px] mx-auto">
      <form className="w-full space-y-5" onSubmit={handleLogin}>
        <div className="flex flex-col items-center">
            <div className='mt-[3rem] mb-[3rem] flex justify-center'>
                <img src="/images/logo.png" style={{width: "121.91px", height: "74px"} } alt="logo" />
            </div>
            <div className="relative">
                <label htmlFor="password" className="text-base text-letter-grey font-inter">Email Address</label>
                <input
                    className="mt px-2 py-1 w-full h-[30px] border rounded text-sm"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mt-[1rem] relative'>
                <label htmlFor="password" className="text-base text-letter-grey font-inter">Password</label>
                <input
                    className="mt px-2 py-1 w-full h-[30px] border rounded text-sm"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="bg-font-montserrat text-black-text font-semibold border border-yellow-cta rounded-[5px] mt-[3rem] px-[97px] py-[7px] my-5 bg-yellow-cta" type="submit">Login</button>
      
        </div>

      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Login
