import react, { useState } from 'react'
import Select from './Select'

const EntryForm = ( { animals, smells, tastes, song, colors } ) => {

    const [formData, setFormData] = useState({
        animalId: '',
        colorId: '',
        smellId: '',
        tasteId: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handle submit')
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        console.log(name)
        setFormData({...formData, [name]: value})
      }

    console.log(formData)
    

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="select" value={'this is where song will be'} onChange={handleChange} />
          {/* <select name="animalId" value={formData.name} onChange={handleChange} > 
                <option>What kind of animal is this song?</option>
                {animals.map(
                    (animal) => {
                        return (
                            <>
                            <option value={animal.id}>
                                {animal.name}
                                {animal.emoji}
                            </option>
                            </>
                        )}
                )}
            </select> */}
            <Select formData={formData} handleChange={handleChange} things={animals} thingId={'animalId'} thingName={'animal'} />
            
            <select name="colorId" value={formData.name} onChange={handleChange}> 
                <option>What color is this song?</option>
                {colors.map(
                    (color) => {
                        return (
                            <>
                            <option value={color.id}>
                                {color.name}
                                {color.emoji}
                            </option>
                            </>
                        )}
                )}
            </select>
            <select name='smellId' value={formData.name} onChange={handleChange}> 
                <option>What does this song smell like?</option>
                {smells.map(
                    (smell) => {
                        return (
                            <>
                            <option value={smell.id}>
                                {smell.name}
                                {smell.emoji}
                            </option>
                            </>
                        )}
                )}
            </select>
            <select name='tasteId' value={formData.name} onChange={handleChange}> 
                <option>What does this song taste like?</option>
                {tastes.map(
                    (taste) => {
                        return (
                            <>
                            <option value={taste.id}>
                                {taste.name}
                                {taste.emoji}
                            </option>
                            </>
                        )}
                )}
            </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default EntryForm