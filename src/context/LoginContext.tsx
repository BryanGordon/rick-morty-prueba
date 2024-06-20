import React, { createContext, useState } from "react";

interface LoginContextProps {
  children: React.ReactNode
}

type Login = {
  logged: boolean
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginContext = createContext<Login | undefined>(undefined)

export function LoginContextProvider ({ children }: LoginContextProps) {
  const [logged, setLogged] = useState(false)

  return (
    <LoginContext.Provider value={{ logged, setLogged }}> {children} </LoginContext.Provider>
  )
}
