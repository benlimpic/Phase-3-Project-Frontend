import react, { useState } from 'react'
import Select from './Select'

const EntryForm = ( { entries, animals, smells, tastes, song, colors, addNewEntry } ) => {

    const [formData, setFormData] = useState({
        songId: '',
        animalId: '',
        colorId: '',
        smellId: '',
        tasteId: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const entryObj = {
            song_id: parseInt(formData.songId),
            animal_id: parseInt(formData.animalId),
            taste_id: parseInt(formData.tasteId),
            smell_id: parseInt(formData.smellId),
            color_id: parseInt(formData.colorId)
            } 
            // console.log(entryObj)
        fetch('http://localhost:9292/entries', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(entryObj)
          })
          .then(response => response.json())
          .then(data => {
            addNewEntry(data)
          } )
    }


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        // console.log(name)
        setFormData({...formData, [name]: value})
      }

  

    return (
        <form onSubmit={handleSubmit}>
        <label>
          New Entry:
          {/* <input type="select" value={'this is where song will be'} onChange={handleChange} /> */}
            <select name='songId' onChange={handleChange} value={formData.name}>
            <option>Select your random song!</option>
                <option value={song.id}>{song.song_name}</option>
            </select>
            <Select formData={formData} handleChange={handleChange} things={animals} thingId={'animalId'} thingName={'animal'} />
            <Select formData={formData} handleChange={handleChange} things={colors} thingId={'colorId'} thingName={'color'} />
            <Select formData={formData} handleChange={handleChange} things={smells} thingId={'smellId'} thingName={'smell'} />
            <Select formData={formData} handleChange={handleChange} things={tastes} thingId={'tasteId'} thingName={'taste'} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default EntryForm


