import React from "react"
import { useSongContext } from "./store"
import { useMenuUpdateContext } from "./store"

const Menu = () => {
  const { dispatch } = useSongContext()
  const toggleMenu = useMenuUpdateContext()
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
    <div className="menu--list">
      {songList.map(song => (
        <h3
          className="menu--item"
          key={song}
          onClick={() => (dispatch({ type: song }), toggleMenu(false))}
        >
          {song}
        </h3>
      ))}
    </div>
  )
}

export default Menu
