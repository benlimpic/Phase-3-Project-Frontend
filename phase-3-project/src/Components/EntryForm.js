import react, { useState, useEffect } from 'react'
import Select from './Select'
import './EntryForm.css'

const EntryForm = ( { isEdit, emptyForm, entries, animals, smells, tastes, songs, colors, addNewEntry, exitEditMode, formData, setFormData, editForm, getEntries} ) => {


    useEffect(() => {
      console.log("FORM STATE ")
      console.log(formData)
    }, [formData])


    

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!isEdit) {
        const entryObj = {
          song_id: parseInt(formData.song_id),
          animal_id: parseInt(formData.animal_id),
          taste_id: parseInt(formData.taste_id),
          smell_id: parseInt(formData.smell_id),
          color_id: parseInt(formData.color_id)
          } 
        console.log(entryObj)
      //     console.log(entryObj)
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
        } )
      } else {
        // return null
        // setFormData(editForm)
        console.log(formData.id)
        // console.log(editForm.id)
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
        }); 
      }
    }

  

     // if (isEdit) {
      //   console.log('edit is true')
      // } else {
      //   const entryObj = {
      //     song_id: parseInt(formData.songId),
      //     animal_id: parseInt(formData.animalId),
      //     taste_id: parseInt(formData.tasteId),
      //     smell_id: parseInt(formData.smellId),
      //     color_id: parseInt(formData.colorId)
      //     } 
      // }
        // if (!isEdit) {

        // }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        // console.log(name)
        setFormData({...formData, [name]: value})
      }

  

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Songesthesia:
          </label>
            {/* <select name='song_id' onChange={handleChange} value={formData.song_id}>
                <option value={song.id}>{song.song_name}</option>
            </select> */}
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

        <input type="submit" value="Submit" />
      </form>
    )
}

export default EntryForm





    // const [formData, setFormData] = useState({
    //     songId: '',
    //     animalId: '',
    //     colorId: '',
    //     smellId: '',
    //     tasteId: ''
    // })

    // const [formData, setFormData] = useState(emptyForm)