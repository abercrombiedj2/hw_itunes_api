import { useState, useEffect } from "react";
import SongList from '../components/SongList';

const ChartContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <div>
            <h2>Top 20 Songs</h2>
            <SongList songs={songs} />
        </div>
    )
}

export default ChartContainer;