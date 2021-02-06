import React, { useContext } from 'react';
import {motion} from 'framer-motion';
import {MenuContext} from '../../state/MenuProvider';
import {SectionContext} from '../../state/SectionProvider';

import Wrapper from './styled/Wrapper';
import Text from './styled/Text';



export default function Menu(){
    const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);
    const [section, setSection] = useContext(SectionContext);
    

    return(
        <Wrapper display={menuIsOpen} initial={{ x: 600, opacity: 0}} animate={menuIsOpen ? {opacity: 1, x: 0} : { x: 600, opacity: 0}} transition={{duration: 0.4, spring: 0}}>
            <Text section={section === 'About'}>About</Text>
            <Text section={section === 'Experience'}>Expierience</Text>
            <Text section={section === 'Projects'}>Projects</Text>
            <Text section={section === 'Contact'}>Contact</Text>
        </Wrapper>
    );
}