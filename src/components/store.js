import React, { createContext, useContext, useReducer, useState } from "react"

const MenuContext = createContext()
const MenuUpdateContext = createContext()
const SongContext = createContext()
const SongUpdateContext = createContext()

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

const MenuContextProvider = ({ children }) => {
  const [menu, toggleMenu] = useState(false)

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
    <MenuContext.Provider value={menu}>
      <MenuUpdateContext.Provider value={() => toggleMenu(!menu)}>
        <SongContext.Provider value={{ state, dispatch }}>
          {children}
        </SongContext.Provider>
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  )
}

export default MenuContextProvider
