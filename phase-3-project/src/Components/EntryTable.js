import { useEffect } from 'react'
import Table from 'react-bootstrap/Table'


const EntryTable = ( { entries, deleteEntry } ) => {
    // useEffect(() => {
    //     console.log(entries)
    // }, [entries] )

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
                    <td><button>edit me!</button></td>
                    <td><button onClick={(e) => handleDelete(entry.id)}>delete me!</button></td>
                    </tr>
                    )
                    })}
            </tbody>
        </table>
    )
}




export default EntryTable



      // <Table striped bordered hover variant="dark">
        //     <thead>
        //         <tr>
        //         <th>#</th>
        //         <th>First Name</th>
        //         <th>Last Name</th>
        //         <th>Username</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //         <td>1</td>
        //         <td>Mark</td>
        //         <td>Otto</td>
        //         <td>@mdo</td>
        //         </tr>
        //         <tr>
        //         <td>2</td>
        //         <td>Jacob</td>
        //         <td>Thornton</td>
        //         <td>@fat</td>
        //         </tr>
        //         <tr>
        //         <td>3</td>
        //         <td colSpan={2}>Larry the Bird</td>
        //         <td>@twitter</td>
        //         </tr>
        //     </tbody>
        // </Table>