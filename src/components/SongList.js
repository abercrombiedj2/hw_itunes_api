import Song from './Song';

const SongList = ({songs}) => {

    const top20 = songs.map((song, index) => {
        return <Song
        key={index}
        position={index + 1}
        title={song['im:name'].label}
        artist={song['im:artist'].label}
        image={song['im:image'][2].label}
        />
    })

    return (
        <div>
            <ul>
                {top20}
            </ul>
        </div>
    )
}

export default SongList;