import React, { useContext } from 'react';
import ThemeButton from '../ThemeButton';
import { motion } from 'framer-motion';

import Wrapper from './styled/Wrapper';
import Logo from './styled/Logo';
import Span from './styled/Span';

import ToggleWrapper from './styled/ToggleWrapper';
import Github from '../../components/Icons/Github';
import Linkedin from '../../components/Icons/Linkedin';
import Icon from './styled/Icon';
import IconsWrapper from './styled/IconsWrapper';
import BurgerMenu from './styled/BurgerMenu';

import { MenuContext } from '../../state/MenuProvider';
import Menu from '../Menu';

export default function Header(){
    const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

    function openMenu(){
        setMenuIsOpen(!menuIsOpen);
    };

    return(
        <Wrapper>
            <Logo><Span>F</Span>otsofly<Span>.</Span></Logo>
            <ToggleWrapper>
                <IconsWrapper>
                    <Icon>
                        <Github/>
                    </Icon>
                    <Icon>
                        <Linkedin/>
                    </Icon>
                </IconsWrapper>
                <ThemeButton/>
            </ToggleWrapper>
            <BurgerMenu>
                <svg viewBox="0 -22 80 90" width="40" height="40" onClick={openMenu}>
                    <motion.rect width="80" height="7" rx="8" transition={{duration: 0.3}} initial={{opacity: 1}} animate={menuIsOpen ? {opacity: 0} : {opacity: 1}}></motion.rect>
                    <motion.rect y="20" width="80" height="7" rx="8" animate={menuIsOpen ? {y: -5, rotate: -45} : {y: 0, rotate: 0}}></motion.rect>
                    <motion.rect y="40" width="80" height="7" rx="8" animate={menuIsOpen ? {y: -25, rotate: 45} : {y: 0, rotate: 0} }></motion.rect>
                </svg>
            </BurgerMenu>
        </Wrapper>
    )
}