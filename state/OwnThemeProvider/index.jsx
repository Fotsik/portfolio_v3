import React, {useState, createContext} from 'react';

export const OwnThemeContext = createContext();

export const OwnThemeProvider = props => {
    const [theme, setTheme] = useState(false);

    return(
    <OwnThemeContext.Provider value={[theme, setTheme]}>{props.children}</OwnThemeContext.Provider>
    );
}