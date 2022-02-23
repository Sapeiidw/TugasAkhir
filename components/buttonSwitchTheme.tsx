import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ButtonSwitchTheme() {
    const [isMounted, setIsMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme == 'light' ? 'dark' : 'light')
        }
    }

    return (
        <>
            <button onClick={switchTheme} className="px-4 py-2 border-gray-900 text-gray-900 dark:text-white dark:border-white">Theme</button>
        </>
    )
}

