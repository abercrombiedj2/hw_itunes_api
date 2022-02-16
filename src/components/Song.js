const Song = ({position, title, artist, image}) => {
    return (
        <li><img src={image} />{position} {title} by {artist}</li>
    )
}

export default Song;