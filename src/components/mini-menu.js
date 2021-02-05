import React, { useEffect, useState } from "react"
import { useSongContext } from "./store"
import SkipNext from "../images/skip_next.png"
import SkipPrevious from "../images/skip_previous.png"

const CurrentTime = () => {
  const audio = document.getElementById("current-song")
  const [formattedTime, setFormattedTime] = useState("0:00")
  const [formattedDuration, setFormattedDuration] = useState("-:--")

  const parseDuration = () => {
    let s = parseInt(audio.duration % 60)
    if (s < 10) {
      s = "0" + s
    } else if (isNaN(s)) {
      s = "--"
    }
    let m = parseInt((audio.duration / 60) % 60)
    if (isNaN(m)) {
      m = "-"
    }
    return m + ":" + s
  }

  useEffect(() => {
    setFormattedDuration(parseDuration())
    audio.addEventListener(
      "timeupdate",
      function parseTime() {
        let s = parseInt(audio.currentTime % 60)
        if (s < 10) {
          s = "0" + s
        }
        const m = parseInt((audio.currentTime / 60) % 60)
        setFormattedTime(m + ":" + s)

        return function cleanUp() {
          audio.removeEventListener("timeupdate", parseTime)
        }
      },
      []
    )
  })
  return (
    <h4>
      {formattedTime} / {formattedDuration}
    </h4>
  )
}

const MiniMenu = () => {
  const { state, dispatch } = useSongContext()
  const song = state["song"]
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
  const previousSong = () => {
    const currentSong = songList.filter(s => s == song)[0]
    const previousSong = songList[songList.indexOf(currentSong) - 1]
    if (songList.indexOf(currentSong) === 0) {
      dispatch({ type: songList[9] })
    } else {
      dispatch({ type: previousSong })
    }
  }
  const nextSong = () => {
    const currentSong = songList.filter(s => s == song)[0]
    const nextSong = songList[songList.indexOf(currentSong) + 1]
    if (songList.indexOf(currentSong) === 9) {
      dispatch({ type: songList[0] })
    } else {
      dispatch({ type: nextSong })
    }
  }

  return (
    <div className="minimenu--list">
      <CurrentTime />
      {/* <h2
        className="minimenu--item"
        key={song}
        onClick={() => dispatch({ type: song })}
      >
        {songList.filter(s => s == song)[0]}
      </h2> */}
      <img
        src={SkipPrevious}
        alt="Click for previous song."
        className="arrow-btn"
        onClick={() => previousSong()}
      />
      <img
        src={SkipNext}
        alt="Click for next song."
        className="arrow-btn"
        onClick={() => nextSong()}
      />
    </div>
  )
}

export default MiniMenu
