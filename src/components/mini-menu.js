import React from "react"
import { useSongContext } from "./store"

const MiniMenu = () => {
  const { dispatch } = useSongContext()
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
    <div className="minimenu--list">
      {songList.map(song => (
        <h3
          className="minimenu--item"
          key={song}
          onClick={() => dispatch({ type: song })}
        >
          {song}
        </h3>
      ))}
    </div>
  )
}

export default MiniMenu
