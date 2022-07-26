import { useEffect } from 'react'
import './EntryTable.css'

const EntryTable = ( { entries, deleteEntry, enterEditMode } ) => {
    
    const handleDelete = (id) => {
        fetch(`http://localhost:9292/entries/${id}`, {
          method: "DELETE",
        });
        deleteEntry(id)
    }

    return (

        <table>
            <tbody>
                <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Taste</th>
                <th>Smell</th>
                <th>Color</th>
                <th>Animal</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
                {entries.map((entry) => {
                return (
                    <tr key={entry.id}>
                    <td>{entry.song.song_name}</td>
                    <td>{entry.song.artist_name}</td>
                    <td>{entry.song.genre}</td>
                    <td>{entry.taste.emoji}</td>
                    <td>{entry.smell.emoji}</td>
                    <td>{entry.color.emoji}</td>
                    <td>{entry.animal.emoji}</td>
                    <td><button onClick={(e) => enterEditMode({
                        song_id: entry.song_id.toString(),
                        animal_id: entry.animal_id.toString(),
                        color_id: entry.color_id.toString(),
                        smell_id: entry.smell_id.toString(),
                        taste_id: entry.taste_id.toString(),
                        id: entry.id.toString()
                    })}><i class="fa-solid fa-pen-to-square"></i></button></td>
                    <td><button onClick={(e) => handleDelete(entry.id)}><i class="fa-solid fa-ban"></i></button></td>
                    </tr>
                )})}
            </tbody>
        </table>
    )
}

export default EntryTable

