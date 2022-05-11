import react, { useState } from 'react'



const EntryForm = ( { animals, smells, tastes, song, colors } ) => {

    const [formData, setFormData] = useState([])

    const handleSubmit = () => {
        console.log('handle submit')
    }


    return (
        <form onSubmit={() => 'submit me'}>
        <label>
          Name:
          <input type="select" value={'value'} onChange={() => 'handle change'} />
          <select value={'animal'} > 
                <option>What kind of animal is this song?</option>
                {animals.map(
                    (animal) => {
                        return (
                            <>
                            <option>
                                {animal.name}
                                {animal.emoji}
                            </option>
                            </>
                        )}
                )}
            </select>
            <select value={'color'} > 
                <option>What color is this song?</option>
                {colors.map(
                    (color) => {
                        return (
                            <>
                            <option>
                                {color.name}
                                {color.emoji}
                            </option>
                            </>
                        )}
                )}
            </select>
            <select value={'smell'} > 
                <option>What does this song smell like?</option>
                {smells.map(
                    (smell) => {
                        return (
                            <>
                            <option>
                                {smell.name}
                                {smell.emoji}
                            </option>
                            </>
                        )}
                )}
            </select>
            <select value={'taste'} > 
                <option>What does this song taste like?</option>
                {tastes.map(
                    (taste) => {
                        return (
                            <>
                            <option>
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