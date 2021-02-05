import React, {createContext, useState} from 'react';

export const SectionContext = createContext();

export const SectionProvider = props =>{
    const [section, setSection] = useState('welcome');

    return(
        <SectionContext.Provider value={[section, setSection]}>{props.children}</SectionContext.Provider>
    );
}
