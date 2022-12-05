import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
function App() {
  const carinfo = {
    name: "Ford",
    model: "Mustang"
  };

  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <Car model={carinfo.model} />
        <Events />
      </header>
    </div>
  );
}

export default App;