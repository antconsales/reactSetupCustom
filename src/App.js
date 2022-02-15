import logo from "./logo.svg";
import "./App.css";
import Wall from "./assets/videos/wall.mp4";

import applicationStore from './applicationStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={applicationStore}>
        <video autoPlay muted loop className="myVideo">
          <source src={Wall} type="video/mp4" />
        </video>
        <div className="App">
          <header className="App-header">
            <div className="container">
              <h1 className="neonText">HAPPY</h1>
              <h2 className="neonText">HACKING</h2>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </header>
        </div>
      </Provider>
    </>
  );
}

export default App;
