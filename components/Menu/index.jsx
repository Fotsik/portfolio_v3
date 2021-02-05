import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import {MenuContext} from '../../state/MenuProvider';
import {SectionContext} from '../../state/SectionProvider';

import Wrapper from './styled/Wrapper';
import Text from './styled/Text';



export default function Menu(){
    const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);
    const  [section, setSection] = useContext(SectionContext);
    

    return(
        <Wrapper display={menuIsOpen} initial={{opacity: 0, x: 0}} animate={menuIsOpen ? {opacity: 1, x: 0} : {opacity: 0, x: 200}}>
            <Text section={section === 'About'}>About</Text>
            <Text section={section === 'Technologies'}>Technologies</Text>
            <Text section={section === 'Experience'}>Expierience</Text>
            <Text section={section === 'Projects'}>Projects</Text>
            <Text section={section === 'Contact'}>Contact</Text>
        </Wrapper>
    );
}