import React, { createContext, useReducer } from "react"

const initialState = { menu: false, song: "Limb to Limb (ft. Lilia)" }
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
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

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }

// export const MenuContext = createContext()
// export const MenuUpdateContext = createContext()

// const MenuContextProvider = ({ children }) => {
//   const [menu, toggleMenu] = useState(false)

//   return (
//     <MenuContext.Provider value={menu}>
//       <MenuUpdateContext.Provider value={toggleMenu}>
//         {children}
//       </MenuUpdateContext.Provider>
//     </MenuContext.Provider>
//   )
// }

// export default MenuContextProvider