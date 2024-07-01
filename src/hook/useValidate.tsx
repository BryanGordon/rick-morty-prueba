import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { FavsContext } from "../context/FavsContext";
import { FavZonesContext } from "../context/FavsZonesContext";
import { Error406 } from "../components/Error406";

export function useValidate () {
  const contextCharacters = useContext(FavsContext)
  const contextZones = useContext(FavZonesContext)
  const contextLogin = useContext(LoginContext)

  if ((contextCharacters === undefined) || (contextZones === undefined) || (contextLogin === undefined)) {
    return (
      <Error406 />
    )
  }
  /*
  const getValidationCharacters = () => {
    const contextRes = useContext(FavsContext)
    if (contextRes === undefined) {
      return (
        <Error406 />
      )
    } else {
      return contextRes
    }
  }

  const getValidationZones = () => {
    const contextRes = useContext(FavZonesContext)

    if (contextRes === undefined) {
      return (
        <Error406 />
      )
    } else {
      return contextRes
    }
  }

  const getValidationLogin = () => {
    const contextRes = useContext(LoginContext)

    if (contextRes === undefined) {
      return (
        <Error406 />
      )
    } else {
      return contextRes
    }
  }
  */

  return { contextCharacters, contextZones, contextLogin }
}
