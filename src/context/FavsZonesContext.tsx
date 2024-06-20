import React, { createContext, useState } from "react";
import { Locations } from "../types/api";

interface FavZonesContextProps {
  children: React.ReactNode
}

type FavZones = {
  favZones: Locations[]
  setFavZones: React.Dispatch<React.SetStateAction<Locations[]>>
}

export const FavZonesContext = createContext<FavZones | undefined>(undefined)

export function FavZonesContextProvider ({ children }: FavZonesContextProps) {
  const [favZones, setFavZones] = useState<Locations[]>([])

  return (
    <FavZonesContext.Provider value={{ favZones, setFavZones }}> {children} </FavZonesContext.Provider>
  )
}
