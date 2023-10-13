import { useContext, createContext } from "react";

export const Contextcreate = createContext(
    {
        themeMode :"light",
        darkTheme: ()=>{},
        lightTheme: ()=>{}
    }
);

export const ThemeProvider = Contextcreate.Provider;

export default function Theme(){
    return useContext(Contextcreate)
}
