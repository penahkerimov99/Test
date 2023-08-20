import { createContext, useContext, useState } from "react";



const Context = createContext(null);

export const MainContext = ({ children }) => {

    const [openSingin, setOpenSingin] = useState('none');
    const [openForm, setOpenForm] = useState('-200%');
    const [menu , setMenu] = useState("-100%");
    const [menuBg, setMenuBg] = useState("-100%");

    const globalStates = { openSingin, setOpenSingin, openForm, setOpenForm, menu, setMenu, menuBg, setMenuBg };

    return (
        <Context.Provider value={globalStates}>{children}</Context.Provider>
    );
};

export const useMainContext = () => useContext(Context);