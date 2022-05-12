import react, { useState } from 'react'
import Select from './Select'

const EntryFormEdit = ( { entries, animals, smells, tastes, song, colors, exitEditMode, form } ) => {

    const [formState, setFormState] = useState({
        songId: '',
        animalId: '',
        colorId: '',
        smellId: '',
        tasteId: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        exitEditMode()
        // const entryObj = {
        //     song_id: parseInt(formState.songId),
        //     animal_id: parseInt(formState.animalId),
        //     taste_id: parseInt(formState.tasteId),
        //     smell_id: parseInt(formState.smellId),
        //     color_id: parseInt(formState.colorId)
        //     } 
            // console.log(entryObj)
        // fetch('http://localhost:9292/entries', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(entryObj)
        //   })
        //   .then(response => response.json())
        //   .then(data => {
        //     addNewEntry(data)
        //   } )
    }


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        // console.log(name)
        setFormState({...formState, [name]: value})
      }

  

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Update Entry:
            <select name='songId' onChange={handleChange} value={formState.name}>
            <option>Select your random song!</option>
                <option value={song.id}>{song.song_name}</option>
            </select>
            <Select formData={formState} handleChange={handleChange} things={animals} thingId={'animalId'} thingName={'animal'} />
            <Select formData={formState} handleChange={handleChange} things={colors} thingId={'colorId'} thingName={'color'} />
            <Select formData={formState} handleChange={handleChange} things={smells} thingId={'smellId'} thingName={'smell'} />
            <Select formData={formState} handleChange={handleChange} things={tastes} thingId={'tasteId'} thingName={'taste'} />
        </label>
        <input type="submit" value="Save Updated Entry" />
      </form>
    )
}

export default EntryFormEdit


