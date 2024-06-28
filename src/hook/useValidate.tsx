import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export function useValidate () {
  const getValidationCharacters = () => {
    const contextRes = useContext(LoginContext)

    if (contextRes === undefined) {
      return (
        // Hacer un componente si ocurre undefinend (40X)
        <div>
          Loading...
        </div>
      )
    } else {
      return contextRes
    }
  }

  return { getValidationCharacters }
}
