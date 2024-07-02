import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { FavsContext } from '../context/FavsContext'
import { FavZonesContext } from '../context/FavsZonesContext'

export function useValidate () {
  const contextCharacters = useContext(FavsContext)
  const contextZones = useContext(FavZonesContext)
  const contextLogin = useContext(LoginContext)

  return { contextCharacters, contextZones, contextLogin }
}
