import React,{useEffect,useState} from "react";
import { Themecontexts } from "./Themecontext";

const ThemeProvider=({children})=>{
    const [theme,settheme]=useState("light");

    useEffect(()=>{
        if(theme ==="dark"){
            document.documentElement.classList.add("dark");
           
        }
        else{
            document.documentElement.classList.remove("dark");
        
        }

    },[theme])
    const toggletheme=()=>{
        settheme(theme==="light"?"dark":"light");
    }

    return(
        <>
        <Themecontexts.Provider value={{theme,toggletheme}}>
          {children}   
        </Themecontexts.Provider>
        </>
    )

}
export default ThemeProvider;