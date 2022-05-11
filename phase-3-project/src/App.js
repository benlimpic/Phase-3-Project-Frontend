import './App.css';
import { useState, useEffect } from 'react'
import EntryForm from './Components/EntryForm';
import EntryTable from './Components/EntryTable';
import Header from './Components/Header';

function App() {

  // const [entries, setEntries] = useState([])
  const [song, setSong] = useState([])
  const [animals, setAnimals] = useState([])
  const [smells, setSmells] = useState([])
  const [colors, setColors] = useState([])
  const [tastes, setTastes] = useState([])
  const [entries, setEntries] = useState([])



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

  console.log(song)


  return (
    <div className="App">
      <Header />
      <EntryForm song={song} animals={animals} smells={smells} tastes={tastes} colors={colors} />
      <EntryTable entries={entries} />
    </div>
  );
}

export default App;
