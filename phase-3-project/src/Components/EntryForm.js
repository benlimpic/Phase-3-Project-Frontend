import react from 'react'



const EntryForm = ( { animals, song } ) => {

    // console.log(animals)
    // console.log(song)

  

    const animal = animals.map((animal) => {
        return <div>
            {animal.name}
            {animal.emoji}
        </div>
    })
    console.log(song)


    return (
        <div>
            {/* {animal}
            {song.song_name}
            {song.genre}
            {song.artist_name} */}
        </div>
    )
}

export default EntryForm