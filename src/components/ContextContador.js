import { useState, createContext } from "react";

const ContextContador = createContext();

function ContadorProvider(props) {

  const [ count, setCount ] = useState(0)

  return (
    <ContextContador.Provider value={[count, setCount]}>
      {props.children}
    </ContextContador.Provider>
  )
}

export { ContextContador, ContadorProvider}