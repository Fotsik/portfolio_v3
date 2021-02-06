import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {SectionContext} from '../../state/SectionProvider';

import Wrapper from './styled/Wrapper';
import ContentWrapper from './styled/ContentWrapper';
import TechnologiesWrapper from './styled/TechnologiesWrapper';
import TextWrapper from './styled/TextWrapper';

import Span from './styled/Span';
import MainText from './styled/MainText';
import MediumText from './styled/MediumText';
import Text from './styled/Text';
import FirstLine from './styled/FirstLine';
import Line from './styled/Line';

export default function AboutSection(){

    const [section, setSection] = useContext(SectionContext);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
      });

    useEffect(() => {
        inView && setSection('About')
    }, [inView]);

    return(
        <Wrapper ref={ref}>
            <MainText>About</MainText>
            <ContentWrapper>               
                <TechnologiesWrapper>
                    <MediumText>
                        <Span>List of</Span> technologies
                    </MediumText>
                    <FirstLine/>
                    <Text>Java Script</Text>
                    <Text>React</Text>
                    <Text>Framer motion</Text>
                    <Text>styled components</Text>
                    <Text>NodeJS</Text>
                    <Text>Express</Text>
                </TechnologiesWrapper>
                <TextWrapper>
                    <MediumText>
                        Who <Span>I Am</Span>
                    </MediumText>
                    <Line/>
                    <Text>
                        My name is Piotr. I'm working as a react developer in a big company based in London which has won many rewards. I have been developing since 2018 and am always looking to expand my skill-set and grow. I want to build my experience and make great things for people. My main focus is on web development. I have experience with front-end technologies as HTML, CSS, JavaScript, ReactJS, NextJS, and a lot more. Also, I like to work with back-end technology - NodeJS, Express. If there is something I can assist you with please do not hesitate to contact me. For more information please contact me. <br/> I am sure that I can help you.
                    </Text>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}