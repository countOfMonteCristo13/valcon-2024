import { LuMoon, LuSun } from "react-icons/lu"
import { vars } from "../../styles/vars.css"
import { cursorPointer } from "../../styles/index.css"

type ToggleThemeProps = {
    theme: boolean
    toggleTheme: () => void,
}

const ToggleThemeButton = ({ theme, toggleTheme }: ToggleThemeProps) => {
    return (
        <div className={cursorPointer}>
            {theme ? 
                <LuMoon size={32} color={vars.colors.primary} onClick={toggleTheme}/> 
                : 
                <LuSun size={32} color={vars.colors.primary} onClick={toggleTheme}/>
            }
        </div>
    )
}

export default ToggleThemeButton