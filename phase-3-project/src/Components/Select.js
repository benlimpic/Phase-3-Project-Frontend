import react from 'react'
import { useState, useEffect } from 'react'


const Select = ( { value, handleChange, things, thingId, thingName }) => {
    // useEffect(() => {
    //     console.log(formData)
    //   }, [formData])
    return (
        <select name={thingId} value={value} onChange={handleChange} > 
        <option>What kind of {thingName} is this song?</option>
        {things.map(
            (thing) => {
                return (
                    <>
                    <option value={thing.id} key={thing.id}>
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