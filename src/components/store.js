import React, { createContext, useContext, useReducer, useState } from "react"

const MenuContext = createContext()
const MenuUpdateContext = createContext()
const SongContext = createContext()
const EnteredContext = createContext()
const EnteredUpdateContext = createContext()

export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error(`useMenuContext must be called within MenuContextProvider`)
  }
  return context
}

export const useMenuUpdateContext = () => {
  const context = useContext(MenuUpdateContext)
  if (context === undefined) {
    throw new Error(
      `useMenuUpdateContext must be called within MenuContextProvider`
    )
  }
  return context
}

export const useSongContext = () => {
  const context = useContext(SongContext)
  if (context === undefined) {
    throw new Error(`useSongContext must be called within MenuContextProvider`)
  }
  return context
}

// export const useSongUpdateContext = () => {
//   const context = useContext(SongUpdateContext)
//   if (context === undefined) {
//     throw new Error(
//       `useSongUpdateContext must be called within MenuContextProvider`
//     )
//   }
//   return context
// }

export const useEnteredContext = () => {
  const context = useContext(EnteredContext)
  if (context === undefined) {
    throw new Error(
      `useEnteredContext must be called within MenuContextProvider`
    )
  }
  return context
}

export const useEnteredUpdateContext = () => {
  const context = useContext(EnteredUpdateContext)
  if (context === undefined) {
    throw new Error(
      `useEnteredUpdateContext must be called within MenuContextProvider`
    )
  }
  return context
}

// export const useMiniMenuContext = () => {
//   const context = useContext(MiniMenuContext)
//   if (context === undefined) {
//     throw new Error(
//       `useMiniMenuContext must be called within MenuContextProvider`
//     )
//   }
//   return context
// }

// export const useMiniMenuUpdateContext = () => {
//   const context = useContext(MiniMenuUpdateContext)
//   if (context === undefined) {
//     throw new Error(
//       `useMiniMenuUpdateContext must be called within MenuContextProvider`
//     )
//   }
//   return context
// }

const ContextProvider = ({ children }) => {
  const [menu, toggleMenu] = useState(false)
  
  const [entered, toggleEntered] = useState(false)
  const handleEnter = () => {
    toggleEntered(true)
    const audio = document.getElementById("current-song")
    audio.play()
  }

  const initialState = { song: "Limb to Limb (ft. Lilia)" }
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "Limb to Limb (ft. Lilia)":
        return { song: (state.song = "Limb to Limb (ft. Lilia)") }
      case "Oblivion":
        return { song: (state.song = "Oblivion") }
      case "Voltaic Acid":
        return { song: (state.song = "Voltaic Acid") }
      case "Momentine":
        return { song: (state.song = "Momentine") }
      case "Earth":
        return { song: (state.song = "Earth") }
      case "Hellix":
        return { song: (state.song = "Hellix") }
      case "Thin Air (ft. JFDR)":
        return { song: (state.song = "Thin Air (ft. JFDR)") }
      case "The Lux Quadrant (ft. JFDR)":
        return { song: (state.song = "The Lux Quadrant (ft. JFDR)") }
      case "Amnioverse":
        return { song: (state.song = "Amnioverse") }
      case "Esc":
        return { song: (state.song = "Esc") }
      default:
        throw new Error()
    }
  }, initialState)

  return (
    <EnteredContext.Provider value={entered}>
      <EnteredUpdateContext.Provider value={() => handleEnter()}>
        <MenuContext.Provider value={menu}>
          <MenuUpdateContext.Provider value={() => toggleMenu(!menu)}>
            <SongContext.Provider value={{ state, dispatch }}>
              {children}
            </SongContext.Provider>
          </MenuUpdateContext.Provider>
        </MenuContext.Provider>
      </EnteredUpdateContext.Provider>
    </EnteredContext.Provider>
  )
}

export default ContextProvider
