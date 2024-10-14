import {  useState } from 'react';

const useThemeToggle = (initialTheme: "light" | "dark") => {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    };

   

    return { theme, toggleTheme };
};

export const useDisplayToggle = (initialTheme:"List"|"grid")=>{
const [l,sl]=useState(initialTheme);
const ch=()=>{
    sl(p=>p=="List"?"grid":"List");
}
return { l,ch };

}

export default useThemeToggle;
