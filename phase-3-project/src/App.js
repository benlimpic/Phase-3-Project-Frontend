import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/entries')
    .then(resp => resp.json())
    .then(data => console.log(data))
  })



  return (
    <div className="App">
      <header className="App-header">
        <img src={'logo'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
