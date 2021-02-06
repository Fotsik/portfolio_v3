import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Typist from 'react-typist';

import {SectionContext} from '../../state/SectionProvider';

import Wrapper from './styled/Wrapper';
import Header from '../../components/Header';
import MainText from './styled/MainText';
import MediumText from './styled/MediumText';
import SmallText from './styled/SmallText';
import Span from './styled/Span';
import Icon from './styled/Icon';

import TextWrapper from './styled/TextWrapper';
import SvgWrapper from './styled/SvgWrapper';

import AnimatedSvg from './styled/AnimatedSvg';

export default function WelcomeSection(){
    const [section, setSection] = useContext(SectionContext);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });

    useEffect(() => {
        inView && setSection('welcome')
    }, [inView]);


    return(
        <>
        <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
            <Header/>
        </motion.div>
        <Wrapper ref={ref}>
            <TextWrapper>
                <MediumText initial={{opacity: 0, y: -50, scale: 0.65}} animate={inView ? {opacity: 1, y: 0, scale: 1} : {opacity: 0, y: 0, scale: 0.65}} transition={{duration: 1.2}}>HELLO, <Span>I AM</Span></MediumText>
                <MainText initial={{opacity: 0, y: -50, scale: 0.65}} animate={inView ? {opacity: 1, y: 0, scale: 1} : {opacity: 0, y: 0, scale: 0.65}} transition={{duration: 1.5, delay: 0.4}}>Piotr<Span> Szydlowski</Span></MainText>
                <SmallText initial={{opacity: 0, y: -50, scale: 0.65}} animate={inView ? {opacity: 1, y: 0, scale: 1} : {opacity: 0, y: 0, scale: 0.65}} transition={{duration: 1.2, delay: 0.8}}>I am a <Span>react developer</Span>. I would like to create <Span>cool</Span> things.</SmallText>
            </TextWrapper>
            <SvgWrapper>
                <AnimatedSvg/>
            </SvgWrapper>
            <Icon initial={{y: -15, opacity: 1}} animate={{y: 25, opacity: 0.05}} transition={{duration: 1.4, repeat: Infinity}}><i class="fas fa-angle-double-down"></i></Icon>
        </Wrapper>
        </>
    )
}