import { FC, PropsWithChildren, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProp = useMemo(()=> ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProp}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider