import { useEffect, useState } from "react";

const THEMES = ["default", "light"] as const;
export type Theme = typeof THEMES[number];

export function useTheme(){
    const [theme, setTheme] = useState<Theme>(
        ()=>(localStorage.getItem("apex-theme") as Theme) ?? "default"
    );

    useEffect(()=>{
        const root = document.documentElement;
        THEMES.forEach((t)=> root.classList.remove(t));
        if (theme!=="default") root.classList.add(theme);
        localStorage.setItem("apex-theme", theme);
    },[theme])

    return {theme, setTheme, themes: THEMES}
}