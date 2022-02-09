import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <h1 className="neonText">HAPPY</h1>
          <h2 className="neonText">HACKING</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
