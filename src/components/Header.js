import "./Header.css"
import { useContext } from 'react'
import { ContextContador } from "./ContextContador"

const Header = (props) => {

  const [count] = useContext(ContextContador)

  return (
    <div className="header">
      <h1>Contador</h1>
      <div className="headerCount">{count}</div>
    </div>
  )
}

export default Header