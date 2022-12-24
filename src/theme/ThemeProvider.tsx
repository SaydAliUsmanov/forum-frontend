import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContent } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps = useMemo(()=> ({
		theme: theme,
		setTheme: setTheme
	}),[theme])

	return (
		<ThemeContent.Provider value={defaultProps}>
			{children}
		</ThemeContent.Provider>
	)
}

export default ThemeProvider