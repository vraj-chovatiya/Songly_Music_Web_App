import React, { useState } from "react";
import { searchSongs } from "../../services/jioSaavnAPI";
import SongCard from "./SongCard";
import "./HomePage.css";
import Player from "../../components/Player_Pannel/Player";

function SongList() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [currentSong, setCurrentSong] = useState(null);

  const handleSearch = async () => {
    setError(""); // Reset error message
    const results = await searchSongs(query);
    if (results.length > 0) {
      setSongs(results);
    } else {
      setSongs([]);
      setError("Failed to fetch songs. Please try again later.");
    }
  };

  const handlePlay = (song) => {
    setCurrentSong({
      title: song.name,
      artist: song.singers,
      imageUrl: song.image[0]?.url,
      url: song.downloadUrl?.[0]?.url || song.url,
    });
  };

  return (
    <>

      <div className="song-search-container">
        <h2>Search Songs</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for songs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="song-results">
          {songs.length > 0 ? (
            songs.map((song) => (
              <SongCard
                key={song.id}
                name={song.name}
                artist={song.singers}
                imageUrl={song.image[0].url}
                onPlay={() => handlePlay(song)}
              />
            ))
          ) : (
            !error && <p>No songs found. Try searching for something!</p>
          )}
        </div>
      </div>

      <Player song={currentSong} />
    </>
  );
}

export default SongList;