import React from "react";
import "./SongCard.css";

function SongCard({ name, artist, imageUrl, onPlay }) {
  return (
    <div className="song-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{artist}</p>
      <button onClick={onPlay} className="play-button">Play</button>
    </div>
  );
}

export default SongCard;
