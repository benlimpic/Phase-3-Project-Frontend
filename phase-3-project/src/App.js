import './App.css';
import { useState, useEffect } from 'react'
import EntryForm from './Components/EntryForm';
import EntryTable from './Components/EntryTable';


function App() {

  const [songs, setSongs] = useState([])
  const [entries, setEntries] = useState([])
  const [animals, setAnimals] = useState([])
  const [smells, setSmells] = useState([])
  const [colors, setColors] = useState([])
  const [tastes, setTastes] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  const emptyForm = {
    song_id: '',
    animal_id: '',
    color_id: '',
    smell_id: '',
    taste_id: ''
  }

  const [formData, setFormData] = useState(emptyForm)
 
  // useEffect(() => {
  //   console.log(entries)
  // }, [entries])

  const getEntries = () => {
    fetch('http://localhost:9292/entries')
    .then(resp => resp.json())
    .then(data => setEntries(data))
  }

  useEffect(() => getEntries, [])


  useEffect(() => {
    fetch('http://localhost:9292/animals')
    .then(resp => resp.json())
    .then(data => setAnimals(data))
  }, [])


  useEffect(() => {
    fetch('http://localhost:9292/songs')
    .then(resp => resp.json())
    .then(data => setSongs(data))
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

  const enterEditMode = (entryObj) => {
    if (!isEdit) {
      setIsEdit(true)
      setFormData(entryObj)
  }
}

  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])


  return (
    <div className="App">
      <EntryForm 
        songs={songs} 
        animals={animals} 
        smells={smells} 
        tastes={tastes} 
        colors={colors} 
        addNewEntry={addNewEntry}
        isEdit={isEdit}
        formData={formData}
        setFormData={setFormData}
        getEntries={getEntries}
        setIsEdit={setIsEdit}
        /> 
      <EntryTable 
        entries={entries} 
        deleteEntry={deleteEntry} 
        enterEditMode={enterEditMode} 
         />
    </div>
  );
}

export default App;
