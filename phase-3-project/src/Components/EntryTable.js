
import Entry from './Entry'


const EntryTable = ( { entries } ) => {

    const entry = entries.map((entry) => {
        return ( 
        <>
        {entry.song_id}
        {entry.animal_id}
        </>
    )
    })

    return (
        <div>
            <ul>
                {entry}
            </ul>
        </div>
    )
}

export default EntryTable