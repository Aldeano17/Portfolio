import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
function App() {
  return (
    <div className="App">
      <Navbar id='navbar'/>
      <Home />
    </div>
  );
}

export default App;
