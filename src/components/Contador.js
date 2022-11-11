import "./Contador.css"
import { useContext } from 'react'
import ContextContador from "./ContextContador"


const Contador = (props) => {

  const [ count, setCount ] = useContext(ContextContador)

  function increaseCount() {
    setCount(previous => previous + 1)
  }

  function decreaseCount() {
    setCount(previous => previous - 1)
  }

  return (
    <div className="count">
      <div>{count}</div>
      <button onClick={decreaseCount} className="btn">-</button>
      <button onClick={increaseCount} className="btn">+</button>
    </div>
  )
}

export default Contador