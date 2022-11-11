import './App.css';
import Contador from './components/Contador';
import Header from './components/Header';
import ContextContador from './components/ContextContador';
import { useState } from "react"

function App() {

  const [ count, setCount ] = useState(0)
  return (
    <div className="App">
      <ContextContador.Provider value={[count, setCount]}>
        <Header></Header>
        <Contador></Contador>
      </ContextContador.Provider>
    </div>
  );
}

export default App;
