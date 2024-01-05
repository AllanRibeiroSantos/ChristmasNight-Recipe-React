import { createContext, useState } from "react"

export const ContextBanner = createContext();

export function ContextBannerProvider({children}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <ContextBanner.Provider value={{ toggleMenu, setToggleMenu }} >
      {children}
    </ContextBanner.Provider>
  )
}