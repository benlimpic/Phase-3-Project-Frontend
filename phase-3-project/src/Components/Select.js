import react from 'react'

const Select = ( { formData, handleChange, things, thingId, thingName }) => {

    return (
        <select name={thingId} value={formData.name} onChange={handleChange} > 
        <option>What kind of {thingName} is this song?</option>
        {things.map(
            (thing) => {
                return (
                    <>
                    <option value={thing.id}>
                        {thing.name}
                        {thing.emoji}
                    </option>
                    </>
                )}
        )}
    </select>
    );
}

export default Select