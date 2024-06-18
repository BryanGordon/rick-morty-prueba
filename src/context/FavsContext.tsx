import React, { createContext, useState } from 'react';
import { Characters } from '../types/api';

interface FavsContextProps {
  children: React.ReactNode
}

interface Favs {
  favs: Characters[]
  setFavs: React.Dispatch<React.SetStateAction<Characters[]>>
}

export const FavsContext = createContext<Favs | undefined>(undefined)

export function FavsContextProvider ({ children }: FavsContextProps) {
  const [favs, setFavs] = useState<Characters[]>([])

  return <FavsContext.Provider value={{ favs, setFavs }}> {children} </FavsContext.Provider>
}
