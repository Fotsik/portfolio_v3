import React, {useState, createContext} from 'react';

export const MenuContext = createContext();

export const MenuProvider = props => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
    <MenuContext.Provider value={[menuIsOpen, setMenuIsOpen]}>{props.children}</MenuContext.Provider>
    );
}