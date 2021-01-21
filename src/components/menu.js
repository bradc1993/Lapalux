import React from "react"

const Menu = ({ closeMenu, changeAlbum }) => {
  const albumList = [
    "Oblivion",
    "Voltaic Acid",
    "Momentine",
    "Earth",
    "Hellix",
    "Thin Air (ft. JFDR)",
    "Limb To Limb (ft. Lilia)",
    "The Lux Quadrant (ft. JFDR)",
    "Amnioverse",
    "Esc",
  ]
  return (
    <div className="album-menu">
      <h4 className="album-menu--X" onClick={closeMenu}>
        x
      </h4>
      <div className="album-menu--list">
        {albumList.map(album => (
          <h3
            className="album-menu--item"
            key={album}
            onClick={() => changeAlbum(album)}
          >
            {album}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default Menu
