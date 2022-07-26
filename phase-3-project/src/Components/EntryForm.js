import react, { useState, useEffect } from 'react'
import Select from './Select'
import './EntryForm.css'

const EntryForm = ( { isEdit, animals, smells, tastes, songs, colors, addNewEntry, formData, setFormData, getEntries, setIsEdit} ) => {

    // useEffect(() => {
    //   console.log("FORM STATE ")
    //   console.log(formData)
    // }, [formData])

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!isEdit && formData.animal_id !== null) {
        const entryObj = {
          song_id: parseInt(formData.song_id),
          animal_id: parseInt(formData.animal_id),
          taste_id: parseInt(formData.taste_id),
          smell_id: parseInt(formData.smell_id),
          color_id: parseInt(formData.color_id)
          } 
      fetch('http://localhost:9292/entries', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(entryObj)
        })
        .then(response => response.json())
        .then(data => {
          addNewEntry(data)
          setFormData({
            song_id: '',
            animal_id: '',
            color_id: '',
            smell_id: '',
            taste_id: ''
          })
          setIsEdit(false)
        } )
      } else {
        fetch(`http://localhost:9292/entries/${formData.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            })
        .then((r) => r.json())
        .then((updatedEntry) => {
          getEntries();
          setFormData({
            song_id: '',
            animal_id: '',
            color_id: '',
            smell_id: '',
            taste_id: ''
          })
          // setIsEdit(false)
        }); 
      }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({...formData, [name]: value})
      }

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Songesthesia:
            <select name={'song_id'} value={formData.song_id} onChange={handleChange} > 
              <option>Select a song!</option>
              {songs.map(
                  (song) => {
                    return (
                        <>
                        <option value={song.id} key={song.id}>
                            {song.song_name}
                        </option>
                        </>
                    )}
                  )}
             </select>
            <Select value={formData.animal_id} handleChange={handleChange} things={animals} thingId={'animal_id'} thingName={'animal'} />
            <Select value={formData.color_id} handleChange={handleChange} things={colors} thingId={'color_id'} thingName={'color'} />
            <Select value={formData.smell_id} handleChange={handleChange} things={smells} thingId={'smell_id'} thingName={'smell'} />
            <Select value={formData.taste_id} handleChange={handleChange} things={tastes} thingId={'taste_id'} thingName={'taste'} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default EntryForm
