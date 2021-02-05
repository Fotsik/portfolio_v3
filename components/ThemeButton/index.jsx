import React, {useEffect, useContext } from 'react';
import CheckBoxWrapper from './styled/CheckBoxWrapper';
import { CheckBox, CheckBoxLabel } from './styled/CheckBox';
import { OwnThemeContext } from '../../state/OwnThemeProvider';

export default function ThemeButton(){
    const [theme, setTheme] = useContext(OwnThemeContext);
    
    function changeTheme(){
        setTheme(!theme);
    }

    return (
        <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" onClick={changeTheme}/>
            <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
    );
  };