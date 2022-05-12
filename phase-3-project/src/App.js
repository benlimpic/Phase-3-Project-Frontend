import './App.css';
import { useState, useEffect } from 'react'
import EntryForm from './Components/EntryForm';
import EntryTable from './Components/EntryTable';
import Header from './Components/Header';

function App() {

  const [song, setSong] = useState([])
  const [entries, setEntries] = useState([])
  const [animals, setAnimals] = useState([])
  const [smells, setSmells] = useState([])
  const [colors, setColors] = useState([])
  const [tastes, setTastes] = useState([])

  useEffect(() => {
    console.log(entries)
  }, [entries])


  useEffect(() => {
    fetch('http://localhost:9292/entries')
    .then(resp => resp.json())
    .then(data => setEntries(data))
  }, [])


  useEffect(() => {
    fetch('http://localhost:9292/animals')
    .then(resp => resp.json())
    .then(data => setAnimals(data))
  }, [])


  useEffect(() => {
    fetch('http://localhost:9292/song')
    .then(resp => resp.json())
    .then(data => setSong(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/smells')
    .then(resp => resp.json())
    .then(data => setSmells(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/colors')
    .then(resp => resp.json())
    .then(data => setColors(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/tastes')
    .then(resp => resp.json())
    .then(data => setTastes(data))
  }, [])

  const addNewEntry = (entryObj) => {
    setEntries([...entries, entryObj])
  }

  const deleteEntry = (id) => {
    const oneLess = entries.filter((entry) => entry.id !== id)
    setEntries(oneLess)
  }

  return (
    <div className="App">
      <Header />
      <EntryForm 
        song={song} 
        animals={animals} 
        smells={smells} 
        tastes={tastes} 
        colors={colors} 
        addNewEntry={addNewEntry}
        entries={entries}
        />
      <EntryTable entries={entries} deleteEntry={deleteEntry} />
    </div>
  );
}

export default App;
