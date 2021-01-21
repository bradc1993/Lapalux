import React from "react"

const Menu = ({ handleSongChange }) => {
  const songList = [
    "Oblivion",
    "Voltaic Acid",
    "Momentine",
    "Earth",
    "Hellix",
    "Thin Air (ft. JFDR)",
    "Limb to Limb (ft. Lilia)",
    "The Lux Quadrant (ft. JFDR)",
    "Amnioverse",
    "Esc",
  ]
  return (
    <>
      <div className="menu--list">
        {songList.map(song => (
          <h3
            className="menu--item"
            key={song}
            onClick={() => handleSongChange(song)}
          >
            {song}
          </h3>
        ))}
      </div>
    </>
  )
}

export default Menu
