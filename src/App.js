import './App.css';
import Contador from './components/Contador';
import Header from './components/Header';
import { ContadorProvider } from './components/ContextContador';

function App() {

  return (
    <div className="App">
      <ContadorProvider>
        <Header></Header>
        <Contador></Contador>
      </ContadorProvider>
    </div>
  );
}

export default App;
