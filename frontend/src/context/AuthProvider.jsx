import { createContext, useContext, useState } from "react"
import React from 'react'

export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const initialauthUser = localStorage.getItem('User') || null
    const [authUser, setAuthUser] = useState(initialauthUser? JSON.parse(initialauthUser): null)
     return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
     )
}

export const useAuth = () => useContext(AuthContext)