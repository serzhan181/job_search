import { auth } from '@/store/auth'
import { createContext, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    auth.init()
  }, [])

  return (
    <AuthContext.Provider value={auth.supabase}>
      {children}
    </AuthContext.Provider>
  )
}
