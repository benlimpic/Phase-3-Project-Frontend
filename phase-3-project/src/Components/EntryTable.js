
import Entry from './Entry'
import Table from 'react-bootstrap/Table'


const EntryTable = ( { entries } ) => {
   
console.log(entries)
    // const entry = entries.map((entry) => {
    //     // console.log(entry)
    //     return ( <Entry  
    //         entry={entry}
    //         songName={entry.song.song_name}
    //         artistName={entry.song.artist_name}
    //         // {entry.song.genre}
    //         // {entry.id} 
    //     />
    //     )
    // })

    return (
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

        <table>
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
            </tr>
          )
        })}
      </table>
    )
}




export default EntryTable