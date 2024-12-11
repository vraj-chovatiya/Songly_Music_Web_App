import React from "react";
import SongList from "./SongList";
import "./HomePage.css";

function HomePage() {

  const handleClick = () => {
    alert("Search your favorite songs and start listening!");
  }

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Songly</h1>
        <p>Discover, Stream, and Share Your Favorite Music</p>
        <button className="cta-button" onClick={handleClick}>Start Listening</button>
      </section>

      {/* Song Search */}
      <SongList />
    </div>
  );
}

export default HomePage;
