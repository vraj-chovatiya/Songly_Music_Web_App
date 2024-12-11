import React, { useState, useEffect, useRef } from "react";
import "./Player.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Player = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play or Pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update the current time
  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Set the audio duration
  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Seek to a specific time
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
  };

  useEffect(() => {
    if (song && song.url) {
      audioRef.current.load(); // Load new song
      setIsPlaying(true);
      audioRef.current.play();
    }
  }, [song]);

  return (
    <div className="player-container">
      {/* Song Information */}
      <div className="song-info">
        <img src={song?.imageUrl} alt="Song Art" className="album-art" />
        <div>
          <h4>{song?.title || "No Song Selected"}</h4>
          <p>{song?.artist || ""}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={() => {}}>
          <i className="fas fa-step-backward"></i>
        </button>
        <button onClick={togglePlayPause}>
          <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
        </button>
        <button onClick={() => {}}>
          <i className="fas fa-step-forward"></i>
        </button>
        <button>
          <i className="fas fa-random"></i>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <input
          type="range"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
        <div className="time-stamp">
          {Math.floor(currentTime / 60)}:{("0" + Math.floor(currentTime % 60)).slice(-2)} /{" "}
          {Math.floor(duration / 60)}:{("0" + Math.floor(duration % 60)).slice(-2)}
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      >
        <source src={song?.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
